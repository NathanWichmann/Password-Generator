



// characters and numbers and symbols used in generating a password
var symbolsArr = ["!", "@", "#", "$", "%", "^", "&", "*", "()", "_", "-", "=", "+", "~", "{", "}", "[", "]", ";", ":", "'", ",", "<", ">", ".", "/", "?"];
var numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasesArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCasesArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// this is the function for the random generator 
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}




// this is the function used to generate the password length and charactors and interacts with the user
function generatePassword() {
  // variable created to pass the arrays through
  var possibleChar = [];
  // variable created to return the results from each array requested
  var result = [];
  // Array to containe one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = []

  // varviable created to ask the used how many characters they want to use in the rules 
  var passwordLength = prompt("How many Characters do you want between 8 and 128?");
  //if the passord length created above is less than 8 alert message is shown
  if (passwordLength < 8) {
    alert("Password Length must be more than 8 Characters");
    return;
  }
  //if the password is greater than 128 characters the alert message is shown  
  if (passwordLength > 128) {
    alert("Password Length must be less than 128 Characters");
    return;
  }

  // if the passwordlength is not a number than alert message is shown 
  if (isNaN(passwordLength) === true) {
    alert("Must Provide a Number");
    return;
  }
  // confirming with the user if they want to use Uppercase in their password 
  var upperCases = confirm("Would you like to use Uppercase in you Password?");
  // confirming with the user if they want to use lowercase in their password
  var lowerCases = confirm("Would you like to use Lowercase in you Password?");
  // confirming with the user if they want to use numbers in their password 
  var numbers = confirm("Would you like to use Numbers in you Password?");
  // confirming with the user if they want to use symbols in their password 
  var symbols = confirm("Would you like to use Symbols in you Password?");

  // checking my work 
  console.log(passwordLength, upperCases, lowerCases, numbers, symbols)
  // checking my work 
  console.log("possiblechar", possibleChar)
  // if the user chooses to have uppercase its added to the possible character array 
  if (upperCasesArr) {
    //grab possible chartacter Types
    possibleChar = possibleChar.concat(upperCasesArr)
    guaranteedCharacters.push(getRandom(upperCasesArr));
    console.log("guaranteedCharacters", guaranteedCharacters);
  }
   // if the user chooses to have lowercase its added to the possible character array 
  if (lowerCasesArr) {
    //grab possible chartacter Types
    possibleChar = possibleChar.concat(lowerCasesArr)
    guaranteedCharacters.push(getRandom(lowerCasesArr));
    console.log("guaranteedCharacters", guaranteedCharacters);
  }
   // if the user chooses to have numbers its added to the possible character array 
  if (numbersArr) {
    possibleChar = possibleChar.concat(numbersArr)
    guaranteedCharacters.push(getRandom(numbersArr));
    console.log("guaranteedCharacters", guaranteedCharacters);
  }
   // if the user chooses to have symbols its added to the possible character array 
  if (symbolsArr) {
    possibleChar = possibleChar.concat(symbolsArr)
    guaranteedCharacters.push(getRandom(symbolsArr));
    console.log("guaranteedCharacters", guaranteedCharacters);
  }

  // iterates over the password length, 
  // selects random characters from the array of possible characters
  for (let i = 0; i < passwordLength; i++) {
    var newCahr = getRandom(possibleChar)
    result.push(newCahr);
  }

  // mixes in at least one charcter of each chosen array
  for (let i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i]
  }
  console.log(result)
  return result.join("");

}
//connects the js to the html through the generateBtn 
var generateBtn = document.getElementById("generateBtn")
// Write password to the #password input the even.prevent default was added cause i originally created a form in the html.. button and form do not mix took several hours to find this out 
function writePassword(event) {
 event.preventDefault()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);