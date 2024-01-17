export class LoginPage {
    //<- probando comentarios->
    clickButtonIniciarSesion () {
        cy.get("#registertoggle").dblclick();
    }

    escribirUsuario (usuario) {
        cy.get('#user').type(usuario);
    };

    escribirContraseña (contraseña) {
        cy.get('#pass').type(contraseña);
    };

    clickButtonLogIn () {
        cy.get('[data-cy="submitForm"]').click();
    };

    verifyUser () {
        cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist');
    }
}