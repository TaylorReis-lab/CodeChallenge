export type Difficulty = 'iniciante' | 'intermediario' | 'avancado';

export interface TestCase {
  id: number;
  input: any[];
  expected: any;
  description: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  initialCode: string;
  testCases: TestCase[];
  hints: string[];
  solution: string;
  documentation: {
    concept: string;
    syntax: string;
    example: string;
    externalLink: string;
  };
}

export interface Language {
  id: string;
  name: string;
  icon: string;
  description: string;
  docLink: string;
  color: string;
  challenges: Challenge[];
}

export type ThemeType = 'light' | 'dark' | 'random';

export interface UserProfile {
  name: string;
  avatar: string;
  completedChallenges: string[];
  xp: number;
  level: string;
}
