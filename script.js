'use strict'

//REFACTORME

//VARIABLES
const reset = document.querySelector('.reset');
const holdEl = document.querySelector('.hold');
const diceEl = document.querySelector('.dice');
const rollDiceEl = document.querySelector('.roll-dice');
const cardsEl = document.querySelectorAll('.card');
const scoresEl = document.querySelectorAll('.score');
const currentsEl = document.querySelectorAll('.current-number');
const switchPlayer = () => {
    cardsEl[activePlayer].classList.remove('selected')
    activePlayer = activePlayer === 0 ? 1 : 0;
    cardsEl[activePlayer].classList.add('selected')
}
let currentScore = 0;
let activePlayer = 0;
let totalScore = [0, 0];
let playing = true;



//ROLLING DICE
rollDiceEl.addEventListener('click', function () {
    if (playing) {
        //Generate random dice
        const dice = Math.trunc(Math.random() * 6 + 1);
        console.log(dice);
        //Display dice
        diceEl.classList.add('dice-show')
        diceEl.src = `dice-${dice}.png`;
        document.querySelector('.footer').style.padding = '0rem 1rem'
        //Check for rolled 1 : if true, switch player
        if (dice !== 1) {
            currentScore += dice
            currentsEl[activePlayer].textContent = currentScore;
            // console.log(currentsEl[activePlayer]);
        } else { //If dice === 1
            currentsEl[activePlayer].textContent = 0;
            currentScore = 0;
            switchPlayer()
            currentScore += dice;
            currentsEl[activePlayer].textContent = currentScore;
            currentsEl[activePlayer].textContent = 0;
        }
    }
})



//HOLD
holdEl.addEventListener('click', function () {
    totalScore[activePlayer] += currentScore
    console.log(totalScore);
    scoresEl[activePlayer].textContent = totalScore[activePlayer]
    currentScore = 0;
    currentsEl[activePlayer].textContent = 0;
    if (totalScore[activePlayer] >= 20) {
        cardsEl[activePlayer].classList.add('winner');
        diceEl.classList.remove('dice-show')
        playing = false;
        rollDiceEl.style.cursor = 'not-allowed';
        holdEl.style.cursor = 'not-allowed';
        document.querySelector('.footer').style.padding = '1rem'

    } else {
        if (activePlayer === 0) {
            cardsEl[activePlayer].classList.remove('selected');
            activePlayer++
            cardsEl[activePlayer].classList.add('selected')
        } else {
            cardsEl[activePlayer].classList.remove('selected');
            activePlayer--
            cardsEl[activePlayer].classList.add('selected')
        }
    }
})

//RESET
reset.addEventListener('click', function () {
    playing = true;
    scoresEl[0].textContent = 0;
    scoresEl[1].textContent = 0;
    currentsEl[0].textContent = 0;
    currentsEl[1].textContent = 0;
    currentScore = 0;
    activePlayer = 0;
    if (activePlayer === 0) {
        cardsEl[activePlayer].classList.add('selected');
        cardsEl[1].classList.remove('selected')
    }
    diceEl.classList.remove('dice-show');
    document.querySelector('.footer').style.padding = '1rem';
    totalScore = [0, 0];
    cardsEl[0].classList.remove('winner');
    cardsEl[1].classList.remove('winner');
    rollDiceEl.style.cursor = 'pointer';
    holdEl.style.cursor = 'pointer';
})
















