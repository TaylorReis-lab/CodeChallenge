// ============================================
// CORE TYPES - Definições globais do sistema
// ============================================

export type Difficulty = 'iniciante' | 'intermediario' | 'avancado';
export type ThemeType = 'light' | 'dark' | 'random';
export type ViewState =
  | 'home'
  | 'challenges'
  | 'profile'
  | 'deliveries'
  | 'about';

// ============================================
// CHALLENGE SYSTEM
// ============================================

export interface TestCase {
  id: number;
  input: any[];
  expected: any;
  description: string;
}

export interface ChallengeDocumentation {
  concept: string;
  syntax: string;
  example: string;
  externalLink: string;
  tips: string[];
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  category: string;
  initialCode: string;
  solution: string;
  hints: string[];
  testCases: TestCase[];
  documentation: ChallengeDocumentation;
  xpReward: number;
}

// ============================================
// LANGUAGE SYSTEM
// ============================================

export interface Language {
  id: string;
  name: string;
  icon: string;
  description: string;
  docLink: string;
  color: string;
  fileExtension: string;
  prismLanguage: string;
  challenges: Challenge[];
}

// ============================================
// USER SYSTEM
// ============================================

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface UserProgress {
  completedChallengeIds: string[];
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string | null;
  totalXp: number;
  level: number;
}

export interface UserProfile {
  githubUsername: string | null;
  githubData: GitHubUser | null;
  progress: UserProgress;
  preferences: {
    theme: ThemeType;
    language: 'pt' | 'en';
    editorFontSize: number;
  };
}

// ============================================
// DELIVERY SYSTEM
// ============================================

export interface ChallengeDelivery {
  id: string;
  challengeId: string;
  languageId: string;
  code: string;
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected';
  feedback: string | null;
  executionTime: number | null;
}

// ============================================
// THEME SYSTEM
// ============================================

export interface TerminalColors {
  bg: string;
  text: string;
  keyword: string;
  function: string;
  string: string;
  number: string;
  comment: string;
  operator: string;
  punctuation: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  success: string;
  warning: string;
  error: string;
  bg: string;
  surface: string;
  elevated: string;
  text: string;
  textMuted: string;
  border: string;
  terminal: TerminalColors;
}

export interface ThemeConfig {
  id: string;
  name: string;
  type: 'light' | 'dark' | 'random';
  colors: ThemeColors;
}

// ============================================
// BADGE SYSTEM
// ============================================

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number;
  requirementType: 'challenges' | 'streak' | 'xp' | 'language';
  color: string;
}

// ============================================
// COMPONENT PROPS
// ============================================

export interface BaseComponentProps {
  className?: string;
}

export interface NavItem {
  id: ViewState;
  label: string;
  icon: string;
  badge?: number;
}
