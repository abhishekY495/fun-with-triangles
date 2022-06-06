const angles = document.querySelectorAll('.angles');
const checkBtn = document.querySelector('.check-btn');

const message = document.querySelector('#output-message');
const gif = document.querySelector('.gif');

gif.style.display = "none";
message.style.display = "none";

checkBtn.addEventListener('click', checkTriangle);

function checkTriangle() {
    const sum = sumOfAngels(angles[0].value, angles[1].value, angles[2].value);

    if (angles[0].value && angles[1].value && angles[2].value) {
        if (sum === 180) {
            message.innerHTML = 'Yes, Its a <span>Triangle</span>';
            message.style.display = "block";
            gif.src = './Images/triangle.gif';
            gif.alt = 'Glowing triangle';
            gif.style.display = "block";
        } else {
            message.innerHTML = 'No, Its <span>Not a Triangle</span>';
            message.style.display = "block";
            gif.src = './Images/not-triangle.gif';
            gif.alt = 'Weird shape morphing';
            gif.style.display = "block";
        }
    } else {
        message.innerText = 'Enter all fields.';
        message.style.display = "block";
        gif.style.display = "none";
    }
}

function sumOfAngels(angle1, angle2, angle3) {
    const sum = Number(angle1) + Number(angle2) + Number(angle3);
    return sum;
}