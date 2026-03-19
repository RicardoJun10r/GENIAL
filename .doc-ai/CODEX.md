# Contexto

Este é o frontend de um projeto antigo da faculdade, que serve como interface para o **Genial Inventory**, um SaaS gerenciador de estoque genérico e multitenant.

Com isso, clientes de quaisquer vertentes podem utilizar do sistema para fazer a contabilidade dos produtos de suas determinadas empresas. O sistema foi feito com menos experiência no passado, contendo falhas de componentização, prop drilling excessivo, renderizações desnecessárias e acoplamento de lógica de negócio na camada de UI.

**Objetivo:** Refatorar o código legado em React, corrigindo dívidas técnicas, melhorando a performance de renderização, implementando uma arquitetura limpa de componentes e garantindo a segurança no consumo da API RESTFul.

---

### Workflow de Build e Validação (NPM/Node.js)

O projeto gerencia dependências e o ciclo de vida via **NPM**. A IA deve assumir os seguintes comandos definidos no `package.json` como padrão para testar, validar e executar o código:

**PARA RODAR OS COMANDOS, CERTIFIQUE-SE DE ESTAR NA RAIZ DO PROJETO FRONTEND**

1. **Validação Estrita (O Padrão Ouro):**
   - Comandos: `npm run lint` e `npm run format`
   - *Quando usar:* Sempre que finalizar uma refatoração ou antes de aprovar um código. Estes comandos garantem que o código não possui erros lógicos (ESLint) e está perfeitamente formatado (Biome).

2. **Testes Unitários e de Integração (TDD/UI):**
   - Comando: `npm run test`
   - *Quando usar:* Durante a criação ou refatoração de componentes e hooks para garantir que a lógica e a renderização do DOM (via Testing Library) funcionem corretamente.

3. **Testes End-to-End (E2E):**
   - Comando: `npm run test:e2e` ou `npm run test:e2e:ui`
   - *Quando usar:* Para validar fluxos críticos (Login, Criação de Produto, etc.) simulando um usuário real no navegador via Playwright.

4. **Execução Local:**
   - Comando: `npm start`
   - *Quando usar:* Para subir a aplicação localmente de forma interativa. A IA deve assumir que o backend (`localhost:8080`) já está rodando.

5. **Empacotamento (Build de Produção):**
   - Comando: `npm run build`
   - *Quando usar:* Para gerar o bundle final otimizado na pasta `build/` ou `dist/`.

---

## Tecnologias

- **React.js** (Functional Components e Hooks);
- **React Router** (Navegação SPA);
- **Axios** (Cliente HTTP e Interceptors);
- **Ferramentas de Qualidade:** ESLint (Lógica) e Biome (Formatação rápida);
- **Testing Stack:** Vitest, React Testing Library e Playwright.

---

## Padrões de Consumo de API REST

- **Axios Interceptors:** A injeção do token JWT deve ser feita globalmente via interceptors, nunca manualmente em cada chamada de serviço. Tratamento de erros 401 (Unauthorized) devem redirecionar o usuário automaticamente para a tela de Login.
- **Gestão de Estado Assíncrono:** Ao refatorar chamadas de API, garanta que existam estados de `loading`, `error` e `success` para dar feedback visual ao usuário.
- **Paginação e Filtros:** Ao consumir listas do backend (ex: produtos), repasse os parâmetros de paginação e renderize os controles adequados na tabela da interface.

---

## Estratégia de Testes (Testing Stack)

- **Frameworks:** Use **Vitest** como runner, **React Testing Library (RTL)** para asserções de componentes e **Playwright** para E2E.
- **Foco em Acessibilidade (a11y):** Nos testes do RTL, selecione elementos preferencialmente por `role`, `label` ou `placeholder` (ex: `getByRole('button', { name: /salvar/i })`), simulando como o usuário interage com a tela.
- **Mock de API:** Isole os testes de UI do backend real. Use interceptação do Playwright ou mocks do Vitest para simular respostas (200 OK, 400 Bad Request) da API REST.

---

## Diretrizes de Refatoração

## Diretrizes de Refatoração e Modernização

A refatoração deste legado não se trata apenas de trocar sintaxe, mas de elevar a base de código a um padrão empresarial moderno, focado em manutenibilidade e performance.

1. **Segurança (XSS, CSRF e Gestão de Tokens):**
   - **Prevenção de XSS:** Embora o React escape o HTML por padrão, é terminantemente proibido o uso de `dangerouslySetInnerHTML`. Além disso, valide rigorosamente URLs dinâmicas inseridas em atributos `href` para evitar injeção de `javascript:`.
   - **Armazenamento de JWT:** O ideal arquitetural para SaaS é usar `HttpOnly Cookies` setados pelo backend. Caso o legado exija o uso de `localStorage` ou `sessionStorage`, isole essa lógica em um serviço único (ex: `TokenService.js`) e audite rigorosamente todas as dependências do `package.json` para minimizar o risco de ataques na cadeia de suprimentos (Supply Chain Attacks) roubarem esses tokens.

2. **Arquitetura (Desacoplamento e Padrão de Repositório):**
   - **Camada de Serviço Pura:** Arquivos na pasta `src/services/` devem conter apenas funções assíncronas puras do Axios (ex: `ProductService.getAll()`), sem importar NADA do React.
   - **Camada de Hooks (Integração):** O componente visual nunca deve chamar o serviço diretamente. Em vez disso, ele consome um Hook customizado (ex: `useProducts()`) que orquestra a chamada do serviço, o estado de `loading`, a captura de `error` e o armazenamento dos `data`. Isso permite testar a API separadamente da UI.

3. **Combate ao Prop Drilling (Composição vs. Contexto):**
   - **Composição em Primeiro Lugar (Inversão de Controle):** Se as `props` estiverem descendo muitos níveis, tente usar a prop `children` para passar componentes inteiros de cima para baixo, em vez de repassar dados através de componentes intermediários que não precisam deles.
   - **Context API com Moderação:** Reserve a Context API apenas para estados verdadeiramente globais ou de módulo (ex: Dados do Usuário Autenticado, Tema Escuro/Claro, ou Estado global do Armazém selecionado). Evite jogar estados voláteis (como formulários) no Context, pois isso causa re-renderizações em cascata na aplicação inteira.

4. **Lógica Legada e Higiene de Ciclo de Vida:**
   - **Fim dos Class Components:** Qualquer componente de classe ou que utilize ciclos de vida (`componentDidMount`, `componentWillUnmount`) deve ser reescrito como Functional Component usando a Hook API (`useEffect`, `useState`).
   - **Prevenção de Memory Leaks:** Todo `useEffect` que iniciar uma operação contínua (como `setInterval`, `addEventListener` ou requisições Axios pendentes) DEVE retornar uma função de *cleanup* (ex: `abortController.abort()`) para limpar a memória quando o componente for desmontado.

5. **Performance e Estados Derivados (Regras de Ouro):**
   - **Evite Estados Redundantes:** Se um valor pode ser calculado a partir das `props` ou de um estado existente durante a renderização (ex: uma lista `filteredProducts` baseada em `products` e `searchQuery`), NÃO o coloque em um novo `useState`. Calcule-o diretamente ou use `useMemo`.
   - **Memoização Consciente:** Em listas grandes (como o inventário), utilize `React.memo` nos componentes das linhas da tabela e envolva as funções de callback (como `onDelete`) em `useCallback` para evitar que a tabela inteira seja re-renderizada quando apenas uma linha mudar.
   - **Code Splitting (Lazy Loading):** Rotas pesadas e Modais complexos devem ser importados dinamicamente usando `React.lazy()` e `<Suspense>`. Isso diminui drasticamente o tempo de carregamento inicial (TTV - Time to View) do dashboard.

---

## Diretrizes de Codificação

- **Clean Code:** Nomes de componentes devem descrever sua função (ex: `ProductTable` em vez de `Table2`).
- **Padrão de Nomenclatura:** - Componentes e Arquivos de Componentes: `PascalCase` (ex: `Card.js`, `Navbar.js`).
    - Hooks Customizados: `camelCase` começando com `use` (ex: `useAuth.js`).
    - Funções Auxiliares/Serviços: `camelCase`.
- **Desestruturação:** Sempre desestruture `props` na assinatura do componente: `const Card = ({ title, children }) => { ... }`.
- **Imutabilidade de Estado:** Nunca modifique o estado do React diretamente (ex: `state.push()`). Use sempre a função set (ex: `setState(prev => [...prev, newItem])`).
- **Early Returns:** Evite aninhamentos profundos no JSX. Se um componente precisa de *loading*, retorne o spinner imediatamente antes da lógica principal de renderização.

- **Princípios SOLID (Adaptados para React):**
    - **(S) Responsabilidade Única (SRP):** Um componente ou hook deve fazer apenas uma coisa. O componente de tabela (`StorageTable`) deve apenas renderizar os dados, enquanto o fetch na API e o gerenciamento do array devem ser delegados a um hook customizado (ex: `useStorages`).
    - **(O) Aberto/Fechado (OCP):** Componentes devem ser abertos para composição e fechados para modificação. Evite encher um `Card.js` com dezenas de `if/else` e condicionais booleanas para acomodar variações; utilize a prop `children` para injetar layouts dinâmicos internamente.
    - **(L) Substituição de Liskov (LSP):** Componentes encapsulados devem manter o contrato dos elementos nativos. Um `Button` estilizado customizado deve aceitar e repassar as mesmas props (`onClick`, `disabled`, `type`) de um botão HTML padrão sem quebrar a aplicação.
    - **(I) Segregação de Interface (ISP):** Não passe objetos gigantescos como props se o componente não for utilizar tudo. Em vez de repassar a entidade `Product` inteira para um componente de "Badge de Estoque", passe apenas o número estrito da `quantidade` e o `id`.
    - **(D) Inversão de Dependência (DIP):** Componentes de interface de alto nível não devem depender diretamente da biblioteca Axios ou de implementações de rede. A lógica de comunicação com o backend multitenant deve ser injetada de forma abstrata, geralmente através de Hooks que retornam dados prontos e métodos de ação isolados.

- **Lei de Demeter (Princípio do Conhecimento Mínimo):**
    - No frontend, evite o "encadeamento excessivo" e a passagem profunda de objetos aninhados (ex: `props.product.storage.user.email`).
    - Um componente só deve interagir com suas dependências diretas e imediatas.
    - **Solução:** Se uma informação (como o nome do usuário autenticado) precisa ser lida por componentes muito distantes na hierarquia, utilize a **Context API** ou achate os dados (Flat DTOs) antes de passá-los para baixo. Isso extingue o anti-pattern de *Prop Drilling*.

---

## Fluxo de Trabalho e Resolução de Problemas

1. **Diagnóstico:** Antes de codar, explique o "Code Smell" (ex: "Este componente está renderizando toda vez que o input digita uma letra").
2. **Alternativas:** Proponha soluções focadas em performance (ex: uso de `useMemo`, `useCallback` ou separação de componentes).
3. **Testabilidade:** Código refatorado deve vir acompanhado de testes de componente garantindo que botões ou formulários respondem corretamente às ações do usuário (`userEvent`).
4. **Foco em Performance:** Evite arrays imensos no lado do cliente. Confie na paginação da API. Garanta que imagens e assets estáticos sejam otimizados.

---

## Conhecimento Específico (Projetos Atuais)

*Projeto:* Genial Inventory SaaS (Frontend Legacy Refactor)

*Descrição:* Interface de usuário para gerenciar depósitos e produtos de maneira multitenant.

*Objetivo Atual:* Refatorar os formulários (`form-criar-armazem.js`, `form-criar-produto.js`), isolar a lógica da API na pasta `services/` e criar testes unitários para a pasta `components/`.

---

## Padrões de Arquitetura e Pastas

- `src/components`: Componentes burros/apresentacionais (Dumb Components) altamente reutilizáveis (Botões, Modais, Cards). Não devem possuir regras de negócio da API.
- `src/pages`: Componentes inteligentes (Smart Components) que representam rotas completas (`Home`, `Login`, `Cadastrar`). Eles orquestram os componentes menores e gerenciam o estado da página.
- `src/services`: Camada de comunicação externa. Todo arquivo aqui (ex: `api.js`) encapsula o Axios e expõe funções assíncronas limpas (`getProducts`, `loginUser`).
- `src/hooks`: Lógica de negócio e estado encapsulada em Custom Hooks para ser reaproveitada em múltiplas páginas.

---

## Governança de TI, Compliance e UX

Para garantir que o **Genial Inventory** opere como um SaaS de nível empresarial, a interface deve ser resiliente, segura, transparente e adaptável a qualquer dispositivo.

1. **Tratamento de Erros e Resiliência (UX):**
   - **Proibido Erros Silenciosos:** O uso de `console.log()` ou `console.error()` isolado em blocos `catch` é estritamente proibido. Toda falha de comunicação com a API (ex: 500 Internal Server Error) deve engatilhar um Toast/Alerta amigável e não obstrutivo informando o usuário.
   - **Error Boundaries:** Utilize *Error Boundaries* no React para encapsular rotas ou módulos complexos. Se um componente de tabela quebrar, apenas aquela seção deve exibir uma UI de fallback ("Ocorreu um erro ao renderizar esta tabela"), evitando que a tela inteira fique em branco (White Screen of Death).

2. **Segurança, RBAC e Gestão de Sessão (Compliance):**
   - **Protected Routes (Guards):** O acesso a rotas privadas (`/produtos`, `/dashboard`, `/armazens`) deve ser interceptado por um componente guardião. Se o JWT estiver ausente ou inválido, o usuário deve ser redirecionado imediatamente para `/login`.
   - **Renderização Condicional Segura (Principle of Least Privilege):** Oculte ou desabilite botões de ações destrutivas (como "Deletar") se o usuário logado não for o dono do recurso ou não tiver a permissão necessária. A regra de ouro da UX de segurança é: *não permita que o usuário clique em algo que o backend vai rejeitar com um erro 403 Forbidden*.
   - **Flush de Estado (Isolamento Multitenant):** Ao realizar o logout ou ao receber um erro `401 Unauthorized`, o frontend deve limpar explicitamente todo o `localStorage`, `sessionStorage` e resetar estados globais. Isso garante que, em computadores compartilhados, os dados de estoque do *Usuário A* nunca vazem para o *Usuário B*.

3. **Privacidade e Proteção de Dados (LGPD by Design):**
   - **Logs no Client-Side:** É terminantemente proibido "logar" no console do navegador dados sensíveis (PII - Personally Identifiable Information), como e-mails completos, senhas digitadas, tokens JWT ou estruturas inteiras de resposta do backend.
   - **Máscaras de Input:** Se houver coleta de dados sensíveis em formulários futuros (como CPF/CNPJ para faturamento), eles devem ser mascarados visualmente e limpos (apenas números) antes de serem enviados no payload da requisição.

4. **Precisão Contábil e Auditoria Visual:**
   - **Formatação Financeira:** O JavaScript possui falhas conhecidas ao calcular ponto flutuante. Por isso, nunca realize cálculos complexos de valores no frontend. Apenas exiba o campo `value` (que vem como `BigDecimal` do backend) formatado estritamente com a API nativa: `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`.
   - **Rastreabilidade de Tempo (Auditoria):** Datas de auditoria (`createdAt`, `updatedAt`) devem ser exibidas respeitando o fuso horário local do usuário, utilizando bibliotecas leves como `date-fns` ou a API nativa `Intl.DateTimeFormat`.

5. **Responsividade e Adaptação de Interface (Mobile-First):**
   - **Design Fluido e Breakpoints:** Evite larguras fixas em pixels (`width: 500px`). Utilize percentuais, `vw/vh`, CSS Grid e Flexbox para garantir que os contêineres se adaptem dinamicamente. Os *breakpoints* devem seguir o padrão do framework CSS adotado (ex: Bootstrap ou MUI) para consistência.
   - **Degradação de Tabelas (Crucial para SaaS):** Tabelas de dados complexas (como a listagem de Produtos) têm péssima usabilidade no celular. Em resoluções menores que `768px`, as tabelas devem ser ocultadas e substituídas por uma renderização baseada em **Cards de Lista** (onde cada linha da tabela vira um bloco empilhado de informações).
   - **Áreas de Toque (Touch Targets):** Em telas móveis, botões de ação (ex: Editar, Excluir, Salvar) e campos de input devem ter uma área mínima de clique de `44x44px` (padrão de acessibilidade) para evitar toques acidentais em ações críticas de estoque.
   - **Navegação e Modais Otimizados:** Menus laterais (Sidebars) devem se transformar em menus "Hamburger" ou barras de navegação inferiores (Bottom Navigation) no mobile. Modais pequenos no desktop devem preferencialmente ocupar a tela inteira ou se tornarem *Bottom Sheets* em celulares, facilitando a digitação no teclado virtual.