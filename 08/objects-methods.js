//OBJECTS & METHODS


//DATA STRUCTURE -- HOLD OTHER INFORMATION

//AN OBJECT CAN HOLD INFORMATION FOR: 
    //STRINGS, 
    //NUMBERS,
    //BOOLEANS,
    //ARRAYS,
    //OBJECTS,
    //FUCNTIONS

const emptyObj = {}

const cat = {
    numberOfLegs: 4,
    teeth: true,
    numberOfLives: 9,
    sleep: function(){
        return "Cat is currently asleep"
    }
    

}

//data is store is stored in key value pairs in objects


cat.claws // true
cat.claws = false
cat.claws // false


const jimothy = {
    name: ["Jimothy, Danger, Raccoon"],
    species: {
        name: "Raccoon",
        genus: "Procyon",
        family: "Procyonidae",
        scientificName: "Procyon lotor",
    },
    fanBase: [
        {
            name: "Chett",
            age: 21
        },
        {
            name: "Bob",
            age: 21
        },
        {
            name: "Jane",
            age:21
        }
    ],
    home: { 
        city: "Seatle",
        state: "Washington",
    },
    eatTrash: function() {
        return "Yum Trash I love it"
    }

}








