// ARRAY METHODS //


function doForEach (array, callback){
    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        callback(item)        
    }
}


doForEach(usStates, state => console.log())


const menuItems = ["Pizza", "Hamburger", "Salad"]

menuItems.forEach(food => {
    const p = document.createElement('p')
    p.textContent = food
    document.body.append()
})

const findBy = (array, callback) => {
    const filteredArray = []
    for(let i = 0; i < array.length; i++){
        const item = array[i]
        console.log (item, callback(item))
        if (callback(item)) {
            filteredArray.push (item)
        }
    }
    return filteredArray
}



// .reduce()
    //accumulators: adding to an interval of quantity defined by strings

function reduceBy (array, callback, initialValue=0) {
    let accumulator = initialValue
    for (let index = 0; index < array.length; index++) {
        const item = array[i];
        accumulator = callback(sum, item)

    }
    return accumulator
}



// .sort()
    // take random items and sort them from highest to lowest or lowest to highest in number of indexes, values, or alphabetical 
