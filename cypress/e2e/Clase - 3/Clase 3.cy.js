describe('Xpath', () => {

    it('Xpath absoluto', () => {
        cy.visit('');
        cy.xpath('/html/body/div/div/div/div/form/div[1]/input')
    });

    it('Xpath relativo', () => {
        cy.visit('');
        cy.xpath("//input[@id='user']")
    });

    it('xpath contains', () => {
        cy.visit('')
        cy.xpath('//input[contains(@class,"password")]')
    })

    it('xpath starts-with', () => {
        cy.visit('')
        cy.xpath('//input[starts-with(@class,"chakra-input password")]')
    })

    it('xpath buscando elementos por su texto visible con text', () => {
        cy.visit('')
        cy.xpath("//button[text()='Register']")
    })

    it('xpath buscando elementos por su texto parcial visible con text', () => {
        cy.visit('')
        cy.xpath("//p[contains(text(), 'registrado')]")
    })

    it('xpath buscando elementos por su texto inicial visible con text', () => {
        cy.visit('')
        cy.xpath("//p[starts-with(text(), 'Si ya estás')]")
    })

    it('Following sibbling', () => {
        cy.visit('')
        cy.xpath("//label[text()='Year']//following-sibling::div/select");
    })

    it('preceding sibbling and parent', () => {
        cy.visit('')
        cy.xpath("//select//parent::div//preceding-sibling::label[text()='Year']");
    });
})