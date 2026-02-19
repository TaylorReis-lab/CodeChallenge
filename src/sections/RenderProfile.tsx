import React, { useState } from 'react';
import {
  Trophy,
  Target,
  Zap,
  Github,
  ExternalLink,
  MapPin,
  Building,
  Users,
  GitBranch,
  Loader2,
  Star,
} from 'lucide-react';
import { useAppState } from '../context/AppStateContext';
import { useGitHub } from '../logic/useGitHub';
import { languages } from '../data';

// ============================================
// SEÇÃO: PERFIL DO USUÁRIO
// Mostra estatísticas, progresso e integração GitHub
// ============================================

interface RenderProfileProps {
  onNavigate: (view: string) => void;
  previousView: string;
}

export const RenderProfile: React.FC<RenderProfileProps> = ({
  onNavigate,
  previousView,
}) => {
  const { profile, theme } = useAppState();
  const progress = profile?.progress ?? {
    level: 1,
    totalXp: 0,
    completedChallengeIds: [],
    currentStreak: 0,
  };
  const { fetchUser, loading, error } = useGitHub();
  const [username, setUsername] = useState(profile.githubUsername || '');
  const isDark = theme !== 'light';

  const handleFetchGitHub = async () => {
    if (!username.trim()) return;
    await fetchUser(username.trim());
  };

  // Calcula estatísticas por linguagem
  const getLanguageStats = () => {
    const completedIds = profile?.progress?.completedChallengeIds ?? [];

    return languages.map((lang) => {
      const completed = completedIds.filter((id: string) =>
        id.startsWith(lang.id.substring(0, 2))
      ).length;

      const total = lang.challenges.length;

      return {
        ...lang,
        completed,
        total,
        percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
      };
    });
  };

  const languageStats = getLanguageStats();
  const github = profile.githubData;

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Meu Perfil</h1>
            <p className="opacity-50">Gerencie seu progresso e integrações</p>
          </div>
          <button
            onClick={() => onNavigate(previousView)}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            Voltar
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna Esquerda: GitHub Integration */}
          <div className="lg:col-span-1 space-y-6">
            {/* GitHub Card */}
            <div
              className={`p-6 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}
            >
              <h2 className="font-bold mb-4 flex items-center gap-2">
                <Github size={20} />
                Integração GitHub
              </h2>

              {!github ? (
                <div className="space-y-4">
                  <p className="text-sm opacity-60">
                    Conecte seu GitHub para personalizar seu perfil e mostrar
                    suas estatísticas.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Seu username do GitHub"
                      className={`flex-1 px-4 py-2 rounded-lg border text-sm ${
                        isDark
                          ? 'bg-black/20 border-white/10'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                    <button
                      onClick={handleFetchGitHub}
                      disabled={loading || !username.trim()}
                      className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 rounded-lg transition-colors"
                    >
                      {loading ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : (
                        'Buscar'
                      )}
                    </button>
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={github.avatar_url}
                      alt={github.login}
                      className="w-20 h-20 rounded-2xl"
                    />
                    <div>
                      <h3 className="font-bold text-lg">
                        {github.name || github.login}
                      </h3>
                      <p className="text-sm opacity-50">@{github.login}</p>
                      {github.bio && (
                        <p className="text-sm mt-2 opacity-70">{github.bio}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                    <StatItem
                      icon={GitBranch}
                      value={github.public_repos}
                      label="Repositórios"
                    />
                    <StatItem
                      icon={Users}
                      value={github.followers}
                      label="Seguidores"
                    />
                  </div>

                  {github.location && (
                    <div className="flex items-center gap-2 text-sm opacity-60">
                      <MapPin size={14} /> {github.location}
                    </div>
                  )}
                  {github.company && (
                    <div className="flex items-center gap-2 text-sm opacity-60">
                      <Building size={14} /> {github.company}
                    </div>
                  )}

                  <a
                    href={github.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm"
                  >
                    Ver Perfil no GitHub <ExternalLink size={14} />
                  </a>

                  <button
                    onClick={() => fetchUser('')}
                    className="w-full py-2 text-sm text-red-400 hover:text-red-300 transition-colors"
                  >
                    Desconectar
                  </button>
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div
              className={`p-6 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}
            >
              <h2 className="font-bold mb-4">Estatísticas Rápidas</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="opacity-60">Level</span>
                  <span className="font-bold text-xl">
                    {progress.level}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="opacity-60">XP Total</span>
                  <span className="font-bold">{progress.totalXp}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="opacity-60">Desafios</span>
                  <span className="font-bold">
                    {progress.completedChallengeIds.length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="opacity-60">Streak</span>
                  <span className="font-bold">
                    {progress.currentStreak} dias
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Progresso por Linguagem */}
          <div className="lg:col-span-2 space-y-6">
            <div
              className={`p-6 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}
            >
              <h2 className="font-bold mb-6 flex items-center gap-2">
                <Target size={20} />
                Progresso por Linguagem
              </h2>

              <div className="space-y-6">
                {languageStats.map((lang) => (
                  <div key={lang.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{lang.icon}</span>
                        <span className="font-medium">{lang.name}</span>
                      </div>
                      <span className="text-sm opacity-60">
                        {lang.completed} / {lang.total} ({lang.percentage}%)
                      </span>
                    </div>
                    <div className="h-3 bg-black/20 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${lang.percentage}%`,
                          backgroundColor: lang.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div
              className={`p-6 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}
            >
              <h2 className="font-bold mb-6 flex items-center gap-2">
                <Trophy size={20} />
                Conquistas Recentes
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AchievementCard
                  icon={Zap}
                  title="Primeiro Código"
                  description="Complete seu primeiro desafio"
                  unlocked={progress.completedChallengeIds.length > 0}
                />
                <AchievementCard
                  icon={Star}
                  title="Juninho Dev"
                  description="Alcance o level 5"
                  unlocked={progress.level >= 5}
                />
                <AchievementCard
                  icon={Target}
                  title="Foco Total"
                  description="Complete 10 desafios em sequência"
                  unlocked={progress.currentStreak >= 10}
                />
                <AchievementCard
                  icon={Trophy}
                  title="Mestre"
                  description="Complete todos os desafios de uma linguagem"
                  unlocked={languageStats.some((l) => l.completed === l.total)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-componentes
const StatItem: React.FC<{ icon: any; value: number; label: string }> = ({
  icon: Icon,
  value,
  label,
}) => (
  <div className="text-center p-3 rounded-lg bg-white/5">
    <Icon size={20} className="mx-auto mb-1 opacity-60" />
    <div className="text-xl font-bold">{value}</div>
    <div className="text-xs opacity-50">{label}</div>
  </div>
);

const AchievementCard: React.FC<{
  icon: any;
  title: string;
  description: string;
  unlocked: boolean;
}> = ({ icon: Icon, title, description, unlocked }) => (
  <div
    className={`p-4 rounded-xl border transition-all ${
      unlocked
        ? 'bg-amber-500/10 border-amber-500/30'
        : 'bg-white/5 border-white/10 opacity-50'
    }`}
  >
    <div className="flex items-start gap-3">
      <div
        className={`p-2 rounded-lg ${unlocked ? 'bg-amber-500/20' : 'bg-white/10'}`}
      >
        <Icon size={20} className={unlocked ? 'text-amber-400' : ''} />
      </div>
      <div>
        <h4 className="font-bold text-sm">{title}</h4>
        <p className="text-xs opacity-60">{description}</p>
      </div>
      {unlocked && <Trophy size={16} className="text-amber-400 ml-auto" />}
    </div>
  </div>
);
