# Guia de Contribuição

Obrigado por considerar contribuir com o projeto ONG Ação Social! Este documento fornece diretrizes para contribuir com o projeto.

## Código de Conduta

### Nosso Compromisso

Nós, como membros, contribuidores e líderes, nos comprometemos a fazer da participação em nossa comunidade uma experiência livre de assédio para todos.

### Comportamentos Esperados

- Uso de linguagem acolhedora e inclusiva
- Respeito por diferentes pontos de vista e experiências
- Aceitação de críticas construtivas
- Foco no que é melhor para a comunidade
- Demonstração de empatia com outros membros

## Como Contribuir

### Reportando Bugs

Ao reportar um bug, inclua:

1. **Título descritivo**
2. **Passos para reproduzir**
   - Passo 1
   - Passo 2
   - Passo 3
3. **Comportamento esperado**
4. **Comportamento atual**
5. **Ambiente** (navegador, sistema operacional)
6. **Screenshots** (se aplicável)

### Sugerindo Melhorias

Para sugerir uma melhoria:

1. **Verifique** se já não existe uma issue similar
2. **Crie uma issue** com:
   - Título claro e descritivo
   - Descrição detalhada da melhoria
   - Motivo da melhoria
   - Exemplos de implementação (se possível)

### Pull Requests

#### Processo

1. **Fork** o repositório
2. **Clone** seu fork
   ```bash
   git clone https://github.com/seu-usuario/projeto-ong.git
   ```
3. **Crie uma branch** para sua feature
   ```bash
   git checkout -b feature/minha-feature
   ```
4. **Faça suas alterações**
5. **Commit** com mensagem descritiva
   ```bash
   git commit -m "feat: adiciona nova funcionalidade X"
   ```
6. **Push** para seu fork
   ```bash
   git push origin feature/minha-feature
   ```
7. **Abra um Pull Request**

#### Checklist do Pull Request

Antes de enviar, verifique:

- [ ] Código segue as convenções do projeto
- [ ] Testes passam (quando aplicável)
- [ ] Documentação atualizada
- [ ] Commits seguem o padrão de mensagens
- [ ] Sem conflitos com a branch main
- [ ] Código validado (HTML, CSS)
- [ ] Acessibilidade verificada

## Padrões de Código

### HTML

```html
<!-- Bom -->
<section class="cards-container">
    <article class="card">
        <h3>Título</h3>
        <p>Descrição</p>
    </article>
</section>

<!-- Evitar -->
<div class="section">
    <div class="item">
        <h3>Título</h3>
        <p>Descrição</p>
    </div>
</div>
```

### CSS

```css
/* Bom - Use variáveis CSS */
.botao {
    padding: var(--espacamento-sm);
    background-color: var(--cor-primaria);
}

/* Evitar - Valores fixos */
.botao {
    padding: 16px;
    background-color: #2c3e50;
}
```

### JavaScript

```javascript
// Bom - Código modular e documentado
const MeuModulo = {
    // Descrição da função
    minhaFuncao: function(parametro) {
        // Implementação
        return resultado;
    }
};

// Evitar - Código global sem organização
function fazAlgo() {
    // código...
}
```

## Padrão de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/pt-br/).

### Formato

```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação (sem mudança de código)
- `refactor`: Refatoração de código
- `test`: Adição de testes
- `chore`: Tarefas de build, configs, etc

### Exemplos

```bash
feat(formulario): adiciona validação de CPF
fix(css): corrige alinhamento do menu em mobile
docs(readme): atualiza instruções de instalação
style(js): formata código seguindo eslint
refactor(validacao): simplifica lógica de validação
test(cpf): adiciona testes para validação de CPF
chore(deps): atualiza dependências
```

## Estrutura de Branches

### Main Branches

- `main` - Produção (código estável)
- `develop` - Desenvolvimento (código em andamento)

### Supporting Branches

- `feature/*` - Novas funcionalidades
  - Ex: `feature/validacao-email`
- `bugfix/*` - Correções de bugs
  - Ex: `bugfix/menu-mobile`
- `hotfix/*` - Correções urgentes em produção
  - Ex: `hotfix/validacao-cpf`
- `release/*` - Preparação de versões
  - Ex: `release/1.1.0`

### Fluxo GitFlow

```
main
  ↓
develop
  ↓
feature/nova-funcionalidade
  ↓
develop
  ↓
release/1.1.0
  ↓
main (tag v1.1.0)
```

## Versionamento

Usamos [Versionamento Semântico](https://semver.org/lang/pt-BR/).

### Formato

`MAJOR.MINOR.PATCH`

- `MAJOR`: Mudanças incompatíveis na API
- `MINOR`: Novas funcionalidades (retrocompatível)
- `PATCH`: Correções de bugs (retrocompatível)

### Exemplos

- `1.0.0` → `2.0.0` - Mudança incompatível
- `1.0.0` → `1.1.0` - Nova funcionalidade
- `1.0.0` → `1.0.1` - Correção de bug

## Testes

### Checklist de Testes

Antes de enviar PR, teste:

- [ ] Funcionalidade em Chrome
- [ ] Funcionalidade em Firefox
- [ ] Funcionalidade em Safari (se possível)
- [ ] Responsividade em mobile (375px)
- [ ] Responsividade em tablet (768px)
- [ ] Responsividade em desktop (1920px)
- [ ] Validação HTML (W3C Validator)
- [ ] Validação CSS (CSS Validator)
- [ ] Console sem erros
- [ ] Navegação por teclado funciona
- [ ] Leitor de tela funciona (se aplicável)

## Documentação

### O que documentar

- Novas funcionalidades no README
- Mudanças no CHANGELOG
- Comentários em código complexo
- Exemplos de uso
- APIs e funções públicas

### Formato de Documentação

```javascript
/**
 * Valida um CPF brasileiro
 * 
 * @param {string} cpf - CPF no formato 000.000.000-00 ou 00000000000
 * @returns {boolean} - true se válido, false se inválido
 * 
 * @example
 * validateCPF('123.456.789-00') // false
 * validateCPF('111.111.111-11') // false
 */
function validateCPF(cpf) {
    // implementação
}
```

## Acessibilidade

### Checklist de Acessibilidade

Ao adicionar novos componentes:

- [ ] Navegação por teclado funciona
- [ ] Foco visível (outline)
- [ ] ARIA labels apropriadas
- [ ] Contraste mínimo 4.5:1
- [ ] Texto alternativo em imagens
- [ ] Estrutura semântica correta
- [ ] Testado com leitor de tela
- [ ] Funciona com zoom 200%

## Revisão de Código

### O que revisar

- [ ] Código segue os padrões do projeto
- [ ] Funcionalidade implementada corretamente
- [ ] Não introduz bugs
- [ ] Testes adequados
- [ ] Documentação atualizada
- [ ] Commits bem formatados
- [ ] Sem código duplicado
- [ ] Performance adequada
- [ ] Acessibilidade mantida

### Como revisar

1. Leia o código linha por linha
2. Execute localmente
3. Teste em diferentes navegadores
4. Verifique acessibilidade
5. Sugira melhorias educadamente
6. Aprove ou solicite mudanças

## Agradecimentos

Obrigado por contribuir para tornar este projeto melhor! 🎉

Cada contribuição, não importa o tamanho, é valiosa e apreciada.