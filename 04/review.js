// REVIEW //

//Below is random writing and practicing
            // function isCalled(parameterOne, parameterTwo, parameterThree, nSoForth) {
            //     console.log(parameterOne, parameterTwo)
            //     console.warn(nSoForth)

            //     const whatever = somethingInsideFunction
            //     const anything = somethingOutsideFunction

            //     for (let index =0; index === whatever; index++){
            //         if (whatever < parameterOne) {
            //             console.log("You must be taller")
            //         } else if (parameterTwo === parameterThree) {
            //             console.warn("These values should not be identical")
            //         } else {
            //             return "Ride A is permitted"
            //         }
            //     }

            // }




function addition(num1,num2){
    console.log(num1 + num2)
}

function subtraction (num1,num2){
    return num1-num2
}

// -----------------------------------------------------
// 1 --- ADD GROCERIES ------------

const groceryPrices = [9.99, 5.88, 32.99, 10.01, 17.11]

let groceryTotal = 0

// for each grocery price in groceryPrices, use a for loop to add that to groceryTotal
// BONUS: Add a 10% discount AND a 6% tax as you add the item to the groceryTotal

for (i=0; i < groceryPrices.length; i++){

let taxes = groceryPrices[i] * .06
let discount = groceryPrices[i] * .10

    groceryTotal += groceryPrices[i] - discount + taxes

}




// 2 --- FILTER LOOP   ------------

const cars = [
    "Honda Civic", 
    "Toyota Camry", 
    "Jeep Cherokee", 
    "Ford Pinto", 
    "Toyota Corolla"
]


// for each item log out the item IF it does NOT include Toyota inside of it
// BONUS: add them to a new array instead called `notToyotaCars`
// BONUS: put this in a function with a parameter `filterWord` and instead of filtering out `Toyota`, filter out anything with the `filterWord`



