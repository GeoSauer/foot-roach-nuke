// function getRandomItem(array) {
// const random = getRandomNumber(array.length);
// const item = array[random];
// return item;
// }

// const opponents = ['boot', 'roach', 'nuke'];

/* State */
let gameState = 'results'; // 'pick', or 'results'
let pick = ''; // 'boot', 'roach', 'nuke'
let opponent = ''; // 'boot', 'roach', 'nuke'
let result = ''; // 'win', 'lose', or 'draw'

/* Actions */
function loadPage() {
    if (gameState === 'pick') {
        displayPick();
    } else if (gameState === 'results') {
        displayResults();
    }
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
    resultsDisplay.classList.add('hidden');
    opponentImage.classList.add('hidden');
    opponentDisplay.classList.add('hidden');
    rematchButton.classList.add('hiddden');
}

function displayResults() {
    resultsDisplay.classList.remove('hidden');
    opponentImage.classList.remove('hidden');
    opponentDisplay.classList.remove('hidden');
    rematchButton.classList.remove('hiddden');
    pickDisplay.classList.add('hidden');
}
// event listeners

/* Run page load code */
loadPage();
