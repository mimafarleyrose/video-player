/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('renders the images at the correct intervals', ()=>{
    cy.contains('Play').click() 

    cy.get('[data-cy=image-one]').should('be.hidden');
    cy.get('[data-cy=image-two]').should('be.hidden');
    cy.get('[data-cy=image-three]').should('be.hidden');

//first image shows 3.5 s

    cy.wait(3500)

    cy.get('[data-cy=image-one]').should('be.visible');
    cy.get('[data-cy=image-two]').should('be.hidden');
    cy.get('[data-cy=image-three]').should('be.hidden');

//second image shows 6s

    cy.wait(2500)

    cy.get('[data-cy=image-one]').should('be.visible');
    cy.get('[data-cy=image-two]').should('be.visible');
    cy.get('[data-cy=image-three]').should('be.hidden');


//third image shows 7s
    cy.wait(1000)

    cy.get('[data-cy=image-one]').should('be.visible');
    cy.get('[data-cy=image-two]').should('be.visible');
    cy.get('[data-cy=image-three]').should('be.visible');

  //second image hides 8s


    cy.wait(1000)

    cy.get('[data-cy=image-one]').should('be.visible');
    cy.get('[data-cy=image-two]').should('be.hidden');
    cy.get('[data-cy=image-three]').should('be.visible');

      //first and third images hides 8.5s

    cy.wait(500)

    cy.get('[data-cy=image-one]').should('be.hidden');
    cy.get('[data-cy=image-two]').should('be.hidden');
    cy.get('[data-cy=image-three]').should('be.hidden');

    cy.wait(1000)

//replay

cy.contains('Play').click() 

    cy.wait(5500)

    cy.get('[data-cy=image-one]').should('be.hidden');
    cy.get('[data-cy=image-two]').should('be.visible');
    cy.get('[data-cy=image-three]').should('be.hidden');

    //third image shows 7s

    cy.wait(1000)

    cy.get('[data-cy=image-one]').should('be.hidden');
    cy.get('[data-cy=image-two]').should('be.visible');
    cy.get('[data-cy=image-three]').should('be.visible');


        //second image hides 7s


    cy.wait(1000)

    cy.get('[data-cy=image-one]').should('be.hidden');
    cy.get('[data-cy=image-two]').should('be.hidden');
    cy.get('[data-cy=image-three]').should('be.visible');

        //third image hides 7s

    cy.wait(1000)

    cy.get('[data-cy=image-one]').should('be.hidden');
    cy.get('[data-cy=image-two]').should('be.hidden');
    cy.get('[data-cy=image-three]').should('be.hidden');

    cy.wait(1000)

    //replay *2

cy.contains('Play').click() 



cy.wait(7000)

cy.get('[data-cy=image-one]').should('be.hidden');
cy.get('[data-cy=image-two]').should('be.hidden');
cy.get('[data-cy=image-three]').should('be.visible');

    //third image hides 7s

cy.wait(1000)

cy.get('[data-cy=image-one]').should('be.hidden');
cy.get('[data-cy=image-two]').should('be.hidden');
cy.get('[data-cy=image-three]').should('be.hidden');

  })

})
