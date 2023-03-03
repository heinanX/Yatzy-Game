const throwDice = () => {
    const allDice = diceBoard.querySelectorAll('div')

    allDice.forEach((dice, index) => {
        dice.addEventListener('click', () => {save(dice)})
        
        const random = Math.floor(Math.random()* 5) + 1
        dice.style.gridColumn = `${random}`
        for (let i = 1; i < allDice.length; i++){
            allDice[i].style.gridRow = `${i}`
        }
        const randomDigit = Math.floor(Math.random()* 6) + 1
        dice.style.backgroundImage = `url('./assets/dice-${randomDigit}.png')`
        dice.style.backgroundSize = 'contain'
    })
}

const generateDice = (game:string) => {

    const diceOne = document.createElement('div')
    const diceTwo = document.createElement('div')
    const diceThree = document.createElement('div')
    const diceFour = document.createElement('div')
    const diceFive = document.createElement('div')

    diceBoard.append(diceOne, diceTwo, diceThree, diceFour, diceFive)

    if(game === 'MaxiYathzee') {
        const diceSix = document.createElement('div')
        diceSix.addEventListener('click', () => {save(diceSix)})
        diceBoard.append(diceSix)

/*         const AddSavedDice = document.createElement('div')
        savedDice.appendChild(AddSavedDice) */
    }
}

const save = (dice: HTMLDivElement) => {
    savedDice.appendChild(dice)
    dice.addEventListener('click', () => { undo(dice)})
}
const undo = (dice: HTMLDivElement) => {
    diceBoard.appendChild(dice)
    dice.addEventListener('click', () => { save(dice)})

}