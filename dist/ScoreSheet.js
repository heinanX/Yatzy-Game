"use strict";
const addScoreToLS = (cellID, sum) => {
    //const sum = currentScore.reduce((sum, die) => sum + die, 0)
    const activePlayerLS = localStorage.getItem('activePlayer') || '[]';
    playersFromLS.forEach(player => {
        if (player.name === activePlayerLS)
            player.scoreSheet[cellID] = sum;
    });
    localStorage.setItem('players', JSON.stringify(playersFromLS));
};
const checkIncomingNumbers = (cell) => {
    let sum = currentScore.reduce((sum, die) => sum + die, 0);
    let diceSorted = currentScore.sort();
    const activePlayerLS = localStorage.getItem('activePlayer') || '[]';
    const idrecieved = `${cell.id}`;
    switch (idrecieved) {
        case `${activePlayerLS}Ones`:
            if (!currentScore.every(die => die === 1)) {
                return console.log('Not Eligible');
            }
            addScoreToLS('Ones', sum);
            saveScore(cell, sum);
            break;
        case `${activePlayerLS}Twos`:
            if (!currentScore.every(die => die === 2)) {
                return console.log('Not Eligible');
            }
            addScoreToLS('Twos', sum);
            saveScore(cell, sum);
            break;
        case `${activePlayerLS}Threes`:
            if (!currentScore.every(die => die === 3)) {
                return console.log('Not Eligible');
            }
            addScoreToLS('Threes', sum);
            saveScore(cell, sum);
            break;
        case `${activePlayerLS}Fours`:
            if (!currentScore.every(die => die === 4)) {
                return console.log('Not Eligible');
            }
            addScoreToLS('Fours', sum);
            saveScore(cell, sum);
            break;
        case `${activePlayerLS}Fives`:
            if (!currentScore.every(die => die === 5)) {
                return console.log('Not Eligible');
            }
            addScoreToLS('Fives', sum);
            saveScore(cell, sum);
            break;
        case `${activePlayerLS}Sixes`:
            if (!currentScore.every(die => die === 6)) {
                return console.log('Not Eligible');
            }
            addScoreToLS('Sixes', sum);
            saveScore(cell, sum);
            break;
        case `${activePlayerLS}One Pair`:
            if (!(currentScore.length === 2)) {
                return console.log('You got too many dice, man!');
            }
            if (!currentScore.every(die => (die === 1) || (die === 2) || (die === 3) || (die === 4) || (die === 5) || (die === 6))) {
                return console.log('Not Eligible');
            }
            addScoreToLS('One Pair', sum);
            saveScore(cell, sum);
            break;
        case `${activePlayerLS}Two Pair`:
            if (!(currentScore.length === 4)) {
                return console.log('It says pairs mate, sorry.');
            }
            console.log(diceSorted);
            if (!(diceSorted[0] == diceSorted[1] && diceSorted[2] == diceSorted[3])) {
                return console.log('It says pairs mate, sorry.');
            }
            addScoreToLS('Two Pair', sum);
            saveScore(cell, sum);
            break;
        case `${activePlayerLS}Three of a Kind`:
            if (!(currentScore.length === 3)) {
                return console.log('You got too many dice, man!');
            }
            if (!currentScore.every(die => (die === 1) || (die === 2) || (die === 3) || (die === 4) || (die === 5) || (die === 6))) {
                return console.log('Not Eligible');
            }
            addScoreToLS('Three of a Kind', sum);
            saveScore(cell, sum);
            break;
        case `${activePlayerLS}Four of a Kind`:
            if (!(currentScore.length === 4)) {
                return console.log('You got too many dice, man!');
            }
            if (!currentScore.every(die => (die === 1) || (die === 2) || (die === 3) || (die === 4) || (die === 5) || (die === 6))) {
                return console.log('Not Eligible');
            }
            addScoreToLS('Four of a Kind', sum);
            saveScore(cell, sum);
            break;
        case `${activePlayerLS}Full House`:
            if (!((diceSorted[0] == diceSorted[1] && diceSorted[1] == diceSorted[2] && diceSorted[3] == diceSorted[4])) || ((diceSorted[0] == diceSorted[1] && diceSorted[2] == diceSorted[3] && diceSorted[3] == diceSorted[4]))) {
                return console.log('sorry mate, thas not a full house');
            }
            addScoreToLS('Full House', sum);
            saveScore(cell, sum);
            break;
        case `${activePlayerLS}Small Straight`:
            if (!(currentScore.includes(1) && currentScore.includes(2) && currentScore.includes(3) && currentScore.includes(4)) || (currentScore.includes(1) && currentScore.includes(2) && currentScore.includes(3) && currentScore.includes(4) && currentScore.includes(5))) {
                return console.log('This is not a small straight');
            }
            sum = 15;
            addScoreToLS('Small Straight', sum);
            saveScore(cell, sum);
            break;
        case `${activePlayerLS}Large Straight`:
            if (!(currentScore.includes(2) && currentScore.includes(3) && currentScore.includes(4) && currentScore.includes(5)) || (currentScore.includes(2) && currentScore.includes(3) && currentScore.includes(4) && currentScore.includes(5) && currentScore.includes(6))) {
                return console.log('This is not a large straight');
            }
            sum = 20;
            addScoreToLS('Large Straight', sum);
            saveScore(cell, sum);
            break;
        case `${activePlayerLS}Yahtzee`:
            if (!((movesMade.length === 1) && (currentScore.length === 5 || currentScore.length === 6) && (currentScore.every(die => (die === 1) || (die === 2) || (die === 3) || (die === 4) || (die === 5) || (die === 6))))) {
                return console.log('this is not a yathzee');
            }
            sum = 100;
            addScoreToLS('Yahtzee', sum);
            saveScore(cell, sum);
            break;
        case `${activePlayerLS}Chance`:
            addScoreToLS('Chance', sum);
            saveScore(cell, sum);
            break;
    }
};
