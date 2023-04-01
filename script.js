// Assignment Code
var generateBtn = document.querySelector("#generate");

// debug and try out different methods?

function generatePasssword() {

// ask user for length
let passwordLength = parseInt(prompt("How long should the password be?"));
if (passwordLength < 8 && passwordLength > 128) {
  alert("Error, invalid password length. \nPlease choose a password between 8-12 characters");
  return ""
}

// ask user for which characters to include

var includeLowercase = confirm("Include lowercase lettres in password?");
var includeUppercase = confirm("Include uppercase in password?");
var includeNumbers = confirm("Include numbers in password?");
var includeSpecialCharacters = confirm("Include special characters in password?");

//validate types of characters
if(!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
  alert("Error, invalid character types. \nPlease include at least one type of character.");
  return "";
}

//generate a random password
let passworrdCharacters = [];
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


//handloe other character types

if (includeSpecialCharacters) {
  passwordCharacters = passwordCharacters.concat(specialCharacters.split(""));
}

let results = "";
for (var i = 0; passwordLength; i++) {
  let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
  let randomCharacter = passwordCharacters[randomIndex];
  results += randomCharacter;

  return results;

}
// return generated password



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
