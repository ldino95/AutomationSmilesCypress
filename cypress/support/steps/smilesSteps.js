/* global Given, When, Then, And*/
/// <reference types="Cypress"/> 

import smileAction from "../actions/smileActions"

beforeEach(() => {

	Cypress.on('uncaught:exception', (err, runnable) => { //ignora erros da página
		return false

	})


Given(/^que estou no site da smile$/, () => {
    cy.visit('/home')
    cy.validatePage();

});

When(/^informo dados da viagem$/, () => {
	cy.travelDate();
});

Then(/^seleneciono voo e milhas$/, () => {
	cy.selectVoo();
    cy.scrollMilhas();
});

And(/^valido detalhes do voo e clico continuar$/, () => {
    cy.valueToTotal();
	cy.valueToTax();
	cy.valueTotalMilhas();
	cy.clickContinues();

});

And(/^valido pagina de login$/, () => {
	cy.validateTitle();
});


});