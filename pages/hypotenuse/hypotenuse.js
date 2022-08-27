const valueA = document.querySelector('#base-value-a');
const valueB = document.querySelector('#base-value-b');

const calculateBtn = document.querySelector('.calculate-btn');
const output = document.querySelector('#output-message');

calculateBtn.addEventListener('click', calculateHypotenuse);

function calculateHypotenuse() {
    const a = Number(valueA.value);
    const b = Number(valueB.value);

    if (a && b) {
        if (a>0 && b>0) {
            const hypotenuse = Math.sqrt(a**2 + b**2);
            output.innerHTML = `The hypotenuse is <span>${hypotenuse}</span>`;
        } else {
            output.innerText = 'Cannot be negative';
        }
    } else {
        output.innerText = 'Enter both fields';
    }
}