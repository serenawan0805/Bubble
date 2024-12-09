let countdownElement = document.getElementById("countdown");
let instructionElement = document.getElementById("instruction");

let countdownTimes = [4, 7, 8];
let countdownIndex = 0;
let currentTime = countdownTimes[countdownIndex];

let instructions = ["Breathe", "Hold", "Exhale"];
let countdownTimer;

function startCountdown() {
    countdownElement.innerText = currentTime;
    instructionElement.innerText = instructions[countdownIndex];

    countdownTimer = setInterval(() => {
        currentTime--;
        countdownElement.innerText = currentTime;

        if (currentTime === 0) {
            clearInterval(countdownTimer);
            countdownIndex = (countdownIndex + 1) % 3; 
            currentTime = countdownTimes[countdownIndex];
            
            setTimeout(startCountdown, 1000);
        }
    }, 1000);
}

startCountdown();
