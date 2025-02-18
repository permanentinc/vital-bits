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
import './cursor';
import { Accordion } from './accordion';
import { quickview_item } from './templates';
import Flickity from 'flickity';
import inView from 'in-view';
import anime from 'animejs/lib/anime.es.js';
import Choices from 'choices.js';
import GLightbox from 'glightbox';
import Splitting from "splitting";
import Typewriter from 'typewriter-effect/dist/core';

document.addEventListener('DOMContentLoaded', function () {

    document.body.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('js-show-quickview')) {
            e.preventDefault();

            console.log('show quickview');


            // Show the quickview flyout
            document.body.classList.add('quickview-visible');

            // Get the product handle
            let product_handle = e.target.dataset.id;
            let product_collection = e.target.dataset.collection;
            if (product_collection) $('.quickview').setAttribute('data-theme', product_collection.toLowerCase().replace(/ /g, '-'));

            let $quickviewContent = $('.js-quickview-content');
            fetch(`/products/${product_handle}.json`)
                .then((response) => response.json())
                .then((data) => {
                    let product = data.product;

                    let html = /*html*/`
                            <div class="product-gallery">
                                <div class="product-slider [ js-quickview-imagery-slider ]">
                                  ${product.images.map((media) => {
                        return /*html*/`
                                    <div class="product-slider-item">
                                      <img
                                        class="[ js-product-slider-item-image ]"
                                        src="${media.src}"
                                        alt="${media.alt}"
                                        data-lightbox-image="${media.src}"
                                        width="1080"
                                        height="1080"
                                        loading="lazy">
                                    </div>`}).join('')}
                                </div>
                            </div>
                                
                            <div class="product-details">
                                ${(product_collection) ?
                            `<h6 class="product-details__category no-margin">
                                        <b>${product_collection}</b>
                                    </h6>`: null}
                                <h4>
                                  <b>${product.title}</b>
                                </h4>
                            </div>
                                
                            <div class="product-details-price">
                              <p class="h4">
                                <b class="[ js-variation-price ]">
                                    $${product.variants[0].price}
                                </b>
                              </p>
                            </div>

                            <div class="product-details-form">
                                <form method="post" action="/cart/add" id="product_form_${product.id}" accept-charset="UTF-8" class="shopify-product-form" enctype="multipart/form-data" novalidate="novalidate" data-product-form="">
                                <input type="hidden" name="form_type" value="product" />
                                <input type="hidden" name="utf8" value="✓" />

                                  <div class="product-actions">
                                    <div class="quantity">
                                      <div class="quantity-remove" onclick="changeQuantity(event,-1)">-</div>
                                      <div class="quantity-input">
                                        <input type="text" value="1">
                                      </div>
                                      <div class="quantity-add" onclick="changeQuantity(event,1)">+</div>
                                    </div>
                                    <a href="#" class="button [ js-add-to-cart ]">Add to Cart <span class="loader"></span></a>
                                  </div>

                                  
                                  <select ${(product.variants.length > 1) ? `  class="[ js-variant ][ js-choices ]"` : ` style="display:none;" class="[ js-variant ]"`} name="id" id="ProductSelect-template--23800677400894__main">
                                    ${product.variants.map((variant) => `<option value="${variant.id}">${variant.title}</option>`).join('')}
                                  </select>

                                  <input type="hidden" name="product-id" value="${product.id}" /><input type="hidden" name="section-id" value="template--23800677400894__main" />
                                </form>
                            </div>

                            <div class="product-details-description">
                                ${product.body_html.match(/<p>(.*?)<\/p>/)[0]}
                            </div>                           
                            `;


                    $quickviewContent.innerHTML = html;

                    $('.js-quickview-link').setAttribute('href', `/products/${product_handle}`);

                    let quickview_slider = new Flickity('.js-quickview-imagery-slider', {
                        wrapAround: true,
                        pageDots: false,
                        prevNextButtons: false,
                    });

                    // $('.js-cursor-previous').addEventListener('click', (e) => {
                    //     e.preventDefault();
                    //     quickview_slider.previous();
                    // });


                    // $('.js-cursor-next').addEventListener('click', (e) => {
                    //     e.preventDefault();
                    //     quickview_slider.next();
                    // });

                    Afterpay.createPlacements({
                        targetSelector: '.product-details-price',
                        attributes: {
                            locale: Afterpay.locale.EN_NZ,
                            currency: Afterpay.currency.NZD,
                            amount: product.variants[0].price,
                            size: Afterpay.size.XS,
                            logoType: Afterpay.logoType.BADGE,
                            badgeTheme: Afterpay.theme.badge.BLACK_ON_WHITE,
                            modalLinkStyle: Afterpay.modalLinkStyle.CIRCLED_QUESTION_ICON
                            // amountSelector: '.placement-card .product-price-selector',
                        }
                    });



                    // Declare our choices options
                    const options = {
                        searchEnabled: false,
                        itemSelectText: '',
                        shouldSort: false,
                        placeholder: true,
                        allowHTML: true
                    };

                    if ($('.js-choices')) {
                        new Choices($('.js-choices'), options);

                        $('.js-variant').addEventListener('change', event => {
                            let variant = event.detail.value;
                            let variantData = window.inventories[variant];

                            $('.js-variation-price').innerHTML = variantData.price;
                        });
                    }

                    $$('.product-details-description h4').forEach(element => {
                        let uuid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                        //wrap html in span
                        let html = element.outerHTML;

                        // strip all html tags
                        html = html.replace(/(<([^>]+)>)/gi, "");

                        // get all the html until the next h4
                        let content = '';
                        let next = element.nextElementSibling;
                        while (next && next.tagName !== 'H4') {
                            content += next.outerHTML;
                            nextNext = next.nextElementSibling;
                            next.outerHTML = '';
                            next = nextNext;
                        }

                        element.outerHTML = /*html*/`
                                <section class="accordion-element accordion-element-dynamic [ element ]">
                                    <div class="accordion-element__wrap">
                                        <div class="accordion-element__item [ js-accordion-element ][ js-accordion-element-dynamic ]" id="accordion_${uuid}">
                                            <button class="accordion-element__trigger [ js-trigger ]" aria-expanded="false" aria-controls="accordion_section_${uuid}">
                                                <h6 class="no-margin">
                                                    <b>${html}</b>
                                                </h6>
                                            </button>
                                            <div class="accordion-element__content [ js-content ]" role="region" aria-labelledby="accordion_section_${uuid}">
                                                <div class="accordion-element__inner">
                                                  ${content}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>`;
                    });

                    setTimeout(() => {
                        $$('.js-accordion-element-dynamic').forEach(element => new Accordion(element));
                    }, 400);

                });

        }
    });



    Splitting();

    //We care for your bits. Your private bits. Your life bits.

    var typewriter1 = new Typewriter($('.js-typed-1'), {
        delay: 100,
        cursor: ''
    });
    typewriter1.pauseFor(50).typeString('We care for your bits.').start();


    var typewriter2 = new Typewriter($('.js-typed-2'), {
        delay: 100,
        cursor: ''
    });
    typewriter2.pauseFor(3000).typeString('Your private bits.').start();


    var typewriter3 = new Typewriter($('.js-typed-3'), {
        delay: 100,
        cursor: ''
    });
    typewriter3.pauseFor(5500).typeString('Your life bits.').start();


    setTimeout(() => {
        typewriter1.stop().deleteAll(1);
        typewriter2.stop().deleteAll(1);
        typewriter3.stop().deleteAll(1);

        typewriter1.pauseFor(50).typeString('We care for your bits.').start();
        typewriter2.pauseFor(3000).typeString('Your private bits.').start();
        typewriter3.pauseFor(5500).typeString('Your life bits.').start();
    }, 8522);


    // typewriter
    //     .pauseFor(1500)
    //     .typeString('We care for your bits.')
    //     .pauseFor(1000)
    //     .deleteChars(5)
    //     .typeString('private bits.')
    //     .pauseFor(1000)
    //     .deleteChars(13)
    //     .typeString('life bits.')
    //     .start();

    // typewriter
    //     .pauseFor(1500)
    //     .typeString('We care for your bits.')
    //     .pauseFor(1000)

    //     .typeString('Your private bits.')
    //     .pauseFor(1000)
    //     .typeString('Your life bits.')
    //     .start();

}, false);

inView('.js-gradient').on('enter', el => {
    el.classList.add('inview');
    $('body').setAttribute('data-theme', el.dataset.collection.toLowerCase().replace(/ /g, '-'));
});


if ($('.js-accordion-element')) {
    $$('.js-accordion-element').forEach(element => new Accordion(element));
}

if ($('.product-details')) {

    // Declare our choices options
    const options = {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        placeholder: true,
        allowHTML: true
    };

    if ($('.js-choices')) {
        new Choices($('.js-choices'), options);

        $('.js-variant').addEventListener('change', event => {
            let variant = event.detail.value;
            let variantData = window.inventories[variant];

            $('.js-variation-price').innerHTML = variantData.price;
        });
    }

    $$('.product-details h4').forEach(element => {
        let uuid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        //wrap html in span
        let html = element.outerHTML;

        // strip all html tags
        html = html.replace(/(<([^>]+)>)/gi, "");

        // get all the html until the next h4
        let content = '';
        let next = element.nextElementSibling;
        while (next && next.tagName !== 'H4') {
            content += next.outerHTML;
            nextNext = next.nextElementSibling;
            next.outerHTML = '';
            next = nextNext;
        }

        element.outerHTML = /*html*/`
                <section class="accordion-element accordion-element-dynamic [ element ]">
                    <div class="accordion-element__wrap">
                        <div class="accordion-element__item [ js-accordion-element ][ js-accordion-element-dynamic ]" id="accordion_${uuid}">
                            <button class="accordion-element__trigger [ js-trigger ]" aria-expanded="false" aria-controls="accordion_section_${uuid}">
                                <h6 class="no-margin">
                                    <b>${html}</b>
                                </h6>
                            </button>
                            <div class="accordion-element__content [ js-content ]" role="region" aria-labelledby="accordion_section_${uuid}">
                                <div class="accordion-element__inner">
                                  ${content}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`;
    });

    setTimeout(() => {
        $$('.js-accordion-element-dynamic').forEach(element => new Accordion(element));
    }, 400);

}

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
    window.flkty = new Flickity('.collections__slider', {
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        initialIndex: (window.innerWidth > 768) ? 1 : 0
    });
}

let $slidePrevious = $('.js-collection-slider-prev');

if ($slidePrevious) {
    $slidePrevious.addEventListener('click', (e) => {
        e.preventDefault();
        window.flkty.previous();
    });
}

let $slideNext = $('.js-collection-slider-next');

if ($slideNext) {
    $slideNext.addEventListener('click', (e) => {
        e.preventDefault();
        window.flkty.next();
    });
}


let $collection_triggers = $$('.js-collection-slider-trigger');

if ($collection_triggers) {
    $collection_triggers.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            let handle = element.getAttribute('data-handle');
            let title = element.getAttribute('data-title');
            let url = element.getAttribute('data-url');
            let copy = element.getAttribute('data-copy');

            // Send the request to Shopify
            fetch(`/collections/${handle}/products.json`)
                .then((response) => response.json())
                .then((data) => {

                    let items = $$('.collections__slider__item--product');


                    $('.collections__slider__item--text').innerHTML = `
                        <h2>
                          <b>${title}</b>
                        </h2>
                        <p>
                          <b>${copy}</b>
                        </p>
                        <p>
                          <a href="${url}" class="button">Shop all</a>
                        </p>
                    `;

                    items.forEach((item) => {
                        window.flkty.remove(item);
                    });

                    $('.collections').setAttribute('data-theme', handle.toLowerCase().replace(/ /g, '-'));

                    var newItems = [];

                    data.products.forEach((product) => {

                        let full_description = product.body_html;

                        // extract the first paragraph from the description
                        let description = full_description.match(/<p>(.*?)<\/p>/)[0];

                        let newElement = document.createElement('a');
                        newElement.classList.add('collections__slider__item');
                        newElement.classList.add('collections__slider__item--product');

                        newElement.setAttribute('href', '/products/' + product.handle);

                        newElement.innerHTML = `
                            <div
                              class="collections__slider__item__quickview [ js-show-quickview ]"
                              data-tooltip
                              data-id="${product.handle}"
                              data-collection="${handle}"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="19.707" height="19.708">
                                <path fill="#FFF" fill-rule="nonzero" d="M7.899 0c4.361 0 7.898 3.531 7.898 7.888 0 1.825-.62 3.505-1.663 4.841l5.573 5.563-1.414 1.416-5.577-5.569a7.87 7.87 0 0 1-4.817 1.637C3.537 15.776 0 12.245 0 7.888 0 3.53 3.537 0 7.899 0Zm0 2A5.893 5.893 0 0 0 2 7.888a5.893 5.893 0 0 0 5.899 5.888 5.893 5.893 0 0 0 5.898-5.888A5.893 5.893 0 0 0 7.899 2Z"></path>
                              </svg>
                              <div class="tooltip">
                                <div class="tooltip__wrap">Quick view</div>
                              </div>
                            </div>

                            <div class="collections__slider__item__image">
                                <img src="${product.images[0].src}" alt="${product.images[0].alt}">
                            </div>
                            <div class="collections__slider__item__title">
                                <h6><b>${product.title}</b></h6>
                                <h6><b>${product.variants[0].price}</b></h6>
                            </div>
                            <div class="collections__slider__item__title">
                                ${description}
                            </div>
                            `;

                        newItems.push(newElement);

                    });


                    flkty.append(newItems);

                    // got to the first slide
                    flkty.select((window.innerWidth > 768) ? 1 : 0);

                    setTimeout(() => {
                        // Scroll to the top of the .collections__slider
                        $('.collections__slider').scrollIntoView({ behavior: 'smooth' });
                    }, 500);

                })
                .catch((data) => {
                    // Show an error message in the console
                    console.log(data);
                });
        })

    });
}

/*------------------------------------------------------------------
In view elements
------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    inView('.js-inview').on('enter', el => el.classList.add('inview'))
}, false);

// On escape press toggle a class on the body
// document.addEventListener('keyup', e => (e.key === 'Escape') ? toggleMobileNavigation() : null);

window.changeQuantity = (event, amount) => {

    let input = event.target.parentElement.querySelector('input');
    let quantity = parseInt(input.value);

    quantity = (quantity + amount < 1) ? 1 : quantity + amount;

    input.value = quantity;
}




/*------------------------------------------------------------------
Import external
------------------------------------------------------------------*/

// import $ from 'jquery';
// import slick from 'slick-carousel';

/*------------------------------------------------------------------
Product gallery slider
------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {

    let tick;
    let percent = 0;
    let hovered = false;
    let $productSlider = $('.js-product-imagery-slider');
    let $productSliderProgress = $('.js-gallery-progress');
    let $productSliderProgressCircle = $('.js-gallery-progress-circle');

    if ($productSlider) {

        /**
         * Reset the progress bars' animation to zero 
         */
        const resetProgressbar = () => {
            $productSliderProgress.style.width = `${0}%`;
            $productSliderProgressCircle.setAttribute('stroke-dashoffset', (0));
            clearInterval(tick);
        };


        /**
         * Start the progress bar animating 
         */
        const startProgressbar = () => {
            // resetProgressbar();
            // hovered = false;
            // percent = 0;
            // tick = setInterval(interval, 10);
        };


        /**
         * Set our animation speed for the progress bar
         */
        const interval = () => {
            if (!hovered) percent += .19;
            $productSliderProgress.style.width = `${percent}%`;
            $productSliderProgressCircle.setAttribute('stroke-dashoffset', (percent * Math.PI));
        };

        let product_slider = new Flickity('.js-product-imagery-slider', {
            wrapAround: true,
            pageDots: false,
            prevNextButtons: false,
        });

        startProgressbar()

        product_slider.on('change', () => startProgressbar());

        $('.js-cursor-previous').addEventListener('click', (e) => {
            e.preventDefault();
            product_slider.previous();
        });


        $('.js-cursor-next').addEventListener('click', (e) => {
            e.preventDefault();
            product_slider.next();
        });


        let images = [];

        const productSliderItemImages = $$('.js-product-slider-item-image');
        productSliderItemImages.forEach((el) => {
            images.push({ 'href': el.getAttribute('data-lightbox-image'), 'type': 'image' });
        });

        const myGallery = GLightbox({
            height: '90%',
            touchNavigation: true,
            lazyload: false,
            elements: images
        });

        document.body.addEventListener('click', (e) => {
            if (e.target.classList.contains('js-product-lightbox')) {
                e.preventDefault();
                myGallery.open();
            }
        });



        if ($('.eye-roll')) {
            document.body.addEventListener('mousemove', function (event) {
                let eye = $('.eye-roll');
                let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
                let y = (eye.getBoundingClientRect().top) + (eye.clientWidth / 2);
                let rad = Math.atan2(event.pageX - x, event.pageY - y);
                let rot = (rad * (180 / Math.PI) * -1) + 180;
                eye.style.webkitTransform = 'rotate(' + rot + 'deg)';
                eye.style.mozTransform = 'rotate(' + rot + 'deg)';
                eye.style.msTransform = 'rotate(' + rot + 'deg)';
                eye.style.transform = 'rotate(' + rot + 'deg)';
            });
        }

    }

});




/*------------------------------------------------------------------
Variables
------------------------------------------------------------------*/



const $megaHover = $$('.js-mega-menu-hover');
const $megaTarget = $$('.mega');
let hoverTimeout;

const showMenu = (element) => {
    clearTimeout(hoverTimeout);
    $megaHover.forEach(item => item.classList.remove('hovered'));
    $megaTarget.forEach(item => item.classList.remove('active'));
    element.classList.add('hovered');
    if ($(`.mega[data-id="${element.getAttribute('data-id')}"]`)) $(`.mega[data-id="${element.getAttribute('data-id')}"]`).classList.add('active');
};

const hideMenu = () => {
    $megaTarget.forEach(item => item.classList.remove('active'));
    $megaHover.forEach(item => item.classList.remove('hovered'));
};

$megaHover.forEach(item => {
    item.addEventListener('mouseenter', (e) => showMenu(e.currentTarget));
    item.addEventListener('mouseleave', () => hoverTimeout = setTimeout(() => hideMenu(), 800));
});

$megaTarget.forEach(item => {
    item.addEventListener('mouseenter', () => clearTimeout(hoverTimeout));
    item.addEventListener('mouseleave', () => hoverTimeout = setTimeout(() => hideMenu(), 800));
});

window.addEventListener('scroll', () => hideMenu());


document.addEventListener('DOMContentLoaded', function () {

    /*------------------------------------------------------------------
    Preload Images
    ------------------------------------------------------------------*/

    const preloadImage = (url) => {
        var img = new Image();
        img.src = url;
    }

    const megaImages = $$('.js-mega-image');

    if (megaImages) megaImages.forEach((element) => preloadImage(element.dataset.image));

    /*------------------------------------------------------------------
    Mega menu imagery
    ------------------------------------------------------------------*/

    let clientX = -250;
    let clientY = -250;

    const megaImage = $('.megaImage');

    const initCursor = () => {

        document.addEventListener('mousemove', e => {
            clientX = e.clientX;
            clientY = e.clientY;
        });

        const render = () => {
            megaImage.style.transform = `translate(${clientX}px, ${clientY}px)`;
            requestAnimationFrame(render);
        };

        requestAnimationFrame(render);
    };

    const switchImage = (element, show) => {
        console.log('switchImage')

        const megaImage = $('.megaImage');
        const megaImageImage = $('.megaImage__image');
        if (show) {
            megaImage.classList.add('active');
            megaImageImage.style.backgroundImage = `url(${element.dataset.image})`;
        } else {
            megaImage.classList.remove('active');
        }
    };

    initCursor();

    megaImages.forEach((element) => {
        element.addEventListener('mouseenter', (e) => switchImage(e.currentTarget, true));
        element.addEventListener('mouseleave', (e) => switchImage(e.currentTarget, false));
    });


}, false);



