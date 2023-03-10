let currentPlayer = 0;
let currentTurn = 1;

const currentScore: number[] = []
const movesMade: number[] = []


const throwDice = () => {
    allDice.forEach((dice) => {

        if (dice.parentNode === diceBoard) {
        const randomDigit = Math.floor(Math.random()* 6) + 1
        
        const random = Math.floor(Math.random()* 5) + 1
        dice.style.gridColumn = `${random}`
        for (let i = 1; i < allDice.length; i++){
            allDice[i].style.gridRow = `${i}`
        }

        dice.style.backgroundImage = `url('./assets/dice-${randomDigit}.png')`
        dice.style.backgroundSize = 'contain'
        dice.innerText = `${randomDigit}`
    }
    })
}


const playerturn = () => {
    switch (movesMade.length) {
        case 0:
            movesMade.push(1) 
            throwDice()
            disMovesMade.style.fontSize = '35pt'
            disMovesMade.style.color = 'darkgreen'
            disMovesMade.innerText = '•'
        break;
        case 1:
            movesMade.push(2)
            throwDice()
            disMovesMade.style.color = 'orange'
            disMovesMade.innerText = '••'
        break;
        case 2:
            movesMade.push(3)
            throwDice()
            disMovesMade.style.color = 'darkred'
            disMovesMade.innerText = '•••'
            //console.log(currentScore.reduce((sum, die) => sum + die, 0))
        break;
        case 3:
        console.log('No more moves for you, Honey.')
        break;

    }
}

const save = (dice: HTMLDivElement) => {
    const number: number = parseInt(dice.innerText)
    if (dice.innerHTML === "") return console.log('No cheating, Pumpkin Eater!')
    if (dice.parentNode === diceBoard) {
        savedDice.appendChild(dice)
        currentScore.push(number)
    } else {
        const index = currentScore.indexOf(number)
        currentScore.splice(index, 1)
        diceBoard.appendChild(dice)
    }
}

// ------ 'MIDDLEWARE' for if saveScore function

const checkCellID = (cell: HTMLTableCellElement) => {
    const activePlayerLS = localStorage.getItem('activePlayer') || '[]'
    if (cell.getAttribute('class') === `score ${activePlayerLS}`) {
        checkCellStatus(cell)
    } else {
        alert('oops. Not yours')
    }
}

const checkCellStatus = (cell: HTMLTableCellElement) => {
    if (cell.innerText === '') {
        checkIncomingNumbers(cell)
    } else {
        console.log('Oops. Lemme guess ... you slipped ;)')
    }
}

const switchPlayer = () => {
    const numberOfPlayers = playersFromLS.length;
    if (currentPlayer < numberOfPlayers -1) {
        currentPlayer++;
        localStorage.setItem("activePlayer", playersFromLS[currentPlayer].name)
        console.log('this adds a number to ' + currentPlayer);
    } else {
    currentPlayer = 0
    localStorage.setItem("activePlayer", playersFromLS[currentPlayer].name)
    console.log('this resets numbers ' + currentPlayer);
    }
}


// -------

const saveScore = (cell: HTMLTableCellElement) => {
    //const numberOfPlayers = playersFromLS.length;
    if (currentScore.length === 0) {return console.log('Try throwing the dice first.')}
    const sum = currentScore.reduce((sum, die) => sum + die, 0)
    cell.innerText = sum.toString()

    switchPlayer()
   /*  if (currentPlayer < numberOfPlayers -1) {
        currentPlayer++;
        localStorage.setItem("activePlayer", playersFromLS[currentPlayer].name)
        console.log('this adds a number to ' + currentPlayer);
    } else {
    currentPlayer = 0
    localStorage.setItem("activePlayer", playersFromLS[currentPlayer].name)
    console.log('this resets numbers ' + currentPlayer);
    } */
    // ----- Goes through list of divs and appends them back to diceBoard and empties their content.
    allDice.forEach(dice => {
        diceBoard.append(dice)
        dice.innerHTML = ""
    })
    // ----- Empties array that keeps track of moves and current score
    movesMade.splice(0, movesMade.length)
    currentScore.splice(0, currentScore.length)
    // ----- Retrieves updated ActivePlayer key from LS
    const activePlayerLS = localStorage.getItem('activePlayer') || '[]'
    // ----- Resets styles of the P-tag #movesMade from index.html
    disActivePlayer.innerText = `${activePlayerLS}'s turn`
    disMovesMade.style.fontSize = '12pt'
    disMovesMade.style.color = 'black'
    disMovesMade.innerText = 'Throw Dice'
}

const noValue = (cell: HTMLTableCellElement) => {
    const activePlayerLS = localStorage.getItem('activePlayer') || '[]'
    
    if (!(cell.getAttribute('id') === `${activePlayerLS}`)) { alert('oops. Not yours') }

    if (cell.innerText === '') {
        currentScore.splice(0, currentScore.length)
        currentScore.push(0)
        cell.innerText = '0'

        const prntNode =  cell.parentNode! as HTMLTableRowElement
        const idrecieved = prntNode.id
        if (idrecieved === 'Ones' || idrecieved === 'Twos' || idrecieved === 'Threes' || idrecieved === 'Fours' || idrecieved === 'Fives' || idrecieved === 'Sixes')
        addScoreToLS(idrecieved)
        //cell.innerText = '0'

        switchPlayer()
        
        allDice.forEach(dice => {
            diceBoard.append(dice)
            dice.innerHTML = ""
        })
        const UpdatedPlayerLS = localStorage.getItem('activePlayer') || '[]'
        
        movesMade.splice(0, movesMade.length)
        currentScore.splice(0, currentScore.length)
        disActivePlayer.innerText = `${UpdatedPlayerLS}'s turn`
        disMovesMade.style.fontSize = '12pt'
        disMovesMade.style.color = 'black'
        disMovesMade.innerText = 'Throw Dice'
    }
}

const calculateTotal = () => {
    playersFromLS.forEach(player => {
        const score = player.scoreSheet
        if (!(score.Ones && score.Twos && score.Threes && score.Fours && score.Fives && score.Sixes === null)) {
            const sum = (score.Ones || 0) + (score.Twos || 0) + (score.Threes || 0) + (score.Fours || 0) + (score.Fives || 0) + (score.Sixes || 0)
            score.Total = sum

            if (sum > 50) {
                score.Bonus = 50
            } else {
                score.Bonus = 0
            }
            localStorage.setItem('players', JSON.stringify(playersFromLS))
        } else {
            console.log(`You don't seem to have the score to do that just yet, luv.`)
        }

    })
}