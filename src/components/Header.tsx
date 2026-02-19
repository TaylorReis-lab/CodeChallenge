import { Button } from './ui/Button';

interface HeaderProps {
  onMenuClick: () => void;
  onThemeChange: () => void;
  currentTheme: string;
  userName: string;
}

export function Header({ onMenuClick, onThemeChange, currentTheme, userName }: HeaderProps) {
  const getThemeLabel = () => {
    switch (currentTheme) {
      case 'dark': return '🌙 Escuro';
      case 'light': return '☀️ Claro';
      case 'random': return '🎲 Aleatório';
      default: return '🎨 Tema';
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left - Menu Button */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={onMenuClick} className="lg:hidden">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                <span className="text-lg">💻</span>
              </div>
              <div>
                <h1 className="font-bold text-slate-800 text-sm">JS Challenges</h1>
              </div>
            </div>
          </div>

          {/* Center - Search (placeholder) */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar desafios..."
                className="w-64 pl-10 pr-4 py-2 bg-slate-100 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
              />
              <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Right - Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Selector */}
            <div className="relative group">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onThemeChange}
                className="flex items-center gap-2"
              >
                <span>{getThemeLabel()}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg">
                <div className="w-7 h-7 bg-slate-200 rounded-full flex items-center justify-center text-sm">
                  👤
                </div>
                <span className="text-sm font-medium text-slate-700">{userName}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
