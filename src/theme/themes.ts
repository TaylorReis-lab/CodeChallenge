import { ThemeConfig } from '../types';

export const THEMES: ThemeConfig[] = [
  {
    id: 'light',
    name: 'Claro',
    colors: {
      primary: '#3b82f6',
      secondary: '#64748b',
      accent: '#f59e0b',
      bg: '#f8fafc',
      surface: '#ffffff',
      text: '#1e293b',
      border: '#e2e8f0',
      terminal: {
        bg: '#ffffff',
        text: '#24292e',
        keyword: '#d73a49',
        function: '#6f42c1',
        string: '#032f62',
        comment: '#6a737d',
        number: '#005cc5',
      }
    }
  },
  {
    id: 'dark',
    name: 'Dracula OLED',
    colors: {
      primary: '#bd93f9',
      secondary: '#6272a4',
      accent: '#ffb86c',
      bg: '#000000',
      surface: '#121212',
      text: '#f8f8f2',
      border: '#282a36',
      terminal: {
        bg: '#000000',
        text: '#f8f8f2',
        keyword: '#ff79c6',
        function: '#50fa7b',
        string: '#f1fa8c',
        comment: '#6272a4',
        number: '#bd93f9',
      }
    }
  },
  {
    id: 'nord',
    name: 'Nord Night',
    colors: {
      primary: '#88c0d0',
      secondary: '#4c566a',
      accent: '#ebcb8b',
      bg: '#2e3440',
      surface: '#3b4252',
      text: '#eceff4',
      border: '#434c5e',
      terminal: {
        bg: '#2e3440',
        text: '#d8dee9',
        keyword: '#81a1c1',
        function: '#88c0d0',
        string: '#a3be8c',
        comment: '#4c566a',
        number: '#b48ead',
      }
    }
  },
  {
    id: 'tokyo-night',
    name: 'Tokyo Night',
    colors: {
      primary: '#7aa2f7',
      secondary: '#565f89',
      accent: '#ff9e64',
      bg: '#1a1b26',
      surface: '#24283b',
      text: '#a9b1d6',
      border: '#414868',
      terminal: {
        bg: '#1a1b26',
        text: '#c0caf5',
        keyword: '#bb9af7',
        function: '#7aa2f7',
        string: '#9ece6a',
        comment: '#565f89',
        number: '#ff9e64',
      }
    }
  },
  {
    id: 'synthwave',
    name: 'Synthwave 84',
    colors: {
      primary: '#ff7edb',
      secondary: '#b891ff',
      accent: '#f97e72',
      bg: '#2b213a',
      surface: '#241b30',
      text: '#fdfdfd',
      border: '#45355e',
      terminal: {
        bg: '#2b213a',
        text: '#ffffff',
        keyword: '#f97e72',
        function: '#36f9f6',
        string: '#ff7edb',
        comment: '#848bb2',
        number: '#fdec5d',
      }
    }
  },
  {
    id: 'monokai',
    name: 'Monokai Pro',
    colors: {
      primary: '#ffd866',
      secondary: '#939293',
      accent: '#ff6188',
      bg: '#2d2a2e',
      surface: '#403e41',
      text: '#fcfcfa',
      border: '#49454e',
      terminal: {
        bg: '#2d2a2e',
        text: '#fcfcfa',
        keyword: '#ff6188',
        function: '#a9dc76',
        string: '#ffd866',
        comment: '#727072',
        number: '#ab9df2',
      }
    }
  }
];

export const getRandomTheme = (currentThemeId: string) => {
  const filteredThemes = THEMES.filter(t => t.id !== currentThemeId && t.id !== 'light' && t.id !== 'dark');
  return filteredThemes[Math.floor(Math.random() * filteredThemes.length)];
};
