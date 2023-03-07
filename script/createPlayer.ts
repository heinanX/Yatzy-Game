const player = document.querySelector('.player') as HTMLTableRowElement
const ones = document.querySelector('.ones') as HTMLTableRowElement
const twos = document.querySelector('.twos') as HTMLTableRowElement
const threes = document.querySelector('.threes') as HTMLTableRowElement
const fours = document.querySelector('.fours') as HTMLTableRowElement
const fives = document.querySelector('.fives') as HTMLTableRowElement
const sixes = document.querySelector('.sixes') as HTMLTableRowElement
const initTotal = document.querySelector('.initTotal') as HTMLTableRowElement
const bonus = document.querySelector('.bonus') as HTMLTableRowElement
const pair = document.querySelector('.pair') as HTMLTableRowElement
const twoPair = document.querySelector('.twoPair') as HTMLTableRowElement
const threeKind = document.querySelector('.ThreeKind') as HTMLTableRowElement
const fourKind = document.querySelector('.FourKind') as HTMLTableRowElement
const fiveKind = document.querySelector('.FiveKind') as HTMLTableRowElement
const smStraight = document.querySelector('.smStraight') as HTMLTableRowElement
const laStraight = document.querySelector('.laStraight') as HTMLTableRowElement
const fullHouse = document.querySelector('.fullHouse') as HTMLTableRowElement
const chance = document.querySelector('.chance') as HTMLTableRowElement
const yahtzee = document.querySelector('.yahtzee') as HTMLTableRowElement
const total = document.querySelector('.total') as HTMLTableRowElement


const createPlayers = () => {
    
    playersFromLS.forEach(element => {
        const td1 = document.createElement('td')
        td1.setAttribute('class', 'player')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        const td4 = document.createElement('td')
        const td5 = document.createElement('td')
        const td6 = document.createElement('td')
        const td7 = document.createElement('td')
        const td8 = document.createElement('td')
        const td9 = document.createElement('td')
        const td10 = document.createElement('td')
        const td11 = document.createElement('td')
        const td12 = document.createElement('td')
        const td13 = document.createElement('td')
        const td14 = document.createElement('td')
        const td15 = document.createElement('td')
        const td16 = document.createElement('td')
        const td17 = document.createElement('td')
        const td18 = document.createElement('td')
        const td19 = document.createElement('td')
        const td20 = document.createElement('td')
        td1.innerText = element.name
        player.append(td1)
        ones.append(td2)
        twos.append(td3)
        threes.append(td4)
        fours.append(td5)
        fives.append(td6)
        sixes.append(td7)
        initTotal.append(td8)
        bonus.append(td9)
        pair.append(td10)
        twoPair.append(td11)
        threeKind.append(td12)
        fourKind.append(td13)
        fiveKind.append(td14)
        smStraight.append(td15)
        laStraight.append(td16)
        fullHouse.append(td17)
        chance.append(td18)
        yahtzee.append(td19)
        total.append(td20)
    })
}