// RANDOM MATH //



// const arrayOfNumbers = [1,2,3,4,5]

// arrayOfNumbers[0]
// arrayOfNumbers[4]





// let randomIndexOfStates = Math.floor (Math.random() * arrayOfStates.length)

// let randomState = arrayOfStates[randomIndexOfStates]
// console.log (randomState)


function getRandomState() {
    const arrayOfStates = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

    const randomNumber = Math.floor (Math.random() * arrayOfStates.length)

    const randomState = arrayOfStates[randomNumber]

    return randomState

}



function planAllAmericanVacation ( numberOfLocations ) {

    const vacationArray = []

    for (i = 0; i < numberOfLocations; i++) {
        
        const randomState = getRandomState()
        
        const formattedString = `${i + 1} ${randomState}`

        vacationArray.push(formattedString)
        
        // console.log (formattedString)

    }
    
    return vacationArray

}





const foods = [
    "Pizza",
    "Hamburger",
    "Mac n Cheese",
    "Falafel",
    "Patato Salad"
]
function getRandomFood () {
   
    const foodChoice = Math.floor (Math.random () * foods.length)

    return foods [foodChoice]

}



