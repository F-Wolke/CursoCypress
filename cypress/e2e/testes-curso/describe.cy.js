/// <reference types="cypress" />

it('A external test...', () => {

})

describe('should group tests...', () => {
    describe('more internal', () => {
        it('A external test...', () => {})
    })

    it('A external test...', () => {})
})