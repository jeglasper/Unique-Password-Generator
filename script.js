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

    //Create Empty String to Hold Characters User Wants to Include in Their New Password
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

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);