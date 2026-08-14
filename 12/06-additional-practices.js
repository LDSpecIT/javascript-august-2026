// Reference the Exercises In 06-additional-practice.md for instructions


// Exercise One - Triangles



// Exercise Two - Farenheit to Celsius



// Exercise Three - Cake



// Exercise Four - FizzBuzz



// Exercise Five - Geometry





//TRIANGLES


function isItTriangle(a1, a2, a3){
    let sum = 0
    let missingAngle = 180 - (a1 + a2 + a3)
    if (a1 > 0, a2 > 0, a3 > 0 & a1 + a2 + a3 === 180){
        return true
    } else {
        return `You are missing ${missingAngle} degrees to make a triangle`
    }
}



//FARENHEIT TO CELSIUS

function farToCel(farenheit){
    const cel = (farenheit - 32) * 0.56
    if (farenheit === -600) {
        throw TypeError ("TypeError: farToCel only accepts farenheit arguments above absolute zero (-459.67)")
        return
    } else if (typeof farenheit === 'string') {
        throw TypeError ("farToCel only accepts farenheit arguments above absolute zero (-459.67)")
    }

    let result = cel.toFixed(2)

    console.log(
        `Farenheit Value = ${farenheit} Degrees - Celsius result = ${result} Degrees` 
    )

    if (result > 85 ){ 
        return "A good day for a beach trip"
    } else if (result < 85 && result > 70) {
        return "Today would be a great day for a walk outdoors"
    } else if (result < 70 && result > 60){
        return "Take a sweatshirt or a jacket if you will be outside"
    } else if (result < 59) {
        return "A good day to stay indoors"
    }
    // return Math.ceil(cel)

}

//EXERCISE CAKE

function isItCake(str){
    
    let target = ["c","a","k","e"]
    let wordString = str.toLowerCase().split("")
    
    let checkWord = wordString.filter(target[i])
    //let cakeWord = stringJoin.includes("cake")

    
    if (checkWord === "cake") {
        return true
    } else {
        return false
    }
}

                        //INSTRUCTOR RESPONSE
function isItCakeTwo( str ){
    return str 
    .toLowerCase()
    .replaceAll(" ", "")
    .includes("cake")
}





// IS IT GEOMETRY
function isItGeometry(...a) {
    let total = 0 
    for (let i = 0; i < array.length; i++) {
        

        if (a[i] = 180){
            return "triangle"
        } else if (a[i] === 360) {
            return "quadrileteral"
        } else if (a[i] === 540){
            return "pentagon"
        }
    }   
}

                        //INSTRUCTOR




//Traditional Loop to Add Array values
const myAdditionArray = [
    1, 2, 3, 4, 5
]

function addUpIndexes () {
    let total = 0
    for (let i = 0; i < myAdditionArray.length; i++) {
        total += myAdditionArray[i]
    }
    return total

}




