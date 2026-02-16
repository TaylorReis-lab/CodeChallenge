import React, { useState } from 'react';
import { useAppState } from '../context/AppStateContext';
import { Settings, LogOut, User, Palette, ChevronRight, Check, Trash2, Globe } from 'lucide-react';

export const ProfileMenu: React.FC = () => {
  const { profile, theme, setTheme, uiLanguage, setUiLanguage, clearProgress } = useAppState();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'main' | 'theme' | 'language' | 'settings'>('main');

  const themes = [
    { id: 'light', label: 'Claro', icon: '☀️' },
    { id: 'dark', label: 'Dracula OLED', icon: '🌙' },
    { id: 'random', label: 'Aleatório', icon: '🎨' },
  ];

  const languages = [
    { id: 'pt', label: 'Português', flag: '🇧🇷' },
    { id: 'en', label: 'English', flag: '🇺🇸' },
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => { setIsOpen(!isOpen); setActiveMenu('main'); }}
        className="flex items-center gap-2 p-1 rounded-full border border-white/10 hover:bg-white/10 transition-all"
      >
        <img src={profile.avatar} alt="Profile" className="w-8 h-8 rounded-full border border-white/20" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className={`absolute right-0 mt-2 w-64 rounded-xl shadow-2xl border border-white/10 z-50 overflow-hidden backdrop-blur-xl ${theme === 'light' ? 'bg-white text-slate-900 border-slate-200 shadow-slate-200' : 'bg-zinc-900/95 text-white'}`}>
            
            {activeMenu === 'main' && (
              <div className="p-2 space-y-1">
                <div className="px-4 py-3 mb-2 border-b border-white/5">
                  <p className="font-bold text-sm">{profile.name}</p>
                  <p className="text-xs opacity-50">{profile.level} • {profile.xp} XP</p>
                </div>
                
                <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 text-sm transition-colors group">
                  <div className="flex items-center gap-3">
                    <User size={16} className="opacity-70" />
                    <span>Ver Perfil</span>
                  </div>
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                </button>

                <button 
                  onClick={() => setActiveMenu('theme')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 text-sm transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Palette size={16} className="opacity-70" />
                    <span>Tema</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] opacity-40 uppercase">{theme}</span>
                    <ChevronRight size={14} className="opacity-40" />
                  </div>
                </button>

                <button 
                  onClick={() => setActiveMenu('language')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 text-sm transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Globe size={16} className="opacity-70" />
                    <span>Idioma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] opacity-40 uppercase">{uiLanguage}</span>
                    <ChevronRight size={14} className="opacity-40" />
                  </div>
                </button>

                <button 
                  onClick={() => setActiveMenu('settings')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 text-sm transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Settings size={16} className="opacity-70" />
                    <span>Configurações</span>
                  </div>
                  <ChevronRight size={14} className="opacity-40" />
                </button>

                <div className="pt-2 mt-2 border-t border-white/5">
                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-500/10 text-red-500 text-sm transition-colors">
                    <LogOut size={16} />
                    <span>Sair (Logout)</span>
                  </button>
                </div>
              </div>
            )}

            {activeMenu === 'theme' && (
              <div className="p-2 space-y-1">
                <button onClick={() => setActiveMenu('main')} className="w-full flex items-center gap-2 px-3 py-2 text-xs opacity-50 hover:opacity-100 mb-1">
                  <ChevronRight size={14} className="rotate-180" /> Voltar
                </button>
                <p className="px-3 py-1 text-[10px] uppercase font-bold opacity-30 tracking-widest">Escolher Tema</p>
                {themes.map(t => (
                  <button 
                    key={t.id}
                    onClick={() => { setTheme(t.id as any); setIsOpen(false); }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span>{t.icon}</span>
                      <span>{t.label}</span>
                    </div>
                    {theme === t.id && <Check size={14} className="text-emerald-500" />}
                  </button>
                ))}
              </div>
            )}

            {activeMenu === 'language' && (
              <div className="p-2 space-y-1">
                <button onClick={() => setActiveMenu('main')} className="w-full flex items-center gap-2 px-3 py-2 text-xs opacity-50 hover:opacity-100 mb-1">
                  <ChevronRight size={14} className="rotate-180" /> Voltar
                </button>
                <p className="px-3 py-1 text-[10px] uppercase font-bold opacity-30 tracking-widest">Idioma da Interface</p>
                {languages.map(l => (
                  <button 
                    key={l.id}
                    onClick={() => { setUiLanguage(l.id as any); setIsOpen(false); }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </div>
                    {uiLanguage === l.id && <Check size={14} className="text-emerald-500" />}
                  </button>
                ))}
              </div>
            )}

            {activeMenu === 'settings' && (
              <div className="p-2 space-y-1">
                <button onClick={() => setActiveMenu('main')} className="w-full flex items-center gap-2 px-3 py-2 text-xs opacity-50 hover:opacity-100 mb-1">
                  <ChevronRight size={14} className="rotate-180" /> Voltar
                </button>
                <p className="px-3 py-1 text-[10px] uppercase font-bold opacity-30 tracking-widest">Gerenciar Dados</p>
                <button 
                  onClick={() => { if(confirm('Limpar todo o progresso?')) clearProgress(); setIsOpen(false); }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-500/10 text-red-500 text-sm"
                >
                  <Trash2 size={16} />
                  <span>Limpar Dados</span>
                </button>
              </div>
            )}

          </div>
        </>
      )}
    </div>
  );
};
