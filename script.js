// Begin Code
// Input Variables
var criteria;
var confirmNumber;
var confirmCharacter;
var confrimUppercase;
var confirmLowercase;
// Password Value Arrays
// Special characters
character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "\:", "\;", "'", "<", ",", ">", ".", "?", "/", "`", "~", "{", "[", "}", "]", "|"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase conversion
space = [];
// Converts letters to uppercase
var choices;
var toUpper = function (upperCase) {
    return upperCase.toUpperCase();
};
alphabetUpper = alphabet.map(toUpper);

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    pw = generatePassword();
    document.getElementById("password").placeholder = pw;
});

// Function to generate password
function generatePassword() {
  criteria = parseInt(prompt("How many characters would you like your password to be? Please choose between 8 and 128."));
  if (!criteria) {
    alert("A value is needed!");
  } else if (criteria < 8 || criteria > 128) {
    criteria = parseInt(prompt("You must choose between 8 and 128!"));
  } else {  
  confirmNumber = confirm("Will this contain numbers?");
  confirmCharacter = confirm("Will this contain special characters?");
  confirmUppercase = confirm("Will this contain Uppercase letters?");
  confirmLowercase = confirm("Will this contain Lowercase letters?");
  }