/// <reference types="cypress" />

describe('work with alerts', () => {
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    const comidas = ['carne', 'frango', 'pizza', 'vegetariano']

    comidas.forEach(comida => {
        it(`Cadastro com a comida ${comida}`, () => {
            cy.get('[name="formNome"]').type('usario')
            cy.get('[data-cy="dataSobrenome"]').type('qualquer')
            cy.get(`[name="formSexo"][value=F]`).click()
            cy.get(`[name="formComidaFavorita"][value=${comida}`).click()
            cy.get('[data-test="dataEscolaridade"]').select('Doutorado')
            cy.get('[data-testid="dataEsportes"]').select('Corrida')
    
            cy.get('[name="formCadastrar"]').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        
        })
    })

    it.only('Deve selecionar todos com o each', () => {
        cy.get('[name="formNome"]').type('usario')
            cy.get('[data-cy="dataSobrenome"]').type('qualquer')
            cy.get(`[name="formSexo"][value=F]`).click()
            cy.get(`[name="formComidaFavorita"]`).each($el => {
                //$el.click()
                if($el.val() != 'vegetariano')
                    cy.wrap($el).click()
            })
            cy.get('[data-test="dataEscolaridade"]').select('Doutorado')
            cy.get('[data-testid="dataEsportes"]').select('Corrida')
    
            //cy.get('[name="formCadastrar"]').click()
            //cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
            cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')
    })
})