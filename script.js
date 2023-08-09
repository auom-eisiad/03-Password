//Assignment code here
// function genPassword() {
// var inputPassword = document.getElementById("password");
// var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
// var lengthPassword = 12;
// var input = "";

// for (var i = 0; i <= lengthPassword; i++) {
//     var randomNumber = Math.floor(Math.random() * characters.length);
//     inputPassword += characters.substring(randomNumber, randomNumber + 1);
//     }  
//         document.getElementById("password").value = password;
// }

// genPassword();

//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

//funtion to validate the length of the password
function validateLength() {
    // prompt user to choose how long they want their password
    var length = window.prompt("Please enter the length of your password (need to be 8 and no more than 128 characters.)");
    
    // condition the length to where the computer will read "length" as an integar
    if ( parseInt(length)) {

        // holds the conversion in a variable
        var lengthInt = parseInt(length);

        // if the user input a length les than 8 or greater than 128, the prompt will alert them.
        if (lengthInt < 8 || lengthInt > 128) {
            window.alert("Password must be between 8 to 128 characters.");

            // function calls itself back
            validateLength();
        }
    }
    else {
        // if user input something other than a number, the prompt will alert them
        window.alert("Password length must be a number");

        //function will call itself back
        validateLength();
    }
}

validateLength();

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

var lowercase = window.confirm("Is there any lowercase?")
var uppercase = window.confirm("Is there any uppercase?")
var numeric = window.confirm("Is there any numeric?")
var specialChar = window.confirm("Is there any special characters?")

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

function genPassword() {
    if (fdf) {

    }
}

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);