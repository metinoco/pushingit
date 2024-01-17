/// <reference types="cypress" />

describe("Actividad complementaria", () =>{
    
    beforeEach(() => {
        cy.visit(''); //visita la web antes del test, BaseUrl configurada
    });
    it('Registro en Pushing It', () =>{
        
        const numero = Math.floor(Math.random() * 1000)
        cy.get('#user').type(`Monshy${numero}`) //pushingiT
        cy.get('#pass').type('1234567!') //123456!
        cy.get('[value="Male"]').check({force:true})
        cy.get('#day').select('16')
        cy.get('#month').select('June')
        cy.get('#year').select('1986')
        cy.get('#submitForm').click().wait(3000)
        cy.get('#logout').should('be.visible')
        // cy.get('')
        //crear un test que permita registrarse en la pagina!
        //Recorda usar npx cypress open para abrir la interfaz de usuario
        //Para seleccionar el genero utiliza el siguiente selector cy.get("[value='Male']") //Female // recuerden el force true
    });

    it('Iniciar sesión en Pushing IT', () =>{
        
        cy.get('#user').type('pushingit') //pushingiT
        cy.get('#pass').type('123456!') //123456!
        cy.get('#registertoggle').dblclick()
        cy.get('#submitForm').click()
        cy.url().should('include', '/home')
        cy.get('#todolistlink').contains('To Do List')
        cy.get('#logout').should('be.visible')
    });
});

//Si tenes ganas de seguir practicando te propongo que con lo aprendido en clase te registres al sistema con los siguientes datos 
// usuario: 'pushingit'
// contraseña '123456!'
//Para ir al login tienen que hacer doble click en el elemento 'inicia sesion'

// it('commands', () => {
//     cy.login()
// });