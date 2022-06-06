const base = document.querySelector('#base-value');
const height = document.querySelector('#height-value');

const calculateBtn = document.querySelector('.calculate-btn');
const output = document.querySelector('#output-message');

calculateBtn.addEventListener('click', calculateArea);

function calculateArea() {
    if (base.value && height.value) {
        const area = (base.value * height.value) / 2;
        output.innerHTML = `The area is <span>${area}</span> cm²`;
    } else {
        output.innerHTML = 'Enter both fields.';
    }
}