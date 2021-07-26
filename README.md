# Ticket to Mars - Aplicação de Gerenciamento

Esse projeto é a continuação do projeto [Landing Page - Ticket to Mars](https://tickettomars.netlify.app/) - [Acesse o código-fonte](https://github.com/brunohuffenbaecher/lp-gamaacademy).

## Intro

Esse projeto é o resultado de um dos desafios propostos no programa de treinamento Hiring Coders II - VTEX e Gama Academy. O projeto simula um e-commerce de viagens para Marte. Nesta etapa, foram criados sistemas para gestão de cadastro de clientes e produtos.
A versão mais recente pode ser acessada em: [Ticket to Mars - Management](https://tickettomars-management.vercel.app/)

## Requisitos

Criação de um sistema e-commerce para inventário de produtos e dados de clientes, contendo:

- Os dados de clientes, endereços e produtos devem estar devidamente estruturados
- Dados armazenados no localstorage
- Código fonte no github com o arquivo README detalhando as funcionalidades da programação

### Abordagem do projeto:

O projeto foi dividido inicialmente em 3 páginas principais: Home, Products e Clients.

A página Home é a página principal e contém botões que redirecionam para as demais páginas.

As páginas subsequentes foram destinadas ao cadastro dos produtos ou clientes. Ambas possuem um formulário com os dados relevantes para a operação de cadastro, além de apresentar os produtos/clientes cadastrados.

As informações são armazenadas localmente, através do `localStorage`. A cada novo registro, os dados são adicionados ao fim dos arrays de armazenamento.

O script `startData.js` contém dados iniciais para clientes e produtos, além de uma função para armazenamento inicial dos dados no localStorage. O script é executado ao carregar a página.

### Ferramentas utilizadas

O projeto foi desenvolvido utilizando `React`, criando componentes para agilizar a escalabilidade do projeto.
A estilização foi executada em módulos, com a abordagem de CSS Modules.

## Instalação

Faça download do projeto ou clone o repositório. Em seguida, execute:

### `yarn`

Para instalar todas as dependências do projeto.

### `yarn start`

Executa o app no modo de desenvolvedor.
Abra [http://localhost:3000](http://localhost:3000) para visualizar o projeto no navegador.

## License

[MIT](https://choosealicense.com/licenses/mit/)
