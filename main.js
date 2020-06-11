const sliderItems = [
	{
		id: 1,
		header: 'Welcome to Savannah Coffee',
		image: '/images/showcase-image-1.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae corrupti ut facere aperiam distinctio similique quisquam ad'
	},
	{
		id: 2,
		header: 'A brand new coffe shop',
		image: '/images/showcase-image-2.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae corrupti ut facere aperiam distinctio similique quisquam ad'
	},
	{
		id: 3,
		header: 'Taste our best coffee',
		image: '/images/showcase-image-3.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae corrupti ut facere aperiam distinctio similique quisquam ad'
	}
];

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
const menuButtonSelected = document.querySelector('.active');
const selected = document.querySelector('.selected');

// Global variables
let slideIndex = 1;

// Functions

// const slideInterval = setInterval(function() {
// 	play(true);
// }, 8000);

function play(auto, nameOfClass) {
	if (auto || nameOfClass.contains('next')) {
		if (slideIndex === sliderItems.length) {
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
	const { header, description, image } = sliderItems[index];

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

function initialButtonSelected() {
	const initialButton = menuButtonSelected.getBoundingClientRect();

	const initialCoords = {
		width: initialButton.width,
		height: initialButton.height,
		left: initialButton.left + window.scrollX,
		top: initialButton.top + window.scrollY
	};

	const { width, height, left, top } = initialCoords;

	selected.style.width = `${width}px`;
	selected.style.height = `${height}px`;
	selected.style.left = `${left}px`;
	selected.style.top = `${top}px`;
}

function displayMenuItemsSelected(e) {
	e.preventDefault();
	const menuItemSelected = document.querySelector(`#${this.dataset.target}`);
	const menuButtonSelected = e.target;
	const menuButtonSelectedCoords = menuButtonSelected.getBoundingClientRect();

	const selectedCoords = {
		width: menuButtonSelectedCoords.width,
		height: menuButtonSelectedCoords.height,
		left: menuButtonSelectedCoords.left + window.scrollX,
		top: menuButtonSelectedCoords.top + window.scrollY
	};

	const { width, height, left, top } = selectedCoords;

	selected.style.width = `${width}px`;
	selected.style.height = `${height}px`;
	selected.style.left = `${left}px`;

	menuItems.forEach((menuItem) => {
		menuItem.classList.remove('isVisible');
		menuItemSelected.classList.add('isVisible');
	});

	menuButtons.forEach((button) => {
		button.classList.remove('active');
		menuButtonSelected.classList.add('active');
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

initialButtonSelected();
window.addEventListener('resize', initialButtonSelected);
