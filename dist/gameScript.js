"use strict";
const numberOfPlayers = playersFromLS.length;
let currentPlayer = 0;
const currentScore = [];
const activePlayerLS = localStorage.getItem('activePlayer') || '[]';
//const players [ {player, scoreSheet}, {player, scoreSheet}, {player, scoreSheet}]
const scoreSheet = {
    ones: null,
    twos: null,
    threes: null,
    fours: null,
    fives: null,
    sixes: null,
    total: null,
    bonus: null,
    threeKind: null,
    fourKind: null,
    fullHouse: null,
    smStraight: null,
    laStraight: 20,
    chance: null,
    yathzee: null,
    grandTotal: null
};
const playerturn = () => {
    console.log(activePlayerLS);
    /*     const maxTurns = 3
    
        for (let i = 0; maxTurns > i; i++) {
            throwDice()
            console.log(i)
        } */
};
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
const save = (dice) => {
    const number = parseInt(dice.innerText);
    if (dice.innerHTML === "")
        return console.log('empty');
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
