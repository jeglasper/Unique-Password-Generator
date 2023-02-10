// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add code for the generatePassword() function declatiation
function generatePassword () {
    
    //Local String Variables to pull letters for generated password
    var numbers = '0123456789';
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var special = '<>?:"}{+_)(*&^%$#@!~`,./];[=-';

    //Add Prompt to Collect Desired Length of the Password
    var passwordLength = prompt('How many characters would you like your password to be? Select a Number as small as 8 and as large as 128');

    passwordLength = Number(passwordLength);

    //Makes sure the Password Length Meets the Criteria (8-128 Characters)
    while (Number.isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert('Please select a number between 8 and 128');
        var passwordLength = prompt('How many characters would you like your password to be? Select a Number as small as 8 and as large as 128');
        passwordLength = Number(passwordLength);
    }

    //Create Empty String Variable to Hold Characters User Wants to Include in Their New Password
    var passwordString = '';

    //Adds Prompts for User to Pick What Characters to Include in their new password
    var confirmUpperCase = confirm('Do you want to include Upper Case Letters in Your Password?\nSelect OK for Yes and Cancel for No');
    var confirmLowerCase = confirm('Do you want to include Lower Case Letters in Your Password?\nSelect OK for Yes and Cancel for No');
    var confirmNumbers = confirm('Do you want to include Numbers in Your Password?\nSelect OK for Yes and Cancel for No');
    var confirmSpecial = confirm('Do you want to include Special Characters in Your Password?\nSelect OK for Yes and Cancel for No');

    //Makes sure at least 1 Character type is selected
    while (!confirmUpperCase && !confirmLowerCase && !confirmNumbers && !confirmSpecial) {
        alert('Please Select at Least 1 Type of Character to Include in Your Password');
        var confirmUpperCase = confirm('Do you want to include Upper Case Letters in Your Password?\nSelect OK for Yes and Cancel for No');
        var confirmLowerCase = confirm('Do you want to include Lower Case Letters in Your Password?\nSelect OK for Yes and Cancel for No');
        var confirmNumbers = confirm('Do you want to include Numbers in Your Password?\nSelect OK for Yes and Cancel for No');
        var confirmSpecial = confirm('Do you want to include Special Characters in Your Password?\nSelect OK for Yes and Cancel for No');
    }

    //Adds Selected Character Types to Empty String
    if (confirmUpperCase) {
    passwordString = passwordString.concat(upperCase);
    }

    if (confirmLowerCase) {
    passwordString = passwordString.concat(lowerCase);
    }
    if (confirmNumbers) {
    passwordString = passwordString.concat(numbers);
    }
    if (confirmSpecial) {
    passwordString = passwordString.concat(special);
    }

    console.log(passwordString);
    console.log(typeof passwordLength);
    console.log(passwordLength);
    console.log(passwordString[2]);

    //Create Empty String Variable to Hold Generated Password
    var uniquePassword = ''

    //Loop to select random characters from the passwordString according to how long we chose for our password to be
    for (var i = 0; i < passwordLength; i++) {
    uniquePassword = uniquePassword.concat(passwordString[Math.floor(Math.random()*passwordString.length)]);
    }

    console.log(uniquePassword);

    //Sets the value of the function equal to the generated password held in the uniquePassword variable
    return uniquePassword;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);