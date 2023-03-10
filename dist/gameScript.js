"use strict";
let currentPlayer = 0;
let currentTurn = 1;
const currentScore = [];
const movesMade = [];
const throwDice = () => {
    allDice.forEach((dice) => {
        if (dice.parentNode === diceBoard) {
            const randomDigit = Math.floor(Math.random() * 6) + 1;
            const random = Math.floor(Math.random() * 5) + 1;
            dice.style.gridColumn = `${random}`;
            for (let i = 1; i < allDice.length; i++) {
                allDice[i].style.gridRow = `${i}`;
            }
            dice.style.backgroundImage = `url('./assets/dice-${randomDigit}.png')`;
            dice.style.backgroundSize = 'contain';
            dice.innerText = `${randomDigit}`;
        }
    });
};
const playerturn = () => {
    switch (movesMade.length) {
        case 0:
            movesMade.push(1);
            throwDice();
            disMovesMade.style.fontSize = '35pt';
            disMovesMade.style.color = 'darkgreen';
            disMovesMade.innerText = '•';
            break;
        case 1:
            movesMade.push(2);
            throwDice();
            disMovesMade.style.color = 'orange';
            disMovesMade.innerText = '••';
            break;
        case 2:
            movesMade.push(3);
            throwDice();
            disMovesMade.style.color = 'darkred';
            disMovesMade.innerText = '•••';
            break;
        case 3:
            console.log('No more moves for you, Honey.');
            break;
    }
};
const save = (dice) => {
    const number = parseInt(dice.innerText);
    if (dice.innerHTML === "")
        return console.log('No cheating, Pumpkin Eater!');
    if (dice.parentNode === diceBoard) {
        savedDice.appendChild(dice);
        currentScore.push(number);
    }
    else {
        const index = currentScore.indexOf(number);
        currentScore.splice(index, 1);
        diceBoard.appendChild(dice);
    }
};
// ------ 'MIDDLEWARE' for if saveScore function
const checkCellID = (cell) => {
    const activePlayerLS = localStorage.getItem('activePlayer') || '[]';
    if (cell.getAttribute('class') === `score ${activePlayerLS}`) {
        checkCellStatus(cell);
    }
    else {
        alert('oops. Not yours');
    }
};
const checkCellStatus = (cell) => {
    if (cell.innerText === '') {
        checkIncomingNumbers(cell);
    }
    else {
        console.log('Oops. Lemme guess ... you slipped ;)');
    }
};
const switchPlayer = () => {
    const numberOfPlayers = playersFromLS.length;
    if (currentPlayer < numberOfPlayers - 1) {
        currentPlayer++;
        localStorage.setItem("activePlayer", playersFromLS[currentPlayer].name);
        highlightPlayer();
    }
    else {
        currentPlayer = 0;
        localStorage.setItem("activePlayer", playersFromLS[currentPlayer].name);
        highlightPlayer();
    }
};
const highlightPlayer = () => {
    const th = document.querySelectorAll('th');
    th.forEach(element => { element.style.backgroundColor = 'white'; });
    const activePlayerLS = localStorage.getItem('activePlayer') || '[]';
    const player = document.querySelector(`.highlight${activePlayerLS}`);
    player.style.backgroundColor = 'lightgray';
};
// -------
const saveScore = (cell) => {
    if (currentScore.length === 0) {
        return console.log('Try throwing the dice first.');
    }
    const sum = currentScore.reduce((sum, die) => sum + die, 0);
    cell.innerText = sum.toString();
    switchPlayer();
    // ----- Goes through list of divs and appends them back to diceBoard and empties their content.
    allDice.forEach(dice => {
        diceBoard.append(dice);
        dice.innerHTML = "";
    });
    // ----- Empties array that keeps track of moves and current score
    movesMade.splice(0, movesMade.length);
    currentScore.splice(0, currentScore.length);
    // ----- Retrieves updated ActivePlayer key from LS
    const activePlayerLS = localStorage.getItem('activePlayer') || '[]';
    // ----- Resets styles of the P-tag #movesMade from index.html
    disActivePlayer.innerText = `${activePlayerLS}'s turn`;
    disMovesMade.style.fontSize = '12pt';
    disMovesMade.style.color = 'black';
    disMovesMade.innerText = 'Throw Dice';
};
const noValue = (cell) => {
    const activePlayerLS = localStorage.getItem('activePlayer') || '[]';
    if (!(cell.getAttribute('class') === `score ${activePlayerLS}`)) {
        alert('oops. Not yours');
    }
    if (cell.innerText === '') {
        currentScore.splice(0, currentScore.length);
        currentScore.push(0);
        cell.innerText = '0';
        const parent = cell.parentNode;
        const id = parent.id;
        playersFromLS.forEach(player => {
            const idrecieved = cell.id;
            if (idrecieved === `${player}Ones` || idrecieved === `${player}Twos` || idrecieved === `${player}Threes` || idrecieved === `${player}Fours` || idrecieved === `${player}Fives` || idrecieved === `${player}Sixes`)
                addScoreToLS(id);
        });
        switchPlayer();
        allDice.forEach(dice => {
            diceBoard.append(dice);
            dice.innerHTML = "";
        });
        const UpdatedPlayerLS = localStorage.getItem('activePlayer') || '[]';
        movesMade.splice(0, movesMade.length);
        currentScore.splice(0, currentScore.length);
        disActivePlayer.innerText = `${UpdatedPlayerLS}'s turn`;
        disMovesMade.style.fontSize = '12pt';
        disMovesMade.style.color = 'black';
        disMovesMade.innerText = 'Throw Dice';
    }
};
const calculateTotal = () => {
    const currentplayerScore = JSON.parse(localStorage.getItem('players') || '[]');
    currentplayerScore.forEach(player => {
        const score = player.scoreSheet;
        if (score.Ones && score.Twos && score.Threes && score.Fours && score.Fives && score.Sixes == null) {
            return console.log(`You don't seem to have the score to do that just yet, luv.`);
        }
        const sum = (score.Ones || 0) + (score.Twos || 0) + (score.Threes || 0) + (score.Fours || 0) + (score.Fives || 0) + (score.Sixes || 0);
        score.Total = sum;
        const cellTotal = document.querySelector(`#${player.name}Total`);
        const cellBonus = document.querySelector(`#${player.name}Bonus`);
        if (sum > 50) {
            score.Bonus = 50;
            cellBonus.innerText = '50';
        }
        else {
            score.Bonus = 0;
            cellBonus.innerText = '0';
        }
        localStorage.setItem('players', JSON.stringify(currentplayerScore));
        cellTotal.innerText = sum.toString();
    });
};
