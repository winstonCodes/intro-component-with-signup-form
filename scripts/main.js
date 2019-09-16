
// Take the inputs from form,
// add them to a user input object,
// show confirmation and clear form if successful
// inform user if error


var firstNameInput = document.getElementById("firstName");
var lastNameInput = document.getElementById("lastName");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var form = document.getElementById("form");

 
// Add event listener to form and update list array on submit
form.addEventListener("submit", function (event) {

    // Prevent default submit action
    event.preventDefault();
0
    // Update info object
    const userInfo = getUserInfo();

    console.log(userInfo);
});

// Function: Update list array
const getUserInfo = () => {
    // get values from inputs, set as variable
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    let confirmFirst = checkInput(firstName);
    let confirmLast =  checkInput(lastName);
    let confirmEmail = checkInput(email);
    let confirmPassword = checkInput(password);
    
    // Define user Info object
    if (confirmFirst && confirmLast && confirmEmail && confirmPassword) {
        const userInfo = {
            firstName,
            lastName,
            email,
            password
        }
    
        // Reset input values
        firstNameInput.value = "";
        lastNameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
    
        return userInfo;
    } else {
        return "There was an error in the input.";
    }
}

const checkInput = input => {
    if (input && typeof input === "string"){
        return true;
    } else {
        return false;
    }
}