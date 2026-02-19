import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeConfig, ThemeType } from '../types';
import { THEMES, getRandomTheme } from './themes';

interface ThemeContextType {
  theme: ThemeConfig;
  themeType: ThemeType;
  setThemeType: (type: ThemeType) => void;
  cycleRandomTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeType, setThemeTypeState] = useState<ThemeType>(() => {
    return (localStorage.getItem('theme-type') as ThemeType) || 'dark';
  });

  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(() => {
    if (themeType === 'random') {
      return getRandomTheme('none');
    }
    return THEMES.find((t) => t.id === themeType) || THEMES[1]; // default dark
  });

  useEffect(() => {
    localStorage.setItem('theme-type', themeType);
    if (themeType === 'random') {
      setCurrentTheme(getRandomTheme('none'));
    } else {
      const theme = THEMES.find((t) => t.id === themeType);
      if (theme) setCurrentTheme(theme);
    }
  }, [themeType]);

  const setThemeType = (type: ThemeType) => setThemeTypeState(type);

  const cycleRandomTheme = () => {
    if (themeType === 'random') {
      setCurrentTheme(getRandomTheme(currentTheme.id));
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, themeType, setThemeType, cycleRandomTheme }}
    >
      <div
        style={{
          backgroundColor: currentTheme.colors.bg,
          color: currentTheme.colors.text,
          transition: 'all 0.3s ease',
        }}
        className="min-h-screen"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
