import { Challenge } from '../types';

export const CHALLENGES: Challenge[] = [
  // JAVASCRIPT
  {
    id: 'js-1',
    title: 'Soma de Dois Números',
    description: 'Crie uma função que receba dois números e retorne a soma deles.',
    difficulty: 'Iniciante',
    language: 'JavaScript',
    category: 'Básico',
    initialCode: 'function soma(a, b) {\n  // seu código aqui\n}',
    solution: 'function soma(a, b) {\n  return a + b;\n}',
    hint: 'Use o operador + para somar os valores.',
    documentation: {
      concept: 'Funções e Operadores Aritméticos',
      syntax: 'function nome(param1, param2) { return param1 + param2; }',
      example: 'soma(2, 3) // retorna 5',
      tips: ['Lembre-se de usar return', 'Verifique se os parâmetros são números'],
      relatedMethods: ['+', 'Number()']
    },
    testCases: [
      { input: [2, 3], expected: 5, description: 'Soma de 2 + 3' },
      { input: [10, -5], expected: 5, description: 'Soma de 10 + (-5)' }
    ]
  },
  {
    id: 'js-2',
    title: 'Inverter String',
    description: 'Crie uma função que receba uma string e retorne ela invertida.',
    difficulty: 'Intermediário',
    language: 'JavaScript',
    category: 'Strings',
    initialCode: 'function inverter(str) {\n  // seu código aqui\n}',
    solution: 'function inverter(str) {\n  return str.split("").reverse().join("");\n}',
    hint: 'Você pode transformar a string em um array, inverter o array e juntar novamente.',
    documentation: {
      concept: 'Manipulação de Strings e Arrays',
      syntax: 'str.split("").reverse().join("")',
      example: 'inverter("abc") // retorna "cba"',
      tips: ['split("") quebra a string em letras', 'reverse() inverte a ordem', 'join("") junta tudo'],
      relatedMethods: ['split', 'reverse', 'join']
    },
    testCases: [
      { input: ['hello'], expected: 'olleh', description: 'Inverter "hello"' },
      { input: ['js'], expected: 'sj', description: 'Inverter "js"' }
    ]
  },
  // C#
  {
    id: 'cs-1',
    title: 'Hello World C#',
    description: 'Complete a função para retornar a frase "Olá Mundo em C#"',
    difficulty: 'Iniciante',
    language: 'C#',
    category: 'Básico',
    initialCode: 'public string HelloWorld() {\n  // seu código aqui\n}',
    solution: 'public string HelloWorld() {\n  return "Olá Mundo em C#";\n}',
    hint: 'Basta retornar a string exata.',
    documentation: {
      concept: 'Strings em C#',
      syntax: 'public string Metodo() { return "texto"; }',
      example: 'HelloWorld() // "Olá Mundo em C#"',
      tips: ['Use aspas duplas para strings', 'C# diferencia maiúsculas de minúsculas'],
      relatedMethods: ['string', 'return']
    },
    testCases: [
      { input: [], expected: 'Olá Mundo em C#', description: 'Retornar a saudação' }
    ]
  },
  // PYTHON
  {
    id: 'py-1',
    title: 'Dobro em Python',
    description: 'Crie uma função que retorne o dobro do número recebido.',
    difficulty: 'Iniciante',
    language: 'Python',
    category: 'Matemática',
    initialCode: 'def dobro(n):\n    # seu código aqui',
    solution: 'def dobro(n):\n    return n * 2',
    hint: 'Multiplique o número por 2.',
    documentation: {
      concept: 'Funções em Python',
      syntax: 'def nome(param): return valor',
      example: 'dobro(5) # 10',
      tips: ['Cuidado com a indentação', 'Use o operador *'],
      relatedMethods: ['def', 'return', '*']
    },
    testCases: [
      { input: [5], expected: 10, description: 'Dobro de 5' },
      { input: [-2], expected: -4, description: 'Dobro de -2' }
    ]
  }
];
