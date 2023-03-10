"use strict";
const startpage = document.querySelector('.startPage--div');
const gameSetup = document.querySelector('.gameSetup--div');
const scoreBoard = document.querySelector('.scoreboard--div');
const ongoingGame = document.querySelector('.ongoingGame--div');
const addplayerDiv = document.querySelector('.addPlayer--div');
const addplayerSec = document.querySelector('.addPlayer--section');
const savedDice = document.querySelector('.savedDice--div');
const diceBoard = document.querySelector('.diceBoard--div');
const hiddendice = document.querySelector('.hiddenDice');
const allDice = diceBoard.querySelectorAll('div');
const disActivePlayer = document.querySelector('#activePlayer');
const disMovesMade = document.querySelector('#movesMade');
const warning = document.createElement('p');
warning.style.color = 'red';
const addBtn = document.querySelector('.add--btn');
addBtn.addEventListener('click', () => addPlayer());
const playerInfo = document.querySelector('.playerInfo');
const playerInput = document.querySelector('.playerInput');
playerInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter')
        addPlayer();
});
const players = [];
if (!localStorage.getItem('players')) {
    localStorage.setItem('players', JSON.stringify(players));
}
const playersFromLS = JSON.parse(localStorage.getItem('players') || '[]');
const init = () => {
    startpage.style.display = 'flex';
    gameSetup.style.display = 'none';
    scoreBoard.style.display = 'none';
    ongoingGame.style.display = 'none';
};
const newGame = () => {
    startpage.style.display = 'none';
    gameSetup.style.display = 'flex';
    logPlayers();
};
const logPlayers = () => {
    playerInfo.innerText = '';
    for (const item of playersFromLS) {
        const span = document.createElement('span');
        span.setAttribute('class', 'material-symbols-outlined');
        span.setAttribute('id', 'editPen');
        span.addEventListener('click', () => { deletePlayer(item); });
        const li = document.createElement('li');
        const index = playersFromLS.indexOf(item);
        li.innerHTML = `Player ${index + 1} ${item.name}`;
        span.innerText = 'delete';
        li.appendChild(span);
        playerInfo.append(li);
    }
};
const addPlayer = () => {
    warning.innerHTML = '';
    const match = playersFromLS.find(element => element.name == playerInput.value);
    if (!match) {
        if (playersFromLS.length < 4) {
            const newPlayer = { name: playerInput.value, scoreSheet: {
                    'Ones': null,
                    'Twos': null,
                    'Threes': null,
                    'Fours': null,
                    'Fives': null,
                    'Sixes': null,
                    'Total': null,
                    'Bonus': null,
                    'One Pair': null,
                    'Two Pair': null,
                    'Three of a Kind': null,
                    'Four of a Kind': null,
                    'Full House': null,
                    'Small Straight': null,
                    'Large Straight': null,
                    'Yahtzee': null,
                    'Chance': null,
                    'Total Score': null
                } };
            playersFromLS.push(newPlayer);
            console.log(playersFromLS);
            localStorage.setItem('players', JSON.stringify(playersFromLS));
            logPlayers();
        }
        else {
            warning.innerText = 'Reached Max Limit of Players';
            addplayerDiv.append(warning);
            addplayerSec.style.display = 'none';
        }
    }
    else {
        warning.innerText = 'Name already taken';
        addplayerDiv.appendChild(warning);
    }
    playerInput.value = '';
};
const showScore = () => {
    startpage.style.display = 'none';
    scoreBoard.style.display = 'flex';
    calculateTotal();
};
const deletePlayer = (player) => {
    const index = playersFromLS.indexOf(player);
    playersFromLS.splice(index, 1);
    localStorage.setItem("players", JSON.stringify(playersFromLS));
    logPlayers();
};
const playYatzi = () => {
    startpage.style.display = 'none';
    gameSetup.style.display = 'none';
    scoreBoard.style.display = 'none';
    ongoingGame.style.display = 'flex';
    hiddendice.style.display = 'none';
    createPlayers();
    allDice.forEach((dice) => {
        dice.addEventListener('click', () => { save(dice); });
    });
    localStorage.setItem("activePlayer", playersFromLS[0].name);
    const activePlayerLS = localStorage.getItem('activePlayer') || '[]';
    disActivePlayer.innerHTML = `${activePlayerLS}'s turn`;
    highlightPlayer();
};
const playMaxiYatzi = () => {
    startpage.style.display = 'none';
    gameSetup.style.display = 'none';
    scoreBoard.style.display = 'none';
    ongoingGame.style.display = 'flex';
    createPlayers();
    hiddendice.style.display = 'block';
    allDice.forEach((dice) => {
        dice.addEventListener('click', () => { save(dice); });
    });
    localStorage.setItem("activePlayer", playersFromLS[0].name);
    const activePlayerLS = localStorage.getItem('activePlayer') || '[]';
    disActivePlayer.innerHTML = `${activePlayerLS}'s turn`;
    highlightPlayer();
};
