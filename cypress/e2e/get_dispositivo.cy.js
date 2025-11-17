/// <reference types="cypress" />

describe("Buscar Dispositivo", () => {
  it("Buscar dispositivo especifico", () => {
    const id = "7"; 

    cy.buscarDispositivoEspecifico(id).then((response) => {
      expect(response.status).to.equal(200);

      expect(response.body).to.not.be.empty;
      expect(response.body.id).equal(id);

      expect(response.body.name).to.equal("Apple MacBook Pro 16");
      expect(response.body.name).to.not.be.empty; //not.to.be.empty só serve para string

      expect(response.body.year).to.not.toString;
      expect(response.body.price).to.not.be.a("string");
      // expect(response.body.price).to.not.toString;
      expect(response.body.data["CPU model"]).not.to.be.empty;
      expect(response.body.data["Hard disk size"]).not.to.be.empty;

      cy.log(" Dispositivo buscado: " + id); //procuro o body no devtolls- log (registros)--- Yielded (entregue)
    });
  });

  it("Buscar dispositivo inexistente", () => {
    const deviceInexistent = "xpto";

    cy.dispositivoInexistente(deviceInexistent).then((response) => {
      expect(response.status).to.equal(404); //PARA NÃO FALAHAR O TESTE, COLOCO failOnStatusCode: false, pois 404 não é erro, é esperado, já que é um disposistivo inexistente
      expect(response.body.error).to.equal(
        `Oject with id=${deviceInexistent} was not found.`
      );

      cy.log("error: ", `Oject with id=${deviceInexistent} was not found.`);
    });
  });

  it("Bucar todos dispositivos", () => {
    cy.buscarTodosDispositivos("").then((response) => {
      expect(response.status).to.equal(200);
      response.body.forEach((element) => {
        expect(element.id).not.be.empty;
        expect(element.name).not.be.empty;

        cy.log("Meus dispositivos são: ", element.name); 
      });
    });
  });
});
