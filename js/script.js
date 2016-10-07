var nav = document.querySelector('.nav');
var navList = document.querySelector('.nav__list');
var menu = document.querySelector('.nav__menu');
var cross = document.querySelector('.nav__close');
var hotelSearchBtn = document.querySelector('.hotel-search__header');
var hotelSearchBody = document.querySelector('.hotel-search__body');
var formMinus = document.querySelector('.hotel-search__decrease');
var formPlus = document.querySelector('.hotel-search__increase');
var adultCount = document.getElementById('adult-count');
var childrenCount = document.getElementById('children-count');

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

menu.addEventListener('click', function() {
	if (menuClosed) {
		document.body.insertBefore(navList, document.body.firstElementChild);
		navList.style.display = 'flex';
	} else {
		nav.insertBefore(navList, nav.firstElementChild);
		navList.style.display = 'none';
	}

	menuClosed = !menuClosed;
});

hotelSearchBtn.onmousedown = function() {
	return false;
}

hotelSearchBtn.addEventListener('click', function() {
	hotelSearchBody.classList.toggle('hotel-search__body--js-closed');
});

document.querySelector('.hotel-search__wrap').onclick = function(event) {
	var target = event.target;

	if (target.classList.contains('hotel-search__decrease')) {
		event.preventDefault();
		changeCount(target, '-');
	}

	if (target.classList.contains('hotel-search__increase')) {
		event.preventDefault();
		changeCount(target, '+');
	}
}

function changeCount(target, operator) {
	var input = operator == '-' ? target.nextElementSibling
															: target.previousElementSibling;
	
	if (operator == '-' && input.value != 0) {
		input.value--;
	} else if (operator == '+') {
		input.value++;
	}
}