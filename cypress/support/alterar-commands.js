const alterarDispositivoBody = require('../fixtures/dispositivo_put_alterado.json')

Cypress.Commands.add("alterarDispositivo", (id) => {
    cy.request({
      method: 'PUT',  
      url: `/objects/${id}`, //pega o ID que foi criado no post    
      failOnStatusCode: false,
      body: alterarDispositivoBody
    }).then((response) => { return response })   //retorna a resposta para quem chamar essa função
});