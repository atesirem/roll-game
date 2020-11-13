'use strict';

//selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0EL=document.getElementById('current--0');
const current1EL=document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores,currentScore,activePlayer,playing;

//starting values
scores = [0,0];
currentScore=0;
activePlayer=0;

const init = function () {
    playing = true;
    diceEl.classList.add('hidden');    currentScore=document.querySelector('.current-score').textContent;
    currentScore = 0;
    score0El.textContent=0;
    score1El.textContent=0;
    current0EL.textContent=0;
    current1EL.textContent=0;
    scores[0]=0;
    scores[1]=0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    
  }
const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    activePlayer= activePlayer == 0 ? 1:0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
   }
init();

 //Rolling dice functinality

btnRoll.addEventListener('click', function () {
     if(playing){

     
    // 1-generating a random dice roll
    const dice = Math.trunc(Math.random()*6)+1;

    // 2-display dice 
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3-check for rolled 1 : if true
    if(dice != 1){
        //add dice to the current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;


    }else{
        //Switch to other player
        switchPlayer();

    }
}
   });
btnHold.addEventListener('click',function(){

    if(playing){
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 100){
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        current0EL.textContent=0;
        current1EL.textContent=0;
        
    }
    else{
        switchPlayer();
    }

    }

});

btnNew.addEventListener('click',function(){
    init();
});