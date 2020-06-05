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
const slideDescription = document.querySelector('.slider-section p');

let slideIndex = 1;
let slideInterval = setInterval(function() {
	play(true);
}, 7000);

// Functions
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

// Animate the slideshow
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
}

// Events
sliderArrows.forEach((arrow) => {
	arrow.addEventListener('click', (e) => {
		play(e.target.classList);
	});
});
