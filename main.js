const addoneButton = document.querySelector('#plusone');
const addtenButton = document.querySelector('#plusten');
const resetButton = document.querySelector('#reset');
const output = document.querySelector('#output');

// Add one to given number
function addOne(value) {
	return value + 1;
}

// Add ten to given number
function addTen(value) {
	return value + 10;
}

// Return 0 as a initial value
function resetValue() {
	return 0;
}

// show zero into HTML element
function setInitialValue(node) {
	node.textContent = resetValue();
}

// Get number value from HTML element
function getValue(node) {
	return parseInt(node.textContent);
}

function setValue(node, value) {
	node.textContent = value;
}

function init() {
	// Show zero into output div
	setInitialValue(output);

	addoneButton.addEventListener('click', function() {
		let value = getValue(output);
		value = addOne(value);
		setValue(output, value);
	});

	addtenButton.addEventListener('click', function() {
		let value = getValue(output);
		value = addTen(value);
		setValue(output, value);
	});

	resetButton.addEventListener('click', function() {
		setValue(output, resetValue());
	});
}

init();



