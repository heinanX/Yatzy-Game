"use strict";
const scorecard = document.querySelector('#scorecard');
const categories = [
    { name: 'Ones', scores: Array(numberOfPlayers).fill(null) },
    { name: 'Twos', scores: Array(numberOfPlayers).fill(null) },
    { name: 'Threes', scores: Array(numberOfPlayers).fill(null) },
    { name: 'Fours', scores: Array(numberOfPlayers).fill(null) },
    { name: 'Fives', scores: Array(numberOfPlayers).fill(null) },
    { name: 'Sixes', scores: Array(numberOfPlayers).fill(null) },
    { name: 'Total', scores: Array(numberOfPlayers).fill(null) },
    { name: 'Bonus', scores: Array(numberOfPlayers).fill(null) },
    { name: 'Three of a Kind', scores: Array(numberOfPlayers).fill(null) },
    { name: 'Four of a Kind', scores: Array(numberOfPlayers).fill(null) },
    { name: 'Full House', scores: Array(numberOfPlayers).fill(null) },
    { name: 'Small Straight', scores: Array(numberOfPlayers).fill(null) },
    { name: 'Large Straight', scores: Array(numberOfPlayers).fill(null) },
    { name: 'Yahtzee', scores: Array(numberOfPlayers).fill(null) },
    { name: 'Chance', scores: Array(numberOfPlayers).fill(null) },
    { name: 'Total Score', scores: Array(numberOfPlayers).fill(null) },
];
const createPlayers = () => {
    // Create header row
    const headerRow = document.createElement('tr');
    const headerCell = document.createElement('th');
    headerRow.appendChild(headerCell);
    for (const player of playersFromLS) {
        const playerName = player.name;
        const playerCell = document.createElement('th');
        playerCell.textContent = playerName;
        headerRow.appendChild(playerCell);
    }
    scorecard.appendChild(headerRow);
    // Create category rows
    categories.forEach(category => {
        const row = document.createElement('tr');
        const categoryCell = document.createElement('td');
        categoryCell.textContent = category.name;
        row.appendChild(categoryCell);
        playersFromLS.forEach(element => {
            const scoreData = document.createElement('td');
            scoreData.setAttribute('class', 'score');
            scoreData.textContent = '-';
            row.appendChild(scoreData);
        });
        scorecard.appendChild(row);
    });
    // Add event listeners to the score cells
    const scoreData = document.querySelectorAll('.score');
    scoreData.forEach(cell => {
        cell.addEventListener('click', () => { saveScore(cell); });
    });
};
