const startpage = document.querySelector('.startPage--div') as HTMLDivElement
const gameSetup = document.querySelector('.gameSetup--div') as HTMLDivElement
const scoreBoard = document.querySelector('.scoreboard--div') as HTMLDivElement
const ongoingGame = document.querySelector('.ongoingGame--div') as HTMLDivElement
const addplayerDiv = document.querySelector('.addPlayer--div') as HTMLDivElement
const addplayerSec = document.querySelector('.addPlayer--section') as HTMLDivElement
const savedDice = document.querySelector('.savedDice--div') as HTMLDivElement
const diceBoard = document.querySelector('.diceBoard--div') as HTMLDivElement
const hiddendice = document.querySelector('.hiddenDice') as HTMLDivElement
const allDice = diceBoard.querySelectorAll('div')

const warning = document.createElement('p')
warning.style.color = 'red'

const addBtn = document.querySelector('.add--btn') as HTMLButtonElement
addBtn.addEventListener('click', () => addPlayer())
const playerInfo = document.querySelector('.playerInfo') as HTMLUListElement
const playerInput = document.querySelector('.playerInput') as HTMLInputElement
playerInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') addPlayer()
})

const players: object[] = []
interface Player {
    name: string;
    score: number;
}

if (!localStorage.getItem('players')) {
    localStorage.setItem('players', JSON.stringify(players));
}
const playersFromLS: Player[] = JSON.parse(localStorage.getItem('players') || '[]');


const init = () => {
    startpage.style.display = 'flex'
    gameSetup.style.display = 'none'
    scoreBoard.style.display = 'none'
    ongoingGame.style.display = 'none'
}

const newGame = () => {
    startpage.style.display = 'none'
    gameSetup.style.display = 'flex'
    logPlayers()
}

const logPlayers = () => {
    playerInfo.innerText = ''
    for (const item of playersFromLS) {
        const span = document.createElement('span')
        span.setAttribute('class', 'material-symbols-outlined')
        span.setAttribute('id', 'editPen')
        span.addEventListener('click', () => { deletePlayer(item)})
        const li = document.createElement('li')
        const index = playersFromLS.indexOf(item)
        li.innerHTML = `Player ${index +1} ${item.name}`
        span.innerText = 'delete'
        li.appendChild(span)
        playerInfo.append(li)
    }
}

const addPlayer = () => {
    warning.innerHTML = ''
    const match = playersFromLS.find(element => element.name == playerInput.value)
    if (!match) {
        if (playersFromLS.length < 4) {
            const newPlayer: Player = { name: playerInput.value, score: 0 };
            playersFromLS.push(newPlayer);
            console.log(playersFromLS)
            localStorage.setItem('players', JSON.stringify(playersFromLS))
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
const deletePlayer = (player: any) => {
    const index = playersFromLS.indexOf(player)
    playersFromLS.splice(index, 1)
    localStorage.setItem("players", JSON.stringify(playersFromLS))
    logPlayers()
}

const playYatzi = () => {
    startpage.style.display = 'none'
    gameSetup.style.display = 'none'
    scoreBoard.style.display = 'none'
    ongoingGame.style.display = 'flex'
    hiddendice.style.display = 'none'
    createPlayers()
    allDice.forEach((dice) => {
        dice.addEventListener('click', () => {save(dice)})
    })
    localStorage.setItem("activePlayer", playersFromLS[0].name)
    playerturn()
}

const playMaxiYatzi= () => {
    startpage.style.display = 'none'
    gameSetup.style.display = 'none'
    scoreBoard.style.display = 'none'
    ongoingGame.style.display = 'flex'
    createPlayers()
    hiddendice.style.display = 'block'
    allDice.forEach((dice) => {
        dice.addEventListener('click', () => {save(dice)})
    })
    localStorage.setItem("activePlayer", playersFromLS[0].name)
}
