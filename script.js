//Assignment code here
// hold the lengthInt for global use
var lengthInt;

// User click on button
function generatePassword() {

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

    // call function
    validateLength();

    // hold user choices and ask which the user want to validate
    var input;
    var inputLower = window.confirm("Is there any lowercase?");
    var inputUpper = window.confirm("Is there any uppercase?")
    var inputNum = window.confirm("Is there any numeric?")
    var inputSpC = window.confirm("Is there any special characters?")
    
    // hold the characters user can use
    var lowerAlp = "abcdefghijklmnopqrstuvwxyz".split( '' );
    var upperAlp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split( '' );
    var num = "0123456789".split( '' );
    var spcha = "!@#$%^&*()".split( '' );

    // validate their criteria
    if (inputLower && inputUpper && inputNum && inputSpC) {
        input = lowerAlp.concat(upperAlp, num, spcha);
    }
    if (inputLower && !inputUpper && !inputNum && !inputSpC) {
        input = lowerAlp;
    }
    if (inputLower && inputUpper && !inputNum && !inputSpC) {
        input = lowerAlp.concat(upperAlp);
    }
    else if (inputLower && inputUpper && inputNum && !inputSpC) {
        input = lowerAlp.concat(upperAlp, num);
    };

    //hold the password to generate and display
    var password = "";

    // randomly choose characters to generate
    for (var i = 0; i <= lengthInt; i++) {
        var randomNumber = Math.floor(Math.random() * input.length);
        password.push(randomNumber);
        }
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