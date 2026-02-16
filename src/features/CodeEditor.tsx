import React, { useState, useEffect } from 'react';
import { Challenge } from '../core/types';
import { useAppState } from '../context/AppStateContext';
import { Play, RotateCcw, CheckCircle2, XCircle, Lightbulb, BookOpen, ExternalLink } from 'lucide-react';

interface EditorProps {
  challenge: Challenge;
  onSuccess: (id: string, xp: number) => void;
}

export const CodeEditor: React.FC<EditorProps> = ({ challenge, onSuccess }) => {
  const { theme } = useAppState();
  const [code, setCode] = useState(challenge.initialCode);
  const [output, setOutput] = useState<{ success: boolean; message: string }[]>([]);
  const [showDoc, setShowDoc] = useState(false);
  const [showHints, setShowHints] = useState(false);

  useEffect(() => {
    setCode(challenge.initialCode);
    setOutput([]);
    setShowDoc(false);
    setShowHints(false);
  }, [challenge]);

  const runCode = () => {
    try {
      const results: { success: boolean; message: string }[] = [];
      // Clean previous logs
      // Note: This is a safe eval for learning purposes. In production, consider a worker.
      const userFunc = new Function(`return ${code}`)();
      
      challenge.testCases.forEach(tc => {
        const result = userFunc(...tc.input);
        const passed = JSON.stringify(result) === JSON.stringify(tc.expected);
        results.push({
          success: passed,
          message: passed 
            ? `✅ PASSOU: ${tc.description}` 
            : `❌ FALHOU: ${tc.description} (Esperava ${JSON.stringify(tc.expected)}, recebeu ${JSON.stringify(result)})`
        });
      });

      setOutput(results);
      if (results.every(r => r.success)) {
        onSuccess(challenge.id, challenge.difficulty === 'iniciante' ? 10 : challenge.difficulty === 'intermediario' ? 25 : 50);
      }
    } catch (err: any) {
      setOutput([{ success: false, message: `⚠️ ERRO DE SINTAXE: ${err.message}` }]);
    }
  };

  const isDark = theme !== 'light';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[calc(100vh-12rem)]">
      {/* Coluna da Esquerda: Documentação e Editor */}
      <div className="flex flex-col gap-4 overflow-hidden">
        {/* Documentação / Enunciado */}
        <div className={`p-5 rounded-2xl border ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-white border-slate-200 shadow-sm'} overflow-y-auto max-h-64`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">{challenge.title}</h2>
            <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider ${
              challenge.difficulty === 'iniciante' ? 'bg-emerald-500/10 text-emerald-500' :
              challenge.difficulty === 'intermediario' ? 'bg-amber-500/10 text-amber-500' : 'bg-rose-500/10 text-rose-500'
            }`}>
              {challenge.difficulty}
            </span>
          </div>
          <p className="opacity-80 text-sm mb-6 leading-relaxed">{challenge.description}</p>
          
          <div className="flex gap-2">
            <button 
              onClick={() => setShowDoc(!showDoc)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${showDoc ? 'bg-indigo-500 text-white' : 'bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20'}`}
            >
              <BookOpen size={14} /> Documentação
            </button>
            <button 
              onClick={() => setShowHints(!showHints)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${showHints ? 'bg-amber-500 text-white' : 'bg-amber-500/10 text-amber-500 hover:bg-amber-500/20'}`}
            >
              <Lightbulb size={14} /> Dicas
            </button>
          </div>

          {showDoc && (
            <div className={`mt-4 p-4 rounded-xl border animate-in slide-in-from-top-2 duration-300 ${isDark ? 'bg-black/40 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
              <h4 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Conceito</h4>
              <p className="text-sm mb-4">{challenge.documentation.concept}</p>
              
              <h4 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Sintaxe</h4>
              <pre className="p-3 rounded-lg bg-black/20 text-indigo-400 text-xs font-mono mb-4 whitespace-pre-wrap">{challenge.documentation.syntax}</pre>
              
              <a 
                href={challenge.documentation.externalLink} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-indigo-500 hover:underline"
              >
                Documentação Completa <ExternalLink size={12} />
              </a>
            </div>
          )}

          {showHints && (
            <div className="mt-4 space-y-2 animate-in slide-in-from-top-2 duration-300">
              {challenge.hints.map((hint, i) => (
                <div key={i} className={`p-3 rounded-lg text-xs border ${isDark ? 'bg-amber-500/5 border-amber-500/20 text-amber-200/70' : 'bg-amber-50 border-amber-100 text-amber-800'}`}>
                   💡 {hint}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Editor de Código */}
        <div className={`flex-1 flex flex-col rounded-2xl border overflow-hidden ${isDark ? 'bg-zinc-950 border-white/5' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-black/20">
            <span className="text-[10px] uppercase font-bold tracking-widest opacity-40">Editor Principal</span>
            <div className="flex gap-2">
              <button 
                onClick={() => setCode(challenge.initialCode)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors"
                title="Resetar código"
              >
                <RotateCcw size={14} />
              </button>
            </div>
          </div>
          <div className="flex-1 relative font-mono text-sm">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              className={`w-full h-full p-4 bg-transparent outline-none resize-none placeholder-white/10 ${isDark ? 'text-indigo-300' : 'text-slate-800'}`}
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", monospace',
              }}
            />
          </div>
          <div className="p-4 border-t border-white/5 bg-black/10 flex justify-end">
            <button 
              onClick={runCode}
              className="flex items-center gap-2 px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-indigo-500/20"
            >
              <Play size={16} fill="currentColor" /> Executar Código
            </button>
          </div>
        </div>
      </div>

      {/* Coluna da Direita: Terminal */}
      <div className={`flex flex-col rounded-2xl border overflow-hidden ${isDark ? 'bg-[#050505] border-white/5' : 'bg-slate-900 border-slate-800 shadow-xl'}`}>
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-black/40">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/20" />
              <div className="w-3 h-3 rounded-full bg-amber-500/20" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/20" />
            </div>
            <span className="ml-2 text-[10px] uppercase font-bold tracking-widest text-white/40">Terminal de Saída</span>
          </div>
        </div>
        <div className="flex-1 p-6 font-mono text-xs overflow-y-auto space-y-3">
          {output.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-white/20 text-center">
              <Play size={32} className="mb-4 opacity-10" />
              <p>Execute seu código para ver os resultados aqui...</p>
            </div>
          ) : (
            output.map((res, i) => (
              <div key={i} className={`p-3 rounded-lg border flex items-start gap-3 animate-in fade-in slide-in-from-left-2 duration-300 ${
                res.success ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/5 border-rose-500/20 text-rose-400'
              }`}>
                {res.success ? <CheckCircle2 size={14} className="mt-0.5 shrink-0" /> : <XCircle size={14} className="mt-0.5 shrink-0" />}
                <span className="leading-relaxed">{res.message}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
