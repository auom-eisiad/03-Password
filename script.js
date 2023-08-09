//Assignment code here

// User click on button
function generatePassword() {
    // Password Criteria
    // 1. Length of 8 - 128 characters no more
    // 2. Lowercase?
    // 3. Uppercase?
    // 4. Numeric?
    // 5. Special characters?
    //funtion to validate the length of the password
    function validateLength() {
        // prompt user to choose how long they want their password
        var length = window.prompt("Please enter the length of your password: (No less than 8 and no more than 128 characters.)");
        
        // condition the length to where the computer will read "length" as an integar
        if ( parseInt(length)) {

            // holds the conversion in a variable
            var lengthInt = parseInt(length);

            // if the user input a length les than 8 or greater than 128, the prompt will alert them.
            if (lengthInt < 8 || lengthInt > 128) {
                window.alert("The length of your password must be at least 8 and no more than 128 characters.");

                // function calls itself back
                validateLength();
            }
        }
        else {

            // if user input something other than a number, the prompt will alert them
            window.alert("Password length must be an integar.");

            //function will call itself back
            validateLength();
        }
    }
    validateLength();

    console.log("cicked");

    return "Hi";
}

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