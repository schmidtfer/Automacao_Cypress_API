
# Projeto de Automação de Testes de API com Cypress
Este projeto foca na automação completa de testes de API utilizando a biblioteca Cypress e a API pública de simulação de dispositivos (devices) disponível em https://restful-api.dev/.

🎯 Objetivo
Garantir a qualidade e a estabilidade da API através de testes automatizados que cobrem os principais cenários de integração, incluindo os métodos HTTP fundamentais para manipulação de recursos:

GET: Para buscar dados de dispositivos (reservados e customizados).

POST: Para criar novos dispositivos.

PUT: Para atualizar informações de dispositivos existentes.

DELETE: Para remover dispositivos.

Inicialmente, todos os testes foram feitos **manualmente no Postman**. Em seguida, esses fluxos foram migrados para o Cypress.

Validando:

* Status HTTP Code
* Estrutura e conteúdo dos payloads (JSON body)
* Encadeamento de requisições (ex: Cadastrar e depois Deletar)
* Cenários de sucesso e falha (ex: dispositivo não encontrado).


# Instalação:
npm init - y   //cria o package.json
npm install cypress

# Para rodar:
npx cypress open       //cypress.config.js  

# Para rodar no terminal:
npx cypress run

# Para instalar faker Js: dados dinâmicos
npm install @faker-js/faker

# Para validar o erro (404 ou 500) preciso colocar:
failOnStatusCode: false   //pois se ficar true, no erro o teste quebra/para

# Support e2e
  importa os commands

