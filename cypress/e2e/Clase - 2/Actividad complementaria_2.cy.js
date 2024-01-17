/// <reference types="cypress" />

describe("Actividad complementaria 2", () =>{
    
    beforeEach(() => {
        cy.visit(''); //visita la web antes del test, BaseUrl configurada
    });
    it('Registro en Pushing It', () =>{
        
        const numero = Math.floor(Math.random() * 1000)
        cy.get('[name=user]').type(`Monshy${numero}`) //pushingiT
        cy.get('[name=pass]').type('1234567!') //123456!
        cy.get('fieldset').find('[value=Male]').check({force:true})
        cy.get('[name=day]').select('16')
        cy.get('[name=month]').select('June')
        cy.get('[name=year]').select('1986')
        // cy.get('[type=submit]').click().wait(3000) --> también funciona con este css selector
        cy.get('button').contains("Register").click().wait(3000)
        cy.get('[name=logout]').should('be.visible')        
    });
});
