
export type Difficulty = 'Iniciante' | 'Intermediário' | 'Avançado';
export type ProgrammingLanguage = 'JavaScript' | 'C#' | 'Python';

export interface TestCase {
  input: any[];
  expected: any;
  description: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  language: ProgrammingLanguage;
  category: string;
  initialCode: string;
  solution: string;
  hint: string;
  documentation: {
    concept: string;
    syntax: string;
    example: string;
    tips: string[];
    relatedMethods: string[];
  };
  testCases: TestCase[];
}

export interface UserStats {
  completedChallenges: string[];
  points: number;
  level: {
    [key in ProgrammingLanguage]: number;
  };
  name: string;
  avatar: string;
}

export type ThemeType = 'light' | 'dark' | 'random';

export interface ThemeConfig {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    surface: string;
    text: string;
    border: string;
    terminal: {
      bg: string;
      text: string;
      keyword: string;
      function: string;
      string: string;
      comment: string;
      number: string;
    };
  };
}
