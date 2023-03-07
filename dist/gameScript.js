"use strict";
const numberOfPlayers = playersFromLS.length;
const currentScore = [];
const activePlayerLS = localStorage.getItem('activePlayer') || '[]';
//const turnFromLS = localStorage.getItem('currentTurn') || '[]';
const maxPlayers = numberOfPlayers;
const maxMoves = 3;
let currentPlayer = 0;
let currentTurn = 1;
let movesLeft = maxMoves;
const myarray = [];
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
    switch (myarray.length) {
        case 0:
            myarray.push(1);
            throwDice();
            console.log('move 1');
            console.log(myarray);
            break;
        case 1:
            console.log('move 2');
            console.log(myarray);
            myarray.push(2);
            throwDice();
            break;
        case 2:
            console.log('move 3');
            console.log(myarray);
            throwDice();
            myarray.splice(0, 2);
            if (currentPlayer === 0 || currentPlayer === 1 || currentPlayer === 2) {
                currentPlayer++;
            }
            console.log(currentPlayer);
            console.log('last ' + myarray);
            console.log(currentScore.reduce((sum, die) => sum + die, 0));
            break;
    }
    /* if (myarray.length === 0) {
  
    }
    else if (myarray.length === 1) {

    } else if (myarray.length === 2) {
        console.log('move 3')
        console.log('before ' + myarray)
        throwDice()
        myarray.splice(0, 2)
        console.log('after ' + myarray)
        if (currentPlayer === 0 || currentPlayer === 1 || currentPlayer === 2 ) {
            currentPlayer++;
        }
        console.log(currentTurn)
    } */
    /*     movesLeft = maxMoves
        console.log('second obsticle' + movesLeft)
        currentPlayer = (currentPlayer + 1) % maxPlayers;
        console.log('new current Player' + playersFromLS[currentPlayer].name)
        //localStorage.setItem("activePlayer", playersFromLS[currentPlayer].name)
        if (currentPlayer === 0) {
          currentTurn++;
        } */
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
