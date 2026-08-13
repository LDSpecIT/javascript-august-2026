// DEBUGGING CHALLENGE //

// Find all the bugs in the code and fix them!

// BUG ZERO:
// result: the script loads correctly in the html
// HINT:
// There is one change you'll have to make to the <script> tag in `debug.html`


// BUG ONE:
// result: set width of image to 50%
document.querySelector( 'img' ).style.width = "30%"

// BUG TWO:
// result: increase number of defeated bugs when "Defeat Bug" button is clicked

let counter = 0

function increaseCounter() {
    counter += 1
    console.log(counter)
    const defeatBugButton = document.querySelector('span')
    defeatBugButton.textContent = counter

}
const defeatBugButton = document.querySelector("#defeat-bug-button")

defeatBugButton.addEventListener( "click", increaseCounter)



changeListItemsToColor("green")

// BUG THREE:
// result: change list items to a color such as "yellow"
function changeListItemsToColor( color ) {
    const listItems = document.querySelector( 'ul' ).children
    for ( let i = 0; i < listItems.length; i++ ) {
        changeListItemColor( listItems[i], color )
        // listItems.style.color = "yellow"
    }
}

function changeListItemColor( listItems, color ) {
    listItems.style.color = color
}


// BUG FOUR:
// result: change body background and text color
document.body.style.backgroundColor = "black"
document.body.style.color = "white"



