/// <reference types="cypress" />


describe('Selectores', () => {

    it('Selectores con CSS selector', () => {
        cy.visit('');
        cy.get('button'); // elemento web unico
        cy.get('input') //cinco elementos web
        cy.get('[type="password"]')
        cy.get("[id='day']")
        cy.get('#day')
        cy.get("select[id='day']")
        cy.get('select#day')
        cy.get('.password')
    });

    it('Encontrar elementos web utilizando find', () => {
        cy.visit('')
        cy.get('fieldset').find('input') // encuentra 3 elementos web
        cy.get('input') // encuentra 5 elementos web
    })

    it('Encontrar elementos web utilizando contains', () => {
        cy.visit('')
        cy.contains('button', 'Register');
    })
    
    it('Encontrar elementos web utilizando siblings', () => {
        cy.visit('')
        cy.get("label[for='user']").siblings('input');
    })

    it('Encontrar elementos web utilizando parent', () => {
        cy.visit('')
        cy.get("label[for='user']").parent('div');
    })
});