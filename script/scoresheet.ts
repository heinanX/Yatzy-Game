const addScoreToLS = (cellID: keyof ScoreSheet) => {
    const sum = currentScore.reduce((sum, die) => sum + die, 0)
    const activePlayerLS = localStorage.getItem('activePlayer') || '[]'
    playersFromLS.forEach(player => {
        if (player.name === activePlayerLS) 
        player.scoreSheet[cellID] = sum
    })
    localStorage.setItem('players', JSON.stringify(playersFromLS))
}

const checkIncomingNumbers = (cell: HTMLTableCellElement) => {
    const activePlayerLS = localStorage.getItem('activePlayer') || '[]'
    const idrecieved =  `${cell.id}`
    switch (idrecieved) {
        case `${activePlayerLS}Ones`:
            if (!currentScore.every(die => die === 1)) { return console.log('Not Eligible') }
            addScoreToLS('Ones')
            saveScore(cell)
        break;
        case `${activePlayerLS}Twos`:
            if (!currentScore.every(die => die === 2)) { return console.log('Not Eligible') }
            addScoreToLS('Twos')
            saveScore(cell)
            
        break;
        case `${activePlayerLS}Threes`:
            if (!currentScore.every(die => die === 3)) { return console.log('Not Eligible') }
            addScoreToLS('Threes')
            saveScore(cell)
        break;
        case `${activePlayerLS}Fours`:
            if (!currentScore.every(die => die === 4)) { return console.log('Not Eligible') }
            addScoreToLS('Fours')
            saveScore(cell)
    
        break;
        case `${activePlayerLS}Fives`:
            if (!currentScore.every(die => die === 5)) { return console.log('Not Eligible') }
            addScoreToLS('Fives')
            saveScore(cell)
        break;
        case `${activePlayerLS}Sixes`:
            if (!currentScore.every(die => die === 6)) { return console.log('Not Eligible') }
            addScoreToLS('Sixes')
            saveScore(cell)
        break;
        case `${activePlayerLS}One Pair`:
            if (!(currentScore.length === 2)) { return console.log('You got too many dice, man!') }
            if (!currentScore.every(die => (die === 1) || (die === 2) || (die === 3) || (die === 4) || (die === 5) || (die === 6))) { return console.log('Not Eligible') }
            addScoreToLS('One Pair')
            saveScore(cell)
    
        break;
        case `${activePlayerLS}Two Pair`:
   /*          if (!(currentScore.length === 4)) { return console.log('You got too many dice, man!') }
            if (!currentScore.every(die => (die && die === 1) || (die && die  === 2) || (die && die  === 3) || (die && die  === 4) || (die && die  === 5) || (die && die === 6))) { return console.log('Not Eligible') }
            addScoreToLS('Two Pair')
            saveScore(cell) */
    
        break;
        case `${activePlayerLS}Three of a Kind`:
            if (!(currentScore.length === 3)) { return console.log('You got too many dice, man!') }
            if (!currentScore.every(die => (die === 1) || (die === 2) || (die === 3) || (die === 4) || (die === 5) || (die === 6))) { return console.log('Not Eligible') }
            addScoreToLS('Two Pair')
            saveScore(cell)

        break;
        case `${activePlayerLS}Four of a Kind`:
            if (!(currentScore.length === 4)) { return console.log('You got too many dice, man!') }
            if (!currentScore.every(die => (die === 1) || (die === 2) || (die === 3) || (die === 4) || (die === 5) || (die === 6))) { return console.log('Not Eligible') }
            addScoreToLS('Two Pair')
            saveScore(cell)
        break;
        case 'Full House':
    
        break;
        case 'Small Straight':
    
        break;
        case 'Large Straight':
    
        break;
        case 'Yahtzee':
    
        break;
        case 'Chance':
    
        break;
        case 'Total Score':
    
        break;

}
}