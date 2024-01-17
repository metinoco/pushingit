export class ToDoListPage {
    
    clickToDoListLink () {
        cy.get('#todolistlink').click();
    }

    verifyAllButton () {
        return cy.get('#all');
    }

    verifyCompletedButton () {
        return cy.get('#completed');
    }

    verifyActiveButton () {
        return cy.get('#active');
    }

    verifyRemoveAllButton () {
        return cy.get('#removeAll');
    }
}