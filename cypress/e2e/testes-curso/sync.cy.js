/// <reference types="cypress" />

describe('work with basic elements', () => {
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    it('Deve aguardar elemento', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it('Deve fazer retrys', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('not.exist')
            .should('exist')
    })

    it('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 2')
    })

    it('Uso do timeout', () => {
        //cy.get('#buttonDelay').click()
        //cy.get('#novoCampo', {timeout: 5000}).should('exist')

        //cy.get('#buttonListDOM').click()
        //cy.wait(5000)
        //cy.get('#lista > :nth-child(2) > span')
        //    .should('contain', 'Item 2')

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span', {timeout: 30000})
            .should('have.length', 2)
    })

    it('Click retry', () => {
        cy.get('#buttonCount').click()
            .should('have.value', '1')
    })

    it.only('Should vs Then', () => {
        //cy.get('#buttonListDOM').click()
        //cy.get('#lista li span').then($el => {
        //    expect($el).to.have.length(1)
        //}).and('have.id', 'buttonListDOM')

        cy.get('#buttonListDOM').then($el => {
            expect($el).to.have.length(1)
            cy.get('#buttonList')
        })

    })
})