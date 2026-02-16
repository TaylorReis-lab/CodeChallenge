# Guia de Contribuição

Obrigado por seu interesse em contribuir com o **CodeChallenge Hub**! 🎉

Este guia ajudará você a entender como contribuir para o projeto de forma eficiente.

---

## 📋 Código de Conduta

Ao participar deste projeto, você concorda em manter um ambiente respeitoso e colaborativo para todos os contribuidores.

---

## 🚀 Como Começar

### 1. Escolha o que fazer

Você pode contribuir de várias maneiras:

| Tipo de Contribuição | Descrição |
|----------------------|-----------|
| 🐛 Reportar Bug | Encontrou um problema? Avise-nos! |
| ✨ Sugerir Feature | Tem uma ideia legal? Compartilhe! |
| 💻 Código | Implemente novas features ou corrija bugs |
| 📚 Documentação | Melhore a documentação dos desafios |
| 🌍 Tradução | Traduza o projeto para outros idiomas |
| 🎨 UI/UX | Melhore o design ou a experiência do usuário |
| 🧪 Testes | Adicione testes automatizados |

### 2. Configurando o Ambiente

```bash
# Clone o repositório
git clone https://github.com/taylorreis-lab/codechallenge-hub.git

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

---

## 📝 Adicionando Novos Desafios JavaScript

### Estrutura de um Desafio

Os desafios estão no arquivo `src/data/challenges.ts`. Cada desafio segue esta estrutura:

```typescript
{
  id: 41,
  title: "Título do Desafio",
  difficulty: "beginner", // beginner | intermediate | advanced
  description: "Descrição curta do que fazer",
  functionName: "nomeDaFuncao",
  functionDescription: "Descrição da função",
  functionParams: [{ param: "parametro", type: "tipo", description: "Descrição do parâmetro" }],
  returnValue: { type: "tipo", description: "Descrição do retorno" },
  testCases: [
    { input: [valor], expected: resultado },
  ],
  initialCode: "function nomeDaFuncao(parametro) {\n  // Sua solução aqui\n}",
  solution: "function nomeDaFuncao(parametro) {\n  return resultado;\n}",
  hints: ["Dica 1", "Dica 2"],
  documentation: {
    concept: "Explicação do conceito",
    syntax: "Sintaxe",
    examples: "Exemplos",
    relatedMethods: ["Método 1", "Método 2"]
  },
  points: 10
}
```

### Regras para Novos Desafios

1. **Níveis de Dificuldade**:
   - **Iniciante**: Conceitos básicos (variáveis, operadores, funções simples)
   - **Intermediário**: Arrays, objetos, métodos de array, lógica mais complexa
   - **Avançado**: Algoritmos, recursão, estruturas de dados, patterns

2. **Documentação**: 
   - Explique o conceito de forma clara
   - Forneça exemplos de código
   - Inclua métodos relacionados
   - Adicione dicas úteis

3. **Testes**:
   - Inclua pelo menos 3 casos de teste
   - Teste casos borda
   - Use valores variados

---

## 🔮 Adicionando Novas Linguagens

Estamos expandindo o projeto para incluir outras linguagens! Se você quer ajudar:

### Linguagens Planejadas

- ✅ JavaScript (atual)
- 🔜 C# / .NET
- 🔜 Python
- 🔜 Java
- 🔜 Go
- 🔜 Rust
- 🔜 TypeScript (desafios específicos)

### Como Adicionar uma Nova Linguagem

1. **Estrutura de Pastas**:
```
src/
  data/
    challenges-javascript.ts (atual)
    challenges-csharp.ts (nova)
    challenges-python.ts (nova)
    ...
```

2. **Componentes**:
   - Adicione a linguagem no seletor
   - Crie o editor específico (se necessário)
   - Implemente o runner para testes

3. **Contate-nos**: 
   - Abra uma issue para discutir a implementação
   - Vamos criar um guia específico para cada linguagem

---

## 🔄 Processo de Pull Request

### 1. Crie uma Branch

```bash
git checkout -b tipo/descricao-curta
```

Tipos de branch:
- `feature/` - Nova funcionalidade
- `fix/` - Correção de bug
- `docs/` - Documentação
- `challenge/` - Novo desafio
- `lang/` - Nova linguagem

### 2. Faça suas Alterações

```bash
# Adicione os arquivos modificados
git add .

# Faça o commit com mensagem descritiva
git commit -m "tipo: descrição clara das alterações"
```

Tipos de commit:
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação, estilos
- `refactor:` Refatoração
- `test:` Testes
- `challenge:` Novo desafio

### 3. Envie e Abra o PR

```bash
git push origin sua-branch
```

No GitHub, abra um Pull Request com:
- **Título claro**: O que você está adicionando/corrigindo
- **Descrição**: Explique suas alterações
- **Screenshots** (se for UI): Mostre como ficou

### 4. Revisão

- Aguarde a revisão dos mantenedores
- Esteja aberto a feedbacks
- Faça as alterações solicitadas

---

## 🎯 Diretrizes do Projeto

### Design
- Mantenha consistência com o design existente
- Use as cores do Tailwind definidas no projeto
- Garanta responsividade (mobile, tablet, desktop)

### Código
- Siga o estilo do código existente
- Use TypeScript para tipagem
- Comente o código quando necessário
- Mantenha o código limpo e legível

### Desafios
- Foque em conceitos práticos e úteis
- Evite desafios muito específicos de framework
- Mantenha a dificuldade consistente com o nível

---

## 💬 Dúvidas?

Se você tiver dúvidas:

1. Verifique as [Issues](https://github.com/taylorreis-lab/codechallenge-hub/issues) existentes
2. Procure nas [Discussions](https://github.com/taylorreis-lab/codechallenge-hub/discussions)
3. Abra uma nova Issue ou Discussion
4. Contate o autor pelo [LinkedIn](https://www.linkedin.com/in/taylorreis-dev)

---

## 🏆 Reconhecimento

Todos os contribuidores serão mencionados no README do projeto! 🎉

---

## 📞 Contato

- **Autor**: Taylor Reis
- **GitHub**: [@taylorreis-lab](https://github.com/taylorreis-lab)
- **LinkedIn**: [Taylor Reis](https://www.linkedin.com/in/taylorreis-dev)

---

Obrigado novamente por contribuir! Vamos construir algo incrível juntos! 🚀
