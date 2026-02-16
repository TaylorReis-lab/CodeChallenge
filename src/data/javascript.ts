import { Challenge } from '../core/types';

export const javascriptChallenges: Challenge[] = [
  {
    id: 'js-hello-world',
    title: 'Olá Mundo!',
    description: 'Crie uma função que retorne a string "Olá Mundo!".',
    difficulty: 'iniciante',
    initialCode: 'function olaMundo() {\n  // Escreva seu código aqui\n}',
    testCases: [
      { id: 1, input: [], expected: "Olá Mundo!", description: "Deve retornar Olá Mundo!" }
    ],
    hints: ['Use a palavra-chave return.', 'Lembre-se das aspas para strings.'],
    solution: 'function olaMundo() {\n  return "Olá Mundo!";\n}',
    documentation: {
      concept: 'As funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento — um conjunto de enunciados que executa uma tarefa ou calcula um valor.',
      syntax: 'function nomeDaFuncao(parametros) {\n  return valor;\n}',
      example: 'function somar(a, b) { return a + b; }',
      externalLink: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions'
    }
  },
  {
    id: 'js-sum',
    title: 'Soma de Dois Números',
    description: 'Crie uma função que receba dois números e retorne a soma deles.',
    difficulty: 'iniciante',
    initialCode: 'function somar(a, b) {\n  // Escreva seu código aqui\n}',
    testCases: [
      { id: 1, input: [2, 3], expected: 5, description: "2 + 3 deve ser 5" },
      { id: 2, input: [10, -5], expected: 5, description: "10 + (-5) deve ser 5" }
    ],
    hints: ['Use o operador +.', 'Os parâmetros a e b são números.'],
    solution: 'function somar(a, b) {\n  return a + b;\n}',
    documentation: {
      concept: 'Operadores aritméticos realizam aritmética básica em números (literais ou variáveis).',
      syntax: 'let soma = a + b;',
      example: 'let resultado = 5 + 10; // 15',
      externalLink: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_aritm%C3%A9ticos'
    }
  }
];
