Cypress.Commands.add("buscarDispositivoEspecifico", (id) => {
  cy.request({
    method: "GET",
    url: `/objects/${id}`, //  preciso concatenar para poder passar o ID como parametro na URL
    failOnStatusCode: false, //para não falhar o teste, pois 404 não é erro, é esperado
  }).then((response) => {
    return response;
  }); //retorna a resposta para quem chamar essa função
});

Cypress.Commands.add("dispositivoInexistente", (deviceInexistent) => {
  cy.request({
    method: "GET",
    url: `/objects/${deviceInexistent}`,
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  }); //retorna a resposta para quem chamar essa função
});

Cypress.Commands.add("buscarTodosDispositivos", () => {
  cy.request({
    method: "GET",
    url: "/objects", //sem parametros, deixo /objects
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  }); //retorna a resposta para quem chamar essa função
});
