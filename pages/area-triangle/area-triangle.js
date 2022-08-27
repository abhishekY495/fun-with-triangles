const baseInput = document.querySelector('#base-input');
const heightInput = document.querySelector('#height-input');

const calculateBtn = document.querySelector('.calculate-btn');
const output = document.querySelector('#output-message');

calculateBtn.addEventListener('click', calculateArea);

function calculateArea() {
    const base = baseInput.value;
    const height = heightInput.value;

    if (base && height) {
        if (base>0 && height>0) {
            const area = (base * height) / 2;
            output.innerHTML = `The area is <span>${area}</span> cm²`;
        } else {
            output.innerText = 'Cannot be Negative'
        }
    } else {
        output.innerText = 'Enter both fields.';
    }
}