// ADDING NODES //

            // const newH4 = document.createElement('h4')


            // newH4.className = "h4"
            // newH4.id = "H4ID"
            // newH4.textContent = "some text"

// add to the end
// body.append('newH4')

//add to the beginning
// body.prepend("newH4") 



// Exercises

//1. Create the movies-watchlist element






//1. Create and append a new ul to the body with an id of "movies-watchlist" using JS







//2. Add three movies <li>'s to the movies-watchlist using JS

// function movieExercise (movie) {
//     const addToList = addMovie.append(movie)

//     moviesList = addToList.append(movie)

// }



//3. Prepend a new <h3> into movies-watchlist which says "Movies Watchlist"

const moviesH3 = document.createElement('h3')

moviesH3.textContent = "Below are movies I must see:"

document.body.append(moviesH3)

const moviesList = document.createElement('ul')

moviesList.id = "movies-watchlist"

document.body.append(moviesList)



function movieExercise (movie, priority) {
    const addMovie = document.createElement('li')
    
    const addToList = addMovie.append(movie)

    moviesList = addToList.append(movie)

    if (priority === "high") {
        movie.style.color = "red"
    } else if (priority === "medium") {
        movie.style.color = "blue"
    } else if (priority === "low") {
        movie.style.color = "green"
    }

}


//4. Give each movie in the movie watchlist a different color - show priority of order to how badly you want to see this movie



const firstLi = document.createElement ('li')
firstLi.textContent = "Spiderman"
moviesList.append(firstLi)





const allMovies = moviesList.querySelectorAll['li']

allMovies[0].style.color = "red"