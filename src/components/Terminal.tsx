import React from 'react';
import { useTheme } from '../theme/ThemeContext';

interface TerminalProps {
  code: string;
  onChange: (code: string) => void;
  language: string;
}

export const Terminal: React.FC<TerminalProps> = ({ code, onChange, language }) => {
  const { theme } = useTheme();

  const highlightCode = (code: string) => {
    const t = theme.colors.terminal;
    
    // Simple regex highlighting
    let highlighted = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      // Strings
      .replace(/(["'`])(.*?)\1/g, `<span style="color: ${t.string}">$1$2$1</span>`)
      // Comments
      .replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, `<span style="color: ${t.comment}">$1</span>`)
      // Numbers
      .replace(/\b(\d+)\b/g, `<span style="color: ${t.number}">$1</span>`)
      // Keywords
      .replace(/\b(const|let|var|function|return|if|else|for|while|import|export|from|class|extends|new|this|async|await|public|private|static|string|int|void|namespace|using|class)\b/g, 
        `<span style="color: ${t.keyword}">$1</span>`)
      // Functions
      .replace(/\b([a-zA-Z_]\w*)(?=\s*\()/g, `<span style="color: ${t.function}">$1</span>`);

    return highlighted;
  };

  return (
    <div 
      className="relative rounded-lg overflow-hidden border font-mono text-sm"
      style={{ 
        backgroundColor: theme.colors.terminal.bg, 
        borderColor: theme.colors.border,
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
      }}
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-black/20 border-b" style={{ borderColor: theme.colors.border }}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-amber-500/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
        </div>
        <span className="text-xs opacity-40 ml-2">{language.toLowerCase()} editor</span>
      </div>
      
      <div className="relative min-h-[300px]">
        <textarea
          value={code}
          onChange={(e) => onChange(e.target.value)}
          spellCheck={false}
          className="absolute inset-0 w-full h-full p-4 bg-transparent outline-none resize-none caret-white z-10"
          style={{ color: 'transparent', caretColor: theme.colors.primary }}
        />
        <pre 
          className="absolute inset-0 w-full h-full p-4 pointer-events-none whitespace-pre-wrap break-all overflow-hidden"
          style={{ color: theme.colors.terminal.text }}
          dangerouslySetInnerHTML={{ __html: highlightCode(code) + '\n' }}
        />
      </div>
    </div>
  );
};
