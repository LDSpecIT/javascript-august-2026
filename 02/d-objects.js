// OBJECTS //

// const person = {
//     object: "value",
//     object2: Number,
//     object3: "value 2",
//     key: function() {},
//         // example: goingWalk: function() {console.log= "he is going for a walk"}
//     object4: {
//         objectson1: oneObject,
//         objectson2: objectAlso
//     }
    
// }

// DOT NOTATION
    // person.object //calling a piece of the object

    // person.object2 += 1 //changing a piece of an object

    // person.age = 300 // adding a piece of a new object to an object

    // delete person.something // remove a key (not used very often)



        // const statePopulations = {
        //     cali: 1,
        //     alab: 2,
        //     flor: 3,
        //     ct: 4,
        //     ny: 5,
        //     nj: 6,
        //     tx: 7,
        //     colorado: 8,

        // }




// GUESS THE NUMBER USING OBJECTS //

        // const randomNumberInfo = {
        //     randomnum: Math.round ( Math.random() * 100 ),
        //     lastGuess: null,
        //     previousGuesses: {}

        // }

        // function guessTheNumber (num) {
        //     if (num === randomNumberInfo) {
        //         return "YESSSSIIIIIRRRRRRR!!!!!!"
        //     } else {

        //     }
        // }





const business = {
    name: "Things Incorporated",
    ceo: {
        firstName: "Jim",
        lastName: "Businessman",
        salary: Math.random() * 1000000
    },
    cto: {
        firstName: "Bob",
        lastName: "Techguyman",
        salary: Math.random() * 1000000
    },
    products: {
        couch: {
            price: 100,
            description: "A very nice couch"
        },
        ottoman: {
            price: 50,
            description: "It is an ottoman"
        },
        rug: {
            price: 2000,
            description: "A very nice rug",
            dimension: {
                width: "20ft",
                height: "20ft"
            }
        }
    }
}



        // RETRIEVE INFORMATION

//business name
    business.name

//the Salary for CEO & CTO
    business.ceo.salary
    business.cto.salary

//The price of the couch
    business.products.couch.price


//the description for the ottoman
    business.products.ottoman.description


//the width and height for the rug
    business.products.rug.dimension

        // CHANGE INFORMATION

business.products.couch.price += 100

business.products.ottoman.description = "It is an OttoMan"

    business.products.ottoman.condition = "Like New"

        // BUILD A FUNCTION



const newRaise = Math.round( Math.random() * 10000 )

function salaryRaise (raiseAmount) {
    
    const newSalary = raiseAmount + business.cto.salary

    // business.cto.newPay = newSalary

    if (business.ceo.salary < business.cto.salary) {
        return "You gotta give the boss some money"
    } else {
        business.cto.salary = newSalary
        return `Good Work this year, here is a raise!  ${newSalary}`
    }

}





