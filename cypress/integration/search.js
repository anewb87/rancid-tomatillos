describe('Search bar functionality', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', { fixture: 'moviesData.json' })
        cy.visit('http://localhost:3000')
    })

    it('Should take in user input and search for movie titles containing anything in the search', () => {
        cy.get('input')
            .type('m')
            .should('have.value', 'M')
        cy.get('button')
            .click()
        cy.get('[data-cy=movie-cards]')
            .should('have.length', 2)

        cy.get('img')
            .eq(2)
            .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
        cy.get('[data-cy=card-title]')
            .first()
            .should('have.text', 'Money Plane')
        cy.get('[data-cy=card-rating]')
            .first()
            .should('have.text', '6.7')

        cy.get('img')
            .eq(3)
            .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg')
        cy.get('[data-cy=card-title]')
            .eq(1)
            .should('have.text', 'Mulan')
        cy.get('[data-cy=card-rating]')
            .eq(1)
            .should('have.text', '4.9')

        cy.get('button')
            .eq(1)
            .should('have.text', 'Back to Main')
            .click()
        cy.get('[data-cy=movie-cards]')
            .should('have.length', 6)

    })

    it('Should display error message and return button on invalid search', () => {
        cy.get('input')
            .type('belieber')
            .should('have.value', 'BELIEBER')
        cy.get('button')
            .click()

        cy.get('h2')
            .should('have.text', 'No tomatillos for you!Try a different movie!')
        cy.get('button')
            .eq(1)
            .should('have.text', 'Back to Main')
            .click()
        cy.get('[data-cy=movie-cards]')
            .should('have.length', 6)
    })
})