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
		header: 'Welcome to Savannah Coffee',
		image: '/images/showcase-image-2.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae corrupti ut facere aperiam distinctio similique quisquam ad'
	},
	{
		id: 3,
		header: 'Welcome to Savannah Coffee',
		image: '/images/showcase-image-3.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae corrupti ut facere aperiam distinctio similique quisquam ad'
	}
];

// Selectors
const sliderSection = document.querySelector('section#slider-section');
const mainHeader = document.querySelector('#main-header');
const sliderArrows = document.querySelectorAll('.arrow');

let slideIndex = 1;
let slideInterval = setInterval(function() {
	play(true);
}, 5000);

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

function changeSlide(index) {
	const slideHeader = document.querySelector('#slider-section h1');
	const slideDescription = document.querySelector('#slider-section p');
	const { header, description, image } = sliderItems[index];

	mainHeader.style.background = `url('${image}') no-repeat center`;
	slideHeader.innerHTML = header;
	slideDescription.innerHTML = description;
}

// Events
sliderArrows.forEach((arrow) => {
	arrow.addEventListener('click', (e) => {
		play(e.target.classList);
	});
});

// Calling functions
