const submitFormButton = document.querySelector('#contact-us button');
const errorSpans = Array.from(document.querySelectorAll('.error'));
const formHeader = document.querySelector('#contact-us > p');

function validateForm() {
	const formElements = [
		{
			field: 'name',
			value: document.getElementById('name-input').value,
			errorMessage: '',
			inputRegexp: /^[a-zA-Z ]{2,30}$/gi
		},
		{
			field: 'phone',
			value: document.getElementById('phone-input').value,
			errorMessage: '',
			inputRegexp: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/gi
		},
		{
			field: 'email',
			value: document.getElementById('email-input').value,
			errorMessage: '',
			inputRegexp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/gi
		},
		{
			field: 'message',
			value: document.getElementById('message-input').value,
			errorMessage: '',
			inputRegexp: /[a-zA-Z ]{20,200}/gi
		}
	];

	formElements.forEach((element) => {
		if (element.value.length === 0) {
			element.errorMessage = `Please enter a ${element.field}`;
		} else if (element.inputRegexp.test(element.value) === false) {
			element.errorMessage = `Please enter a correct ${element.field}`;
		}
	});

	populateErrors(formElements);
}

function populateErrors(updatedFormElements) {
	errorSpans.forEach((error, index) => (error.textContent = updatedFormElements[index].errorMessage));
}

function submitForm() {
	const errors = [];
	errorSpans.forEach((span) => {
		if (span.textContent !== '') errors.push(span.textContent);
	});

	if (errors.length === 0) {
		formHeader.textContent = 'Thank you! We will contact you very soon';
		setTimeout(() => {
			window.location.reload();
		}, 2000);
	}
}

submitFormButton.addEventListener('click', (e) => {
	e.preventDefault();
	validateForm();
	submitForm();
});
