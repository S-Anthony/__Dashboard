export default function menu () {
	const menu = document.querySelector('.menu'),
		  burgerButton = document.querySelector('.burger-button'),
		  documentBody = document.querySelector('body'),
	      scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

	function showMenu(changeOverflow=false) {
		if (changeOverflow === true) {
			documentBody.style.overflowY = 'hidden';
			documentBody.style.marginRight = `${scrollbarWidth}px`;
		}
		menu.classList.add('opened');
		burgerButton.classList.remove('not-active');
		burgerButton.classList.add('active');
	}

	function hideMenu() {
		documentBody.style.overflowY = 'auto';
		documentBody.style.marginRight = 0;
		menu.classList.remove('opened');
		burgerButton.classList.remove('active');
		burgerButton.classList.add('not-active');
	}

	function burgerButtonClick () {
		if (menu.classList.contains('opened')) {
			hideMenu();
		} else {
			showMenu(true);
		}
	}

	function setListeners() {
		if (window.getComputedStyle(burgerButton).display !== 'none') {
			burgerButton.addEventListener('click', burgerButtonClick);
		} else {
			menu.addEventListener('click', showMenu);
			menu.addEventListener('mouseenter', showMenu);
			menu.addEventListener('mouseleave', hideMenu);
		}
	}

	setListeners();

	window.addEventListener("resize", () => {
		hideMenu();
		menu.removeEventListener("click", showMenu);   
		menu.removeEventListener("mouseenter", showMenu);   
		menu.removeEventListener("mouseleave", hideMenu);  
		burgerButton.removeEventListener("click", burgerButtonClick); 

		setListeners();
	});
}
