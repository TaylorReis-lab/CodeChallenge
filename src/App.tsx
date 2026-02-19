import React, { useState, useCallback } from 'react';
import { useAppState } from './context/AppStateContext';
import { languages } from './data';
import { ProfileMenu } from './features/ProfileMenu';
import { ChevronLeft } from 'lucide-react';

import {
  RenderHome,
  RenderDeliveries,
  RenderProfile,
  RenderRanking,
  RenderCommunity,
} from './sections/index';
import { AboutPage } from './components/AboutPage';
import { ThemeProvider } from './theme/ThemeContext';
import { CodeEditor } from './features/CodeEditor';

// ============================================
// APP PRINCIPAL
// Orquestrador de todas as views da aplicação
// ============================================

const AppContent: React.FC = () => {
  const {
    currentLanguageId,
    setCurrentLanguageId,
    profile,
    completeChallenge,
    theme,
  } = useAppState();
  const [previousView, setPreviousView] = useState<string>('selection');
  const [viewHistory, setViewHistory] = useState<string[]>([]);

  // Views disponíveis: selection, dashboard, profile, deliveries, ranking, community, about
  const [currentView, setCurrentView] = useState<string>('selection');
  const [selectedChallengeId, setSelectedChallengeId] = useState<string | null>(
    null
  );

  const currentLanguage =
    languages.find((l) => l.id === currentLanguageId) || languages[0];
  const activeChallenge =
    currentLanguage.challenges.find((c) => c.id === selectedChallengeId) ||
    currentLanguage.challenges[0];

  const isDark = theme !== 'light';

  // Função para navegar com histórico
  const navigateTo = useCallback(
    (view: string) => {
      setPreviousView(currentView);
      setViewHistory((prev) => [...prev, currentView]);
      setCurrentView(view);
    },
    [currentView]
  );

  // Função para voltar para a tela anterior
  const goBack = useCallback(() => {
    if (viewHistory.length > 0) {
      const previous = viewHistory[viewHistory.length - 1];
      setViewHistory((prev) => prev.slice(0, -1));
      setCurrentView(previous);
      setPreviousView(viewHistory[viewHistory.length - 2] || 'selection');
    } else {
      setCurrentView('selection');
    }
  }, [viewHistory]);

  const handleLanguageSelect = (id: string) => {
    setCurrentLanguageId(id);
    navigateTo('dashboard');
    setSelectedChallengeId(
      languages.find((l) => l.id === id)?.challenges[0].id || null
    );
  };

  // Renderização das views
  const renderView = () => {
    switch (currentView) {
      case 'selection':
        return (
          <RenderHome
            onSelectLanguage={handleLanguageSelect}
            onNavigate={navigateTo}
          />
        );

      case 'profile':
        return (
          <div className="min-h-screen">
            <RenderProfile
              onNavigate={navigateTo}
              previousView={previousView}
            />
          </div>
        );

      case 'deliveries':
        return (
          <RenderDeliveries
            onNavigate={navigateTo}
            previousView={previousView}
          />
        );

      case 'ranking':
        return (
          <RenderRanking onNavigate={navigateTo} previousView={previousView} />
        );

      case 'community':
        return (
          <RenderCommunity
            onNavigate={navigateTo}
            previousView={previousView}
          />
        );

      case 'about':
        return (
          <div className="p-6">
            <button
              onClick={goBack}
              className="mb-4 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              Voltar
            </button>
            <AboutPage userName={profile.githubUsername || 'Taylor Reis'} />
          </div>
        );

      case 'dashboard':
        return (
          <div className="flex flex-col h-screen overflow-hidden">
            {/* Header do Dashboard */}
            <header
              className={`h-16 px-6 border-b flex items-center justify-between shrink-0 ${isDark ? 'bg-black/20 border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}
            >
              <div className="flex items-center gap-4">
                <button
                  onClick={goBack}
                  className="p-2 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="h-6 w-px bg-white/10" />
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{currentLanguage.icon}</span>
                  <h2 className="text-sm font-bold leading-none">
                    {currentLanguage.name}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <nav className="hidden md:flex items-center gap-1">
                  <button
                    onClick={() => navigateTo('dashboard')}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-white/10"
                  >
                    Desafios
                  </button>
                  <button
                    onClick={() => navigateTo('deliveries')}
                    className="px-4 py-2 rounded-lg text-sm font-medium opacity-40 hover:opacity-100 hover:bg-white/5 transition-all"
                  >
                    Entregas
                  </button>
                  <button
                    onClick={() => navigateTo('ranking')}
                    className="px-4 py-2 rounded-lg text-sm font-medium opacity-40 hover:opacity-100 hover:bg-white/5 transition-all"
                  >
                    Ranking
                  </button>
                  <button
                    onClick={() => navigateTo('community')}
                    className="px-4 py-2 rounded-lg text-sm font-medium opacity-40 hover:opacity-100 hover:bg-white/5 transition-all"
                  >
                    Comunidade
                  </button>
                </nav>
                <ProfileMenu onNavigate={navigateTo} />
              </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
              {/* Sidebar com lista de desafios */}
              <aside
                className={`w-80 shrink-0 border-r overflow-y-auto p-4 hidden lg:block ${isDark ? 'bg-black/10 border-white/5' : 'bg-slate-50 border-slate-200'}`}
              >
                <div className="space-y-1">
                  {currentLanguage.challenges.map((challenge) => (
                    <button
                      key={challenge.id}
                      onClick={() => setSelectedChallengeId(challenge.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        selectedChallengeId === challenge.id
                          ? 'bg-indigo-500 text-white shadow-lg'
                          : 'hover:bg-white/5 opacity-60 hover:opacity-100'
                      }`}
                    >
                      {challenge.title}
                    </button>
                  ))}
                </div>
              </aside>

              {/* Área principal com o editor */}
              <main className="flex-1 overflow-y-auto p-6 bg-transparent">
                <div className="max-w-7xl mx-auto h-full">
                  {/* O CodeEditor será importado dinamicamente */}
                  <DashboardEditor
                    challenge={activeChallenge}
                    onSuccess={(id, xp) => completeChallenge(id, xp)}
                    selectedChallengeId={selectedChallengeId}
                    challenges={currentLanguage.challenges}
                    onChallengeSelect={setSelectedChallengeId}
                  />
                </div>
              </main>
            </div>
          </div>
        );

      default:
        return (
          <RenderHome
            onSelectLanguage={handleLanguageSelect}
            onNavigate={navigateTo}
          />
        );
    }
  };

  return renderView();
};

// Componente interno do editor para evitar importações circulares
interface DashboardEditorProps {
  challenge: any;
  onSuccess: (id: string, xp: number) => void;
  selectedChallengeId: string | null;
  challenges: any[];
  onChallengeSelect: (id: string) => void;
}

const DashboardEditor: React.FC<DashboardEditorProps> = ({
  challenge,
  onSuccess,
  selectedChallengeId,
  challenges,
  onChallengeSelect,
}) => {
  const { theme } = useAppState();
  const isDark = theme !== 'light';

  return (
    <div className="flex flex-col h-full">
      {/* Header do desafio */}
      <div className="flex items-center justify-between mb-4 shrink-0">
        <div className="flex items-center gap-3">
          <select
            value={selectedChallengeId || ''}
            onChange={(e) => onChallengeSelect(e.target.value)}
            className={`px-4 py-2 rounded-xl border bg-transparent font-medium ${
              isDark
                ? 'border-white/10 bg-white/5'
                : 'border-slate-200 bg-white'
            }`}
          >
            {challenges.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              challenge.difficulty === 'iniciante'
                ? 'bg-emerald-500/10 text-emerald-500'
                : challenge.difficulty === 'intermediario'
                  ? 'bg-amber-500/10 text-amber-500'
                  : 'bg-rose-500/10 text-rose-500'
            }`}
          >
            {challenge.difficulty}
          </span>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1">
        <CodeEditor challenge={challenge} onSuccess={onSuccess} />
      </div>
    </div>
  );
};

// App exportável com ThemeProvider
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
