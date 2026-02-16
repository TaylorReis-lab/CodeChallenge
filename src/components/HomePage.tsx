import { Card } from './ui/Card';
import { Button } from './ui/Button';

interface HomePageProps {
  totalChallenges: number;
  completedChallenges: number;
  challengesByLevel: {
    iniciante: number;
    intermediario: number;
    avancado: number;
  };
  onNavigate: (page: string) => void;
}

export function HomePage({
  completedChallenges,
  challengesByLevel,
  onNavigate,
}: HomePageProps) {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm text-slate-600 mb-6">
          <span>🚀</span>
          <span>Projeto Open Source</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Domine JavaScript com{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500">
            Desafios Práticos
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          Uma plataforma criada para você <strong>relembrar e praticar</strong> funções e métodos do JavaScript, 
          desde o básico até conceitos avançados. Aprenda fazendo!
        </p>
        
        <div className="flex justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => onNavigate('challenges')}
          >
            Começar Desafios
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => onNavigate('about')}
          >
            Sobre o Projeto
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <Card className="p-6 text-center">
          <div className="text-4xl font-bold text-emerald-500 mb-2">
            {challengesByLevel.iniciante}
          </div>
          <div className="text-slate-600">Desafios Iniciantes</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-4xl font-bold text-amber-500 mb-2">
            {challengesByLevel.intermediario}
          </div>
          <div className="text-slate-600">Desafios Intermediários</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-4xl font-bold text-rose-500 mb-2">
            {challengesByLevel.avancado}
          </div>
          <div className="text-slate-600">Desafios Avançados</div>
        </Card>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">📚</span>
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Documentação Detalhada</h3>
          <p className="text-slate-600 text-sm">
            Cada desafio vem com explicações completas, exemplos de sintaxe e dicas práticas.
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🏆</span>
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Sistema de Medalhas</h3>
          <p className="text-slate-600 text-sm">
            Ganhe medalhas conforme avança, desde "Juninho Dev" até "Lenda do JavaScript".
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">✅</span>
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Testes Automáticos</h3>
          <p className="text-slate-600 text-sm">
            Valide suas soluções instantaneamente com testes que verificam seu código.
          </p>
        </div>
      </div>

      {/* Progress */}
      {completedChallenges > 0 && (
        <Card className="max-w-2xl mx-auto p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Seu Progresso</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm text-slate-600 mb-1">
                <span>Iniciante</span>
                <span>{challengesByLevel.iniciante}/10</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${(challengesByLevel.iniciante / 10) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-slate-600 mb-1">
                <span>Intermediário</span>
                <span>{challengesByLevel.intermediario}/15</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-500 rounded-full transition-all duration-500"
                  style={{ width: `${(challengesByLevel.intermediario / 15) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-slate-600 mb-1">
                <span>Avançado</span>
                <span>{challengesByLevel.avancado}/15</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-rose-500 rounded-full transition-all duration-500"
                  style={{ width: `${(challengesByLevel.avancado / 15) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* CTA */}
      <Card className="p-8 text-center bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <h3 className="text-2xl font-bold mb-4">"Tudo pode começar e continuar crescendo"</h3>
        <p className="text-slate-300 mb-6">
          Comece agora e conquiste todas as medalhas! 🏅
        </p>
        <Button
          variant="secondary"
          size="lg"
          onClick={() => onNavigate('challenges')}
        >
          Ver Todos os Desafios
        </Button>
      </Card>
    </div>
  );
}
