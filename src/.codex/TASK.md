# TASK: Portar Design System para "Liquid Glass"

## 1. Definição de Variáveis Globais (Theme)
- [ ] Criar/Atualizar o arquivo `global.css` (ou `variables.css`) com as variáveis base do efeito Liquid Glass.
- [ ] Definir paleta de cores de fundo (backgrounds líquidos) com gradientes análogos ou em malha (mesh gradients).
- [ ] Definir variáveis de translucidez para os cards (ex: `--glass-bg: rgba(255, 255, 255, 0.1)` ou modo dark).
- [ ] Definir variáveis de desfoque (ex: `--glass-blur: blur(12px) -webkit-blur(12px)`).
- [ ] Definir bordas sutis para destacar o relevo do vidro (ex: `--glass-border: 1px solid rgba(255, 255, 255, 0.2)`).
- [ ] Definir sombras globais para dar profundidade ao vidro flutuante (ex: `--glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37)`).

## 2. Estrutura Base e Backgrounds
- [ ] Alterar o `.css` do layout principal (Root/App) para receber o fundo dinâmico ou gradiente que será refratado pelos componentes.
- [ ] Adicionar (se aplicável) formas fluidas/blobs no fundo usando CSS (border-radius dinâmico) ou SVGs animados para o aspecto "Liquid".

## 3. Refatoração de Componentes (O Núcleo)
- [ ] **Cards e Containers (`StorageCard`, `ProductCard`, etc.):**
  - [ ] Substituir cores sólidas de `background` por `var(--glass-bg)`.
  - [ ] Aplicar o filtro de fundo: `backdrop-filter: var(--glass-blur)`.
  - [ ] Adicionar bordas reflexivas e sombras.
- [ ] **Inputs e Formulários (Criação de Usuário, Login, etc.):**
  - [ ] Remover fundos opacos dos `input` e `textarea`.
  - [ ] Aplicar um efeito glass mais sutil nos campos de digitação.
  - [ ] Ajustar o `color` da fonte e o `placeholder` para garantir contraste e legibilidade de acessibilidade (a11y) sobre o vidro.
- [ ] **Botões (Ações principais e secundárias):**
  - [ ] Adicionar efeito hover "líquido" (ex: transição suave mudando a opacidade ou o gradiente interno).
  - [ ] Garantir que o `border-radius` complemente o aspecto fluido (evitar cantos 100% retos).
- [ ] **Modais e Dropdowns:**
  - [ ] Aplicar o efeito glass no overlay (fundo escurecido) e no próprio corpo do modal.
  - [ ] Ajustar o `z-index` para garantir que a refração do vidro funcione corretamente sobre o restante do Genial Inventory.
- [ ] **Navbar / Sidebar:**
  - [ ] Aplicar o estilo glassmorphism.
  - [ ] (Opcional) Fazer com que a barra "borre" o conteúdo apenas quando os itens passarem por baixo dela durante o scroll.

## 4. Polimento e Animações Fluídas (Liquid)
- [ ] Garantir que todas as transições de estado (`:hover`, `:focus`, `:active`) usem `transition: all 0.3s ease-in-out` para simular a suavidade de líquidos.
- [ ] Inserir animações sutis de flutuação (`@keyframes float`) em cards chave para enfatizar a sensação de elementos suspensos em líquido.

## 5. Testes e Validação
- [ ] Executar validação estrita (`bun run lint` e `bun run format`) para garantir que a sintaxe CSS e os componentes estão nos padrões.
- [ ] Navegar na aplicação localmente (`bun start`) testando diferentes tamanhos de tela (responsividade pode quebrar filtros pesados).
- [ ] Rodar testes E2E (`bun run test:e2e`) para garantir que overlays e novos z-indexes de modais não bloquearam cliques automatizados do Playwright nos fluxos críticos.
- [ ] **Checagem de Performance:** Garantir que o excesso de `backdrop-filter` não esteja derrubando o FPS das animações.