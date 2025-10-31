# 🌟 ONG Ação Social - Plataforma Web

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-usuario/projeto-ong)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3.org/html/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1_AA-green?style=for-the-badge)](https://www.w3.org/WAI/WCAG21/quickref/)

> Plataforma web completa e profissional para gestão de atividades, divulgação de projetos, captação de recursos e engajamento de voluntários de ONGs.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Demonstração](#demonstração)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Uso](#uso)
- [Acessibilidade](#acessibilidade)
- [Contribuindo](#contribuindo)
- [Versionamento](#versionamento)
- [Autores](#autores)
- [Licença](#licença)

---

## 🎯 Sobre o Projeto

A **Plataforma ONG Ação Social** é um projeto acadêmico desenvolvido para demonstrar o domínio completo de tecnologias web modernas (HTML5, CSS3 e JavaScript), com foco em:

- ✅ **Estrutura Semântica**: HTML5 validado pelo W3C
- ✅ **Design Responsivo**: CSS3 com Grid e Flexbox
- ✅ **Interatividade**: JavaScript modular e funcional
- ✅ **Acessibilidade**: WCAG 2.1 Nível AA
- ✅ **Boas Práticas**: Código limpo, documentado e versionado

### Objetivo

Criar uma plataforma que permita a ONGs:
- Divulgar sua missão, visão e valores
- Apresentar projetos sociais em andamento
- Captar recursos e doações
- Engajar e gerenciar voluntários
- Manter transparência com relatórios públicos

---

## 🖥️ Demonstração

### Screenshots

#### Página Inicial
![Página Inicial](docs/screenshots/home.png)

#### Projetos Sociais
![Projetos](docs/screenshots/projetos.png)

#### Formulário de Cadastro
![Cadastro](docs/screenshots/cadastro.png)

### Links

- **🌐 Site ao vivo**: [https://seu-usuario.github.io/projeto-ong](https://seu-usuario.github.io/projeto-ong)
- **📂 Repositório**: [https://github.com/seu-usuario/projeto-ong](https://github.com/seu-usuario/projeto-ong)

---

## ⚡ Funcionalidades

### 🏠 Página Inicial (index.html)
- Apresentação da ONG (missão, visão, valores)
- Histórico e conquistas
- Equipe e estrutura organizacional
- Relatórios de transparência
- Informações de contato

### 📊 Projetos Sociais (projetos.html)
- Catálogo de projetos detalhados
- Informações sobre voluntariado
- Sistema de doações (financeiras e materiais)
- Indicadores de impacto
- Próximos eventos

### 📝 Cadastro (cadastro.html)
- Formulário completo de voluntário
- **Validação em tempo real**:
  - CPF (algoritmo completo)
  - E-mail (regex)
  - Telefone e CEP (com máscaras)
  - Idade (18+ anos)
  - Campos obrigatórios
- Feedback visual instantâneo
- Confirmação de envio

### 🎨 Recursos Visuais
- Design moderno e profissional
- Responsivo (mobile, tablet, desktop)
- Modo escuro e claro (automático e manual)
- Modo alto contraste
- Animações suaves
- Cards interativos
- Menu hambúrguer mobile

### ♿ Acessibilidade
- Navegação por teclado completa
- Atalhos de teclado (Alt+M, Alt+C, Alt+T)
- Link "Pular para o conteúdo"
- ARIA labels e roles
- Suporte para leitores de tela
- Contraste WCAG 2.1 AA (mínimo 4.5:1)
- Modo escuro e alto contraste

### 🔔 Notificações
- Toasts (notificações temporárias)
- Alerts (mensagens contextuais)
- Modals (popups informativos)
- Feedback de validação

---

## 🛠️ Tecnologias Utilizadas

### Core
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **HTML5** - Estrutura semântica
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) **CSS3** - Estilização e layout
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) **JavaScript ES6+** - Interatividade

### Layout
- **CSS Grid** - Layout de 12 colunas
- **Flexbox** - Componentes flexíveis
- **Media Queries** - Responsividade

### Recursos Modernos
- CSS Variables (Custom Properties)
- Template Literals
- Arrow Functions
- Intersection Observer API
- Local Storage API

### Ferramentas
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white) **Git** - Controle de versão
- ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white) **GitHub** - Hospedagem e deploy
- **W3C Validator** - Validação HTML/CSS
- **WAVE** - Teste de acessibilidade

---

## 📁 Estrutura do Projeto

```
projeto-ong/
│
├── index.html              # Página inicial
├── projetos.html           # Página de projetos
├── cadastro.html           # Formulário de cadastro
│
├── style.css               # Estilos CSS
├── script.js               # JavaScript modular
│
├── imagens/                # Pasta de imagens
│   ├── missao.jpg
│   ├── visao.jpg
│   └── ...
│
├── docs/                   # Documentação
│   ├── screenshots/        # Screenshots do projeto
│   └── guides/             # Guias adicionais
│
├── .gitignore              # Arquivos ignorados pelo Git
├── README.md               # Este arquivo
├── CHANGELOG.md            # Histórico de versões
├── CONTRIBUTING.md         # Guia de contribuição
└── LICENSE                 # Licença do projeto
```

---

## 🚀 Instalação

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Git instalado
- Editor de código (VS Code recomendado)

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/projeto-ong.git
   ```

2. **Entre na pasta do projeto**
   ```bash
   cd projeto-ong
   ```

3. **Abra o projeto**
   - Opção 1: Clique duas vezes em `index.html`
   - Opção 2: Use Live Server no VS Code
   - Opção 3: Abra via terminal
     ```bash
     # Windows
     start index.html
     
     # Mac
     open index.html
     
     # Linux
     xdg-open index.html
     ```

---

## 💡 Uso

### Navegação

1. **Página Inicial**: Conheça a ONG e sua missão
2. **Projetos**: Explore os projetos sociais
3. **Cadastro**: Torne-se um voluntário

### Interações

#### Formulário de Cadastro
```
1. Preencha todos os campos obrigatórios (*)
2. Observe as máscaras automáticas (CPF, telefone, CEP)
3. Veja a validação em tempo real
4. Corrija erros indicados em vermelho
5. Envie o formulário
6. Receba confirmação de sucesso
```

#### Atalhos de Teclado
- `Alt + M` - Ir para o menu
- `Alt + C` - Ir para o conteúdo principal
- `Alt + T` - Alternar tema (claro/escuro)
- `Tab` - Navegar entre elementos
- `Esc` - Fechar modals

#### Alternância de Tema
- Botão 🌙/☀️ no canto inferior esquerdo
- Automático: Respeita preferência do sistema
- Manual: Salva no LocalStorage

---

## ♿ Acessibilidade

Este projeto segue as diretrizes **WCAG 2.1 Nível AA**.

### Recursos Implementados

#### ✅ Navegação por Teclado
- Todos os elementos interativos acessíveis via Tab
- Foco visível (outline azul 3px)
- Tab trap em modals
- Ordem lógica de tabulação

#### ✅ Leitores de Tela
- ARIA labels em todos os componentes
- ARIA roles apropriadas
- Anúncios de mudanças (aria-live)
- Texto alternativo em imagens
- Estrutura semântica (landmarks)

#### ✅ Contraste
- Texto normal: mínimo 4.5:1
- Texto grande: mínimo 3:1
- Modo alto contraste disponível
- Cores não são única forma de informação

#### ✅ Responsividade
- Funciona em zoom até 200%
- Layout se adapta a diferentes tamanhos
- Sem scroll horizontal
- Texto redimensionável

#### ✅ Outros
- Link "Pular para o conteúdo"
- Modo escuro (menos cansativo)
- Respeita prefers-reduced-motion
- Formulários com labels associadas
- Mensagens de erro claras

### Testado Com

- ✅ NVDA (Windows)
- ✅ VoiceOver (Mac/iOS)
- ✅ TalkBack (Android)
- ✅ Navegação por teclado
- ✅ WAVE Accessibility Tool
- ✅ Lighthouse (Chrome DevTools)

### Resultados

- **Lighthouse Accessibility**: 100/100
- **WAVE Errors**: 0
- **Contraste**: WCAG AA ✅
- **Keyboard Navigation**: ✅

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Veja [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes.

### Como Contribuir

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Padrão de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/pt-br/):

```
feat: adiciona nova funcionalidade
fix: corrige um bug
docs: atualiza documentação
style: formatação de código
refactor: refatoração de código
test: adiciona testes
chore: tarefas de manutenção
```

---

## 📌 Versionamento

Usamos [SemVer](https://semver.org/lang/pt-BR/) para versionamento.

### Versões Disponíveis

- **[1.0.0]** - Versão final (atual)
- **[0.4.0]** - Versionamento e acessibilidade
- **[0.3.0]** - JavaScript e interatividade
- **[0.2.0]** - CSS3 e design responsivo
- **[0.1.0]** - HTML5 semântico

Veja [CHANGELOG.md](CHANGELOG.md) para histórico completo.

---

## 👥 Autores

### Desenvolvedor Principal

**[Seu Nome]**
- 📧 Email: seu.email@exemplo.com
- 🐙 GitHub: [@seu-usuario](https://github.com/seu-usuario)
- 💼 LinkedIn: [seu-perfil](https://linkedin.com/in/seu-perfil)

---

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

```
MIT License

Copyright (c) 2024 [Seu Nome]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 📊 Status do Projeto

![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)
![Versão](https://img.shields.io/badge/Versão-1.0.0-blue?style=for-the-badge)
![Licença](https://img.shields.io/badge/Licença-MIT-green?style=for-the-badge)

### Entregas Acadêmicas

- [x] **Entrega 1**: HTML5 Semântico ✅
- [x] **Entrega 2**: CSS3 Responsivo ✅
- [x] **Entrega 3**: JavaScript Interativo ✅
- [x] **Entrega 4**: Versionamento e Acessibilidade ✅

---

## 🎓 Competências Desenvolvidas

### Técnicas
- ✅ Domínio completo de HTML5, CSS3 e JavaScript
- ✅ Versionamento com Git/GitHub
- ✅ Conhecimento de acessibilidade e boas práticas
- ✅ Experiência em deploy e infraestrutura web

### Profissionais
- ✅ Trabalho em equipe eficaz
- ✅ Gestão de projetos e prazos
- ✅ Comunicação técnica clara
- ✅ Resolução de problemas complexos

### Sociais
- ✅ Consciência sobre impacto social da tecnologia
- ✅ Responsabilidade com acessibilidade
- ✅ Ética no desenvolvimento de software
- ✅ Contribuição para causas sociais

---

## 📚 Referências

- [MDN Web Docs](https://developer.mozilla.org/pt-BR/)
- [W3C HTML5 Spec](https://www.w3.org/TR/html52/)
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [JavaScript.info](https://javascript.info/)
- [Git Documentation](https://git-scm.com/doc)

---

<p align="center">
  Feito com ❤️ e ☕ por <a href="https://github.com/ProfDaniloMac">Danilo Maciel</a>
</p>

<p align="center">
  <sub>Projeto acadêmico desenvolvido para fins educacionais</sub>
</p>