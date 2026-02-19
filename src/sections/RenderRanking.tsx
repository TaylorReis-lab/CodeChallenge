import React from 'react';
import { Trophy, Medal, Crown, TrendingUp, Users } from 'lucide-react';
import { useAppState } from '../context/AppStateContext';

// ============================================
// SEÇÃO: RANKING DA COMUNIDADE
// Mostra os melhores desenvolvedores
// ============================================

interface RenderRankingProps {
  onNavigate: (view: string) => void;
  previousView: string;
}

export const RenderRanking: React.FC<RenderRankingProps> = ({ onNavigate, previousView }) => {
  const { theme } = useAppState();
  const isDark = theme !== 'light';

  // Rankings mockados - em produção viria do backend
  const topDevelopers = [
    { rank: 1, name: 'DevMaster_Pro', xp: 15420, challenges: 156, avatar: '👑', streak: 45, badge: 'lenda' },
    { rank: 2, name: 'CodeNinja', xp: 12850, challenges: 142, avatar: '🥇', streak: 32, badge: 'mestre' },
    { rank: 3, name: 'JS_Wizard', xp: 11200, challenges: 128, avatar: '🥈', streak: 28, badge: 'expert' },
    { rank: 4, name: 'Pythonista_99', xp: 9800, challenges: 115, avatar: '🥉', streak: 21, badge: 'expert' },
    { rank: 5, name: 'AlgoRhythm', xp: 8500, challenges: 98, avatar: '⭐', streak: 18, badge: 'avancado' },
    { rank: 6, name: 'BugHunter', xp: 7200, challenges: 85, avatar: '🔧', streak: 15, badge: 'avancado' },
    { rank: 7, name: 'CodeWarrior', xp: 6800, challenges: 78, avatar: '⚔️', streak: 12, badge: 'intermediario' },
    { rank: 8, name: 'ByteMaster', xp: 5400, challenges: 65, avatar: '🧙', streak: 10, badge: 'intermediario' },
    { rank: 9, name: 'StackOverflower', xp: 4800, challenges: 52, avatar: '📚', streak: 8, badge: 'intermediario' },
    { rank: 10, name: 'JuniorDev_Br', xp: 4200, challenges: 45, avatar: '🌟', streak: 7, badge: 'iniciante' },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-amber-400" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-slate-400" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-amber-600" />;
    return <span className="text-lg font-bold opacity-50">#{rank}</span>;
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Trophy className="text-amber-500" size={32} />
              Ranking Global
            </h1>
            <p className="opacity-50">Os melhores desenvolvedores da comunidade</p>
          </div>
          <button
            onClick={() => onNavigate(previousView)}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            Voltar
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className={`p-6 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}>
            <Users className="w-8 h-8 text-blue-500 mb-3" />
            <div className="text-3xl font-bold">1,234</div>
            <div className="text-sm opacity-50">Desenvolvedores Ativos</div>
          </div>
          <div className={`p-6 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}>
            <Trophy className="w-8 h-8 text-amber-500 mb-3" />
            <div className="text-3xl font-bold">8,567</div>
            <div className="text-sm opacity-50">Desafios Completos</div>
          </div>
          <div className={`p-6 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}>
            <TrendingUp className="w-8 h-8 text-emerald-500 mb-3" />
            <div className="text-3xl font-bold">45 dias</div>
            <div className="text-sm opacity-50">Maior Streak</div>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="flex items-end justify-center gap-4 mb-12">
          {/* 2º Lugar */}
          <div className="text-center">
            <div className={`w-24 h-24 rounded-full border-4 border-slate-400 mx-auto mb-3 flex items-center justify-center text-4xl bg-gradient-to-br from-slate-400/20 to-slate-500/10`}>
              {topDevelopers[1].avatar}
            </div>
            <div className="font-bold text-lg">{topDevelopers[1].name}</div>
            <div className="text-amber-400 font-bold">{topDevelopers[1].xp.toLocaleString()} XP</div>
            <div className="text-sm opacity-50">{topDevelopers[1].challenges} desafios</div>
            <div className="w-24 h-16 bg-slate-500/20 rounded-t-lg mt-2 flex items-end justify-center pb-2">
              <span className="text-2xl font-bold text-slate-400">2º</span>
            </div>
          </div>

          {/* 1º Lugar */}
          <div className="text-center -mt-8">
            <div className="relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <Crown className="w-8 h-8 text-amber-400" />
              </div>
              <div className={`w-32 h-32 rounded-full border-4 border-amber-500 mx-auto mb-3 flex items-center justify-center text-5xl bg-gradient-to-br from-amber-500/20 to-amber-600/10`}>
                {topDevelopers[0].avatar}
              </div>
            </div>
            <div className="font-bold text-xl">{topDevelopers[0].name}</div>
            <div className="text-amber-400 font-bold text-lg">{topDevelopers[0].xp.toLocaleString()} XP</div>
            <div className="text-sm opacity-50">{topDevelopers[0].challenges} desafios</div>
            <div className="w-28 h-20 bg-gradient-to-t from-amber-500/30 to-amber-500/10 rounded-t-lg mt-2 flex items-end justify-center pb-2">
              <span className="text-3xl font-bold text-amber-400">1º</span>
            </div>
          </div>

          {/* 3º Lugar */}
          <div className="text-center">
            <div className={`w-24 h-24 rounded-full border-4 border-amber-700 mx-auto mb-3 flex items-center justify-center text-4xl bg-gradient-to-br from-amber-700/20 to-amber-800/10`}>
              {topDevelopers[2].avatar}
            </div>
            <div className="font-bold text-lg">{topDevelopers[2].name}</div>
            <div className="text-amber-600 font-bold">{topDevelopers[2].xp.toLocaleString()} XP</div>
            <div className="text-sm opacity-50">{topDevelopers[2].challenges} desafios</div>
            <div className="w-24 h-12 bg-amber-700/20 rounded-t-lg mt-2 flex items-end justify-center pb-2">
              <span className="text-2xl font-bold text-amber-600">3º</span>
            </div>
          </div>
        </div>

        {/* Ranking List */}
        <div className={`rounded-2xl border overflow-hidden ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}>
          <div className="p-4 border-b border-white/10 bg-white/5">
            <div className="grid grid-cols-6 gap-4 text-sm font-bold opacity-50">
              <div className="text-center">Posição</div>
              <div className="col-span-2">Desenvolvedor</div>
              <div className="text-center">XP</div>
              <div className="text-center">Desafios</div>
              <div className="text-center">Streak</div>
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {topDevelopers.slice(3).map((dev) => (
              <div key={dev.rank} className="p-4 hover:bg-white/5 transition-colors">
                <div className="grid grid-cols-6 gap-4 items-center">
                  <div className="text-center">{getRankIcon(dev.rank)}</div>
                  <div className="col-span-2 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${isDark ? 'bg-white/10' : 'bg-slate-100'}`}>
                      {dev.avatar}
                    </div>
                    <div>
                      <div className="font-bold">{dev.name}</div>
                      <div className="text-xs opacity-50 capitalize">{dev.badge}</div>
                    </div>
                  </div>
                  <div className="text-center font-bold text-emerald-400">{dev.xp.toLocaleString()}</div>
                  <div className="text-center opacity-70">{dev.challenges}</div>
                  <div className="text-center">
                    <span className={`px-2 py-1 rounded-full text-xs ${isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-700'}`}>
                      🔥 {dev.streak}d
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Position */}
        <div className={`mt-8 p-6 rounded-2xl border bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/30`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${isDark ? 'bg-white/10' : 'bg-white'}`}>
                👤
              </div>
              <div>
                <div className="font-bold text-lg">Sua Posição</div>
                <div className="opacity-50">Continue praticando para subir no ranking!</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">#1,234</div>
              <div className="text-sm opacity-50">dos 1,234 desenvolvedores</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
