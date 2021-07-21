const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");

let score = document.querySelector("#score");
let result = 0;
let currentTime = 61;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove("mole");
    })

    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");

    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener("mouseup", () => {
        if (id.id === hitPosition) {
            result++;
            score.textContent = result;
        }
    })
})

function moveMole() {
    // let timerId = 60;
    let timerId = setInterval(randomSquare, 900);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(timerId);
        alert("Game Over! Your final score is : " + result);
        location.reload();
    }
}

let timerId = setInterval(countDown, 1000)
