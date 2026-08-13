// CLIENTS ARRAY EXERCISES //

const clients = [
    {
        firstName: "Bob",
        lastName: "Builder",
        state: "Arizona"
    },
    {
        firstName: "Johnny",
        lastName: "Appleseed",
        state: "North Carolina",
    },
    {
        firstName: "Jimothy",
        lastName: "Raccoon",
        state: "Washington"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        state: "North Carolina"
    },
    {
        firstName: "Invader",
        lastName: "Zim",
        state: "Arizona"
    }
]

// Use .map() to create a new array of strings, each string is the combined first name and last name of the client object

        const wholeNames = clients.map(fullName => fullName.firstName + " " + fullName.lastName)
        console.log(wholeNames)



// Use .find() to return the client with the last name of "Doe"

        const findDoe = clients.find(doeLast => doeLast.lastName === "Doe")
        console.log(findDoe)


// Use .filter() to return an array of all clients who live in "Arizona"


        console.log(clients.filter(whichState => whichState.state.includes("Arizona")))


// Use .sort() to group clients by state alphabetically


        console.log(clients.sort((a,b) => a.state > b.state))



