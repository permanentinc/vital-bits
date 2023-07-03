/*------------------------------------------------------------------
Imports
------------------------------------------------------------------*/

import { $, $$ } from './lib';

/*------------------------------------------------------------------
Search interactions
------------------------------------------------------------------*/

let $search_input = $('.js-search-query');

window.toggleSearchPane = () => {

    document.body.classList.toggle('search-visible');

    if (document.body.classList.contains('search-visible')) {
        setTimeout(() => document.getElementById('search-query').focus(), 1000);
    }

};

document.addEventListener('keyup', (e) => {
    if (e.keyCode === 27) toggleSearchPane();
});



// Our Declare our search variables
const $search_button = $('.js-show-all-results');
const $search_results = $('.search-pane-results');
const $search_grid = $('.js-search-results-grid');
let search_results = [];


// Create the AbortController for the future fetch request
let controller;


/**
 * 
 * Debounce function
 * 
 * @param {function} callback 
 * @param {number} delay 
 * @returns 
 */
const debounce = (callback, delay) => {
    let timeoutId = null;
    return (...args) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => callback.apply(null, args), delay);
    };
}


/**
 * 
 * Placeholder result template
 * 
 * @returns {string} template
 */
const template_search_placeholder = () => {
    return /*html*/`
            <div class="search-pane-results-grid__placeholder">
                <div class="search-pane-results-grid__placeholder__image"></div>
                <div class="search-pane-results-grid__placeholder__type"><p>&nbsp;</p></div>
                <div class="search-pane-results-grid__placeholder__title"><p>&nbsp;<br>&nbsp;</p></div>
            </div>
        `;
}


/**
 * 
 * Search result template
 * 
 * @param {template} result 
 * @returns {string} template
 */
const template_search_result = (result) => {
    // Only return a string if there is a result to augment
    if (result) {


        return /*html*/`
            <a href="${result.url}" class="search-pane-results-grid__item">
                <div class="search-pane-results-grid__item__image">
                    ${(result.featured_image) ? `
                    <img src="${result.featured_image.url}" width="610" height="610" loading="lazy" alt="${result.title}">
                    ` : `
                    <img src="/themes/mercury/dist/images/standard/placeholder.png" width="610" height="610" loading="lazy" alt="${result.title}">
                    `}
                    
                </div>
                <div class="search-pane-results-grid__item__title"><p>${result.title}</p></div>
                <div class="search-pane-results-grid__item__type"><p>${result.price}</p></div>
            </a>
            `;
    } else {
        return '';
    }
}


/**
 * 
 * Show the search animation by enumerating the results with three placeholder elements
 * 
 */
const show_search_animation = () => {
    let html = '';;
    for (let i = 0; i < 2; i++) html += template_search_placeholder();
    html += template_search_placeholder();
    $search_grid.innerHTML = html;
}


/**
 * 
 * Show the first three search results
 * 
 */
const update_search_results = () => {
    let html = '';;
    for (let i = 0; i < 3; i++) html += template_search_result(search_results[i]);
    $search_grid.innerHTML = html;
}


/**
 * 
 * Show the no results found message
 * 
 */
const no_results_found = () => {
    let html = /*html*/`
        <div class="search-pane-results-grid__no-results">
            <h5><b>Sorry, there are no suggestions for that term</b></h5>
            <p>Why not view our collections <a href="/collections">here</a></p>
        </div>`;
    $search_grid.innerHTML = html;
}


/**
 * 
 * Redirect to the search results page showing all results
 * 
 * @returns {void} redirect to the search results page
 */
const go_to_all_results = () => window.location = `/SearchForm/?Search=${$search_input.value}`;


/**
 * 
 * Show the search results grid
 * 
 * @returns {void} show the search results grid
 */
const show_predicitive_search = () => $search_results.classList.add('active');


/**
* 
* Hide the search results grid
* 
* @returns {void} hide the search results grid
*/
const hide_predicitive_search = () => $search_results.classList.remove('active');

/**
 * 
 * Fetch the search results - wrapped in a debounce method to prevent excessive requests
 * 
 */
const search = () => {

    // If there is a previous request, abort it
    if (controller) controller.abort();

    // Setup the new AbortController
    controller = new AbortController();

    // Assign our signal 
    const { signal } = controller;


    if ($search_input.value.length > 0) {
        // Log our fetch request intent
        console.time('search performed in ');

        // Fetch the newly requested results
        fetch(`/search/suggest.json?q=${encodeURIComponent($search_input.value)}&resources[type]=product,page,article,collection&resources[limit]=4&resources[options][unavailable_products]=last&`, { signal })
            .then(response => response.text())
            .then(data => {
                console.timeEnd('search performed in ');

                // Log out our new results for debugging
                data = JSON.parse(data);
                search_results = data.resources.results.products;

                console.log(search_results);

                // Update the search results grid with the new results or a nothing found message
                (search_results.length > 0) ? update_search_results() : no_results_found();
            });
    }

};


/**
 * 
 * Activate the search panel as soon as the user starts interacting with it
 * 
 */
const activate_search = (event) => {

    // Show or hide the search results grid
    ($search_input.value.length) ? show_predicitive_search() : hide_predicitive_search();

    const input = String.fromCharCode(event.keyCode);

    // Test to see it the input was a letter, number or special character
    const letterNumber = /^[0-9a-zA-Z]+$/;

    // Only show the animation if a user has started typing
    if ($search_input.value.length && input.match(letterNumber)) show_search_animation();
};


// Event handler for the search input - this is debounced to prevent excessive requests
$search_input.addEventListener('input', debounce(search, 200));

// Event handler for the search input - this is instant to show action but will not search yet
$search_input.addEventListener('keyup', activate_search);

// Event handler for the search button - this will redirect to the search results page
$search_button.addEventListener('click', go_to_all_results);

// For dev purposes only - remove on live
// document.body.classList.add('searchActive');

// Focus on the search input
// setTimeout(() => document.getElementById('SearchForm_SearchForm_Search').focus(), 1500);
