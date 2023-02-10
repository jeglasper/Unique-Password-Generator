// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var numbers = '0123456789';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var special = '<>?:"}{+_)(*&^%$#@!~`,./];[=-';

  var passwordLength = prompt('How many characters would you like your password to be? Select a Number as small as 8 and as large as 128');

  passwordLength = Number(passwordLength);

  while (Number.isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Please select a number between 8 and 128');
    var passwordLength = prompt('How many characters would you like your password to be? Select a Number as small as 8 and as large as 128');
    passwordLength = Number(passwordLength);
  }

  var passwordString = '';

  var confirmUpperCase = confirm('Do you want to include Upper Case Letters in Your Password?\nSelect OK for Yes and Cancel for No');
  var confirmLowerCase = confirm('Do you want to include Lower Case Letters in Your Password?\nSelect OK for Yes and Cancel for No');
  var confirmNumbers = confirm('Do you want to include Numbers in Your Password?\nSelect OK for Yes and Cancel for No');
  var confirmSpecial = confirm('Do you want to include Special Characters in Your Password?\nSelect OK for Yes and Cancel for No');

  while (!confirmUpperCase && !confirmLowerCase && !confirmNumbers && !confirmSpecial) {
    alert('Please Select at Least 1 Type of Character to Include in Your Password');
    var confirmUpperCase = confirm('Do you want to include Upper Case Letters in Your Password?\nSelect OK for Yes and Cancel for No');
    var confirmLowerCase = confirm('Do you want to include Lower Case Letters in Your Password?\nSelect OK for Yes and Cancel for No');
    var confirmNumbers = confirm('Do you want to include Numbers in Your Password?\nSelect OK for Yes and Cancel for No');
    var confirmSpecial = confirm('Do you want to include Special Characters in Your Password?\nSelect OK for Yes and Cancel for No');
  }

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

var uniquePassword = ''

for (var i = 0; i < passwordLength; i++) {
  uniquePassword = uniquePassword.concat(passwordString[Math.floor(Math.random()*passwordString.length)]);
}

console.log(uniquePassword);

return uniquePassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
