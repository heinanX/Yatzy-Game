"use strict";
const startpage = document.querySelector('.startPage--div');
const gameSetup = document.querySelector('.gameSetup--div');
const scoreBoard = document.querySelector('.scoreboard--div');
const ongoingGame = document.querySelector('.ongoingGame--div');
const addplayerDiv = document.querySelector('.addPlayer--div');
const addplayerSec = document.querySelector('.addPlayer--section');
const savedDice = document.querySelector('.savedDice--div');
const diceBoard = document.querySelector('.diceBoard--div');
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
const currentPlayers = [];
const init = () => {
    startpage.style.display = 'flex';
    gameSetup.style.display = 'none';
    scoreBoard.style.display = 'none';
    ongoingGame.style.display = 'none';
};
const newGame = () => {
    startpage.style.display = 'none';
    gameSetup.style.display = 'flex';
};
const logPlayers = () => {
    playerInfo.innerText = '';
    for (const item of currentPlayers) {
        const span = document.createElement('span');
        span.setAttribute('class', 'material-symbols-outlined');
        span.setAttribute('id', 'editPen');
        span.addEventListener('click', () => { deletePlayer(item); });
        const li = document.createElement('li');
        const index = currentPlayers.indexOf(item);
        li.innerHTML = `Player ${index + 1} ${item}`;
        span.innerText = 'delete';
        li.appendChild(span);
        playerInfo.append(li);
        console.log(currentPlayers.length);
    }
};
const addPlayer = () => {
    warning.innerHTML = '';
    const match = currentPlayers.find(element => element === playerInput.value);
    if (!match) {
        if (currentPlayers.length < 4) {
            currentPlayers.push(playerInput.value);
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
};
const deletePlayer = (player) => {
    const index = currentPlayers.indexOf(player);
    currentPlayers.splice(index, 1);
    logPlayers();
};
const playYatzi = () => {
    startpage.style.display = 'none';
    gameSetup.style.display = 'none';
    scoreBoard.style.display = 'none';
    ongoingGame.style.display = 'flex';
    const yahtzee = 'Yathzee';
    createPlayers();
    generateDice(yahtzee);
};
const playMaxiYatzi = () => {
    startpage.style.display = 'none';
    gameSetup.style.display = 'none';
    scoreBoard.style.display = 'none';
    ongoingGame.style.display = 'flex';
    //diceBoard.style.display = 'relative'
    const yahtzee = 'MaxiYathzee';
    createPlayers();
    generateDice(yahtzee);
};
