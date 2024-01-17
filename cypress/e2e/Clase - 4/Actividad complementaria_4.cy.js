//crea un fixture con las siguientes keys 
//username (el username debe ser inexistente)
//pasword (la password debe ser valida) //123456!
//mensajeError (el mensaje de error lo tienes que copiar de la pagina ) //Credentials were not found

//usa before para acceder al fixture y obtener los datos
//beforeEach para visitar la pagina y dirigirse al login

/// <reference types="cypress" />

describe('Actividad complementaria 4', () => {
    let loginData ;

    before(() => {
        cy.fixture("datos").then(data => 
            loginData = data   
        )
    });

    beforeEach(() => {
        cy.visit(''); //visita la web antes del test, BaseUrl configurada
    });

    //inicializa el fixture

    it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        cy.get('#registertoggle').dblclick()
        cy.get('#user').type(loginData.username.user);
        cy.get('#pass').type(loginData.username.pass); //la contraseña debe ser valida por el sistema
        cy.get('#submitForm').click();
        cy.get('[data-cy="messageError"]').should('have.text', 'Credentials were not found')
    });
});