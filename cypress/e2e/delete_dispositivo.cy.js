/// <reference types="cypress" />

const dados = require("../fixtures/dispositivo_sucesso_cadastrar.json");

describe("Deletar Dispositivo", () => {
  let id = ""; //deixo o id vazio, pq ele vai ser criado no post

  beforeEach(() => {
    cy.cadastrarDispositivo(dados)
    .then((response_post) => {
      expect(response_post.status).to.equal(200);
      id = response_post.body.id; // antes de tudo, cadastrar um dispositivo para depois deletar

      cy.log("ID criado: " + id); // id criado no post para ser chamado no delete
      });
});
      

  it("Deletar dispositivo cadastrado", () => { 

      cy.deletarDispositivo(id) //está encadeado
        .then((response_delete) => { 
          
          expect(response_delete.status).to.equal(200);
          expect(response_delete.body.message).to.equal(
            `Object with id = ${id} has been deleted.`
          );

           cy.log(`Dispositivo com ${id} deletado com sucesso `);  // para ver o que está vindo no response.body
        });
    });
 

  it("Deletar dispositivo inexistente", () => {
    const id_inexistente = "xpto"; //id que não existe

    cy.deletarDispositivo(id_inexistente) //este encadeado
      .then((response_delete) => {
        //posso trocar o nome response_delete por qualquer outro nome
        expect(response_delete.status).to.equal(404);
        expect(response_delete.body.error).to.equal(
          `Object with id = ${id_inexistente} doesn't exist.`
        );
      });
  });
 });