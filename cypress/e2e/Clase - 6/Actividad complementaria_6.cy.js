//importar la pagina todoListPage
//importar la pagina loginPage
/// <reference types="cypress" />
import { LoginPage } from "../../support/Pages/loginPage";
import { ToDoListPage } from "../../support/Pages/toDoListPage";


describe('Actividad complementaria 6', () => { 
    //generar una instancia de la clase todoListPage
    //generar una instancia de la clase loginPage
    const loginPage = new LoginPage ()
    const toDoListPage = new ToDoListPage ()

         beforeEach("Actividad complementaria 6", () => {
            cy.visit('');
            loginPage.clickButtonIniciarSesion();
            loginPage.escribirUsuario(Cypress.env().usuario);
            loginPage.escribirContraseña(Cypress.env().password);
            loginPage.clickButtonLogIn();
            loginPage.verifyUser();          
            toDoListPage.clickToDoListLink();
        });
    
          it("deberia verificar que los botones existen", () =>{
            cy.wait(2000);
            toDoListPage.verifyAllButton().should('exist');
            toDoListPage.verifyCompletedButton().should('exist');
            toDoListPage.verifyActiveButton().should('exist');
            toDoListPage.verifyRemoveAllButton().should('exist');
        });
     });