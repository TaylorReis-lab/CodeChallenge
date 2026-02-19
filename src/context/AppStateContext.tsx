import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeType, UserProfile } from '../core/types';

interface AppState {
  theme: ThemeType;
  currentLanguageId: string;
  uiLanguage: 'pt' | 'en';
  profile: UserProfile;
  setTheme: (t: ThemeType) => void;
  setCurrentLanguageId: (id: string) => void;
  setUiLanguage: (lang: 'pt' | 'en') => void;
  setProfile: (p: UserProfile) => void;
  clearProgress: () => void;
  completeChallenge: (id: string, xp: number) => void;
}

const AppStateContext = createContext<AppState | undefined>(undefined);

const RANDOM_THEMES = [
  'bg-slate-900',
  'bg-blue-950',
  'bg-purple-950',
  'bg-emerald-950',
  'bg-rose-950',
  'bg-amber-950',
  'bg-cyan-950',
  'bg-indigo-950',
];

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<ThemeType>(
    () => (localStorage.getItem('app-theme') as ThemeType) || 'dark'
  );
  const [randomColor, setRandomColor] = useState(RANDOM_THEMES[0]);
  const [currentLanguageId, setCurrentLanguageId] = useState(
    () => localStorage.getItem('app-current-lang') || 'javascript'
  );
  const [uiLanguage, setUiLanguage] = useState<'pt' | 'en'>(
    () => (localStorage.getItem('app-ui-lang') as 'pt' | 'en') || 'pt'
  );
  const [profile, setProfileState] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('app-profile');
    return saved
      ? JSON.parse(saved)
      : {
          githubUsername: null,
          githubData: null,
          progress: {
            completedChallengeIds: [],
            currentStreak: 0,
            longestStreak: 0,
            lastActivityDate: null,
            totalXp: 0,
            level: 1,
          },
          preferences: {
            theme: 'dark' as ThemeType,
            language: 'pt',
            editorFontSize: 14,
          },
        };
  });

  useEffect(() => {
    if (theme === 'random') {
      setRandomColor(
        RANDOM_THEMES[Math.floor(Math.random() * RANDOM_THEMES.length)]
      );
    }
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('app-current-lang', currentLanguageId);
  }, [currentLanguageId]);

  useEffect(() => {
    localStorage.setItem('app-ui-lang', uiLanguage);
  }, [uiLanguage]);

  useEffect(() => {
    localStorage.setItem('app-profile', JSON.stringify(profile));
  }, [profile]);

  const setTheme = (t: ThemeType) => setThemeState(t);

  const setProfileWrapper = (newProfile: UserProfile) => {
    setProfileState(newProfile);
    localStorage.setItem('app-profile', JSON.stringify(newProfile));
  };

  const completeChallenge = (challengeId: string, xp: number) => {
    setProfileState((prev) => {
      if (prev.progress.completedChallengeIds.includes(challengeId))
        return prev;

      const newCompleted = [
        ...prev.progress.completedChallengeIds,
        challengeId,
      ];
      const newXp = prev.progress.totalXp + xp;
      const newLevel = Math.floor(newXp / 100) + 1;

      const updated = {
        ...prev,
        progress: {
          ...prev.progress,
          completedChallengeIds: newCompleted,
          totalXp: newXp,
          level: newLevel,
        },
      };
      localStorage.setItem('app-profile', JSON.stringify(updated));
      return updated;
    });
  };

  const clearProgress = () => {
    const cleared = {
      githubUsername: profile.githubUsername,
      githubData: profile.githubData,
      progress: {
        completedChallengeIds: [],
        currentStreak: 0,
        longestStreak: 0,
        lastActivityDate: null,
        totalXp: 0,
        level: 1,
      },
      preferences: profile.preferences,
    };
    setProfileState(cleared);
    localStorage.setItem('app-profile', JSON.stringify(cleared));
  };

  const value = {
    theme,
    currentLanguageId,
    uiLanguage,
    profile,
    setTheme,
    setCurrentLanguageId,
    setUiLanguage,
    setProfile: setProfileWrapper,
    clearProgress,
    completeChallenge,
  };

  return (
    <AppStateContext.Provider value={value}>
      <div
        className={`${theme === 'dark' ? 'bg-[#0a0a0a]' : theme === 'light' ? 'bg-white' : randomColor} min-h-screen text-${theme === 'light' ? 'slate-900' : 'white'} transition-colors duration-500`}
      >
        {children}
      </div>
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context)
    throw new Error('useAppState must be used within AppStateProvider');
  return context;
};
