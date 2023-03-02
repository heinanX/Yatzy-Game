

const throwDice = () => {

    console.log(currentPlayers)
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
        diceBoard.append(diceSix)

        const AddSavedDice = document.createElement('div')
        savedDice.appendChild(AddSavedDice)
    }
}