/*------------------------------------------------------------------
Entry
------------------------------------------------------------------*/

console.log('Vital Bits v1.0.0');


/*------------------------------------------------------------------
Imports
------------------------------------------------------------------*/

import { $, $$ } from './lib';

import anime from 'animejs/lib/anime.es.js';

/*------------------------------------------------------------------
Sticky header  
------------------------------------------------------------------*/

let previousScrollPosition = 0;
let scrollDelta = 5;
let header = $('.header');
let nav = $('.header-nav');
let headerHeight = (header) ? header.clientHeight / 3 : 0;

const stickyHeader = () => {
    console.log('fds')

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


var wave_text = $('.js-wave-text');

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
    targets: '.js-sidecart-wave path',
    d: ['M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,261.3C672,277,768,267,864,250.7C960,235,1056,213,1152,213.3C1248,213,1344,235,1392,245.3L1440,256L1440,320'],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
    duration: 4000
});


