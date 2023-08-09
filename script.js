//Assignment code here
// function generatePassword() {
// var inputPassword = document.getElementById("password");
// var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
// var input = "";

// for (var i = 0; i <= inputPassword.length; i++) {
//     var randomNumber = Math.floor(Math.random() * characters.length);
//     inputPassword += characters.substring(randomNumber, randomNumber + 1);
//     }  
//         document.getElementById("password").value = password;
// }

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

//make sure user only put at least 8 characters and no more than 128 characters.
// the prompt will error if variable length is less than 8 characters or greater than 128.

function validateLength() {
    var length = window.prompt("Please enter the length of your password (need to be 8 and no more than 128 characters.)");
    
    if ( parseInt(length)) {
        var lengthInt = parseInt(length);
        if (lengthInt < 8 || lengthInt > 128) {
            window.alert("Password must be between 8 to 128 characters.");
            validateLength();
        }
    }
    else {
        window.alert("Password length must be a number");
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