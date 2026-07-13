/// <reference types="cypress" />

describe('testes de tempo', () => {
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    it('voltando o tempo', () => {
        //cy.get('#buttonNow').click()
        //cy.get('#resultado > span').should('contain', '10/07/2026')
        
        //cy.clock()

        //cy.get('#buttonNow').click()
        //cy.get('#resultado > span').should('contain', '31/12/1969')

        const dt = new Date(2012, 3, 10, 15, 23, 50)
        cy.clock(dt.getTime())

        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '10/04/2012')
    })

})