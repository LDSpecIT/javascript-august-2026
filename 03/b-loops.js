//LOOPS

//iteration




//------------

const colors = [
    "red",
    'blue',
    'violet',
    'cyan',
    'pink',
    'yellow'

]


let index = 0

while (index < 7){
    console.log(colors[index])
    index+=1
}




    // index       end condition        increment
for (let index=0; index < colors.length ; index++){
    console.log(colors [index])
}


let colorString = {

}


for (let i = 0; index < colorString.length; index++) {
    colorString += colors[index]
}


let prices = [
    1.99,
    10.99,
    7.99,
    5.99
]

for(let priceIndex=0; index < prices.length; index++){
    const discountedPrice = price[index] * 0.9
    total += discountedPrice

}


const schoolRoster = [
    {name: 'uno', gpa: 2.0, }, //0
    {name: 'dos', gpa: 2.8, }, //1
    {name: 'tres', gpa: 3.1, } //2
]

for(let index = 0; index < schoolRoster.length; index++) {

    const student = schoolRoster[index]
    let improvementStudents = student.gpa <= 2.0
    


}

// add the total of these groceryItems

const groceryItems = [
    { name: "Cheese", price: 3.99 },
    { name: "Milk", price: 7.99 },
    { name: "Gallon of Gas", price: 4.99 },
    { name: "Gallon of Gas", price: 4.99 },
    { name: "Gallon of Gas", price: 4.99 },
    { name: "Tomato", price: 3.49 },
    { name: "Pasta", price: 2.99 },
]

let groceryTotal = 0


for(let index = 0; index < groceryItems.length; index++){
    groceryTotal += groceryItems[index].price
}




//find out countries with names larger than 8 letters

const countries = [
    "United States of America",
    "Dominican Republic",
    "Chad",
    "Brazil",
    "Norway",
    "England",
    "Wyoming",
]


// const bigCountries = []
// const smallNameCountries = []

function findBigNames (array, threshold) {
    const bigNames = []

    for(let index=0; index < array.length; index++){
        const item = array[index]

        if (item.length >= threshold) {
            bigNames.push(item)
        }

    }

    return bigNames
}


// for (let index=0; index < countries.length; index++){

//     const country = countries[index]

//     if (country.length >= 8) {
//         // bigCountries.push(country)
//         smallNameCountries.push (country)
//         return country
//     }

// }








// const longCountries = []

// for(let index =0; index < countries.length; index++) {
//     const country = countries[index]

//     if (country.length > 8) {
//         longCountries.push(country)

//     }

//     // if (country.length > 8) {
//     //     console.warn(country)
//     // }
// }






// function handleCountry(country){
//     alert("Processing: " + country)

// }

// for (let index=0; index < countries[index]; index++){
//     console.log(country)
// }












