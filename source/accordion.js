export class Accordion {

    /**
     * 
     * Constructor
     * 
     * @param {element} element accordion parent
     */
    constructor(element, open_first_item_on_load = false) {

        this.accordion = element;
        this.open_first_item_on_load = open_first_item_on_load;
        this.trigger = this.accordion.querySelector('.js-trigger');
        this.content = this.accordion.querySelector('.js-content');

        // Initialise the accordion
        this.init();
    }


    /**
     * 
     * Initialise the accordion item
     * 
     */
    init() {

        // Get the initial state of the accordion
        this.getState();

        // Add the click event handler to the accordion
        this.addEventListeners();

        if (this.open_first_item_on_load) {
            this.open(true);
        }

    }


    /**
     * 
     * Get the current state of the accordion
     * 
     */
    getState() {
        this.is_open = this.accordion.classList.contains('active');
    }


    /**
    * 
    * Toggle the current state of the accordion
    * 
    */
    toggle() {
        (this.is_open) ? this.close() : this.open();
    }

    /**
     * 
     * Add the click event handler to the accordion
     * 
     */
    addEventListeners() {
        this.accordion.addEventListener('click', () => this.toggle());
    }


    /**
     * 
     * Add the click event handler to the accordion
     * 
     */
    updateState(state) {

        // Update the current state
        this.is_open = state;

        // Update the aria-expanded attribute
        this.trigger.setAttribute('aria-expanded', state);

    }


    /**
     * 
     * Open the accordion
     * 
     */
    open(instant = false) {

        if (instant) this.content.style.transition = 'none';

        // Add active class to the accordion
        this.accordion.classList.add('active');

        // Quickly get the height we want to animate to
        this.content.style.height = 'auto';
        var height = this.content.clientHeight + 'px';

        // Revert the heioght back to nothing
        this.content.style.height = 0;


        // Animate the height once the calculations are done
        setTimeout(() => this.content.style.height = height, 0);

        // Update the current state
        this.updateState(true);

        setTimeout(() => {
            this.content.style.transition = '0.5s cubic-bezier(0.365, 0.04, 0.44, 1)';
        }, 500);

    }

    /**
     * 
     * Close the accordion
     * 
     */
    close() {

        // Revert the height back to nothing
        this.content.style.height = 0;

        // Remove the active class once animations are over
        this.content.addEventListener('transitionend', () => {
            this.accordion.classList.remove('active');
        }, { once: true });

        // Update the current state
        this.updateState(false);

    }
}

