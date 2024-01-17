/// <reference types="cypress" />

describe('Selectores con Xpath', () => {
    beforeEach(() => {
        cy.visit(''); //visita la web antes del test, BaseUrl configurada en Cypress.config.js
    });

    it('Selectores Xpath', () => {
        const numero = Math.floor(Math.random() * 1000)
        cy.xpath('//*[@id="user"]').type(`Monshy${numero}`) //pushingiT
        cy.xpath('//*[@id="pass"]').type('1234567!') //123456!
        cy.xpath('//input[@value="Male"]').check({force:true})
        cy.xpath('/html/body/div[1]/div/div/div/form/div[3]/div/select').select('16')
        cy.xpath('//*[@id="month"]').select('June')
        cy.xpath('//*[@id="year"]').select('1986')
        cy.xpath('//*[@id="submitForm"]').click().wait(3000)
        cy.xpath('//*[@id="logout"]').should('be.visible')
    });
});