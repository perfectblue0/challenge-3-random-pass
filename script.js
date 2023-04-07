// Assignment Code
var generateBtn = document.querySelector("#generate");

// debug and try out different methods?

function generatePassword() {

// ask user for length
let passwordLength = parseInt(prompt("How long should the password be?"));

// validate length

if (passwordLength < 8 || passwordLength > 128) {
  alert("Error, invalid password length. \nPlease choose a password greater than 8 and less than 128 characters.");
  return "";
}

// ask user what should password be made up of

var includeLowerCase = confirm("Include lowercase letters in password?");
var includeUpperCase = confirm("Include uppercase in password?");
var includeNumbers = confirm("Include numbers in password?");
var includeSpecialCharacters = confirm("Include special characters in password?");

//validate types of characters
if(!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
  alert("Error, invalid character types. \nPlease include at least one type of character.");
  return "";
}

//generate a random password
let passwordCharacters = [];

// options for users to pick from

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// adds variable if user chooses to include it

if(includeLowerCase) {
  passwordCharacters = passwordCharacters.concat(lowerCase.split(""));
}

if(includeUpperCase) {
  passwordCharacters = passwordCharacters.concat(upperCase.split(""));
}

if(includeNumbers) {
  passwordCharacters = passwordCharacters.concat(numbers.split(""));
}

if(includeSpecialCharacters) {
  passwordCharacters = passwordCharacters.concat(specialCharacters.split(""));
}

// randomizes the added variables, and adds them to results, and returns results

let results = "";
for (var i = 0; i < passwordLength; i++) {
  let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
  let randomCharacter = passwordCharacters[randomIndex];
  results += randomCharacter;
}

// return generated password
return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
