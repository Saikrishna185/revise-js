let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number');
  }
  else if(guess < 1 || guess > 100){
    alert('Please enter a number between 1 and 100');
  }
  else{
    prevGuess.push(guess);
    if(numGuess === 10){
      displayGuess(guess);
      displayMessage(`Game Over! The Random Number was ${randomNumber}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`Congratulations! You guessed the correct number ${randomNumber}`);
    endGame();
  }
  else if(guess < randomNumber){
    displayMessage('Wrong! Number is Tooo low');
  }
  else if(guess > randomNumber){
    displayMessage('Wrong! Number is Tooo high');
  }
}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess} ,`;
  remaining.innerHTML = `${10 - numGuess}`;
  numGuess++;
  
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  submit.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  startGame();
}

function startGame(){
  const newGame = document.querySelector('#newGame');
  newGame.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    lowOrHi.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    p.parentNode.removeChild(p);
    playGame = true;
  })
}
