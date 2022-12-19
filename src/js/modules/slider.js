import Swiper, { Navigation }  from 'swiper';

export default function slider () {
	function getSliderSize() {
		const numbers = {
			count: 0,
			space: 0
		};
		const sliderContainer = document.querySelector('.gallery__featured-slider'),
			slides = document.querySelectorAll('.slide'),
			width = Math.trunc(+window.getComputedStyle(sliderContainer).width.match(/[\d.]/g).join('')),
			slideWidth = Math.trunc(+window.getComputedStyle(slides[0]).width.match(/[\d.]/g).join('') + 10),
			count = Math.trunc(width/slideWidth);

		if (count > slides.length) {
			numbers.count = +slides.length;
		} else if (count < 1) {
			numbers.count = 1;
		} else {
			numbers.count = count;
		}

		numbers.space = (width - (numbers.count * slideWidth)) / (numbers.count);
		return numbers;
	}

	function initSlider () {
		return new Swiper('.gallery__featured-slider', {
			loop: false,
			modules: [Navigation],
			navigation: {
				nextEl: '.navigation__next',
				prevEl: '.navigation__prev',
				disabledClass: 'disabled',
			},
			allowTouchMove: true,
			slidesPerView: 'auto',
			spaceBetween: 15,
			centeredSlides: true,
			breakpoints: {
				640: {
					slidesPerView: getSliderSize().count,
					spaceBetween: getSliderSize().space,
					centeredSlides: false,
					allowTouchMove: false,
				},
				325: {
					centeredSlides: false,
				},
			  }
		});
	}

	let swiper = initSlider();

	window.addEventListener('resize', () => {
		swiper.destroy();
		swiper = initSlider();
	});
}
