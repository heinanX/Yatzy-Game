"use strict";
const throwDice = () => {
    const allDice = diceBoard.querySelectorAll('div');
    allDice.forEach((dice, index) => {
        const randomDigit = Math.floor(Math.random() * 6) + 1;
        const random = Math.floor(Math.random() * 7) + 1;
        dice.style.gridColumn = `${random}`;
        for (let i = 3; i < allDice.length; i++) {
            allDice[i].style.gridRow = `${i}`;
        }
        dice.style.backgroundImage = `url('./assets/dice-${randomDigit}.png')`;
        dice.style.backgroundSize = 'contain';
    });
};
const generateDice = (game) => {
    const diceOne = document.createElement('div');
    diceOne.addEventListener('click', () => { save(diceOne); });
    const diceTwo = document.createElement('div');
    diceTwo.addEventListener('click', () => { save(diceTwo); });
    const diceThree = document.createElement('div');
    diceThree.addEventListener('click', () => { save(diceThree); });
    const diceFour = document.createElement('div');
    diceFour.addEventListener('click', () => { save(diceFour); });
    const diceFive = document.createElement('div');
    diceFive.addEventListener('click', () => { save(diceFive); });
    //diceOne.innerHTML = `url('./assets/dice-${random}')`
    diceBoard.append(diceOne, diceTwo, diceThree, diceFour, diceFive);
    if (game === 'MaxiYathzee') {
        const diceSix = document.createElement('div');
        diceSix.addEventListener('click', () => { save(diceSix); });
        diceBoard.append(diceSix);
        /*         const AddSavedDice = document.createElement('div')
                savedDice.appendChild(AddSavedDice) */
    }
};
const save = (dice) => {
    savedDice.appendChild(dice);
};
