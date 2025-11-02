/// <reference types="cypress" />

const dados = require('../fixtures/dispositivo_sucesso_cadastrar.json')



describe("Alterar Dispositivo", () => {
    let id_post = "";  //deixo o id vazio, pq ele vai ser criado no post

    beforeEach(() => {        //primeiro preciso cadastrar um dispositivo
        cy.cadastrarDispositivo(dados)
            .then((response_post) => {
                expect(response_post.status).to.equal(200)
                expect(response_post.body.name).to.equal('Bisteca Pro 16')
                expect(response_post.body.data.year).to.equal(dados.data.year);
                expect(response_post.body.data.price).to.equal(dados.data.price);
                expect(response_post.body.data["CPU model"]).not.to.be.empty;
                expect(response_post.body.data["Hard disk size"]).not.to.be.empty;
                expect(response_post.body.data["CPU model"]).to.equal(dados.data["CPU model"]);
                expect(response_post.body.data["Hard disk size"]).to.equal(dados.data["Hard disk size"])
                id_post = response_post.body.id                // antes de tudo, cadastrar um dispositivo para depois deletar
        
            cy.log("ID criado: " + id_post) // id criado no post para ser chamado no delete
  
               });
    });

    it("Alterar um  dispositivo cadastrado", () => {
        cy.alterarDispositivo(id_post)    //teste encadeado
            .then((response_put) => {    //posso trocar o nome response_delete por qualquer outro nome
                expect(response_put.status).to.equal(200)
                expect(response_put.body.name).to.equal('Fumaça Go Pro 16')
                expect(response_put.body.data["Hard disk size"]).to.equal('15 TB')
                expect(response_put.body.data.year).to.equal(dados.data.year);
                expect(response_put.body.data.price).to.equal(dados.data.price);
                expect(response_put.body.data["CPU model"]).not.to.be.empty;
                expect(response_put.body.data["Hard disk size"]).not.to.be.empty;
                expect(response_put.body.data["CPU model"]).to.equal(dados.data["CPU model"]);

                cy.log(`Dispositivo com ${id_post} alterado com sucesso `);  // para ver o que está vindo no response.body
            });

    });
});
