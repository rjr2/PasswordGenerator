// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.getElementById("copy");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function copyPassword(){
  var copyText = document.querySelector("#password");
  copyText.select();
  document.execCommand("copy");
  alert("Saved to Clipboard");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);
