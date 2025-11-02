

Cypress.Commands.add("deletarDispositivo", (id) => {
    cy.request({
      method: 'DELETE',  
      url: `/objects/${id}`, //pega o ID que foi criado no post    
      failOnStatusCode: false
    }).then((response) => { return response })   //retorna a resposta para quem chamar essa função
});