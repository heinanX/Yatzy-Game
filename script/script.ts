const startpage = document.querySelector('.startPage--div') as HTMLDivElement
const gameSetup = document.querySelector('.gameSetup--div') as HTMLDivElement
const addBtn = document.querySelector('.add--btn') as HTMLButtonElement
addBtn.addEventListener('click', () => addPlayer())
const playerInfo = document.querySelector('.playerInfo') as HTMLUListElement
const scoreBoard = document.querySelector('.scoreboard--div') as HTMLDivElement

const currentPlayers: string[] = []

const init = () => {
    startpage.style.display = 'flex'
    gameSetup.style.display = 'none'
    scoreBoard.style.display = 'none'
}

const newGame = () => {
    startpage.style.display = 'none'
    gameSetup.style.display = 'flex'
}

const addPlayer = () => {
    playerInfo.innerText = ''
    const playerInput = document.querySelector('.playerInput') as HTMLInputElement
    currentPlayers.push(playerInput.value)
    console.log(currentPlayers)
    playerInput.value = ''

    for (const item of currentPlayers) {
        const li = document.createElement('li')
        const index = currentPlayers.indexOf(item)
        li.innerHTML = `Player ${index +1} <b>${item}</b>`
        playerInfo.append(li)
        console.log(currentPlayers.length)

    }
}

const showScore = () => {
    startpage.style.display = 'none'
    scoreBoard.style.display = 'flex'
    
}