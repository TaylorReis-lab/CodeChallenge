import React, { use, useState } from 'react';
import { useAppState } from './context/AppStateContext';
import { languages } from './data';
import { ProfileMenu } from './features/ProfileMenu';
import { CodeEditor } from './features/CodeEditor';
import {
  ChevronLeft,
  LayoutGrid,
  Terminal,
  Trophy,
  Info,
  Github,
  Linkedin,
  BrainCircuit,
} from 'lucide-react';
import { AboutPage } from './components/AboutPage';

const App: React.FC = () => {
  const {
    currentLanguageId,
    setCurrentLanguageId,
    profile,
    completeChallenge,
    theme,
  } = useAppState();
  const [view, setView] = useState<'selection' | 'dashboard'>('selection');
  const [selectedChallengeId, setSelectedChallengeId] = useState<string | null>(
    null
  );
  // const [userProfile] = useState(profile); // Para facilitar o acesso ao perfil do usuário

  const currentLanguage =
    languages.find((l) => l.id === currentLanguageId) || languages[0];
  const activeChallenge =
    currentLanguage.challenges.find((c) => c.id === selectedChallengeId) ||
    currentLanguage.challenges[0];

  const [currentPage, setCurrentPage] = useState<
    'dashboard' | 'editor' | 'ranking' | 'about'
  >('dashboard');

  const handleLanguageSelect = (id: string) => {
    setCurrentLanguageId(id);
    setView('dashboard');
    setSelectedChallengeId(
      languages.find((l) => l.id === id)?.challenges[0].id || null
    );
  };

  const isDark = theme !== 'light';

  if (view === 'selection') {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 min-h-screen flex flex-col justify-center">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-2xl mb-4">
            <BrainCircuit size={48} className="text-indigo-500" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">
            Qual o seu desafio hoje?
          </h1>
          <p className="text-xl opacity-50 max-w-2xl mx-auto">
            "Tudo pode começar e continuar crescendo." <br />
            Escolha uma linguagem e comece a praticar agora mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => handleLanguageSelect(lang.id)}
              className={`group relative p-8 rounded-3xl border text-left transition-all hover:scale-[1.02] hover:shadow-2xl ${
                isDark
                  ? 'bg-zinc-900/50 border-white/5 hover:bg-zinc-800'
                  : 'bg-white border-slate-200 hover:border-indigo-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl">{lang.icon}</span>
                <span className="px-3 py-1 rounded-full bg-black/20 text-[10px] font-bold uppercase tracking-widest opacity-60">
                  {lang.challenges.length} Desafios
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                {lang.name}
              </h3>
              <p className="text-sm opacity-50 leading-relaxed mb-8">
                {lang.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-500 uppercase tracking-widest">
                Começar agora <ChevronLeft className="rotate-180" size={14} />
              </div>
            </button>
          ))}

          <div
            className={`p-8 rounded-3xl border border-dashed flex flex-col items-center justify-center text-center opacity-40 ${isDark ? 'border-white/10' : 'border-slate-300'}`}
          >
            <span className="text-3xl mb-4">➕</span>
            <p className="text-sm font-medium">
              Em breve:
              <br />
              Python, Java & Go
            </p>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40 text-xs font-medium uppercase tracking-widest">
          <p>© 2025 Taylor Reis</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/taylorreis-lab"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:opacity-100"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/taylorreis-dev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:opacity-100"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Navbar Superior */}
      <header
        className={`h-16 px-6 border-b flex items-center justify-between shrink-0 ${isDark ? 'bg-black/20 border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}
      >
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentPage('dashboard')}
            className="p-2 rounded-xl hover:bg-white/5 transition-colors"
            title="Voltar para tela inicial"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="h-6 w-px bg-white/10" />
          <div className="flex items-center gap-3">
            <span className="text-2xl">{currentLanguage.icon}</span>
            <div>
              <h2 className="text-sm font-bold leading-none">
                {currentLanguage.name}
              </h2>
              <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest mt-1">
                {
                  profile.completedChallenges.filter((id) =>
                    id.startsWith(currentLanguage.id.substring(0, 2))
                  ).length
                }{' '}
                / {currentLanguage.challenges.length} Completos
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-1">
            <button className="px-4 py-2 rounded-lg text-sm font-medium bg-white/5 flex items-center gap-2">
              <LayoutGrid size={16} /> Dashboard
            </button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium opacity-40 hover:opacity-100 hover:bg-white/5 transition-all flex items-center gap-2">
              <Terminal size={16} /> Editor
            </button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium opacity-40 hover:opacity-100 hover:bg-white/5 transition-all flex items-center gap-2">
              <Trophy size={16} /> Ranking
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              title="Botão Sobre"
              className="px-4 py-2 rounded-lg text-sm font-medium opacity-40 hover:opacity-100 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <Info size={16} /> Sobre
            </button>
          </nav>
          <div className="h-6 w-px bg-white/10 hidden md:block" />
          <ProfileMenu />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar de Desafios */}
        <aside
          className={`w-80 shrink-0 border-r overflow-y-auto p-4 hidden lg:block ${isDark ? 'bg-black/10 border-white/5' : 'bg-slate-50 border-slate-200'}`}
        >
          <div className="mb-6 px-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 mb-4">
              Níveis de Prática
            </h3>
            <div className="space-y-1">
              {['iniciante', 'intermediario', 'avancado'].map((level) => (
                <div key={level}>
                  <p className="px-2 py-2 text-[10px] font-bold opacity-40 capitalize">
                    {level}
                  </p>
                  {currentLanguage.challenges
                    .filter((c) => c.difficulty === level)
                    .map((challenge) => (
                      <button
                        key={challenge.id}
                        onClick={() => setSelectedChallengeId(challenge.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between group ${
                          selectedChallengeId === challenge.id
                            ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                            : 'hover:bg-white/5 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <span className="truncate">{challenge.title}</span>
                        {profile.completedChallenges.includes(challenge.id) && (
                          <div
                            className={`shrink-0 w-2 h-2 rounded-full ${selectedChallengeId === challenge.id ? 'bg-white' : 'bg-emerald-500'}`}
                          />
                        )}
                      </button>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Área Principal: Editor */}
        <main className="flex-1 overflow-y-auto p-6 bg-transparent">
          <div className="max-w-7xl mx-auto h-full">
            <CodeEditor
              challenge={activeChallenge}
              onSuccess={(id, xp) => completeChallenge(id, xp)}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
