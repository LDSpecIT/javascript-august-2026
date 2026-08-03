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



// REVERSE A STRING & PATCHING





//SCRAMBLE A WORD






let theSentence = "The spry young fox jumped over the dog"