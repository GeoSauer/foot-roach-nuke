// function getRandomItem(array) {
//     const random = getRandomNumber(array.length);
//     const item = array[random];
//     return item;
// }

function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}

const opponents = ['boot', 'roach', 'nuke'];

/* State */
let gameState = 'pick'; // 'pick', or 'results'
let pick = ''; // 'boot', 'roach', 'nuke'
let opponentPick = ''; // 'boot', 'roach', 'nuke'
// let result = ''; // 'win', 'lose', or 'draw'

/* Actions */
function loadPage() {
    displayPick();
    displayResults();
}

function battle(userPick) {
    gameState = 'results';
    pick = userPick;
    opponentPick = getRandomNumber(opponents);

    if (pick === opponentPick) {
        // result = 'draw';
    } else if (pick === boot) {
        if (opponentPick === 'roach') {
            // result = 'win';
        } else {
            // result = 'loss';
        }
    } else if (pick === roach) {
        if (opponentPick === 'nuke') {
            // result = 'win';
        } else {
            // result = 'loss';
        }
    } else if (pick === nuke) {
        if (opponentPick === 'boot') {
            // result = 'win';
        } else {
            // result = 'loss';
        }
    }
    loadPage();
}

/* Components */
const boot = document.getElementById('pick-boot');
const roach = document.getElementById('pick-roach');
const nuke = document.getElementById('pick-nuke');
/* Component */
const opponentImage = document.getElementById('opponent-image');
const opponentDisplay = document.getElementById('opponent-display');
const rematchButton = document.getElementById('rematch-button');
const resultsDisplay = document.getElementById('results-display');
const pickDisplay = document.getElementById('pick-display');
// get DOM
// display
function displayPick() {
    if (gameState === 'pick') {
        resultsDisplay.classList.add('hidden');
        opponentImage.classList.add('hidden');
        opponentDisplay.classList.add('hidden');
        rematchButton.classList.add('hidden');
    } else if (gameState === 'results');
    displayResults;
}

function displayResults() {
    if (gameState === 'results') {
        resultsDisplay.classList.remove('hidden');
        opponentImage.classList.remove('hidden');
        opponentDisplay.classList.remove('hidden');
        rematchButton.classList.remove('hidden');
        pickDisplay.classList.add('hidden');
    } else if (gameState === 'pick');
    displayPick;
}
// event listeners
boot.addEventListener('click', () => {
    battle('boot');
});
roach.addEventListener('click', () => {
    battle('roach');
});
nuke.addEventListener('click', () => {
    battle('nuke');
});

// rematchButton.addEventListener('click', () => {});
/* Run page load code */
loadPage();
