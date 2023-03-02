const startpage = document.querySelector('.startPage--div') as HTMLDivElement
const gameSetup = document.querySelector('.gameSetup--div') as HTMLDivElement
const scoreBoard = document.querySelector('.scoreboard--div') as HTMLDivElement
const ongoingGame = document.querySelector('.ongoingGame--div') as HTMLDivElement
const addplayerDiv = document.querySelector('.addPlayer--div') as HTMLDivElement
const addplayerSec = document.querySelector('.addPlayer--section') as HTMLDivElement
const savedDice = document.querySelector('.savedDice--div') as HTMLDivElement
const diceBoard = document.querySelector('.diceBoard--div') as HTMLDivElement

const warning = document.createElement('p')
warning.style.color = 'red'

const addBtn = document.querySelector('.add--btn') as HTMLButtonElement
addBtn.addEventListener('click', () => addPlayer())
const playerInfo = document.querySelector('.playerInfo') as HTMLUListElement
const playerInput = document.querySelector('.playerInput') as HTMLInputElement
playerInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') addPlayer()
})

const currentPlayers: string[] = []

const init = () => {
    startpage.style.display = 'flex'
    gameSetup.style.display = 'none'
    scoreBoard.style.display = 'none'
    ongoingGame.style.display = 'none'
}

const newGame = () => {
    startpage.style.display = 'none'
    gameSetup.style.display = 'flex'
}
const logPlayers = () => {
    playerInfo.innerText = ''
    for (const item of currentPlayers) {
        const span = document.createElement('span')
        span.setAttribute('class', 'material-symbols-outlined')
        span.setAttribute('id', 'editPen')
        span.addEventListener('click', () => { deletePlayer(item)})
        const li = document.createElement('li')
        const index = currentPlayers.indexOf(item)
        li.innerHTML = `Player ${index +1} ${item}`
        span.innerText = 'delete'
        li.appendChild(span)
        playerInfo.append(li)
        console.log(currentPlayers.length)
    }
}

const addPlayer = () => {
    warning.innerHTML = ''
    const match = currentPlayers.find(element => element === playerInput.value)
    if (!match) {
        if (currentPlayers.length < 4) {
            currentPlayers.push(playerInput.value)
            logPlayers()
            
        } else {
            warning.innerText = 'Reached Max Limit of Players'
            addplayerDiv.append(warning)
            addplayerSec.style.display = 'none'

        }
    } else {
        warning.innerText = 'Name already taken'
        addplayerDiv.appendChild(warning)
    }
    playerInput.value = ''
}

const showScore = () => {
    startpage.style.display = 'none'
    scoreBoard.style.display = 'flex'
    
}
const deletePlayer = (player: string) => {
    const index = currentPlayers.indexOf(player)
    currentPlayers.splice(index, 1)
    logPlayers()
}

const playYatzi = () => {
    startpage.style.display = 'none'
    gameSetup.style.display = 'none'
    scoreBoard.style.display = 'none'
    ongoingGame.style.display = 'flex'
    const yahtzee = 'Yathzee'
    createPlayers()
    generateDice(yahtzee)
}

const playMaxiYatzi= () => {
    startpage.style.display = 'none'
    gameSetup.style.display = 'none'
    scoreBoard.style.display = 'none'
    ongoingGame.style.display = 'flex'
    const yahtzee = 'MaxiYathzee'
    createPlayers()
    generateDice(yahtzee)
}
