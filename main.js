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

// Event Listeners
sliderArrows.forEach((arrow) => {
	arrow.addEventListener('click', (e) => {
		play(e.target.classList);
	});
});
