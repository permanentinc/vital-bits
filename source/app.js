/*------------------------------------------------------------------
Entry
------------------------------------------------------------------*/

console.log('Vital Bits v1.0.0');


/*------------------------------------------------------------------
Imports
------------------------------------------------------------------*/

import { $, $$ } from './lib';
import './search';
import './shop';
import Flickity from 'flickity';
import inView from 'in-view';
import anime from 'animejs/lib/anime.es.js';
import MatchHeight from 'vanilla-js-match-height';

// new MatchHeight('.articles-grid__item__content h4');


/*------------------------------------------------------------------
Sticky header  
------------------------------------------------------------------*/

let previousScrollPosition = 0;
let scrollDelta = 5;
let header = $('.header');
let nav = $('.header-nav');
let headerHeight = (header) ? header.clientHeight / 3 : 0;


const stickyHeader = () => {
    let st = window.scrollY;
    if (Math.abs(previousScrollPosition - st) <= scrollDelta) return;
    if (st <= 10) {
        header.classList.remove('nav-down');
        header.classList.remove('nav-up');
        nav.classList.remove('coloured');
    } else if (st > previousScrollPosition && st > headerHeight) {
        header.classList.remove('nav-down');
        header.classList.add('nav-up');
        nav.classList.add('coloured');
    } else {
        if (st + window.innerHeight < document.body.clientHeight) {
            header.classList.add('nav-down');
            header.classList.remove('nav-up');
        }
    }
    previousScrollPosition = st;
}

window.addEventListener('scroll', stickyHeader);

let wave_text = $('.js-wave-text');

wave_text.innerHTML = wave_text.textContent.replace(/\S/g, '<span class="letter">$&</span>');

let wave = anime
    .timeline({ autoplay: false })
    .add({
        targets: '.js-wave-text .letter',
        translateY: [0, -2, 0],
        easing: 'easeOutExpo',
        duration: 500,
        autoplay: false,
        delay: (el, i) => 10 * i
    });


setInterval(() => wave.play(), 20000);


anime({
    targets: '.js-wave path',
    d: ['M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,261.3C672,277,768,267,864,250.7C960,235,1056,213,1152,213.3C1248,213,1344,235,1392,245.3L1440,256L1440,320'],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
    duration: 10000
});


/*------------------------------------------------------------------
Side cart interactions
------------------------------------------------------------------*/

const toggleSidecart = () => document.body.classList.toggle('sidecart-visible');


window.toggleMobileNavigation = () => {
    document.body.classList.toggle('mobile-navigation-visible')
};


/**
 * Define the square animation
 */
const marquee = anime({
    targets: '.collections__marquee__animation,.related-products__marquee__animation,.collection-grid__marquee__animation',
    translateX: '-10%',
    easing: 'linear',
    autoplay: false
});

/**
 * Define the square animation
 */
const blog_image = anime({
    targets: '.banner-blog-image',
    rotateX: '10',
    rotateY: '-10',
    scale: 1.1,
    easing: 'linear',
    autoplay: false
});


/**
 * Define the square animation
 */
const blog_image_shadow = anime({
    targets: '.banner-blog-image__shadow',
    opacity: 1,
    easing: 'linear',
    autoplay: false
});


/**
 * Calculate the scroll percentage position
 */
const scrollPercent = () => (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;


/**
 * Add a scroll listener on the window object to
 * control animations based on scroll percentage.
 */
window.onscroll = () => {
    marquee.seek((scrollPercent() / 100) * marquee.duration);
    blog_image.seek((scrollPercent() / 100) * blog_image.duration);
    blog_image_shadow.seek((scrollPercent() / 100) * blog_image_shadow.duration);
};


/*------------------------------------------------------------------
Banner slider block - Flickity
------------------------------------------------------------------*/

if ($('.collections__slider')) {
    new Flickity('.collections__slider', {
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        initialIndex: (window.innerWidth > 768) ? 1 : 0
    });
}

/*------------------------------------------------------------------
In view elements
------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    inView('.js-inview').on('enter', el => el.classList.add('inview'))
}, false);

// On escape press toggle a class on the body
document.addEventListener('keyup', e => (e.key === 'Escape') ? toggleMobileNavigation() : null);

window.changeQuantity = (event, amount) => {

    let input = event.target.parentElement.querySelector('input');
    let quantity = parseInt(input.value);

    quantity = (quantity + amount < 1) ? 1 : quantity + amount;

    input.value = quantity;
}
