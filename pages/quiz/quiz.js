const form = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('#submit-btn');
const output = document.querySelector('.quiz-score');

const correctAnswers = ['90°', 'Right Angle', '12, 16, 20', 'Equilateral triangle', '100°', '30°', 'a + b + c', '45°'];

submitBtn.addEventListener('click', calculateScore);

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(form);

    for(let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score++;
        }
        index++;
    }
    
    output.innerHTML = `Your Score is <span>${score}</span>/8`
}