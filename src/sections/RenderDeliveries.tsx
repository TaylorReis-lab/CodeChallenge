import React, { useState } from 'react';
import {
  Package,
  Clock,
  CheckCircle2,
  XCircle,
  Code2,
  ExternalLink,
  Filter,
  Search,
} from 'lucide-react';
import { useAppState } from '../context/AppStateContext';
import { languages } from '../data';

// ============================================
// SEÇÃO: ENTREGAS DE DESAFIOS
// Mostra histórico de submissões de código
// ============================================

interface RenderDeliveriesProps {
  onNavigate: (view: string) => void;
  previousView: string;
}

export const RenderDeliveries: React.FC<RenderDeliveriesProps> = ({
  onNavigate,
  previousView,
}) => {
  const { profile, theme } = useAppState();
  const [filter, setFilter] = useState<
    'all' | 'pending' | 'approved' | 'rejected'
  >('all');
  const isDark = theme !== 'light';

  const progress = profile?.progress ?? {
    level: 1,
    totalXp: 0,
    completedChallengeIds: [],
    currentStreak: 0,
  };

  // Mock de entregas - em produção viria do backend
  const deliveries = progress.completedChallengeIds.map(
    (challengeId, index) => {
      const challenge = languages
        .flatMap((l) => l.challenges)
        .find((c) => c.id === challengeId);

      const statuses = ['approved', 'pending', 'rejected'] as const;
      const randomStatus =
        statuses[Math.floor(Math.random() * statuses.length)];

      return {
        id: `delivery-${index}`,
        challengeId,
        challengeTitle: challenge?.title || 'Desafio Desconhecido',
        language:
          languages.find((l) => l.challenges.some((c) => c.id === challengeId))
            ?.name || 'Unknown',
        submittedAt: new Date(Date.now() - index * 86400000).toISOString(),
        status: index === 0 ? ('approved' as const) : randomStatus,
        executionTime: Math.random() * 100,
      };
    }
  );

  const filteredDeliveries = deliveries.filter(
    (d) => filter === 'all' || d.status === filter
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle2 size={18} className="text-emerald-500" />;
      case 'rejected':
        return <XCircle size={18} className="text-rose-500" />;
      default:
        return <Clock size={18} className="text-amber-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Aprovado';
      case 'rejected':
        return 'Rejeitado';
      default:
        return 'Pendente';
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Package size={32} className="text-indigo-500" />
              Entregas
            </h1>
            <p className="opacity-50">
              Histórico de todas as suas submissões de código
            </p>
          </div>
          <button
            onClick={() => onNavigate(previousView)}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors self-start"
          >
            Voltar
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            value={deliveries.length}
            label="Total Entregues"
            icon={Package}
            color="text-indigo-500"
            isDark={isDark}
          />
          <StatCard
            value={deliveries.filter((d) => d.status === 'approved').length}
            label="Aprovados"
            icon={CheckCircle2}
            color="text-emerald-500"
            isDark={isDark}
          />
          <StatCard
            value={deliveries.filter((d) => d.status === 'pending').length}
            label="Pendentes"
            icon={Clock}
            color="text-amber-500"
            isDark={isDark}
          />
          <StatCard
            value={deliveries.filter((d) => d.status === 'rejected').length}
            label="Rejeitados"
            icon={XCircle}
            color="text-rose-500"
            isDark={isDark}
          />
        </div>

        {/* Filters */}
        <div
          className={`p-4 rounded-xl border mb-6 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2 flex-1">
              <Search size={18} className="opacity-40" />
              <input
                type="text"
                placeholder="Buscar entregas..."
                className={`flex-1 bg-transparent outline-none text-sm ${isDark ? 'placeholder-white/40' : 'placeholder-slate-400'}`}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={18} className="opacity-40" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className={`px-3 py-1.5 rounded-lg text-sm border outline-none ${
                  isDark
                    ? 'bg-black/20 border-white/10'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <option value="all">Todos</option>
                <option value="pending">Pendentes</option>
                <option value="approved">Aprovados</option>
                <option value="rejected">Rejeitados</option>
              </select>
            </div>
          </div>
        </div>

        {/* Deliveries List */}
        <div className="space-y-3">
          {filteredDeliveries.length === 0 ? (
            <div
              className={`p-12 rounded-2xl border text-center ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}
            >
              <Package size={48} className="mx-auto mb-4 opacity-20" />
              <h3 className="text-xl font-bold mb-2">Nenhuma entrega ainda</h3>
              <p className="opacity-50 mb-6">
                Complete desafios para ver seu histórico aqui
              </p>
              <button
                onClick={() => onNavigate('dashboard')}
                className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg transition-colors"
              >
                Ir para Desafios
              </button>
            </div>
          ) : (
            filteredDeliveries.map((delivery) => (
              <div
                key={delivery.id}
                className={`p-4 rounded-xl border transition-all hover:border-indigo-500/30 ${
                  isDark
                    ? 'bg-white/5 border-white/10'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}
                    >
                      <Code2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">
                        {delivery.challengeTitle}
                      </h4>
                      <div className="flex items-center gap-3 text-sm opacity-50">
                        <span>{delivery.language}</span>
                        <span>•</span>
                        <span>
                          {new Date(delivery.submittedAt).toLocaleDateString(
                            'pt-BR'
                          )}
                        </span>
                        {delivery.executionTime && (
                          <>
                            <span>•</span>
                            <span>{delivery.executionTime.toFixed(2)}ms</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                        delivery.status === 'approved'
                          ? 'bg-emerald-500/10 text-emerald-500'
                          : delivery.status === 'rejected'
                            ? 'bg-rose-500/10 text-rose-500'
                            : 'bg-amber-500/10 text-amber-500'
                      }`}
                    >
                      {getStatusIcon(delivery.status)}
                      {getStatusText(delivery.status)}
                    </div>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors opacity-50 hover:opacity-100">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {filteredDeliveries.length > 0 && (
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
            <p className="text-sm opacity-50">
              Mostrando {filteredDeliveries.length} de {deliveries.length}{' '}
              entregas
            </p>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm disabled:opacity-50"
                disabled
              >
                Anterior
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm disabled:opacity-50"
                disabled
              >
                Próximo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface StatCardProps {
  value: number;
  label: string;
  icon: React.ElementType;
  color: string;
  isDark: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  icon: Icon,
  color,
  isDark,
}) => (
  <div
    className={`p-4 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}
  >
    <Icon className={`w-6 h-6 ${color} mb-2`} />
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-xs opacity-50">{label}</div>
  </div>
);
