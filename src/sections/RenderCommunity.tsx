import React from 'react';
import { Users, MessageCircle, Share2, Heart, MessageSquare, Send, Zap, Sparkles } from 'lucide-react';
import { useAppState } from '../context/AppStateContext';

// ============================================
// SEÇÃO: COMUNIDADE
// Conecte-se com outros desenvolvedores
// ============================================

interface RenderCommunityProps {
  onNavigate: (view: string) => void;
  previousView: string;
}

export const RenderCommunity: React.FC<RenderCommunityProps> = ({ onNavigate, previousView }) => {
  const { theme } = useAppState();
  const isDark = theme !== 'light';

  // Posts mockados
  const posts = [
    {
      id: 1,
      author: 'CodeNinja',
      avatar: '🥷',
      time: '2 horas',
      content: 'Acabei de completar todos os desafios de JavaScript! 🏆 Obrigado @taylorreis pelo projeto incrível!',
      likes: 42,
      comments: 8,
      language: 'JavaScript',
    },
    {
      id: 2,
      author: 'Pythonista_99',
      avatar: '🐍',
      time: '4 horas',
      content: 'Alguém mais está tendo dificuldade com o desafio de Fibonacci? Deixa um comentário se quiser discutir a solução!',
      likes: 15,
      comments: 23,
      language: 'JavaScript',
    },
    {
      id: 3,
      author: 'DevMaster_Pro',
      avatar: '👑',
      time: '6 horas',
      content: 'Dica do dia: Sempre use console.log para debugar seu código! 🐛 #coding #javascript #tips',
      likes: 89,
      comments: 12,
      language: 'Dica',
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Users className="text-blue-500" size={32} />
              Comunidade
            </h1>
            <p className="opacity-50">Conecte-se com outros desenvolvedores</p>
          </div>
          <button
            onClick={() => onNavigate(previousView)}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            Voltar
          </button>
        </div>

        {/* Coming Soon Banner */}
        <div className={`relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-12 mb-8`}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent" />
          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-bold mb-4">
              <Sparkles size={16} />
              Em Desenvolvimento
            </div>
            <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Comunidade Complete
            </h2>
            <p className="text-lg opacity-70 max-w-xl mx-auto mb-8">
              Em breve você poderá compartilhar suas soluções, 
              comentar em posts de outros desenvolvedores e fazer networking!
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="font-bold">Comentários</div>
              </div>
              <div className="text-center">
                <Share2 className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="font-bold">Compartilhar</div>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="font-bold">Curtir</div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview de funcionalidades */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className={`p-6 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold">Fóruns de Discussão</h3>
                <p className="text-sm opacity-50">Em breve</p>
              </div>
            </div>
            <p className="text-sm opacity-70">
              Discuta soluções, tire dúvidas e ajude outros desenvolvedores da comunidade.
            </p>
          </div>

          <div className={`p-6 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-bold">Compartilhar Soluções</h3>
                <p className="text-sm opacity-50">Em breve</p>
              </div>
            </div>
            <p className="text-sm opacity-70">
              Mostre suas soluções completas e inspire outros desenvolvedores.
            </p>
          </div>
        </div>

        {/* Feed Preview */}
        <div className={`rounded-2xl border overflow-hidden ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}>
          <div className="p-4 border-b border-white/10 bg-white/5">
            <h3 className="font-bold">Feed da Comunidade</h3>
            <p className="text-sm opacity-50">Prévia do que vem por aí</p>
          </div>

          <div className="divide-y divide-white/5">
            {posts.map((post) => (
              <div key={post.id} className="p-4 hover:bg-white/5 transition-colors">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${isDark ? 'bg-white/10' : 'bg-slate-100'}`}>
                    {post.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold">{post.author}</span>
                      <span className="text-xs opacity-50">• {post.time}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs ml-auto ${isDark ? 'bg-white/10' : 'bg-slate-100'}`}>
                        {post.language}
                      </span>
                    </div>
                    <p className="text-sm opacity-80 mb-3">{post.content}</p>
                    <div className="flex items-center gap-6 text-sm opacity-50">
                      <button className="flex items-center gap-2 hover:text-red-400 transition-colors">
                        <Heart size={16} /> {post.likes}
                      </button>
                      <button className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                        <MessageSquare size={16} /> {post.comments}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className={`flex-1 px-4 py-2 rounded-xl ${isDark ? 'bg-white/10' : 'bg-slate-100'}`}>
                <input
                  type="text"
                  placeholder="Em breve você poderá postar aqui..."
                  disabled
                  className="w-full bg-transparent outline-none text-sm"
                />
              </div>
              <button className="p-2 rounded-xl bg-indigo-500/50 cursor-not-allowed">
                <Send size={20} className="opacity-50" />
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className={`mt-8 p-6 rounded-2xl border bg-gradient-to-r from-indigo-500/5 to-purple-500/5 border-indigo-500/20`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg mb-1">Fique por dentro!</h3>
              <p className="text-sm opacity-70">Receba atualizações sobre novas funcionalidades.</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu email"
                className={`px-4 py-2 rounded-xl ${isDark ? 'bg-white/10 border-white/10' : 'bg-white border-slate-200'} border`}
              />
              <button className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-medium transition-colors">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm opacity-40">
            © 2025 CodeChallenger • Projeto Open Source • Contribua no GitHub
          </p>
        </div>
      </div>
    </div>
  );
};
