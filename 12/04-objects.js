// OBJECT EXERCISES

// 1. Create an object named `favoriteTVShow` with `title`, `numberOfSeasons`, and `numberOfEpisodes`. You may fill it with real data or make the data up.

const favoriteTVShow = [

oneShow = {   
    title: "Title 1",
    numberOfSeasons: 1 , 
    numberOfEpisodes: 100 ,
    nest: 
        {
            review: 1,
            reviewer: "name 1",
            reviewContent: "review 1"
        }
    
},

towShow = {   
    title: "Title 2" ,
    numberOfSeasons: 2 , 
    numberOfEpisodes: 200,
     nest2: [
        {
            review: 2,
            reviewer: "name2",
            reviewContent: "review 2"
        }
        
    ]
},

threeShow = {   
    title: "Title 3" ,
    numberOfSeasons: 3 , 
    numberOfEpisodes: 300,
     nest3: [
        {
            review: 3,
            reviewer: "name3",
            reviewContent: "review 3"

        }
    ]
}
]


// 2. Inside `favoriteTVShow` create a nested object with a key of `review`. That review has a `title`, a `reviewer` (can be your name or someone else) and `reviewContent`

            //DONE



// 3. Use `printTVShowInfo` to console.log:
// - the title
// - the number of episodes
// - a pretty printed version of the review that looks like this: 
// "{review title} by {reviewer name}: {review content}"

function printTVShowInfo() {

    console.log(`The following is the information for TV Show one: 
        Title: ${oneShow.title}, 
        Number of Episodes: ${oneShow.numberOfEpisodes}
        Review: ${oneShow.nest.review} 
        Reviewer: ${oneShow.nest.reviewer} 
        Review Content: ${oneShow.nest.reviewContent}`)
        
}

// 4. Create a new object `car` with these attributes: `make`, `model`, `gallonsInTank`, `maxGallons`, `currentMiles`.

let car = {
    make: "Toyota",
    model: "Camry",
    gallonInTank: "9 Gallons",
    maxGallons: "12 Gallons",
    currentMiles: "4,999",
}





// 5. Give the `car` a method `describeMakeAndModel` which returns the `make` and `model` for the car. For example: "Ford Taurus"

    let describeMakeAndModel = `${car.make} ${car.model}`


// 6. Give the `car` a method `fillTank` which sets the `gallonsInTank` to the `maxGallons`


car.fillTank = function () {
    this.gallonInTank = this.maxGallons
}


function fillTankChange () {
    let fillUp = car.gallonInTank = "12 gallons"
    console.log(`New gallons in tank value is: ${car.gallonInTank}`)
}


// HINT: Inside your car's method, the keyword `this` refers to the car object itself


// 7. Give the `car` a method `goForADrive` which sets the `gallonsInTank` to 5 less than it was and also sets `currentMiles` to be 100 more than it was
car.goForADrive = function() {
    this.gallonInTank = this.gallonInTank -5
}

// 8. Give the `car` a method `rewindMiles` which sets `currentMiles` to 0
// the gauge for a car's mileage is called an odometer for those curious
// rewinding the odometer is illegal btw

