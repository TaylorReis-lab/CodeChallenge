import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../theme/ThemeContext';
import {
  Settings,
  User,
  Palette,
  ChevronRight,
  Check,
  Trash2,
  Globe,
} from 'lucide-react';

interface ProfileMenuProps {
  onNavigate: (page: string) => void;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<
    'none' | 'theme' | 'language'
  >('none');
  const { theme, themeType, setThemeType, cycleRandomTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveSubmenu('none');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    if (
      confirm('Tem certeza que deseja limpar todos os seus dados de progresso?')
    ) {
      localStorage.clear();
      window.location.reload();
    }
  };

  // Languages for future use
  // const languages: { id: ProgrammingLanguage; name: string }[] = [ ... ];

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full border-2 overflow-hidden hover:scale-105 transition-transform"
        style={{ borderColor: theme.colors.primary }}
      >
        <img
          src="https://github.com/taylorreis-lab.png"
          alt="Profile"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://ui-avatars.com/api/?name=Taylor+Reis&background=random';
          }}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-64 rounded-xl shadow-2xl border backdrop-blur-md z-50 overflow-hidden animate-in fade-in zoom-in duration-200"
          style={{
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
            color: theme.colors.text,
          }}
        >
          {activeSubmenu === 'none' && (
            <div className="py-2">
              <div
                className="px-4 py-3 border-b mb-1"
                style={{ borderColor: theme.colors.border }}
              >
                <p className="text-sm font-bold truncate">Taylor Reis</p>
                <p className="text-xs opacity-60 truncate">
                  github.com/taylorreis-lab
                </p>
              </div>

              <button
                onClick={() => {
                  onNavigate('profile');
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 flex items-center gap-3 hover:bg-black/10 transition-colors"
              >
                <User size={18} style={{ color: theme.colors.primary }} />
                <span>Ver Perfil</span>
              </button>

              <button
                onClick={() => setActiveSubmenu('theme')}
                className="w-full px-4 py-2 flex items-center gap-3 hover:bg-black/10 transition-colors group"
              >
                <Palette size={18} style={{ color: theme.colors.primary }} />
                <span>Mudar Cor</span>
                <ChevronRight
                  size={16}
                  className="ml-auto opacity-40 group-hover:opacity-100"
                />
              </button>

              <button
                onClick={() => setActiveSubmenu('language')}
                className="w-full px-4 py-2 flex items-center gap-3 hover:bg-black/10 transition-colors group"
              >
                <Globe size={18} style={{ color: theme.colors.primary }} />
                <span>Idioma do App</span>
                <ChevronRight
                  size={16}
                  className="ml-auto opacity-40 group-hover:opacity-100"
                />
              </button>

              <button
                onClick={() => {
                  onNavigate('about');
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 flex items-center gap-3 hover:bg-black/10 transition-colors"
              >
                <Settings size={18} style={{ color: theme.colors.primary }} />
                <span>Configurações</span>
              </button>

              <div
                className="my-1 border-t"
                style={{ borderColor: theme.colors.border }}
              />

              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 flex items-center gap-3 text-red-500 hover:bg-red-500/10 transition-colors"
              >
                <Trash2 size={18} />
                <span>Limpar Dados</span>
              </button>
            </div>
          )}

          {activeSubmenu === 'theme' && (
            <div className="py-2">
              <button
                onClick={() => setActiveSubmenu('none')}
                className="w-full px-4 py-2 flex items-center gap-3 hover:bg-black/10 border-b mb-1 font-bold"
                style={{ borderColor: theme.colors.border }}
              >
                <ChevronRight size={18} className="rotate-180" />
                <span>Voltar</span>
              </button>

              <button
                onClick={() => setThemeType('light')}
                className="w-full px-4 py-2 flex items-center justify-between hover:bg-black/10"
              >
                <span>Tema Claro</span>
                {themeType === 'light' && (
                  <Check size={16} style={{ color: theme.colors.primary }} />
                )}
              </button>

              <button
                onClick={() => setThemeType('dark')}
                className="w-full px-4 py-2 flex items-center justify-between hover:bg-black/10"
              >
                <span>Tema Escuro</span>
                {themeType === 'dark' && (
                  <Check size={16} style={{ color: theme.colors.primary }} />
                )}
              </button>

              <button
                onClick={() => {
                  setThemeType('random');
                  cycleRandomTheme();
                }}
                className="w-full px-4 py-2 flex items-center justify-between hover:bg-black/10"
              >
                <div className="flex flex-col">
                  <span>Tema Aleatório</span>
                  <span className="text-[10px] opacity-60">
                    Atual: {theme.name}
                  </span>
                </div>
                {themeType === 'random' && (
                  <Check size={16} style={{ color: theme.colors.primary }} />
                )}
              </button>

              {themeType === 'random' && (
                <button
                  onClick={cycleRandomTheme}
                  className="mx-4 mt-2 px-3 py-1 text-xs rounded-full border text-center"
                  style={{
                    borderColor: theme.colors.primary,
                    color: theme.colors.primary,
                  }}
                >
                  Trocar Aleatório
                </button>
              )}
            </div>
          )}

          {activeSubmenu === 'language' && (
            <div className="py-2">
              <button
                onClick={() => setActiveSubmenu('none')}
                className="w-full px-4 py-2 flex items-center gap-3 hover:bg-black/10 border-b mb-1 font-bold"
                style={{ borderColor: theme.colors.border }}
              >
                <ChevronRight size={18} className="rotate-180" />
                <span>Voltar</span>
              </button>

              <button className="w-full px-4 py-2 flex items-center justify-between hover:bg-black/10">
                <span>Português (BR)</span>
                <Check size={16} style={{ color: theme.colors.primary }} />
              </button>

              <button className="w-full px-4 py-2 flex items-center justify-between opacity-50 cursor-not-allowed">
                <span>English (US)</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
