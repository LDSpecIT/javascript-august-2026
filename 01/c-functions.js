// FUNCTIONS //


// wrapper -- scoping a set of instructions
//



        // const spots = [1, 1, 2, 2, 5, 6]

        // function howMany() {
            
            
        //     let spotsFluctuation = spots.pop()
            
        //     console.log(spots.length)

        //     if (spots.length<6) {

        //         console.log(spots.length++)

        //     } else {
                
        //         console.log(spots.length)
        //     }
        // }


// ARROW FUNCTIONS:

// const myArrowFunction = () => {
//         return "I am an arrow FN";
// }

// ANONYMOUS FN //

        // no name function " () => "



        // ONE

        
function namedFn(firstName, lastName) {
        
        return `${firstName} ${lastName}`
}


        //TWO


const getRemainder = (num, divisor) => {

       return num % divisor
}

        // THREE

function hours(open, close) {
        console.log("We are open from" + " " + open + " to " + close) 
}


