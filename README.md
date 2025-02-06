# 🌲 Cypress com JavaScript ![JavaScript](https://img.shields.io/badge/-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

👋 Seja bem-vindo(a)!

Este projeto baseado no curso Cypress, do Zero à Nuvem do Walmyr Filho, onde foi aplicado desde a configuração inicial até a execução de testes em um ambiente de integração contínua na nuvem.

## 📋 Pré-requisitos

Antes de começar, você precisará ter os seguintes itens instalados em sua máquina:

- [Node.js](https://nodejs.org/) (utilizado versão v22.13.1)
- [npm](https://www.npmjs.com/) (utilizado versão 11.1.0)
- [cypress](https://www.cypress.io/) (utilizado versão 13.12.0)

## 🚀 Instalação das Dependências

Siga os passos abaixo para clonar o repositório e instalar as dependências do projeto:

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/cypress-do-zero-a-nuvem.git
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd cypress-do-zero-a-nuvem
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

## 🧪 Rodando os Testes

Você pode rodar os testes de diferentes maneiras. Abaixo estão os comandos disponíveis:

### Abrir o Cypress Runner

Para abrir o Cypress Runner, onde você pode visualizar a execução dos testes em tempo real, execute:

```sh
npm run open
```

### Rodar os Testes em Modo Headless

Para rodar os testes em modo headless (sem interface gráfica), execute:

```sh
npm run test
```

### Abrir o Cypress Runner em Modo Mobile

Para abrir o Cypress Runner simulando um dispositivo com 410 pixels de largura e 860 pixels de altura, execute:

```sh
npm run open:mobile
```

### Rodar os Testes em Modo Headless em Modo Mobile

Para rodar os testes em modo headless simulando um dispositivo com 410 pixels de largura e 860 pixels de altura, execute:

```sh
npm run test:mobile
```

## 📄 Informações Adicionais

- A configuração do Cypress está no arquivo `cypress.config.js`.
- As variáveis de ambiente estão definidas no arquivo `cypress.env.json`.
- Os comandos customizados do Cypress estão definidos no arquivo `cypress/support/commands.js`.
- A lista de elementos utilizados nos testes está no arquivo `cypress/support/elementList.js`.
- As ações base utilizadas nos testes estão no arquivo `cypress/support/baseActions.js`.