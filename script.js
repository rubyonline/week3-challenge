// Assignment code here
const pLength = prompt("How long would you like your password to be? Select a number between 8-128 characters.");
if (pLength > 128) {
  alert("Password too long. Please refresh the page.")
} else if (pLength < 8) {
  alert("Password too short. Please refresh the page.")
} else if (isNaN(pLength)) {
  alert("Type your number using the number keys. Please refresh the page.")
} else {
  const pLowercase = prompt("Would you like to include lowercase characters in your password? Type Y or N.")
  if (pLowercase != "Y" && pLowercase != "N" && pLowercase != "y" && pLowercase != "n") {
    alert("Please type Y or N. Please refresh the page.")
  } else {
    const pUppercase = prompt("Would you like to include uppercase characters in your password? Type Y or N.")
    if (pUppercase != "Y" && pUppercase != "N" && pUppercase != "y" && pUppercase != "n") {
      alert("Please type Y or N. Please refresh the page.")
    }
    
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
