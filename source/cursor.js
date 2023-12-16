import { $ } from './lib';

document.addEventListener('DOMContentLoaded', function () {

    let clientX = -100;
    let clientY = -100;
    const innerCursor = document.querySelector('.customCursor');

    const initCursor = () => {

        document.addEventListener('mousemove', e => {
            clientX = e.clientX;
            clientY = e.clientY;
        });

        const render = () => {
            innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
            requestAnimationFrame(render);
        };

        requestAnimationFrame(render);
    };

    const animateCursor = (type, remove) => $('.customCursor').classList.toggle(type, remove);

    initCursor();



    // Get the element with the class 'js-cursor-previous'
    const $previous = $('.js-cursor-previous');

    if ($previous) {
        // Add event listeners for mouseenter and mouseleave
        $previous.addEventListener('mouseenter', () => animateCursor('previous', true));
        $previous.addEventListener('mouseleave', () => animateCursor('previous', false));
    }

    // Get the element with the class 'js-cursor-previous'
    const $next = $('.js-cursor-next');

    if ($next) {
        // Add event listeners for mouseenter and mouseleave
        $next.addEventListener('mouseenter', () => animateCursor('next', true));
        $next.addEventListener('mouseleave', () => animateCursor('next', false));
    }

});