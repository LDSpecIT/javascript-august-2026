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
const listOfWords = ['apple', 'apply']
let guessedLetters = []
let guessesRemaining = 0
let wordToGuess

let victories = 0
let defeats = 0 





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
    console.log( displayWordSpaces() )
    if (isVictory) {
        victory()
    } else {
        console.log(`${correctLetter} is in the word` )
    }

}

function incorrectGuess(incorrectLetter) {
    console.log(incorrectLetter)
    guessedLetters.push(incorrectLetter)
    guessesRemaining--
    console.log( displayWordSpaces() )
    const isDefeated =  guessesRemaining <= 0
        if(isDefeated) {
            defeat()
        } else {
            console.log(`${incorrectLetter} is NOT in the word, you have ${guessesRemaining} guesses remaining`)
        }
}




function testForVictory(){
    for (let i = 0; i < wordToGuess.length; i++){
        const wordLetter = wordToGuess[i]
        const included = guessedLetters.includes(wordLetter)
        
        if(!included){
            return false
    } 

}
        return true
}



function displayWordSpaces() {

    let lettersArray = wordToGuess.split('')

    for (let i = 0; i < lettersArray.length; i++){
        const letter = lettersArray[i]
        const isLetterInGuessedLetters = guessedLetters.includes (letter)
        if (!isLetterInGuessedLetters) {
            lettersArray[i] = "_"

        }

    }

        return lettersArray.join(" ")

}





function setRandomWord() {
    //get a random integer between 0 and last index of listOfWords
    const randomIndex = Math.floor(Math.random() * listOfWords.length)

    const randomWord = listOfWords [ randomIndex ]

    // set the wordToGuess
    wordToGuess = randomWord

}

function reset() {
    initialize()
}


function defeat(){
    console.log("You Lost!")
    defeats++
    console.log(`The word was ${wordToGuess}`)
    console.log(`You have won ${victories} and lost ${defeats}`)
    console.log("A new word has been chosen if you would like to play again!")
    reset()
}


//FUNCTION : WINNING FUNCTION

function victory() {
    
    console.log("VICTORY!")
    victories++
    console.log(`The word was ${wordToGuess}`)
    console.log(`You have won ${victories} and lost ${defeats}`)
    console.log("A new word has been chosen if you would like to play again!")
    reset()
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
    //display word spaces
    console.log( displayWordSpaces() )
    //Show Instructions
    console.log("Use guessALeter('letter') to guess which letters are in the word")
}






//start the game 
initialize()






// below is just notes
        // if (array[i] === word[i]) {
        //     return the filled letter spot

        // } else {
        //     display: 
        // }