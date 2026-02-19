# 🚀 CodeChallenger

> **"Tudo pode começar e continuar crescendo"** 🌱

---

## 📖 Sobre o Projeto

O **CodeChallenger** é uma plataforma interativa de aprendizado e prática de programação através de desafios. O projeto foi criado com o objetivo de ajudar desenvolvedores a relembrar conceitos, praticar lógica de programação e evoluir constantemente.

### 🎯 Objetivo

A ideia surgiu da necessidade de ter um local centralizado onde desenvolvedores de todos os níveis possam:

- **Relembrar** como funcionam determinadas funções e métodos
- **Praticar** a utilização correta desses conceitos
- **Desenvolver** raciocínio lógico através de desafios progressivos
- **Compartilhar** conhecimento com a comunidade

---

## 🏗️ Arquitetura Profissional

```
src/
├── core/
│   └── types.ts           # Tipos TypeScript globais e interfaces
├── sections/
│   ├── RenderHome.tsx     # Página inicial com Navbar
│   ├── RenderProfile.tsx  # Perfil e integração GitHub
│   ├── RenderDeliveries.tsx # Histórico de entregas
│   ├── RenderRanking.tsx  # Ranking da comunidade
│   └── RenderCommunity.tsx # Comunidade (Coming Soon)
├── logic/
│   └── useGitHub.ts      # Hook para API do GitHub
├── context/
│   └── AppStateContext.tsx # Estado global da aplicação
├── features/
│   ├── ProfileMenu.tsx   # Menu de perfil com submenus
│   └── CodeEditor.tsx    # Editor de código com terminal
├── data/
│   ├── index.ts          # Registro de linguagens
│   ├── javascript.ts     # Desafios JavaScript
│   └── csharp.ts         # Desafios C# (futuro)
├── theme/
│   ├── themes.ts         # Configurações de temas
│   └── ThemeContext.tsx  # Contexto de tema
├── ui/
│   └── components/       # Componentes reutilizáveis
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Modal.tsx
│       ├── Badge.tsx
│       ├── Progress.tsx
│       └── Tooltip.tsx
├── App.tsx               # Entry point principal com navegação
└── main.tsx              # Bootstrap React
```

---

## ✨ Funcionalidades Principais

### 🧭 Navegação Profissional

- **Navbar na Home**: Barra de navegação completa com links para todas as seções
- **Menu de Perfil**: Foto que abre menu com opções organizadas
- **Submenus**: Temas e idiomas em submenus para economizar espaço
- **Histórico de Voltar**: Sistema de navegação que retorna para a tela anterior

### 🎨 Sistema de Temas Completo

- **Tema Claro**: Interface limpa em branco
- **Tema Escuro**: Dracula OLED (padrão VSCode)
- **Tema Aleatório**: Cores curadas que mudam a cada refresh
- **Terminal Colorido**: Cores de sintaxe como no VSCode

### 👤 Integração GitHub

- Conecte seu usuário do GitHub
- Foto e dados puxados automaticamente da API
- Exibição de estatísticas (repos, seguidores)

### 📦 Sistema de Entregas

- Histórico completo de submissões
- Status: Aprovado, Pendente, Rejeitado
- Tempo de execução
- Filtros e busca

### 🏆 Ranking

- Os melhores desenvolvedores da comunidade
- Podium para os top 3
- Comparação com seu progresso

### 👥 Comunidade

- Feed de posts da comunidade
- Funcionalidades em desenvolvimento (Coming Soon)

### 🌐 Multi-Linguagens

- JavaScript (pronto)
- C# (pronto)
- Python, Java, Go, Rust (em breve)
- Seleção na home
- Desafios específicos por linguagem

### 📚 Documentação de Desafios

Para cada desafio:

- Conceito completo
- Sintaxe
- Exemplo prático
- Dicas
- Link para documentação oficial

---

## 🏅 Sistema de Medalhas

| Medalha                 | Descrição                         | Requisito         |
| ----------------------- | --------------------------------- | ----------------- |
| 🐣 Primeiros Passos     | Complete seu primeiro desafio     | 1 desafio         |
| 🌱 Juninho Dev          | Alcance o level 5                 | Level 5           |
| 🎯 Foco Total           | Complete 10 desafios em sequência | 10 streak         |
| 🦁 Programador Corajoso | Complete 5 desafios avançados     | 5 avançados       |
| 🧠 Ninja dos Algoritmos | Complete todos os intermediários  | 15 intermediários |
| 👑 Lenda do Código      | Complete todos os desafios        | 40 desafios       |

---

## 🛠️ Tecnologias

- **React 18** + TypeScript
- **Vite** (build tool)
- **Tailwind CSS** (estilos)
- **Lucide React** (ícones)
- **GitHub API** (integração)

---

## 🚀 Como Usar

### Instalação

```bash
# Clone o repositório
git clone https://github.com/taylorreis-lab/codechallenger.git

# Entre na pasta
cd codechallenger

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### Uso

1. **Selecione uma linguagem** na página inicial
2. **Escolha um desafio** na barra lateral
3. **Escreva seu código** no editor
4. **Execute** para testar sua solução
5. **Ganhe XP** ao completar desafios
6. **Desbloqueie medalhas** conforme evolui

### Navegação

- **Navbar**: Acesse Ranking, Comunidade e Documentação
- **Menu de Perfil**: Troque temas, idiomas e veja seu perfil
- **Voltar**: Retorne para a tela anterior automaticamente

---

## 📁 Adicionando Novos Desafios

### Estrutura Padrão

Para adicionar um novo desafio, siga esta estrutura:

```typescript
{
  id: 'js-nova-funcao',
  title: 'Nova Função',
  description: 'Descreva o que a função deve fazer',
  difficulty: 'iniciante', // 'iniciante' | 'intermediario' | 'avancado'
  category: 'Strings',
  initialCode: 'function novaFuncao(param) {\n  // seu código aqui\n}',
  solution: 'function novaFuncao(param) {\n  return resultado;\n}',
  hints: ['Dica 1', 'Dica 2', 'Dica 3'],
  documentation: {
    concept: 'Explicação do conceito',
    syntax: 'function nome(params) { return valor; }',
    example: 'nome(arg) // retorna valor',
    externalLink: 'https://developer.mozilla.org/...',
    tips: ['Dica prática 1', 'Dica prática 2']
  },
  testCases: [
    { id: 1, input: [valor], expected: resultado, description: 'Descrição do teste' }
  ],
  xpReward: 10
}
```

### Regras

1. **ID único**: Use o formato `linguagem-nome` (ex: `js-soma`)
2. **Dificuldade**: Use 'iniciante', 'intermediario' ou 'avancado'
3. **Código inicial**: Forneça um template básico
4. **Solução**: Para referência do usuário
5. **Documentação**: Links para documentação oficial
6. **Testes**: Mínimo 3 casos de teste

---

## 🌍 Adicionando Novas Linguagens

### Estrutura de Arquivo

Crie um arquivo em `src/data/[lingua].ts`:

```typescript
import { Challenge } from '../core/types';

export const challenges: Challenge[] = [
  // seus desafios aqui
];
```

### Registro

Adicione no `src/data/index.ts`:

```typescript
import { languageChallenges } from './lingua';

export const languages: Language[] = [
  // linguagens existentes...
  {
    id: 'lingua',
    name: 'Nome da Linguagem',
    icon: '🏷️',
    description: 'Descrição da linguagem',
    docLink: 'https://docs.oficial.com',
    color: '#HEXCOLOR',
    fileExtension: '.ext',
    prismLanguage: 'lingua',
    challenges: challenges,
  },
];
```

### Linguagens Planejadas

- ✅ JavaScript
- ✅ C#
- 🔜 Python
- 🔜 Java
- 🔜 Go
- 🔜 Rust

---

## 👨‍💻 Autor

**Taylor Reis**

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-taylorreis--lab-24292e?style=for-the-badge&logo=github)](https://github.com/taylorreis-lab)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-taylorreis--dev-0077b5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/taylorreis-dev)

</div>

---

## 📄 Licença

MIT License - Copyright (c) 2025 Taylor Reis

---

## 🤝 Contribuições

Este é um projeto **Open Source**! Contribuições são bem-vindas.

### Como Contribuir

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Áreas para Contribuir

- Novos desafios (JavaScript, C#, Python, etc.)
- Novas linguagens
- Melhorias de UI/UX
- Documentação
- Correção de bugs

---

## 📊 Roadmap

### Versão 1.0 (Atual)

- ✅ JavaScript (40 desafios)
- ✅ C# (10 desafios)
- ✅ Sistema de temas
- ✅ Integração GitHub
- ✅ Sistema de entregas
- ✅ Ranking
- ✅ Comunidade (Coming Soon)

### Versão 1.1

- [ ] Python (20 desafios)
- [ ] Sistema de login
- [ ] Perfil público

### Versão 2.0

- [ ] Java (20 desafios)
- [ ] Go (20 desafios)
- [ ] Rust (20 desafios)
- [ ] Modo competição
- [ ] Equipes

---

**"Tudo pode começar e continuar crescendo"** 🌱

---

<div align="center">

**© 2026 CodeChallenger** - Todos os direitos reservados

Feito com ❤️ por Taylor Reis

</div>
