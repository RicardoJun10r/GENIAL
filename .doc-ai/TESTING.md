# TESTING.md - Estratégia e Validação de Qualidade (Frontend)

Este documento define os padrões, ferramentas e cenários obrigatórios para a criação de testes no frontend do projeto **Genial Inventory SaaS**. Nenhum componente, hook ou refatoração é considerado "concluído" sem que estas diretrizes sejam atendidas.

## Stack de Testes

- **Framework Base (Runner):** Vitest.
- **Testes de Componentes (UI):** React Testing Library (RTL). Proibido testar detalhes de implementação (como nomes de classes internas); teste sempre o comportamento voltado ao usuário.
- **Simulação de Usuário:** `@testing-library/user-event` para simular cliques, digitação e interações de forma realista (preferível ao `fireEvent`).
- **Testes End-to-End (E2E):** Playwright para fluxos críticos no navegador real.
- **Mocks e Espiões:** Funções nativas do Vitest (`vi.fn()`, `vi.mock()`) e interceptação de rotas/API (via Playwright ou ferramentas como MSW).

---

## Anatomia e Nomenclatura do Teste

Todo teste deve seguir o padrão comportamental **BDD (Behavior Driven Development)** estruturado em 3 blocos bem definidos por comentários:

1. `// Given` (Dado que): Configuração do cenário, renderização do componente (`render()`) e mocks de API/estado.
2. `// When` (Quando): A execução da ação principal (ex: `await userEvent.click(button)`).
3. `// Then` (Então): As asserções visuais ou lógicas (`expect(element).toBeInTheDocument()`).

**Padrão de Nomenclatura dos Métodos:**
No ecossistema JavaScript, usamos a sintaxe `it('should [Comportamento Esperado] when [Cenário/Condição]')`.
*Exemplo:* `it('should display error toast when user submits form with negative price')`

---

## Cobertura e Validação Obrigatória por Camadas

A validação de software neste projeto não é opcional. **TODAS as telas importantes e fluxos de interação devem possuir testes automatizados.** Os testes devem cobrir as seguintes camadas:

### 1. Camada de Componentes Base (RTL + Vitest)
Testa os componentes visuais "burros" (ex: Botões, Modais, Inputs). O foco é garantir que eles reagem corretamente às `props` recebidas.
- **Acessibilidade (a11y):** Selecione elementos sempre que possível usando `getByRole`, `getByLabelText` ou `getByPlaceholderText`. Isso garante que o componente é acessível a leitores de tela.
- **Eventos e Callbacks:** Verifique se funções passadas via props (ex: `onSubmit`, `onClick`) são chamadas com os argumentos corretos ao interagir com a UI.
- **Renderização Condicional:** Garanta que spinners de `loading` aparecem durante requisições simuladas e desaparecem quando o mock resolve.

### 2. Camada de Hooks e Serviços (Vitest)
Testa a lógica de negócio do frontend e o gerenciamento de estado (ex: `useAuth`, `useProducts`).
- **Filosofia Fail-Fast (Tratamento de Erros da API):** Mockar falhas do Axios (400, 401, 500) e garantir que o Hook atualiza o estado de `error` com a mensagem apropriada (ex: extraindo o detalhe da RFC 7807 do backend).
- **Cálculos de Interface:** Validar funções de soma de estoque, cálculos de carrinho ou paginação antes de renderizar na tela.
- **Formatação de Dados:** Garantir que datas (`ISO 8601` para `DD/MM/YYYY`) e moedas (`BigDecimal` para `R$`) sejam formatadas corretamente antes de chegar na UI.

### 3. Camada de Páginas e Fluxos E2E (Playwright)
Testa a aplicação inteira rodando no navegador. O Backend pode estar real ou mockado via rotas do Playwright.
- **Proteção de Rota (Guards):** Tentar acessar `/dashboard` sem um JWT no `localStorage` e atestar o redirecionamento imediato para `/login`.
- **Caminho Feliz Completo:** Simular o fluxo de Login -> Navegar para Armazéns -> Preencher Formulario -> Salvar -> Ver o Armazém na tabela.
- **Isolamento Multitenant na UI:** Fazer login com o `User A`, garantir que o armazém do `User B` não aparece na tela (mesmo que estivesse em cache).

---
