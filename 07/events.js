// EVENTS //

//Example:
        //in HTML
                // <button onclick="handleClickMe()"> Click Me! </button>
        //in JS
                // function handleClickMe(){
                //     console.log("The button has been clicked")
                // }

//Example: 
        //in HTML
            //<button id="callback-button"> Click Me! with Call Back </button>
        //in JS
            //const callBackBtn = document.querySelector('#callback-button')

            //callBackBtn.addEventListener("click", handleClickMe)

//EVENT OBJECT

const eventObjBtn = document.querySelector("#event-object-button")

function showEventObject(event){
    console.log("THE EVENT:")
    console.log("THE TARGET:", event.target)
    
    console.log (event)
}

eventObjBtn.addEventListener("focus", showEventObject)


//USING TARGET TO HANDLE CODE AND PAGE is inside od showEventObject

//Show and Hide Menus

let menuShown = false

function toggleMenu (event) {
    const hiddenMenu = document.querySelector("#hidden-menu")
    if (menuShown === false) {
        hiddenMenu.computedStyleMap.display = "block"
    } else {
        hiddenMenu.computedStyleMap.display = "none"
    }

    menuShown = !menuShown
}
 
const hiddenMenuButton = document.querySelector('#hidden-menu-button')

hiddenMenuButton.addEventListener("click", togglemenu)




// FORMS ///////////////////////


const newsYearsForm = document.querySelector('#new-years-goals-form')
const goalsList = document.querySelector('#new-years-goals-list')
const goalInput = document.querySelector('#goal-input')

function handleSubmitGoal ( event ) {
    
    event.preventDefault()
    const userInput = goalInput.value

    const newLi = document.createElement('li')

    newLi.textContent = userInput

    goalsList.append(newLi)

    goalInput.value
    // console.log("SUBMITTED")

    newYearForms.reset()
}

newsYearsForm.addEventListener("submit", handleSubmitGoal)



//notes
    // forms have default behaviors

//ANOTHER FORM ////////////////


const secondTodoForm = document.querySelector('#second-todo-form')
const todoItemInput = document.querySelector('#todo-item-input')
const todoPriorityInput = document.querySelector('#todo-priority-input')
const secontTodoList = document.querySelector('#second-todo-list')


function handleSubmitTodo (event) {

    event.preventDefault()

    const userTodo = todoItemInput.value

    const priority = todoPriorityInput.value
    

    const newLi = document.createElement('li')

    newLi.textContent = `${priority} - ${userTodo}`

    secondTodoList.prepend( newLi )
      
    // console.log(newLi.textContent)

    secondTodoForm.reset()

    // console.log("SUBMITTING")
    newLi.addEventListener('click', handleCompleteTodo)
}

function handleCompleteTodo (event){
    // event.target.style.display ="none"
    event.target.style.textDecoration = "line-through"
    
    // console.log(event.target)
}

secondTodoForm.addEventListener("submit", handleSubmitTodo)



