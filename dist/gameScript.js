"use strict";
const currentScore = [];
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
        console.log(currentScore);
    }
    else {
        const index = currentScore.indexOf(number);
        currentScore.splice(index, 1);
        diceBoard.appendChild(dice);
        console.log(currentScore);
    }
};
