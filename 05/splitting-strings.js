// SPLITTING & JOINING STRINGS //


    // .split() --> used to define a form of splitting a sentence, word, or string text. 
        //Examples:
            // banana.split("")
            // theString.split("/[.?!]/") --> split by "., or ?, or !"
            //theString.split(". ") --> split only by .
    
    // .join() --> Used to define a form of string joined together
        //Examples:
            //["firstString", "secondString"].join(" ")
            //["firstString", "secondString"].join(". ")


//CONVERT AN OBJECT TO AN ARRAY

        //const string = Object.value ('object') | const string = Object.key ('object')


//CAPITALIZING
    // wordArray[0].toUpperCase

    function capitalizeString ( str ) {
        const splitString = str.split("")
        splitString [0] = splitString[0].toUpperCase()
        return splitString.join("")
    
    }

    const arrayOfNames = [
        "john",
        "jim",
        "janet",
        "jack",
        "jerry"
    ] 

 const stringOfNames = "john, jim, janet, jack, jerry"
    

    for (let i=0;i<arrayOfNames.length;i++) {
        arrayOfNames [i] = capitalizeString(arrayOfNames[i])
    }


// PATCHING | MONKEY PATCHING


    //This is how you would build an alias/replacement for a method
        //Example: 
            //  root  required old method   new method

            // String.prototype.capitalize = newStringMethod


// REVERSE A STRING 

    const result = []

    function reverseMethod () {
        const splitString = this.split(" ")

        const finalIndex = splitString.length - 1

        for (let i= finalIndex; i >=0 ; i--) {
            const letter = splitString[i]
            result.push(letter)
        }

        return result.join(' ')
    }

    // String.prototype.reverse = reverseMethod



//SCRAMBLE A WORD

    const stringOfWords = "thank you"


    function scramble( word= stringOfNames) {
        const splitWord = word.split("")


        for(let i = 0; i < splitWord.length; i++ ) {

            const randomIndex = Math.floor(Math.random() * splitWord.length)
            
            const currentLetter = splitWord [i]
            const randomLetter = splitWord [randomIndex]

            splitWord[i] = randomLetter
            splitWord[randomIndex] = currentLetter

            console.log( splitWord )

         }
        


        return splitWord.join(" ")

        //Math.random
        //.split()
    

    }





//CREATE A DEFAULT ARGUMENT
    //function nameOfFunction (someParameter = "I am the default argument") {
    // console.log(someParameter)
    //}

    //Default Arguments can be numbers, special variables, optional




let theSentence = "The spry young fox jumped over the dog"