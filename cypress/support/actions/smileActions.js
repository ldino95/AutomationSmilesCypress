/// <reference types="Cypress"/> 

const smilePage = require('../page/smilePage');
const valueGone = 0;
const valueBack = 0;
const valueTax = 0;
const valueTicketTotal = valueGone + valueBack;
const valueTotMilhas = valueTicketTotal + valueTax;





Cypress.Commands.add('validatePage', () => {
    cy.get(smilePage.homePage.smileLogo).should('be.visible')

})


Cypress.Commands.add('clickDataAtaual', () => {


    cy.get(smilePage.issuePage.dayNext).invoke('text').then((chooseDate) => {
        cy.log(chooseDate)
            .should('contain', chooseDate)
            .click({ force: true });
    })
})

Cypress.Commands.add('travelDate', () => {
    const currentDate = new Date();
    const monthNext = currentDate.getMonth();
    const monthReturn =  currentDate.getMonth();
    const chooseDateNext = currentDate.getDate() + 10;
    const chooseDataReturn = currentDate.getDate();
    currentDate.setDate(chooseDataReturn + 30);

    cy.get(smilePage.homePage.inputOrigin).type('GRU');
    cy.get(smilePage.homePage.inputDestination).type('RIO');
    cy.get(smilePage.homePage.inputDestination).click();
    cy.get(smilePage.homePage.calendarDate).click();
    cy.get(smilePage.homePage.dayNext).contains(chooseDateNext).click({ force: true });

    for (let i = 1; i <= monthReturn - monthNext; i++) {
        cy.get(smilePage.homePage.nextMonth).click({force:true})
      }
    cy.get(smilePage.homePage.dayReturn).contains(chooseDataReturn).click({ force: true });


    cy.get(smilePage.homePage.submitButton).click();

})



Cypress.Commands.add('selectVoo', () => {
    //cy.get(smilePage.issuePage.okbnt).click();
    cy.get(smilePage.issuePage.selectMilhasGone).click();
    cy.get(smilePage.issuePage.selectMilhasBack).click();
})

Cypress.Commands.add('scrollMilhas', () => {
    cy.scrollTo('center')
    cy.get(smilePage.issuePage.btnMilhas).click();

})
//
Cypress.Commands.add('valueToGone', () => {

    cy.get(smilePage.issuePage.selectMilhasGone).invoke('text').then((valueGone) => {
        cy.log(valueGone)
            .should('contain', valueGone)
    })
})

Cypress.Commands.add('valueToBack', () => {

    cy.get(smilePage.issuePage.selectMilhasBack).invoke('text').then((valueBack) => {
        cy.log(valueBack)
            .should('contain', valueBack)
    })
})


Cypress.Commands.add('valueToTotal', () => {


    cy.get(smilePage.issuePage.ticketTotal).invoke('text').then((valueTicketTotal) => {
        cy.log(valueTicketTotal)
            .should('contain', valueTicketTotal)
    })
})

Cypress.Commands.add('valueToTax', () => {

    cy.get(smilePage.issuePage.boardingTax).invoke('text').then((valueTax) => {
        cy.log(valueTax)
            .should('contain', valueTax)
    })
})


Cypress.Commands.add('valueTotalMilhas', () => {


    cy.get(smilePage.issuePage.txtTotal).invoke('text').then((valueTotMilhas) => {
        cy.log(valueTotMilhas)
            .should('contain', valueTotMilhas)
    })
})


Cypress.Commands.add('clickContinues', () => {
    cy.get(smilePage.issuePage.btnTerms).click();
    cy.get(smilePage.issuePage.btnContinues).click();

})

Cypress.Commands.add('validateTitle', () => {
    cy.get(smilePage.issuePage.titlePage).should('have.value','Acesse sua conta')
    

})