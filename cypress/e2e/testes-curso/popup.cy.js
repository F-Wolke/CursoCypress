/// <reference types="cypress" />

describe('Work with PopUp', () => {

    it('deve testar popup diretamente', () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })

    it('deve verificar se o popup foi invocado', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called')      
    })

describe('Work with PopUp links', () => {
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    it('deve checar o popup url', () => {
        cy.get('[href="./frame.html"]')
            .should('have.prop', 'href')
            .and('equal', 'https://www.wcaquino.me/cypress/frame.html')
    })

    it('deve acessar popup dinamicamente', () => {
        cy.get('[href="./frame.html"]').then($a => {
            const href = $a.prop('href')
            cy.visit(href)
            cy.get('#tfield').type('funciona')
        })
    })


    it('force o link a abrir na página', () => {
        cy.get('[href="./frame.html"]')
            .invoke('removeAttr', 'target')
            .click()
        cy.get('#tfield').type('funciona')
    })
})
})