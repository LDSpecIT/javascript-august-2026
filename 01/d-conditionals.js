// CONDITIONALS & BOOLEANS //


// boolean
    //true or false
    //true "==="


//.trim is a string method


function isValid(usernameOrEmail, password) {
    
    const usernameIsValid = usernameOrEmail === "Luciano"
    const userNameEmail = usernameOrEmail === "LPD@mail.com"
    const validPW = password === "password123"

    const valid = usernameIsValid || userNameEmail && validPW

    return valid 

}

// IF and ELSE


function simpleLogin(username) {
    if (username === "Luciano") {
        return "Successful Login"

    } else {
        return "Invalid Login" 
    }

} 


