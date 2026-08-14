# Additional Practice Exercises

Use the file [./06-additional-practice.js](./06-additional-practice.js) for these exercises.

## Exercise One - Triangles

Create a new function `isItTriangle()` which accepts three arguments `angle1`, `angle2`, `angle3` representing angles in a geometric shape.

A triangle must have angles adding up to 180 degrees. This function returns `true` if the angles add up to make a triangle and `false` if the angles do not.

Additionally the angles cannot be negative.

### Examples:

```js
isItTriangle(45, 45, 90) // true

isItTriangle(45, 90, 90) // false

isItTriangle(180, -90, -90) //false
```

## Exercise Two - Farenheit to Celsius

Create a new function `farToCel()` which accepts a number argument `farenheit`.

The function returns the number converted to celsuis.

The conversion equation is:

```
(farenheit - 32) x 5/9
```

### Examples:

```js
farToCel(32) // 0
farToCel(104) // 40
farToCel(-4) // -20
```

### BONUS ONE:

If the result is a float, round it to the nearest tenth of a degree.

```js
farToCel(100) // 37.8
farToCel(0) // -17.8
```

### BONUS TWO: 

Absolute zero for farenheit is `-459.67`. If the function receives an argument lower than absolute zero, throw an error.

```js
farToCel(-600) // TypeError: farToCel only accepts farenheit arguments above absolute zero (-459.67)
```

### BONUS THREE: 

If the function receives a non-number argument, throw an error.

```js
farToCel("thirty two") // TypeError: farToCel only accepts numbers as arguments
```

## Exercise Three - Cake

Create a new function `isItCake()` which accepts a string argument `string`.

If the string includes the substring `"cake"` the function returns `true`, otherwise the function returns `false`.

### Examples: 

```js
isItCake("chocolate cake") // true

isItCake("chocolate muffin") // false
```

### BONUS ONE: 

The function is case insensitive meaning that the substring `"cake"` may have upcased characters.

```js
isItCake("CAKE") // true

isItCake("cakE") // true
```

### BONUS TWO: 

The function ignores spaces in the substring `"cake"` meaning there may be any number of spaces between other characters in the substring.

```js
isItCake("c  a  k  e") // true

isItCake("alpaca key") // true
```

## Exercise Four - FizzBuzz

Create a new function `fizzBuzz()` which accepts an argument `num`.

If `num` is divisible by 3 return `"Fizz"`.

If `num` is divisible by 5 return `"Buzz"`.

If `num` is divisible by 3 and 5 return `"FizzBuzz"`.

Otherwise return `num` itself.

### Examples:

```js
fizzBuzz(6) // "Fizz"

fizzBuzz(10) // "Buzz"

fizzBuzz(30) // "FizzBuzz"

fizzBuzz(31) // 31
```

## Exercise Five - Geometry

Create a new function `isItGeometry()` which accepts any number of arguments `angles`.

*HINT1: You will need to look up how functions may accept any number of arguments...*

*HINT2: In the function the arguments will arrive as an array...*

Based on the number of arguments and the angles given determine whether the shape is a triangle, a quadrilateral, or a pentagon (don't worry about other additional shapes).

- A triangle must have 3 angles that add up to 180 degrees.
- A quadrilateral must have 4 angles that add up to 360 degrees.
- A pentagon must have 5 angles that add up to 540 degrees.

If the angles add up to a potential shape, return that shape as a string, for example `"triangle"`. If not return `null`.

Negative angles are invalid and should cause the function to return `null`.

Examples:

```js
isItGeometry(45, 45, 90) // "triangle"

isItGeometry(60, 60, 120, 120) // "quadrilateral"

isItGeometry(108, 108, 108, 108, 108) // "pentagon"

isItGeometry(108, 108, 108, 108, 110) // null

isItGeometry(-90, 135, 135) // null
```




                        //CODE
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
        console.error("TypeError: farToCel only accepts farenheit arguments above absolute zero (-459.67)")
        return
    } else if (typeof farenheit === 'string') {
        console.error("farToCel only accepts farenheit arguments above absolute zero (-459.67)")
    }

    let result = Math.ceil(cel)

    console.log(
        `Farenheit Value = ${farenheit} Degrees - Celsius result = ${result} Degrees` 
    )

    if (result > 85 ){ 
        return "A good day for a beach trip"
    } else if (result < 85 && result > 70) {
        return "Tday would be a great day for a walk outdoors"
    } else if (result < 70 && result > 60){
        return "Take a sweatshirt or a jacket if you will be outside"
    } else if (result <= 59) {
        return "A good day to stay indoors"
    }
    // return Math.ceil(cel)

}

//EXERCISE CAKE

function isItCake(str){
    
    let target = ["c","a","k","e"]
    let wordString = str.toLowerCase().split("")
    
    let checkWord = wordString.filter(target[i]++)
    //let cakeWord = stringJoin.includes("cake")

    
    if (checkWord === "cake") {
        return true
    } else {
        return false
    }
}







// IS IT GEOMETRY
function isItGeometry(...a) {
    let total = 0 
    for (let i = 0; i < array.length; i++) {
        

        if (a[i]+= 180){
            return "triangle"
        } else if (a[i] === 360) {
            return "quadrileteral"
        } else if (a[i] === 540){
            return "pentagon"
        }
    }   
}


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



   