// Assignment Code
var enter;
var confirmNumber;
var confirmCharacter;
var confrimUppercase;
var confirmLowercase;

// Special characters
specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "\:", "\;", "'", "<", ",", ">", ".", "?", "/", "`", "~", "{", "[", "}", "]", "|"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// Alphabetical characters
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase conversion
space = [];
// Converts letters to uppercase
var choices;
var toUpper = function (up) {
  return up.toUpperCase();
};
alphabet2 = alphabet.map(toUpper);

// Event Listener
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  password = generatePassword();
  document.getElementById("password").placeholder = password;
});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
