const base = document.querySelector('#base-value');
const height = document.querySelector('#height-value');

const calculateBtn = document.querySelector('.calulate-btn');
const output = document.querySelector('#output-message');

calculateBtn.addEventListener('click', calculateArea);

function calculateArea() {
    if (base.value && height.value) {
        const area = (base.value * height.value) / 2;
        output.innerText = `The area is ${area} cm²`;
    } else {
        output.innerText = 'Enter both fields.';
    }
}