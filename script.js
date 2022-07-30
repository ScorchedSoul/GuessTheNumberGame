// JAVASCRIPT FILE

'use strict';

/*
// message
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Correct Number !!';
console.log(document.querySelector('.message').textContent);

// secret number
console.log(document.querySelector('.number').textContent);
document.querySelector('.number').textContent = 10;
console.log(document.querySelector('.number').textContent);

// setting the number
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 20 ;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.floor(Math.random() * 20) + 1 ;
console.log(secretNumber);


let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function()
{
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess , typeof(guess));

    if (!guess)
    {
        // no input
       const noNumber = (document.querySelector('.message').textContent = '🚨 No number selected !!');
       console.log(noNumber);
    }
    else if (guess == secretNumber)
    {
        // correct guess
        const correct = (document.querySelector('.message').textContent = '🥳 Correct Number !!');
        console.log(correct);

        document.querySelector('.number').textContent = secretNumber ;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore)
        {
            highscore = score ;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess > secretNumber)
    {
        if (score > 1)
        {
            // guess is too high
            const wrong_greater = (document.querySelector('.message').textContent = '❌ Wrong number , choose a number lower than the current number !!');
            score-- ;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = '😞 You lost the game.'
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess < secretNumber)
    {
        if (score > 1)
        {
            // guess is too low
            const wrong_less = (document.querySelector('.message').textContent = '❌ Wrong number , choose a number greater than the current number !!');
            score-- ;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = '😞 You lost the game.'
            document.querySelector('.score').textContent = 0;
        }
    }

})

document.querySelector('.again').addEventListener('click', function()
{
  score = 20 ;
  secretNumber = Math.floor(Math.random() * 20) + 1 ;

  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.number').textContent = '?' ;
  document.querySelector('.score').textContent = score ;
  document.querySelector('.guess').value = '';

  console.log(secretNumber);

  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.number').style.width='15rem';
 })


