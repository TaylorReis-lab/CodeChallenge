export interface Theme {
  name: string;
  background: string;
  secondary: string;
  text: string;
  textSecondary: string;
  border: string;
  accent: string;
}

export const themes: Record<string, Theme> = {
  light: {
    name: 'Claro',
    background: '#f8fafc',
    secondary: '#ffffff',
    text: '#0f172a',
    textSecondary: '#64748b',
    border: '#e2e8f0',
    accent: '#3b82f6',
  },
  dark: {
    name: 'Dracula OLED',
    background: '#0d0f1a',
    secondary: '#1a1c2a',
    text: '#f8f8f2',
    textSecondary: '#6272a4',
    border: '#1a1c2a',
    accent: '#bd93f9',
  },
  nord: {
    name: 'Nord',
    background: '#2e3440',
    secondary: '#3b4252',
    text: '#eceff4',
    textSecondary: '#d8dee9',
    border: '#434c5e',
    accent: '#88c0d0',
  },
  'tokyo-night': {
    name: 'Tokyo Night',
    background: '#1a1b26',
    secondary: '#24283b',
    text: '#c0caf5',
    textSecondary: '#565f89',
    border: '#414868',
    accent: '#7aa2f7',
  },
  catppuccin: {
    name: 'Catppuccin',
    background: '#1e1e2e',
    secondary: '#313244',
    text: '#cdd6f4',
    textSecondary: '#a6adc8',
    border: '#45475a',
    accent: '#cba6f7',
  },
  'github-dark': {
    name: 'GitHub Dark',
    background: '#0d1117',
    secondary: '#161b22',
    text: '#c9d1d9',
    textSecondary: '#8b949e',
    border: '#30363d',
    accent: '#58a6ff',
  },
  solarized: {
    name: 'Solarized Dark',
    background: '#002b36',
    secondary: '#073642',
    text: '#839496',
    textSecondary: '#586e75',
    border: '#073642',
    accent: '#268bd2',
  },
  monokai: {
    name: 'Monokai',
    background: '#272822',
    secondary: '#3e3d32',
    text: '#f8f8f2',
    textSecondary: '#75715e',
    border: '#49483e',
    accent: '#a6e22e',
  },
  'one-dark': {
    name: 'One Dark Pro',
    background: '#282c34',
    secondary: '#21252b',
    text: '#abb2bf',
    textSecondary: '#5c6370',
    border: '#3e4451',
    accent: '#61afef',
  },
  material: {
    name: 'Material Theme',
    background: '#1e1e1e',
    secondary: '#2d2d2d',
    text: '#eeffff',
    textSecondary: '#b0bec5',
    border: '#3d3d3d',
    accent: '#00bcd4',
  },
  horizon: {
    name: 'Horizon',
    background: '#1a1b26',
    secondary: '#232530',
    text: '#a9b1d6',
    textSecondary: '#565f89',
    border: '#414868',
    accent: '#7aa2f7',
  },
  'rose-pine': {
    name: 'Rose Pine',
    background: '#1f1d2e',
    secondary: '#26233a',
    text: '#e0def4',
    textSecondary: '#908caa',
    border: '#403d52',
    accent: '#c4a7e7',
  },
  'shades-purple': {
    name: 'Shades of Purple',
    background: '#1e1e2e',
    secondary: '#282a36',
    text: '#f8f8f2',
    textSecondary: '#6272a4',
    border: '#44475a',
    accent: '#bd93f9',
  },
};
