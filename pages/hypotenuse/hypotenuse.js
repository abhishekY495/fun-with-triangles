const valueA = document.querySelector('#base-value-a');
const valueB = document.querySelector('#base-value-b');

const calculateBtn = document.querySelector('.calulate-btn');
const output = document.querySelector('#output-message');

calculateBtn.addEventListener('click', calculateHypotenuse);

function calculateHypotenuse() {
    const a = Number(valueA.value);
    const b = Number(valueB.value);

    if (a && b) {
        const hypotenuse = Math.sqrt(a**2 + b**2);
        output.innerText = `The hypotenuse is ${hypotenuse}`;
    } else {
        output.innerText = 'Enter both fields.';
    }
}