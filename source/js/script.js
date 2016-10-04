var nav = document.querySelector('.nav');
var navList = document.querySelector('.nav__list');
var menu = document.querySelector('.nav__menu');
var cross = document.querySelector('.nav__close');

var menuClosed = true;

window.onresize = function() {
	if (window.innerWidth > 767 && navList.style.display == 'none') {
		navList.style.display = 'flex';
	}

	if (window.innerWidth > 767 && !menuClosed) {
		nav.insertBefore(navList, nav.firstElementChild);
		menuClosed = true;
	}

	if (window.innerWidth < 768 && navList.style.display == 'flex') {
		navList.style.display = 'none';
	}
}

menu.addEventListener('click', function(event) {
	if (menuClosed) {
		document.body.insertBefore(navList, document.body.firstElementChild);
		navList.style.display = 'flex';
	} else {
		nav.insertBefore(navList, nav.firstElementChild);
		navList.style.display = 'none';
	}

	menuClosed = !menuClosed;
});