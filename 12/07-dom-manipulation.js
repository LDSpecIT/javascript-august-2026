// DOM MANIPULATION EXERCISES


// 1. Use `.querySelector()` to select the <form> and save it to the variable `topicForm`.
const topicForm = document.querySelector('form')

// 2. Use `.querySelectorAll()` to select all <code> and save them to the variable `codeElements`.
const codeElements = document.querySelectorAll('code')

// 3. Use `.querySelector()` to select the <ul> and save it to the variable `topicsList`.
const topicsList = document.querySelector('ul')

// 4. Use `.querySelector()` to select the element with an id of "topic-input" and save it to the variable `topicInput`.
const topicInput = document.querySelector('#topic-input')

// 5. Use `.querySelector()` to select the element with an id of "important-information" and save it to the variable `importantInformation`.
let importantInformation = document.querySelector('#important-information')

// 6. Change the `topicForm` to use a "solid grey 2px" border styling.
topicForm.style.border = "solid grey 2px"
topicForm.style.padding = "1em"
// 7. Change the styling for all <code> so that they are the color "red".
codeElements.forEach( element => element.style.color = "red") 


// 8. Change the first item inside `codeElements` so its text properly read "defer".
codeElements[0].textContent = "defer"

// 9. Remove the last <li> within `topicsList`.
const lastIndex = topicsList.children.length -1

topicsList.children[lastIndex].remove()

// 10. When the <button> is clicked, change the styling for every element within `topicList` to use a textDecoration of "line-through".

let button = document.querySelector('button')

function handleCrossOut(){
    const topics = topicsList.children

    for (let i = 0; i < topics.length; i++) {
        const element = topics[i];
        element.style.textDecoration = "line-through"
    }
}

button.addEventListener("click", handleCrossOut)

// let liBk = () => topicsList.style.textDecoration = "line-through"

// btn.addEventListener("click", liBk)

// 11. When the <form> is submitted, add the current `value` from `topicInput` to the `topicsList` as a <li>.

let submit = document.querySelector("input"[1])

function handleSubmit(event){
    event.preventDefault()
    let newItemString = topicForm.value
    let li = document.createElement('li')
    li.textContent = newItemString
    topicsList.append(li)
    event.target.reset()
}

// const addToList = () => topicsList.append(topicInput.value)

// submit.addEventListener("click", addToList)
