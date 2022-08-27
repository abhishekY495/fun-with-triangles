const angles = document.querySelectorAll('.angles');
const checkBtn = document.querySelector('.check-btn');

const message = document.querySelector('#output-message');
const triangleGif = document.querySelector('.triangle-gif');
const notTriangleGif = document.querySelector('.not-triangle-gif');

triangleGif.style.display = "none";
notTriangleGif.style.display = "none";
message.style.display = "none";

checkBtn.addEventListener('click', checkTriangle);

function checkTriangle() {
    const angle1 = angles[0].value;
    const angle2 = angles[1].value;
    const angle3 = angles[2].value;

    const sum = sumOfAngels(angle1, angle2, angle3);

    if (angle1 && angle2 && angle3) {
        if (angle1>0 && angle2>0 && angle3>0) {
            if (sum === 180) {
                triangleMsgOutput();
            } else {
                notTriangleMsgOutput();
            }            
        } else {
            message.innerText = 'Cannot be negative.';
            message.style.display = "block";
            triangleGif.style.display = "none";
            notTriangleGif.style.display = "none";
        }
    } else {
        message.innerText = 'Enter all fields.';
        message.style.display = "block";
        triangleGif.style.display = "none";
        notTriangleGif.style.display = "none";
    }
}

function sumOfAngels(angle1, angle2, angle3) {
    const sum = Number(angle1) + Number(angle2) + Number(angle3);
    return sum;
}

function triangleMsgOutput() {
    message.innerHTML = 'Its a <span>Triangle</span>';
    message.style.display = "block";
    notTriangleGif.style.display = "none";
    triangleGif.style.display = "block";
}

function notTriangleMsgOutput() {
    message.innerHTML = 'Its <span>Not a Triangle</span>';
    message.style.display = "block";
    triangleGif.style.display = "none";
    notTriangleGif.style.display = "block";
}