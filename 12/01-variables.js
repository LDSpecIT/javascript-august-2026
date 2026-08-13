document.body.style.backgroundColor = "darkgray"


// STRING EXERCISES

// 1. Create a new variable called `currentTime` and assign a string of the current time to that variable --> Example: "10:52am EST". This variable should be changeable.

let currentTime = "10:30am EST"

// 2. Create a new variable using concatetanation (the `+`) with your currentTime variable and create a string that reads "The current time is now 10:52am EST".

let anotherCurrentTime = "The current time is now" + " " + currentTime + "."

// 3. Create a new variable using interpolation (`${}`) with your `currentTime` variable and create a string that reads "The current time is now 10:52am EST".

let newCurrentTime = `The current time is now ${currentTime} EST`


// 4. Create a new variable called `currentTimeUpcased` which uppercases one of the previous either concatenation or interpolation variables.

let currentTimeUpcased = newCurrentTime.toUpperCase()


//const countTime = (time) => (time++, 1000) 

