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

    while (Number.isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert('Please select a number between 8 and 128');
        var passwordLength = prompt('How many characters would you like your password to be? Select a Number as small as 8 and as large as 128');
        passwordLength = Number(passwordLength);
  }



}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);