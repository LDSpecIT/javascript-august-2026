// ARRAYS //


//data that contains other data. Objects are different because they have different "key value pairs" - arrays are lists that hold values.


// arrays are defined with square brackets

const someArray = ["value", 'another value', `backticValue`]

// const arrayOfObjects = [{object}, {object1}, {object3}]

const stringsArray = []

//these can hold and be containers for retrieving information through index


//.pop() remove stuff from the end

//.push() add items to the end of an array

//.shift() removes first item of the list

//.unshift() adds an item to the beginning of an Array

//.slice(2, 4) start and end at a specific spot of an array - does not modify the array 
//.splice(3 , 1) changes the list to a new scope of the array - removes the 3rd index and only 1 index is removed.




const animals = [
    "bat", 
    "cat",
    "jiraf",
    "Tree"
]

//1. add "aardvark" at the beginning of the array
    animals.unshift("aardvark")
//2. add "zebra" at the end of the array
    animals.push("zebra")
//3. replace "jiraf" with "Giraffe"
animals[3] = ('Giraffe')


