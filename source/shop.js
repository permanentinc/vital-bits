/*------------------------------------------------------------------
Imports
------------------------------------------------------------------*/

import { $ } from './lib';
import { Notyf } from 'notyf';

// Base notification styles
let notyf = new Notyf({
    duration: 4000,
    dismissible: true,
    icon: false
});

/**
 * 
 * Add to cart interactions
 * 
 */
if ($('.js-add-to-cart')) {

    $('.js-add-to-cart').addEventListener('click', (e) => {

        e.preventDefault();

        // Declare our variables
        let button = e.target;
        let form = button.closest('form');

        // Add a loading animation to the button
        button.classList.add('busy');

        // Send the request to Shopify
        fetch('/cart/add.js', {
            method: 'POST',
            body: new FormData(form),
        })
            .then((response) => response.json())
            .then((data) => {

                // Remove the loading animation from the button
                button.classList.remove('busy');

                // Show a success message
                notyf.success({ message: 'Your cart has been updated', icon: false });

            })
            .catch((data) => {

                // Remove the loading animation from the button
                button.classList.remove('busy');

                // Show an error message in the console
                console.log(data)
            });


    });

}
