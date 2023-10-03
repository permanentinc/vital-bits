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

    $('.header-actions__cart__count').classList.add('pulse');

    // Remove the pulse animation class after the animation ends
    setTimeout(() => $('.header-actions__cart__count').classList.remove('pulse'), 3000);
}

const updateSideCart = (cart) => {

    let html = '';
    let $side_cart = $('.sidecart-draw-items');

    cart.items.forEach((item, index) => html += sidecart_item(item, index));

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

updateCart();




window.changeSideCartQuantity = (event, amount) => {

    let quantity, input = event.target.parentElement.querySelector('input');
    if (amount !== 0) {
        quantity = parseInt(input.value);
        quantity = (quantity + amount < 1) ? 1 : quantity + amount;
        input.value = quantity;
    }

    let data = {
        line: parseInt(event.target.closest('.sidecart-draw-items__item').dataset.line),
        quantity: (amount == 0) ? 0 : quantity
    };


    // Send the request to Shopify
    fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

        let data = {
            id: form.querySelector('.js-variant').value,
            quantity: parseInt(form.querySelector('.quantity-input input').value)
        };

        // Send the request to Shopify
        fetch('/cart/add.js', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
            // body: new FormData(form),
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
