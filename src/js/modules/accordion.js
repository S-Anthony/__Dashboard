export default function accordion () {
	const accordion = document.querySelector('[data-accordion]'),
		  trigger = document.querySelector('[data-accordion-trigger]'),
		  activeClass = 'opened';

	trigger.addEventListener('click', () => {
		accordion.classList.toggle(activeClass);
	});
} 
