import React from 'react';
import {
  Code2,
  Trophy,
  BookOpen,
  Users,
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  Linkedin,
  Github,
} from 'lucide-react';
import { useAppState } from '../context/AppStateContext';
import { languages } from '../data';

// ============================================
// SEÇÃO: HOME / DASHBOARD INICIAL
// Renderiza a página inicial com nav e seleção de linguagem
// ============================================

interface RenderHomeProps {
  onSelectLanguage: (langId: string) => void;
  onNavigate: (view: string) => void;
}

export const RenderHome: React.FC<RenderHomeProps> = ({
  onSelectLanguage,
  onNavigate,
}) => {
  const { profile, theme } = useAppState();
  const isDark = theme !== 'light';

  const stats = [
    {
      label: 'Desafios Completos',
      value: profile?.progress?.completedChallengeIds?.length ?? 0,
      icon: Trophy,
      color: 'text-amber-500',
    },
    {
      label: 'XP Total',
      value: profile?.progress?.totalXp ?? 0,
      icon: Sparkles,
      color: 'text-purple-500',
    },
    {
      label: 'Level Atual',
      value: profile?.progress?.level ?? 1,
      icon: Target,
      color: 'text-emerald-500',
    },
    {
      label: 'Linguagens',
      value: languages.length,
      icon: Code2,
      color: 'text-blue-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* NAVBAR SUPERIOR */}
      <nav
        className={`sticky top-0 z-50 border-b backdrop-blur-lg ${
          isDark
            ? 'bg-black/40 border-white/10'
            : 'bg-white/80 border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg">CodeChallenger</h1>
              <div className="flex gap-2">
                <a
                  href="https://linkedin.com/in/taylorreis-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] opacity-50 hover:opacity-100 flex items-center gap-1"
                >
                  <Linkedin size={10} /> LinkedIn
                </a>
                <a
                  href="https://github.com/taylorreis-lab"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] opacity-50 hover:opacity-100 flex items-center gap-1"
                >
                  <Github size={10} /> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLink icon={BookOpen} label="Documentação" />
            <NavLink
              icon={Trophy}
              label="Ranking"
              onClick={() => onNavigate('ranking')}
            />
            <NavLink
              icon={Users}
              label="Comunidade"
              onClick={() => onNavigate('community')}
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('profile')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <img
                src={
                  profile.githubData?.avatar_url ||
                  'https://github.com/taylorreis-lab.png'
                }
                alt="Profile"
                className="w-8 h-8 rounded-full border border-white/20"
              />
              <span className="text-sm font-medium hidden sm:block">
                {profile.githubData?.login || 'Taylor Reis'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Domine a Programação
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Um Desafio de Cada Vez
              </span>
            </h1>
            <p className="text-xl opacity-60 max-w-2xl mx-auto mb-8">
              "Tudo pode começar e continuar crescendo." <br />
              Pratique com desafios reais, ganhe XP e evolua suas habilidades.
            </p>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById('languages')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-bold flex items-center gap-2 transition-all hover:scale-105"
              >
                Começar Agora <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-medium transition-all"
              >
                Sobre o Projeto
              </button>
            </div>
          </div>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`p-6 rounded-2xl border transition-all duration-500 ${
                  isDark
                    ? 'bg-white/5 border-white/10'
                    : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
                <div className="text-3xl font-black mb-1">{stat.value}</div>
                <div className="text-sm opacity-50">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* LANGUAGE SELECTION */}
          <div id="languages" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Escolha sua Linguagem</h2>
              <p className="opacity-50">
                Selecione uma linguagem para ver os desafios disponíveis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => onSelectLanguage(lang.id)}
                  className={`group relative p-8 rounded-3xl border text-left transition-all hover:scale-[1.02] ${
                    isDark
                      ? 'bg-white/5 border-white/10 hover:bg-white/10'
                      : 'bg-white border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl">{lang.icon}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        isDark ? 'bg-white/10' : 'bg-slate-100'
                      }`}
                    >
                      {lang.challenges.length} desafios
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                    {lang.name}
                  </h3>
                  <p className="opacity-50 mb-6">{lang.description}</p>

                  <div className="flex items-center gap-2 text-sm font-medium text-indigo-400">
                    Iniciar jornada <ArrowRight size={16} />
                  </div>

                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: lang.color }}
                  />
                </button>
              ))}

              {/* Coming Soon Card */}
              <div
                className={`p-8 rounded-3xl border border-dashed flex flex-col items-center justify-center text-center opacity-50 ${
                  isDark ? 'border-white/20' : 'border-slate-300'
                }`}
              >
                <Zap size={40} className="mb-4 opacity-50" />
                <h3 className="font-bold mb-2">Mais Linguagens</h3>
                <p className="text-sm">Python, Java, Go e mais em breve!</p>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <footer className="border-t border-white/10 pt-12 text-center">
            <div className="flex items-center justify-center gap-6 mb-6">
              <SocialLink
                href="https://github.com/taylorreis-lab"
                icon="github"
              />
              <SocialLink
                href="https://linkedin.com/in/taylorreis-dev"
                icon="linkedin"
              />
            </div>
            <p className="text-sm opacity-40">
              © 2025 Taylor Reis. CodeChallenger - Open Source
            </p>
          </footer>
        </div>
      </section>
    </div>
  );
};

// Sub-componentes
interface NavLinkProps {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
  >
    <Icon size={18} />
    <span>{label}</span>
  </button>
);

interface SocialLinkProps {
  href: string;
  icon: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
  >
    {icon === 'github' ? (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ) : (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )}
  </a>
);
