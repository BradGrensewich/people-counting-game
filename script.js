let count = 0;
let countEl = document.getElementById("count-el");
let recordEl = document.getElementById("record-el");
let guessEl = document.getElementById("guess-el");
let record = "";
let guessesRemaining = 10;
let wrongGuess = "NO! " + guessesRemaining + " more tries. Previous:"


function increment() {
    count++;
    countEl.innerText = count;    
}

function save() {
    guessesRemaining--;    
    if(guessesRemaining > 0) {
        wrongGuess = "NO! " + guessesRemaining + " more tries. Previous:";
        guessEl.innerText = wrongGuess;
        record += count + "-";
        recordEl.innerText = record;
        count = 0;
        countEl.innerText = count;

    } else {
        wrongGuess = "GAME OVER! YOU LOSER!!!"
        guessEl.innerText = wrongGuess;
    }
    
   
}

