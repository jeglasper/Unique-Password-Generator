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
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);