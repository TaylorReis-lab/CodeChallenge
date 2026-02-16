import { cn } from '@/utils/cn';
import { Badge } from './ui/Badge';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
  completedChallenges: number[];
  totalChallenges: number;
  earnedBadges: number;
  onOpenProfile: () => void;
  onOpenSettings: () => void;
  onOpenClearData: () => void;
  onOpenLanguage: () => void;
  onLogout: () => void;
  userName: string;
}

export function Sidebar({
  isOpen,
  onClose,
  currentPage,
  onNavigate,
  completedChallenges,
  totalChallenges,
  earnedBadges,
  onOpenProfile,
  onOpenSettings,
  onOpenClearData,
  onOpenLanguage,
  onLogout,
  userName,
}: SidebarProps) {
  const navItems = [
    { id: 'home', label: 'Início', icon: '🏠' },
    { id: 'challenges', label: 'Desafios', icon: '💻' },
    { id: 'badges', label: 'Medalhas', icon: '🏅', badge: earnedBadges },
    { id: 'about', label: 'Sobre', icon: 'ℹ️' },
  ];

  const menuItems = [
    { id: 'profile', label: 'Perfil', icon: '👤', action: onOpenProfile },
    { id: 'language', label: 'Idioma', icon: '🌍', action: onOpenLanguage },
    { id: 'settings', label: 'Configurações', icon: '⚙️', action: onOpenSettings },
    { id: 'clear-data', label: 'Limpar Dados', icon: '🗑️', action: onOpenClearData, danger: true },
    { id: 'logout', label: 'Sair', icon: '🚪', action: onLogout, danger: true },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        'fixed top-0 left-0 h-full w-72 bg-white border-r border-slate-200 z-50 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
                  <span className="text-xl">💻</span>
                </div>
                <div>
                  <h1 className="font-bold text-slate-800">JS Challenges</h1>
                  <p className="text-xs text-slate-500">Relembrando JavaScript</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="lg:hidden p-2 text-slate-400 hover:text-slate-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Progress Summary */}
          <div className="p-4 border-b border-slate-200">
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">Progresso</span>
                <span className="text-sm font-bold text-slate-800">
                  {completedChallenges.length}/{totalChallenges}
                </span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 rounded-full transition-all duration-500"
                  style={{ width: `${(completedChallenges.length / totalChallenges) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    onClose();
                  }}
                  className={cn(
                    'w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all',
                    currentPage === item.id
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge && item.badge > 0 && (
                    <Badge variant="success" size="sm">{item.badge}</Badge>
                  )}
                </button>
              ))}
            </div>

            {/* User Section */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="px-4 mb-3">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Usuário</p>
              </div>
              <div className="px-4 py-3 bg-slate-50 rounded-xl mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-lg">
                    👤
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 text-sm">{userName}</p>
                    <p className="text-xs text-slate-500">{completedChallenges.length} desafios concluídos</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all',
                      item.danger
                        ? 'text-rose-600 hover:bg-rose-50'
                        : 'text-slate-600 hover:bg-slate-100'
                    )}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200">
            <div className="text-center">
              <p className="text-xs text-slate-400">
                Feito com ❤️ por <a href="https://github.com/taylorreis-lab" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:underline">Taylor Reis</a>
              </p>
              <p className="text-xs text-slate-400 mt-1">github.com/taylorreis-lab</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
