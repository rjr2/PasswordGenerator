// Assignment Code
let generateBtn = document.querySelector("#generate");
let inputEl = document.getElementById("input");
let copyBtn = document.getElementById("copy");
let upperCaseEl = document.getElementById("uppercase");
let numbersEl = document.getElementById("numbers");
let specialEl = document.getElementById("special");
let errorEl = document.getElementById("error")
let passwordText = document.querySelector("#password");

var letters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "01234567890";
var symbols = "!@#$%^&*()=+-_";

//functions
function generatePassword(length, letters){
  let passwordArray = letters.split("");
  let results = [];
  for (let i = 0; i < length; i++){
    let index = Math.floor(Math.random()* passwordArray.length);
    results.push(passwordArray[index]);
  }
  return results.join("");
}

function copyPassword(){
  let copyText = document.querySelector("#password");
  copyText.select();
  document.execCommand("copy");
  alert("Saved to Clipboard");
}

//slider bar display
function displayPassLength(){
  let rangeValue = document.getElementById("input").value;
  let display = document.getElementById("rangedisplay");
  display.innerHTML = rangeValue
}

//event listeners
generateBtn.addEventListener("click", function(){
  upperCaseEl.checked ? (letters += upperCaseLetters): "";
  numbersEl.checked ? (letters += numbers): "";
  specialEl.checked ? (letters += symbols): "";
  let length = inputEl.value;
  passwordText.value = generatePassword(length, letters);
});

copyBtn.addEventListener("click", copyPassword);
