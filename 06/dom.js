// INTRO TO THE DOM //

 //STYLING

    //class/id   css   styling
//   googlelink.style.color
  //googlelink.style.textDecoration = "none"
  //googlelink.style.textDecoration = "overline"

  //googlelink.style.cssText = "color: red; background-color: #eee;"...

    // set var          call by query       a, img, etc  [0]--> means the first one  
    //const variable = document.querySelector('tag')[0] 

    // variable.src
    // variable.src = "newsrc"

const jimothy = document.querySelector('img')
jimothy.style.maxWidth = "100%"

//1
const headerTwo = document.querySelector('h2')

headerTwo.style.color = "green"

//2

const firstLi = document.querySelector('li')[0]


//3

        // let allP = document.querySelectorAll('p')

        // allP.textContent = "New P"

//4 

const lastP = document.querySelector('p')[3]

lastP.style.color = "red"

//5
const allP = document.querySelectorAll('p')

allP.textContent = "New P"

//6

jimothy.src = "newsrc"

//7

jimothy.style.border = "solid 1px black"

//8

const allLi = document.querySelectorAll('li')

function listChange(){
    for (let i = 0; i < allLi.length; i++ ){
        allLi[i].style.color = "blue"
    }
}
