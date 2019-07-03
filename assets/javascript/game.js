// Array for the letters
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Wins,Loses,guesses
var wins = 0;
var losses = 0;
var remaining = 9;
var guessNum = [];
var guessUser = null;
//onkeyup function with comp/user choice
document.onkeyup = function () {
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    var guessUser = String.fromCharCode(event.keyCode).toLowerCase();
    if (guessUser == computerGuess) {
        wins++;
        remaining = 9;
    } else {
        guessNum++;
        remaining--;
        document.querySelector('#guessesAlready').innerHTML += guessUser + " ";

        console.log("The player has guessed" + guessNum + " times.");

        if (remaining == 0) {
            losses++;
            remaining = 9;
            guessUser = null;
            document.querySelector('#guessesAlready').innerHTML = guessUser;
        }
    }
    //Displays wins, losses, and guesses
    document.querySelector('#wins').innerHTML = wins;
    document.querySelector('#losses').innerHTML = losses;
    document.querySelector('#guesses').innerHTML = remaining;
}