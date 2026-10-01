/// <reference types="cypress" />

import loc from '../../support/locators'
import '../../support/commandsConta'

describe('Testes de nível funcional',{testIsolation: false} , () => {

    before(() => {
        cy.clearAllSessionStorage()
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.login('joca3@gmail.com', 'joca3')
        cy.resetApp()
    })

    it('Inserir conta', () => {
        cy.acessarMenuConta()
        cy.inserirConta('conta de teste')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('exist')
    })

    it('Editar conta', () => {
        cy.acessarMenuConta()
        cy.get(loc.CONTAS.BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME).clear().type('conta de teste editada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('exist')
    })

})