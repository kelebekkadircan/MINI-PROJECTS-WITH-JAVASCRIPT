/* 
- player must guess a number between a min and max 
- player gets a certain amount of guess 
- notify player guesses remaining 
- notify the player of the correct answer if loose 
- let player choose to play again 
*/ 

// Game values 
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

// UI elements 

const   game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');


// assign uı min and max 
minNum.textContent = min ; 
maxNum.textContent = max ;

// play again event listener 
game.addEventListener('mousedown',function(e){ 
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

// Listen for guess 
guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);


    // validate
  //Wrong number
    if(isNaN(guess) || guess < min  || guess > max)
    { 
    
    setMessage(`Please enter a number between ${min} and  ${max}`,'red');
    
    }
    else 
    { 
        if(guess === winningNum)
{ 
    //gameover won

    gameOver(true,`${winningNum} HELAL LEN YUSUFİİİ `);
    // // disable input
    // guessInput.disabled = true;
    // // change border color
    // setMessage(` ${winningNum} is CORRECT MAAN `,'green')
    // // sett message
    // guessInput.style.borderColor = 'green';


}
else
{ 
    
    guessesLeft -= 1; 
    if(guessesLeft === 0)
    { 
        // game over lost
        gameOver('false',`OYUNU KAYBETTİN SENİ LOOSER.DOĞRU CEVAP : ${winningNum} `)
    //     // disable input
    // guessInput.disabled = true;
    // // sett message
    // guessInput.style.borderColor = 'red';
    // // change border color
    // setMessage(` Game Over, you lost. The correct number was : ${winningNum} `,'red')
        
    }else{
        // game continues - answer wrong

        
        //change border color
        guessInput.style.borderColor = 'red';
        //clear input
        guessInput.value ='';
        //tell user its the wrong number
        setMessage(`${guess} is not correct,${guessesLeft} guesses left`)
        

        
    }
    
}
    }
// check if

// if(guess === winningNum)
// { 
//     //gameover won

//     gameOver(true,`${winningNum} is CORRECT MAAN `);
//     // // disable input
//     // guessInput.disabled = true;
//     // // change border color
//     // setMessage(` ${winningNum} is CORRECT MAAN `,'green')
//     // // sett message
//     // guessInput.style.borderColor = 'green';


// }
// else
// { 
    
//     guessesLeft -= 1; 
//     if(guessesLeft === 0)
//     { 
//         // game over lost
//         gameOver('false',`Game Over, you lost. The correct number was : ${winningNum} `)
//     //     // disable input
//     // guessInput.disabled = true;
//     // // sett message
//     // guessInput.style.borderColor = 'red';
//     // // change border color
//     // setMessage(` Game Over, you lost. The correct number was : ${winningNum} `,'red')
        
//     }else{
//         // game continues - answer wrong

        
//         //change border color
//         guessInput.style.borderColor = 'red';
//         //clear input
//         guessInput.value ='';
//         //tell user its the wrong number
//         setMessage(`${guess} is not correct,${guessesLeft} guesses left`)
        

        
//     }
    
// }


});

//game over 
function gameOver(won, msg)
{ 
let color; 
won === true ? color = 'green' : color = 'red';
// disable input
guessInput.disabled = true;
// change border color
guessInput.style.borderColor = color;
// change text color
message.style.color = color;

// sett message
setMessage(msg)

    //play again 
guessBtn.value='Play again';
guessBtn.className  += 'play-again';

}
// get winning number
function getRandomNum (min,max)
{ 
    return Math.floor(Math.random()*(max - min +1) + min);
}


// setmessage 

function setMessage(msg, color)
{   

    message.style.color = color ; 
    message.textContent = msg;

}






