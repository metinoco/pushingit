/// <reference types="cypress" />

describe('Actividad complementaria 8', () => {
// Tipo de peticion post
// URL https://pushing-it.onrender.com/api/register
// body {username, password, gender, year, month, day}
// Agregar aserciones para verificar status y body
    it('Deberia registrarse en PushingIT de forma satisfactoria', () => {
        const username = 'usuario' + Math.floor(Math.random() * 1000)
        const password = '123456!'
        const gender = "Male"
        const day = '10'
        const month = 'October'
        const year = "1980"
        const baseUrl = "https://pushing-it.onrender.com"

        cy.request({
            //escribir el codigo correspondiente para registrarse en PushingIT
            method: 'POST',
            url: `${baseUrl}/api/register`,
            body: {
                username: username,
                password: password,
                gender: gender,
                day: day,
                month: month,
                year: year,

            }
        }).then(respuesta =>{
        //asercioines correspondientes del body y del status
            expect(respuesta.status).to.equal(201);
            //cy.log(respuesta.body);
            expect(respuesta.body.newUser.username).to.equal(username);
        })
    })
})