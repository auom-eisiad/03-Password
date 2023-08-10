//Assignment code here

// User click on button
function generatePassword() {
    // Password Criteria
    // 2. Lowercase?
    // 3. Uppercase?
    // 4. Numeric?
    // 5. Special characters?

    //funtion to validate the length of the password
    function validateLength() {
        var password = "";
        for (var i = 0; i <= lengthInt; i++) {
            var randomNumber = Math.floor(Math.random() * input.length);
            password += password + input[randomNumber];

            return password;
            }

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

    var input = [];
    var lowerAlp = "abcdefghijklmnopqrstuvwxyz".split( '' );
    var upperAlp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split( '' );
    var num = "0123456789".split( '' );
    var spcha = "!@#$%^&*()".split( '' );

    if (confirm("Is there any lowercase?")) {
        input = input.concat(lowerAlp);
    }
    if (confirm("Is there any uppercase?")) {
        input = input.concat(upperAlp);
    }
    if (confirm("Is there any numeric?")) {
        input = input.concat(num);
    }
    if (confirm("Is there any special characters?")) {
        input = input.concat(spcha);
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