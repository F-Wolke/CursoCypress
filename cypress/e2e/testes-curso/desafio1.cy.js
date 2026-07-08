/// <reference types="cypress" />

describe('Desafio', () => {
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    it('Des', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('[name="formCadastrar"]').click()
            .then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))

        cy.get('[name="formNome"]').type('Felipe')
        cy.get('[name="formCadastrar"]').click()
            .then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))

        cy.get('[data-cy="dataSobrenome"]').type('Wolke')
        cy.get('[name="formCadastrar"]').click()
            .then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))

        cy.get(':nth-child(1) > [name="formSexo"]').click()
        cy.get('[name="formCadastrar"]').click()

        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
    })

})