export default function dropdpwn () {
	const dropdowns = document.querySelectorAll('[data-dropdown]');

	dropdowns.forEach(item => {
		let opened = false;

		item.addEventListener('click', () => {
			if (opened) {
				item.classList.remove('opened');
				opened = false;
			} else {
				item.classList.add('opened');
				opened = true;
			}
		});
	});
}
