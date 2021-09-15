// Input Variables
var criteria;
var confirmNumber;
var confirmCharacter;
var confrimUppercase;
var confirmLowercase;
// Password Value Arrays
// Special characters
character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ":", ";", "'", "<", ",", ">", ".", "?", "/", "`", "~", "{", "[", "}", "]", "|"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
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
  };
  // No criteria selected
  if (!confirmNumber && !confirmCharacter && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose at least one criteria!");
  } 
  // All four criteria selected
    else if (confirmNumber && confirmCharacter && confirmUppercase && confirmLowercase) {
      choices = number.concat(character, alphabet, alphabetUpper);
  } 
  // Three criteria selected
    else if (confirmNumber && confirmCharacter && confirmUppercase) {
      choices = number.concat(character, alphabetUpper);
  } else if (confirmNumber && confirmCharacter && confirmLowercase) {
      choices = number.concat(character, alphabet);
  } else if (confirmCharacter && confirmUppercase && confirmLowercase) {
      choices = character.concat(alphabet, alphabetUpper);
  } else if (confirmNumber && confirmUppercase && confirmLowercase) {
      choices = number.concat(alphabet, alphabetUpper);
  } 
  // Two criteria selected
    else if (confirmNumber && confirmCharacter) {
      choices = number.concat(character);
  } else if (confirmCharacter && confirmUppercase) {
      choices = character.concat(alphabetUpper);
  } else if (confirmCharacter && confirmLowercase) {
      choices = character.concat(alphabet);
  } else if (confirmNumber && confirmUppercase) {
      choices = number.concat(alphabetUpper);
  } else if (confirmNumber && confirmLowercase) {
      choices = number.concat(alphabet);
  } else if (confirmUppercase && confirmLowercase) {
      choices = alphabet.concat(alphabetUpper);
  }
  // One criteria selected
    else if (confirmNumber) {
      choices = number;
  } else if (confirmCharacter) {
      choices = character;
  } else if (confirmLowercase) {
      choices = alphabet;
  } else if (confirmUppercase) {
      choices = space.concat(alphabetUpper);
  };

  var password = [];

  for (var i = 0; i < criteria; i++) {
    var selectChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(selectChoices);
  }

  var pw = password.join("");
  UserInput(pw);
  return pw;
}
function UserInput(pw) {
  document.getElementById("password").textContent = pw;
}