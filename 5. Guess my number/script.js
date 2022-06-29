'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1; // this logic supposed to be hidden behind question mark
let score = 20; //let : decrease , state variable 아래 또 써줌 state of our application

document.querySelector('.number').textContent = secretNumber; // BAAM 

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) { //숫자 안 넣고 Check! 버튼 누르면 0,  'number'나온다 0은 falsy value
        document.querySelector('.message').textContent = '⛔️No number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉Correct Number!';
    } else if (guess > secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = '📈Too high!';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!'; 
        }
        
    } else if (guess < secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = '📈Too low!';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!'; 
        }
        document.querySelector('.score').textContent = score;
    }
});