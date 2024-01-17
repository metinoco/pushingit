/// <reference types="cypress" />

describe("Desafio 2", () =>{
    
    let datos ;

    before(() => {
        cy.fixture("datos").then(data => 
            datos = data   
        )
    });

    beforeEach(() => {
        cy.visit(''); //visita la web antes del test, BaseUrl configurada
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(datos.username2.user);
        cy.get('#pass').type(datos.username2.pass);
        cy.get('#submitForm').click().wait(4000);
        cy.get('#todolistlink').click();
        cy.get('[data-cy="removeAll"]').click().wait(2000);
    });
    it('Ingresar 5 tareas desde un set de datos', () =>{
        
        //Agregar tareas con esperas ya que escribe mal al introducir los datos en el aplicativo
        cy.get('[name=task]').type(datos.tareas.tarea1);
        cy.get('[data-cy="sendTask"]').click().wait(1000);

        cy.get('[name=task]').type(datos.tareas.tarea2);
        cy.get('[data-cy="sendTask"]').click().wait(1000);

        cy.get('[name=task]').type(datos.tareas.tarea3);
        cy.get('[data-cy="sendTask"]').click().wait(1000);

        cy.get('[name=task]').type(datos.tareas.tarea4);
        cy.get('[data-cy="sendTask"]').click().wait(1000);

        cy.get('[name=task]').type(datos.tareas.tarea5);
        cy.get('[data-cy="sendTask"]').click().wait(1000);

    });

    it('Verificar que existan los botones “All”, “Completed”, “Active” y “Remove all”', () => {
        
        //verificar que existan los botones
        cy.get('[data-cy="all"]').should('exist').and('be.visible');
        cy.get('[data-cy="completed"]').should('exist').and('be.visible');
        cy.get('[data-cy="active"]').should('exist').and('be.visible');
        cy.get('[data-cy="removeAll"]').should('exist').and('be.visible');
    });

    it('Agregar 2 tareas, completarlas y eliminar la segunda tarea completada', () => {

        //agregando y completando tarea 1
        cy.get('[name=task]').type(datos.tareas.tarea1);
        cy.get('[data-cy="sendTask"]').click().wait(1000);
        cy.contains('p', 'Crear el script').click()
        //agregando y completando tarea 2
        cy.get('[name=task]').type(datos.tareas.tarea2);
        cy.get('[data-cy="sendTask"]').click().wait(1000);
        cy.contains('p', 'Abrir test con cypress open').click().wait(4000);
        //eliminar la segunda tarea
        cy.xpath("//div/p[contains(text(), 'Abrir test con cypress open')]//following-sibling::button[text()='Delete']").click().wait(2000);
        cy.contains('p', 'Abrir test con cypress open').should('not.exist');
    });

    it('Agregar 2 tareas y eliminar la primera tarea', () => {

        //agregando tarea 1
        cy.get('[name=task]').type(datos.tareas.tarea1);
        cy.get('[data-cy="sendTask"]').click().wait(2000);

        //agregando tarea 2
        cy.get('[name=task]').type(datos.tareas.tarea2);
        cy.get('[data-cy="sendTask"]').click().wait(2000);
        //eliminar la primera tarea
        cy.xpath("//div/p[contains(text(), 'Crear el script')]//following-sibling::button[text()='Delete']").click().wait(2000);
        cy.contains('p', 'Crear el script').should('not.exist');
    });
});