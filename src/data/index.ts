import { Language } from '../core/types';
import { javascriptChallenges } from './javascript';

export const languages: Language[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '🟨',
    description: 'A linguagem mais popular da web.',
    docLink: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    color: '#F7DF1E',
    fileExtension: '.js',
    prismLanguage: 'javascript',
    challenges: javascriptChallenges,
  },
  {
    id: 'csharp',
    name: 'C#',
    icon: '🔷',
    description: 'Linguagem poderosa da Microsoft para desktop, web e jogos.',
    docLink: 'https://learn.microsoft.com/pt-br/dotnet/csharp/',
    color: '#512BD4',
    fileExtension: '.cs',
    prismLanguage: 'csharp',
    challenges: [
      {
        id: 'cs-hello-world',
        title: 'Olá Mundo em C#',
        description: 'Complete o código para imprimir "Olá Mundo!".',
        difficulty: 'iniciante',
        category: 'Básico',
        initialCode:
          'public string OlaMundo() {\n  // Escreva seu código aqui\n}',
        testCases: [
          {
            id: 1,
            input: [],
            expected: 'Olá Mundo!',
            description: 'Deve retornar Olá Mundo!',
          },
        ],
        hints: [
          'Use return e o ponto e vírgula.',
          'Strings em C# são com aspas duplas.',
        ],
        solution: 'public string OlaMundo() {\n  return "Olá Mundo!";\n}',
        documentation: {
          concept:
            'Em C#, tudo faz parte de uma classe ou struct. Funções são chamadas de métodos.',
          syntax:
            'public tipoRetorno NomeDoMetodo(parametros) { return valor; }',
          example: 'public int Somar(int a, int b) { return a + b; }',
          externalLink:
            'https://learn.microsoft.com/pt-br/dotnet/csharp/programming-guide/main-and-command-line/',
          tips: ['C# é fortemente tipado', 'Use PascalCase para métodos'],
        },
        xpReward: 10,
      },
    ],
  },
];
