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
    const prntNode =  cell.parentNode! as HTMLTableRowElement
    const idrecieved = prntNode.id
    
    switch (idrecieved) {
        case 'Ones':
            if (!currentScore.every(die => die === 1)) { return console.log('Not Eligible') }
            addScoreToLS(idrecieved)
            saveScore(cell)
        break;
        case 'Twos':
            if (!currentScore.every(die => die === 2)) { return console.log('Not Eligible') }
            addScoreToLS(idrecieved)
            saveScore(cell)
            
        break;
        case 'Threes':
            if (!currentScore.every(die => die === 3)) { return console.log('Not Eligible') }
            addScoreToLS(idrecieved)
            saveScore(cell)
        break;
        case 'Fours':
            if (!currentScore.every(die => die === 4)) { return console.log('Not Eligible') }
            addScoreToLS(idrecieved)
            saveScore(cell)
    
        break;
        case 'Fives':
            if (!currentScore.every(die => die === 5)) { return console.log('Not Eligible') }
            addScoreToLS(idrecieved)
            saveScore(cell)
        break;
        case 'Sixes':
            if (!currentScore.every(die => die === 6)) { return console.log('Not Eligible') }
            addScoreToLS(idrecieved)
            saveScore(cell)
        break;
        case 'Total':
    
        break;
        case 'Bonus':
    
        break;
        case 'One Pair':
    
        break;
        case 'Two Pair':
    
        break;
        case 'Bonus':
    
        break;
        case 'Three of a Kind':
    
        break;
        case 'Four of a Kind':
    
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

}}