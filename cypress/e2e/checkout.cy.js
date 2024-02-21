///<reference types="cypress"/>




context('Funcionalidade: Compra e Checkout', () => {
///Como cliente
///Quero fazer checkout
///Para realizar minha compra


    beforeEach('', () => {
        cy.visit('https://practice.automationtesting.in/shop')
    });
   afterEach('', () => {
        cy.screenshot()
   });

    it('Deve realizar o check-out e finalizar compra com sucesso', () => {

        cy.get('.post-169').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', 'Android')

        cy.get('.woocommerce-message > .button').click()
        cy.get('.cart_item > .product-name').should('contain', 'Android')
        cy.get('.checkout-button').click()

        cy.get('#billing_first_name').type('Mario')
        cy.get('#billing_last_name').type('tot')
        cy.get('#billing_email').type('mariotot22@gmail.com')
        cy.get('#billing_phone').type('119999999')
        cy.get('#select2-chosen-1').type("Brazil{enter}")
        cy.get('#billing_address_1').type('avenida jjjj')
        cy.get('#billing_city').type('São Paulo')
        cy.get('#select2-chosen-2').type('São Paulo{enter}')
        cy.get('#billing_postcode').type("02225-555")
        cy.get('#place_order').click()

        cy.get('.woocommerce-thankyou-order-received').should('contain' , 'Thank')

    });

    it('Deve exibir uma mensagem de alerta para dados inválidos', () => {

        cy.get('.post-170').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', 'Functional')

        cy.get('.woocommerce-message > .button').click()
        cy.get('.cart_item > .product-name').should('contain', 'Functional')
        cy.get('.checkout-button').click()

        cy.get('#place_order').click()
        cy.get('.woocommerce-error').should('contain' , 'Billing')
    });
});