"use strict";
const scorecard = document.querySelector('#scorecard');
const playerNumber = playersFromLS.length;
const categories = [
    { name: 'Ones', scores: Array(playerNumber).fill(null) },
    { name: 'Twos', scores: Array(playerNumber).fill(null) },
    { name: 'Threes', scores: Array(playerNumber).fill(null) },
    { name: 'Fours', scores: Array(playerNumber).fill(null) },
    { name: 'Fives', scores: Array(playerNumber).fill(null) },
    { name: 'Sixes', scores: Array(playerNumber).fill(null) },
    { name: 'Total', scores: Array(playerNumber).fill(null) },
    { name: 'Bonus', scores: Array(playerNumber).fill(null) },
    { name: 'One Pair', scores: Array(playerNumber).fill(null) },
    { name: 'Two Pair', scores: Array(playerNumber).fill(null) },
    { name: 'Three of a Kind', scores: Array(playerNumber).fill(null) },
    { name: 'Four of a Kind', scores: Array(playerNumber).fill(null) },
    { name: 'Full House', scores: Array(playerNumber).fill(null) },
    { name: 'Small Straight', scores: Array(playerNumber).fill(null) },
    { name: 'Large Straight', scores: Array(playerNumber).fill(null) },
    { name: 'Yahtzee', scores: Array(playerNumber).fill(null) },
    { name: 'Chance', scores: Array(playerNumber).fill(null) },
    { name: 'Total Score', scores: Array(playerNumber).fill(null) },
];
const createPlayers = () => {
    // Create header row
    const headerRow = document.createElement('tr');
    const headerCell = document.createElement('th');
    headerRow.appendChild(headerCell);
    for (const player of playersFromLS) {
        const playerName = player.name;
        const playerCell = document.createElement('th');
        playerCell.style.width = '5rem';
        playerCell.textContent = playerName;
        headerRow.appendChild(playerCell);
    }
    scorecard.appendChild(headerRow);
    // Create category rows
    categories.forEach(category => {
        const row = document.createElement('tr');
        const categoryCell = document.createElement('td');
        categoryCell.setAttribute('class', `player ${category.name}`);
        row.setAttribute('id', `${category.name}`);
        categoryCell.textContent = category.name;
        row.appendChild(categoryCell);
        playersFromLS.forEach(element => {
            const scoreData = document.createElement('td');
            scoreData.setAttribute('class', `score ${element.name}`);
            scoreData.setAttribute('id', `${element.name}`);
            scoreData.textContent = '';
            row.appendChild(scoreData);
        });
        scorecard.appendChild(row);
    });
    // Add event listeners to the score cells
    const scoreData = document.querySelectorAll('.score');
    scoreData.forEach((cell) => {
        cell.addEventListener('click', () => { checkCellID(cell); });
        cell.addEventListener('dblclick', () => { noValue(cell); });
    });
    const total = document.querySelector('.Total');
    const btn = document.createElement('button');
    btn.setAttribute('id', 'totalBtn');
    btn.addEventListener('click', () => calculateTotal());
    btn.innerText = 'calculate';
    total.append(btn);
};
