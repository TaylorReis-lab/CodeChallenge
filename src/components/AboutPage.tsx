import { Card } from './ui/Card';

interface AboutPageProps {
  userName: string;
}

export function AboutPage({ userName }: AboutPageProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-300 mb-4">Sobre o Projeto</h1>
        <p className="text-slate-600">Conheça o CodeChallenger e seu propósito</p>
      </div>

      {/* Objective */}
      <Card className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <h3 className="text-xl font-semibold text-slate-300 mb-4">🎯 Objetivo</h3>
        <p className="text-slate-300 leading-relaxed mb-6">
          O <strong>CodeChallenger</strong> foi desenvolvido com o intuito de ajudar desenvolvedores a 
          <strong> relembrar e praticar funções e métodos de diversas linguagens de programação</strong>. 
          Seja você um iniciante querendo solidificar seus conhecimentos ou um desenvolvedor 
          experiente que precisa relembrar alguma sintaxe específica, esta plataforma oferece 
          desafios práticos organizados por nível de dificuldade.
        </p>
        
        <p className="text-slate-300 leading-relaxed mb-6">
          Cada desafio vem acompanhado de <strong>documentação detalhada</strong> que explica os conceitos 
          envolvidos, mostra a sintaxe correta, fornece exemplos práticos e lista métodos relacionados. 
          É como ter uma referência rápida sempre à mão!
        </p>
      </Card>

      {/* What You'll Learn */}
      <Card className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <h3 className="text-xl font-semibold text-slate-300 mb-6">📚 O que você vai aprender</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-600 p-4 rounded-lg">
            <h4 className="font-medium text-slate-300 mb-2">JavaScript</h4>
            <p className="text-sm text-slate-300">map, filter, reduce, async/await, closures, callbacks e muito mais...</p>
          </div>
          <div className="bg-slate-600 p-4 rounded-lg">
            <h4 className="font-medium text-slate-300 mb-2">C# / .NET</h4>
            <p className="text-sm text-slate-300">LINQ, delegates, async, properties, generics e mais...</p>
          </div>
          <div className="bg-slate-600 p-4 rounded-lg">
            <h4 className="font-medium text-slate-300 mb-2">Python</h4>
            <p className="text-sm text-slate-300">list comprehensions, generators, decorators e mais...</p>
          </div>
          <div className="bg-slate-600 p-4 rounded-lg">
            <h4 className="font-medium text-slate-300 mb-2">E mais!</h4>
            <p className="text-sm text-slate-300">Java, Go, Rust e outras linguagens em breve...</p>
          </div>
        </div>
      </Card>

      {/* Badge System */}
      <Card className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <h3 className="text-xl font-semibold text-slate-300 mb-4">🏆 Sistema de Medalhas</h3>
        <p className="text-slate-300 leading-relaxed mb-4">
          Para tornar a experiência mais divertida e motivadora, implementamos um sistema de medalhas. 
          Conforme você avança nos desafios, vai desbloqueando conquistas:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li><strong>🐣 Primeiros Passos</strong> - Complete seu primeiro desafio</li>
          <li><strong>🌱 Juninho Dev</strong> - Alcance o nível intermediário</li>
          <li><strong>🦁 Programador Corajoso</strong> - Enfrente desafios avançados</li>
          <li><strong>🌟 Lenda do Código</strong> - Complete TODOS os desafios disponíveis</li>
        </ul>
      </Card>

      {/* Progress Saved */}
      <Card className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <h3 className="text-xl font-semibold text-slate-300 mb-4">💾 Progresso Salvo</h3>
        <p className="text-slate-300 leading-relaxed mb-6">
          Seu progresso é automaticamente salvo no navegador. Você pode fechar a página e voltar 
          depois - todos os desafios completados e medalhas conquistadas estarão lá esperando por você!
        </p>
      </Card>

      {/* Open Source */}
      <Card className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <h3 className="text-xl font-semibold mb-4">🌍 Projeto Open Source</h3>
        <p className="text-slate-300 leading-relaxed mb-6">
          O CodeChallenger é um projeto <strong>Open Source</strong>! Atualmente, sou eu quem está 
          tocando o desenvolvimento principal. Caso alguém queira contribuir, podemos construir juntos 
          e expandir a plataforma com novos desafios e novas linguagens.
        </p>
        
        <div className="bg-slate-700/50 rounded-xl p-4 mb-6">
          <h4 className="font-semibold mb-2">🔮 Próximas Linguagens</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-slate-600 rounded-full text-sm">Python</span>
            <span className="px-3 py-1 bg-slate-600 rounded-full text-sm">Java</span>
            <span className="px-3 py-1 bg-slate-600 rounded-full text-sm">Go</span>
            <span className="px-3 py-1 bg-slate-600 rounded-full text-sm">Rust</span>
          </div>
        </div>

        <p className="text-slate-400 text-sm">
          "Tudo pode começar e continuar crescendo" 🌱
        </p>
      </Card>

      {/* Creator */}
      <Card className="p-8 text-center bg-slate-800 text-white">
        <h3 className="text-xl font-semibold mb-4">👨‍💻 Criador e desenvolvedor</h3>
        <div className="mb-4">
          <div className="w-20 h-20 bg-slate-700 rounded-full mx-auto flex items-center justify-center text-3xl mb-3">
            👋
          </div>
          <h4 className="text-2xl font-bold">Taylor Reis</h4>
          <p className="text-slate-400 text-sm mt-1">@Taylorreis-lab</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a 
            href="https://github.com/taylorreis-lab" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-800 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            github.com/taylorreis-lab
          </a>
          <a
            href="https://www.linkedin.com/in/taylorreis-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.067-2.066 2.066 2.066 0 112.067 2.066zM6.774 20.452H3.89V9h2.884v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
            </svg>
            linkedin.com/in/taylorreis-dev
          </a>
        </div>
        <p className="text-slate-400 text-sm mt-6">
          Feito com ❤️ para a comunidade dev • © 2025
        </p>
      </Card>
    </div>
  );
}
