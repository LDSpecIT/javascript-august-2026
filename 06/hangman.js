// HANGMAN.js //

// HANGMAN.js //
console.log("Welcome to Hangman")
// There is a word that we're trying to guess the letters for
// If we guess correctly then that letter is made apparent in the word
    // If we guess all correct letters we win
// If we guess incorrectly then we get one step closer to losing
    // If we guess X number of times incorrectly we lose
// For either win or loss we see the final word result
// FUNCTION : TEST WHETHER A LETTER IS PART OF THE MYSTERY WORD
// FUNCTION : CHOOSE A RANDOM WORD AT THE BEGINNING OF THE GAME
// FUNCTION : CORRECT GUESS FUNCTION
// FUNCTION : INCORRECT GUESS FUNCTION
// FUNCTION : SHOW THE CURRENT GUESSES / CORRECT LETTERS / HOW CLOSE TO LOSING
// FUNCTION : WINNING FUNCTION
// FUNCTION : LOSING FUNCTION

const guessesBeforeLoss = 6
const listOfWords = ['apple']
let guessedLetters = []
let guessesRemaining = 0
let wordToGuess



function guessedALetter(letter){
    const isCorrectGuess = wordToGuess.includes(letter)
    if ( isCorrectGuess ) {
        correctGuess (letter)
    } else {
        incorrectGuess (letter)
    }
}

function correctGuess(correctLetter) {
    guessedLetters.push(correctLetter)
    const isVictory = testForVictory()
    if (isVictory) {
        console.log("VICTORY")
    } else {
        console.log(`${correctLetter} is in the word` )
    }

}

function incorrectGuess(incorrectLetter) {
    console.log(incorrectLetter)
    guessedLetters.push(incorrectLetter)
    guessesRemaining--

    const isDefeated =  guessesRemaining <= 0
        if(isDefeated) {
            console.log("You lose!")
        } else {
            console.log(`${incorrectLetter} is NOT in the word, you have ${guessesRemaining} guesses remaining`)
        }
}




function testForVictory(){
    for (let i = 0; i < wordToGuess.length; i++){
        const wordLetter = wordToGuess[i]
        const included = guessedLetters.includes(wordLetter)
        console.log(wordLetter, included)
        if(!included){
            return false
    } 

}
        return true
}




function setRandomWord() {
    //get a random integer between 0 and last index of listOfWords
    const randomIndex = Math.floor(Math.random() * listOfWords.length)

    const randomWord = listOfWords [ randomIndex ]

    // set the wordToGuess
    wordToGuess = randomWord

}




// SETUP THE GAME
// choose a random word
function initialize() {
    //reset the guesses
    guessesRemaining = guessesBeforeLoss
    //set the random word
    guessedLetters = []
    //set the random word
    setRandomWord()
    //Show Instructions
    console.log("TODO: INSTRUCTIONS GO HERE")
}






//start the game 
initialize()






// below is just notes
        // if (array[i] === word[i]) {
        //     return the filled letter spot

        // } else {
        //     display: 
        // }