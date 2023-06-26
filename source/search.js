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
