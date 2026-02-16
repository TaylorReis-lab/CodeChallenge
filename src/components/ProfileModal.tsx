import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Progress } from './ui/Progress';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  completedChallenges: number[];
  totalChallenges: number;
  challengesByLevel: {
    iniciante: number;
    intermediario: number;
    avancado: number;
  };
  earnedBadges: number;
  totalBadges: number;
}

export function ProfileModal({
  isOpen,
  onClose,
  userName,
  completedChallenges,
  totalChallenges,
  challengesByLevel,
  earnedBadges,
  totalBadges,
}: ProfileModalProps) {
  const levels = [
    { key: 'iniciante', label: 'Iniciante', color: 'emerald', total: 10 },
    { key: 'intermediario', label: 'Intermediário', color: 'amber', total: 15 },
    { key: 'avancado', label: 'Avançado', color: 'rose', total: 15 },
  ] as const;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Meu Perfil" size="lg">
      <div className="space-y-6">
        {/* Profile Header */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center text-4xl">
            👤
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800">{userName}</h3>
            <p className="text-slate-500">Desenvolvedor JavaScript</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="success">{completedChallenges.length} desafios</Badge>
              <Badge variant="warning">{earnedBadges} medalhas</Badge>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-slate-50 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-slate-800">{completedChallenges.length}</div>
            <div className="text-sm text-slate-500">Total Concluídos</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-slate-800">{totalChallenges - completedChallenges.length}</div>
            <div className="text-sm text-slate-500">Restantes</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-slate-800">{Math.round((completedChallenges.length / totalChallenges) * 100)}%</div>
            <div className="text-sm text-slate-500">Progresso</div>
          </div>
        </div>

        {/* Level Progress */}
        <div>
          <h4 className="font-semibold text-slate-800 mb-4">Progresso por Nível</h4>
          <div className="space-y-4">
            {levels.map((level) => {
              const completed = challengesByLevel[level.key];
              return (
                <div key={level.key}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">{level.label}</span>
                    <span className="text-sm text-slate-500">{completed}/{level.total}</span>
                  </div>
                  <Progress 
                    value={completed} 
                    max={level.total} 
                    color={level.color as 'emerald' | 'amber' | 'rose'}
                    showLabel={false}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h4 className="font-semibold text-slate-800 mb-4">Conquistas</h4>
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl border border-amber-200">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏆</span>
              <div>
                <p className="font-semibold text-slate-800">{earnedBadges} de {totalBadges} Medalhas</p>
                <p className="text-sm text-slate-600">Continue praticando para desbloquear mais!</p>
              </div>
            </div>
            <Button variant="secondary" size="sm" onClick={onClose}>
              Ver Medalhas
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
