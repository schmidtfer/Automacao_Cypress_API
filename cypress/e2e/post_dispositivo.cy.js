const dados = require("../fixtures/dispositivo_sucesso_cadastrar.json"); // dados = pede para. (dentro da fixture vai ter o arquivo com os dados do dispositivo// e no body coloco body: dados

describe("Cadastrar Dispositivos", () => {

  it("Cadastrar dispositivo com sucesso", () => {
    cy.cadastrarDispositivo().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.be.not.empty;
      expect(response.body.createdAt).to.be.not.empty;
      expect(response.body.name).to.equal(dados.name);

      //validar o que está dentro de objeto data
      expect(response.body.data.year).to.equal(dados.data.year);
      expect(response.body.data.price).to.equal(dados.data.price);
      expect(response.body.data["CPU model"]).not.to.be.empty;
      expect(response.body.data["Hard disk size"]).not.to.be.empty;
      expect(response.body.data["CPU model"]).to.equal(dados.data["CPU model"]);
      expect(response.body.data["Hard disk size"]).to.equal(dados.data["Hard disk size"]
      );

      cy.log("Dipositivo cadastrado com sucesso: ", response.body);
    });
  });

  it("Cadastrar dispositivo com dados inválidos", () => {
    cy.cadastrarDispositivoInvalido().then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.error).to.equal("400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all."
      );

      cy.log("Error: ", response.body);
    });
  });
});
