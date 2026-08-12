// CALLBACKS //


const h1 = document.querySelector('h1')

h1.addEventListener("click", functionCallBack)

function functionCallBack(e){
    alert("Triggered by a callback")

}

//a callback is not directly called upon, it is called by another function or events or returns

function callThreeTimes ( callback ){
    callback()
    callback()
    callback()
}



//Arrow fn  - syntax shortned version of a normal fn - useful for callbacks

            //const myArrow = function (){}   
                    //BECOMES
            const myArrow= (parameter) => {return x + y + z}
            const myShortenedArrow = (x,y,z) => x + y + z
            const oneParam = x => x + y + z


function doForEach (array, callback){
    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        callback(item)        
    }
}   

const upperCasedStates = []

doForEach ( usStates, state => upperCasedStates.push(state.toUpperCased()))

const secondsElapsed = document.querySelector('#seconds-elapsed')


//Anonymous call back automatically sets the timer on page refresh
setInterval(() => {
    secondsElapsed++
    secondsElapsed.textContent = secondsElapsed
}, 1000)








