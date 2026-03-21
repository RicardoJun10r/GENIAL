# Genial Inventory API - Documentação v1

API REST para gestão de estoque multitenant com autenticação JWT.

## Informações Gerais
* **Host:** `http://localhost:8080`
* **Versão:** `v1`
* **Autenticação:** Bearer Token (JWT)

---

## Segurança e Autenticação

A API utiliza o esquema de segurança `bearerAuth`. O fluxo de acesso consiste em obter um token através do endpoint de login e enviá-lo no cabeçalho `Authorization` das requisições protegidas.

### Login de Usuário
* **POST** `/api/v1/auth/login`
* **Request Body:** `UserLoginRequest` (email, password)
* **Response (200):** `JwtResponseDto` contendo o `token`.

---

## Usuários (User Controller)

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **POST** | `/api/v1/users` | Registra um novo usuário no sistema. |
| **GET** | `/api/v1/users/{id}` | Retorna detalhes do usuário e seus estoques. |
| **PUT** | `/api/v1/users/{id}` | Atualiza nome, email ou senha do usuário. |
| **DELETE** | `/api/v1/users/{id}` | Remove permanentemente o usuário. |

---

## Depósitos (Storage Controller)

Gerencia as unidades físicas ou lógicas onde os produtos são armazenados.

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **POST** | `/api/v1/storages` | Cria um novo depósito vinculado ao usuário. |
| **GET** | `/api/v1/storages` | Busca um depósito específico pelo nome (Query Param). |
| **GET** | `/api/v1/storages/{id}` | Detalha um depósito e lista seus produtos. |
| **PUT** | `/api/v1/storages/{id}` | Atualiza informações cadastrais do depósito. |
| **DELETE** | `/api/v1/storages/{id}` | Exclui o depósito do sistema. |

---

## Produtos (Product Controller)

Controle de itens individuais dentro de cada storage.

### Adicionar Produto ao Storage
* **POST** `/api/v1/products/storages/{storageId}`
* **Corpo:** `ProductCreate` (nome, descrição, setor, valor, quantidade).

### Gerenciamento de Itens
* **GET** `/api/v1/products/{id}`: Consulta detalhes de um produto específico.
* **PUT** `/api/v1/products/{id}`: Atualiza dados ou saldo do produto.
* **DELETE** `/api/v1/products/{id}`: Remove o produto do inventário.

---

## Definições de Modelos (Schemas)

### UserDto
Estrutura de resposta para dados de usuário:
* `id` (string)
* `email` (string)
* `name` (string)
* `storages` (array de StorageDto)

### ProductResponse
Estrutura de resposta para produtos:
* `id` (string)
* `name` (string)
* `sector` (string)
* `value` (number)
* `quantidade` (integer)
* `createdAt` / `updatedAt` (date-time)

---

> **Nota:** Esta documentação foi gerada automaticamente a partir da especificação OpenAPI 3.1.0 da Genial Inventory.