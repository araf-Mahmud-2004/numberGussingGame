let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const checkButton = function(){
    const guess = Number(document.querySelector('.guess').value);
    if(score > 0){
        if(!guess){
            document.querySelector('.message').textContent = 'No number yet!!!';
        }
        else if(guess === secretNumber){
            document.querySelector('.message').textContent = 'Correct guess!!!';
            document.querySelector('body').style.backgroundColor = 'blue';
            document.querySelector('.number').textContent = secretNumber ;
            if(score > highScore){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

        }
        else if(guess > secretNumber){
            document.querySelector('.message').textContent = 'Too high';
            score--
            document.querySelector('.score').textContent = score;
        }
        else if(guess < secretNumber){
            document.querySelector('.message').textContent = 'Too low';
            score--
            document.querySelector('.score').textContent = score;
        }
    }else{
        document.querySelector('.message').textContent = 'you lost the game!!!';
    }
}

document.querySelector('.check').addEventListener('click', function(){
    checkButton()
});

document.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.key === 'Enter'){
        checkButton()
    }
    
})

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 6) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?' ;
    document.querySelector('body').style.backgroundColor = '#222';
})