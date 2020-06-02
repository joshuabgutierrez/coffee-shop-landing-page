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

const sliderSection = document.querySelector('section#slider-section');
const mainHeader = document.querySelector('#main-header');

function slider() {
	const slide = `
            <div class="arrow previous"></div>
            <h1>${sliderItems[2].header}</h1>
            <img src="/images/slider-separator-img.png" alt="slider-separator">
            <p>${sliderItems[2].description}</p>
            <button>Make a reservation</button>
            <div class="arrow next"></div>
        `;

	mainHeader.style.background = `url("${sliderItems[2].image}") no-repeat center`;
	sliderSection.innerHTML = slide;
}

slider();
