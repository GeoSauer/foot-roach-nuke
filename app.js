import { getRandomItem } from './utils.js';

const opponents = ['boot', 'roach', 'nuke'];

/* State */
let gameState = 'pick'; // 'pick', or 'results'
let pick = ''; // 'boot', 'roach', 'nuke'
let opponentPick = ''; // 'boot', 'roach', 'nuke'
// let result = ''; // 'win', 'lose', or 'draw'

// let wins = 0;
// let losses = 0;
// let draws = 0;

/* Actions */
function loadPage() {
    displayPick();
    displayResults();
    // displayScoreboard();
}

function battle(userPick) {
    gameState = 'results';
    pick = userPick;
    opponentPick = getRandomItem(opponents);

    if (pick === opponentPick) {
        outcomeDisplay.textContent = 'Draw!';
    }
    if (pick === boot && opponentPick === 'roach') {
        outcomeDisplay.textContent = 'You won!';
    }
    if (pick === boot && opponentPick === 'nuke') {
        outcomeDisplay.textContent = 'You lost!';
    }
    if (pick === roach && opponentPick === 'nuke') {
        outcomeDisplay.textContent = 'You won!';
    }
    if (pick === roach && opponentPick === 'boot') {
        outcomeDisplay.textContent = 'You lost!';
    }
    if (pick === nuke && opponentPick === 'boot') {
        outcomeDisplay.textContent = 'You won!';
    }
    if (pick === nuke && opponentPick === 'roach') {
        outcomeDisplay.textContent = 'You lost!';
    }
    loadPage();
}
// result = 'draw';
// draws++;
// } else if (pick === boot) {
//     if (opponentPick === 'roach') {
//         outcomeDisplay.textContent = 'You win!';
//         // result = 'win';
//         // wins++;
//     } else {
//         outcomeDisplay.textContent = 'You lose!';
//         // result = 'loss';
//         // losses++;
//     }
// } else if (pick === roach) {
//     if (opponentPick === 'nuke') {
//         // result = 'win';
//     } else {
//         // result = 'loss';
//     }
// } else if (pick === nuke) {
//     if (opponentPick === 'boot') {
//         // result = 'win';
//     } else {
//         // result = 'loss';
//     }

function playAgain() {
    gameState = 'pick';
    pickDisplay.classList.remove('hidden');
    loadPage();
}

// const totalDisplay = document.getElementById('total-display');
// const winsDisplay = document.getElementById('wins-display');
// const lossesDisplay = document.getElementById('losses-display');
// const drawsDisplay = document.getElementById('draws-display');

// function displayScoreboard() {
//     totalDisplay.textContent = wins + losses + draws;
//     winsDisplay.textContent = wins;
//     lossesDisplay.textContent = losses;
//     drawsDisplay.textContent = draws;
// }

const boot = document.getElementById('pick-boot');
const roach = document.getElementById('pick-roach');
const nuke = document.getElementById('pick-nuke');

const opponentImage = document.getElementById('opponent-image');
const outcomeDisplay = document.getElementById('outcome-display');
const rematchButton = document.getElementById('rematch-button');
// const resultsDisplay = document.getElementById('results-display');
const pickDisplay = document.getElementById('pick-display');
const results = document.getElementById('results');

// display
function displayPick() {
    if (gameState === 'pick') {
        results.classList.add('hidden');
    }
}

function displayResults() {
    if (gameState === 'results') {
        results.classList.remove('hidden');
        pickDisplay.classList.add('hidden');
        opponentImage.src = './assets/' + opponentPick + '.png';
    } else if (gameState === 'pick');
    displayPick;
}

// event listeners
boot.addEventListener('click', () => {
    battle('boot');
    // roach.classList.add('hidden');
    // nuke.classList.add('hidden');
});
roach.addEventListener('click', () => {
    battle('roach');
    // boot.classList.add('hidden');
    // nuke.classList.add('hidden');
});
nuke.addEventListener('click', () => {
    battle('nuke');
    // roach.classList.add('hidden');
    // boot.classList.add('hidden');
});

rematchButton.addEventListener('click', () => {
    playAgain();
});
/* Run page load code */
loadPage();
