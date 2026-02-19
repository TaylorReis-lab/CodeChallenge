import { useState } from 'react';
import { useAppState } from '../context/AppStateContext';
import { GitHubUser } from '../core/types';

// ============================================
// HOOK: useGitHub
// Gerencia integração com API do GitHub
// ============================================

export const useGitHub = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { profile, setProfile } = useAppState();

  const fetchUser = async (username: string): Promise<boolean> => {
    if (!username.trim()) {
      setError('Username é obrigatório');
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Usuário não encontrado');
        }
        throw new Error('Erro ao buscar usuário');
      }

      const data: GitHubUser = await response.json();
      
      setProfile({
        ...profile,
        githubUsername: username,
        githubData: data
      });

      return true;
    } catch (err: any) {
      setError(err.message || 'Erro desconhecido');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const clearUser = () => {
    setProfile({
      ...profile,
      githubUsername: null,
      githubData: null
    });
  };

  return {
    fetchUser,
    clearUser,
    loading,
    error,
    user: profile.githubData
  };
};
