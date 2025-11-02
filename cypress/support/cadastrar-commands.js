const dados = require("../fixtures/dispositivo_sucesso_cadastrar.json"); //importa os dados do arquivo dados.json

Cypress.Commands.add("cadastrarDispositivo", () => {
  cy.request({
    url: "/objects",
    method: "POST",
    body: dados, //dados veio da const dados -> dados fixture
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  }); //retorna a resposta para quem chamar essa função
});

Cypress.Commands.add("cadastrarDispositivoInvalido", () => {
  //body vazio
  cy.request({
    url: "/objects",
    method: "POST",
    body: "",
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  }); 
});
