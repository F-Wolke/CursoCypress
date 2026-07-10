/// <reference types="cypress" />

describe('Work with fixtures', () => {
    it('Pegar dados do arquivo de fixtures', function() {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.fixture('userData').as('usuario').then(() => {

            cy.get('[name="formNome"]').type(this.usuario.nome)
            cy.get('[data-cy="dataSobrenome"]').type(this.usuario.sobrenome)
            cy.get(`[name="formSexo"][value=${this.usuario.sexo}]`).click()
            cy.get(`[name="formComidaFavorita"][value=${this.usuario.comida}]`).click()
            cy.get('[data-test="dataEscolaridade"]').select(this.usuario.escolaridade)
            cy.get('[data-testid="dataEsportes"]').select(this.usuario.esportes)
            cy.get('[name="formCadastrar"]').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        })

    })
})