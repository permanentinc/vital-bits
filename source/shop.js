/*------------------------------------------------------------------
Imports
------------------------------------------------------------------*/

import { $ } from './lib';
import { Notyf } from 'notyf';
import { sidecart_item } from './templates';

// Base notification styles
let notyf = new Notyf({
    duration: 4000,
    dismissible: true,
    icon: false
});


/**
 * 
 * Update the cart count in the header
 * 
 * @param {numbber} count 
 */
const updateCartCount = (count = 0) => {
    let $cart_count = $('.js-cart-count');
    $cart_count.innerHTML = `<b>${count}</b>`;
    $cart_count.classList.toggle('active', count > 0);
}

const updateSideCart = (cart) => {

    let html = '';
    let $side_cart = $('.sidecart-draw-items');

    cart.items.forEach((item, index) => {
        html += sidecart_item(item, index);
    });

    console.log(html)

    $side_cart.innerHTML = html;

}




window.updateCart = () => {

    // Send the request to Shopify
    fetch('/cart.js')
        .then((response) => response.json())
        .then((data) => {

            console.log(data);

            // Update the cart count
            updateCartCount(data.item_count);

            // Update the main sidecart
            updateSideCart(data);

        })
        .catch((data) => {

            // Show an error message in the console
            console.log(data);

        });
}
document.body.classList.add('sidecart-visible');
updateCart();



window.changeSideCartQuantity = (event, amount) => {

    let input = event.target.parentElement.querySelector('input');
    let quantity = parseInt(input.value);

    quantity = (quantity + amount < 1) ? 1 : quantity + amount;

    input.value = quantity;

    let data = {
        line: parseInt(event.target.closest('.sidecart-draw-items__item').dataset.line),
        quantity
    };


    // Send the request to Shopify
    fetch('/cart/change.js', {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((data) => {

            console.log(data);

            // Update the cart count
            updateCartCount(data.item_count);

            // Update the main sidecart
            updateSideCart(data);

        })
        .catch((data) => {

            // Show an error message in the console
            console.log(data);

        });


}

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

                // Update the cart sitewide
                updateCart();

                // Remove the loading animation from the button
                button.classList.remove('busy');

                // Show a success message
                notyf.success({ message: 'Your cart has been updated', icon: false });

            })
            .catch((data) => {

                // Remove the loading animation from the button
                button.classList.remove('busy');

                // Show an error message in the console
                console.log(data);

            });


    });

}
