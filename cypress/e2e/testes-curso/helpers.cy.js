/// <reference types="cypress" />

describe('Helpers...', () => {
    it('Wrap', () => {
        const obj = {nome: "User", idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        //cy.get('#formNome').then($el => {
        //    cy.wrap($el).type('funciona')
        //})


        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => console.log('primeiro botão'))
        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonList').then(() => console.log('segundo botão'))
    })

    it.only('its', () => {
       const obj = {nome: "User", idade: 20}
       cy.wrap(obj).should('have.property','nome', 'User')
       cy.wrap(obj).its('nome').should('be.equal', 'User')

       const obj2 = {nome: "User", idade: 20, endereco: {rua: 'lobos'}}
       cy.wrap(obj2)
        .its('endereco.rua').should('contain', 'lobos')

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('be.equal', 20)
    })

})