// Selectors
const sliderSection = document.querySelector('.slider-section');
const mainHeader = document.querySelector('.main-header');
const sliderArrows = document.querySelectorAll('.arrow');
const slideHeader = document.querySelector('.slider-section h1');
const slideSeparator = document.querySelector('.slider-section img');
const slideDescription = document.querySelector('.slider-section p');
const slideButton = document.querySelector('.slider-section button');
const menuButtons = document.querySelectorAll('.menu-button');
const menuItems = document.querySelectorAll('.menu-items');
const toggleBar = document.querySelector('.toggle-bar');
const navBar = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav ul li:not(:first-child) > a');
const makeReservationButton = document.querySelector('.slider-section button');

// Global variables
let slideIndex = 1;

// Functions

const slideInterval = setInterval(function() {
	play(true);
}, 8000);

function play(auto, nameOfClass) {
	if (auto || nameOfClass.contains('next')) {
		if (slideIndex === sliderData.length) {
			slideIndex = 0;
		}
		changeSlide(slideIndex);
		slideIndex++;
	} else {
		const previousIndex = slideIndex - 2;
		changeSlide(previousIndex);
		slideIndex--;
	}
}

function changeSlide(index) {
	const { header, description, image } = sliderData[index];

	mainHeader.style.opacity = 0.9;
	slideHeader.innerHTML = header;
	slideDescription.innerHTML = description;

	setTimeout(() => {
		mainHeader.style.opacity = 1;
		mainHeader.style.transition = 'all 1s ease-in';
		mainHeader.style.backgroundImage = `url('${image}')`;
	}, 1000);

	slideshowFadeIn();
}

function slideshowFadeIn() {
	const tl = gsap.timeline({ defaults: { duration: 0.8 } });
	tl
		.from(slideHeader, { y: 50, opacity: 0 })
		.from(slideSeparator, { y: 100, opacity: 0 })
		.from(slideDescription, { y: 50, opacity: 0 })
		.from(slideButton, { opacity: 0 });
}

function displayMenuItemsSelected(e) {
	e.preventDefault();

	const menuButtonSelected = e.target;
	const menuItemSelected = document.querySelector(`#${e.target.dataset.target}`);

	menuButtons.forEach((button) => {
		button.classList.remove('active');
		menuButtonSelected.classList.add('active');
	});

	menuItems.forEach((item) => {
		item.style.display = 'none';
		menuItemSelected.style.display = 'grid';
	});
}

function displayMenu() {
	this.classList.toggle('toggle');
	navBar.classList.toggle('toggle');
}

function smoothScrollTo() {
	const sectionSelectedId = this.dataset.target;
	const sectionSelected = document.querySelector(`#${sectionSelectedId}`);
	const sectionSelectedCoords = sectionSelected.getBoundingClientRect();

	window.scrollTo({
		top: sectionSelectedCoords.top,
		behavior: 'smooth'
	});
}

// Event Listeners
sliderArrows.forEach((arrow) => {
	arrow.addEventListener('click', (e) => {
		play(e.target.classList);
	});
});

menuButtons.forEach((button) => {
	button.addEventListener('click', displayMenuItemsSelected);
});

navLinks.forEach((link) => {
	link.addEventListener('click', smoothScrollTo);
});

makeReservationButton.addEventListener('click', smoothScrollTo);

toggleBar.addEventListener('click', displayMenu);
