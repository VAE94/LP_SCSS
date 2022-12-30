class LayoutHandler {
	constructor() {
		this.init();
		this.handleDOM();
		this.handleEvents();
	}

	/**
	 * Declare global variables
	 */
	init() {}

	/**
	 * Handle DOM queries
	 */
	handleDOM() {
		this.burgerButton = document.querySelector('.hamburger');
		this.listNav = document.querySelector('.list-nav');
	}

	/**
	 * Listen for events
	 */
	handleEvents() {
		// Used for functions closures
		const self = this;

		// Hamburger menu
		this.burgerButton.addEventListener('click', () => {
			if (self.burgerButton.classList.toggle('is-active')) {
				self.listNav.style.display = 'block';
			} else {
				self.listNav.style.display = 'none';
			}
		});

		// Swiper1
		let swiper = new Swiper('.mySwiper', {
			spaceBetween: 0,
			centeredSlides: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});

		// Swiper2
		let swiper2 = new Swiper('.mySwiper2', {
			spaceBetween: 0,
			centeredSlides: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});
	}

	/**
	 * Functions
	 */
}
