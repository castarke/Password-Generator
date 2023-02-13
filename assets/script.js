// Assignment code here
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
// Get references to the #generate element

// var passwordLength;
var emptyPass =[];
var passwordLength = "";
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbol = ["!","@","#","$","%","^","&","*","~"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var mypassword = '';
var randomPassword= '';


function generatePassword() {
  passwordLength = prompt("Please select the character length of your password, between 8 and 128 characters");
  console.log("Password character length " + passwordLength);

  if(!passwordLength) {
    alert("Enter number of characters you silly goose");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose a password length between 8 and 128 characters");
    console.log("Password character length " + passwordLength);
  }
  lowerCase = blurt("Do you want to include lower case letters?");
  console.log("Lower Case " + lowerCase);

  upperCase = blurt("Do you want to include UPPER CASE letters?");
  console.log("UPPERCASE LETTERS " + upperCase);

  numbers = blurt("Do you want to include any numb3rs? ");
  console.log("Numb3rs " + numbers);

  symbol = blurt("Lastly, do you want to include any special characters? ");
  console.log("~Special Characters~" + symbol);

// if no character criteria is chosen. Go in order of Lowercase, upper case, numbers, and symbol last in case of running into cascading issue when clicking through

  if(!lowerCase && !upperCase && !numbers && !symbol) {
  randomPassword = alert("Pick something if you want to generate a password fam");

// if all 4 character criteria is chosen

} else if (lowerCase && upperCase && numbers && symbol) {
randomPassword = randomPassword.concat(lowerCase, upperCase, numbers, symbol);
// console.log(randomPassword);

// if 3 character criteria is chosen

} else if(lowerCase && numbers && symbol) {
randomPassword = randomPassword.concat(lowerCase, numbers, symbol);
// console.log(randomPassword);

} else if (lowerCase && upperCase && symbol) {
  randomPassword = randomPassword.concat(lowerCase, upperCase, symbol);
  // console.log(randomPassword);

} else if (lowerCase && upperCase && numbers) {
  randomPassword = randomPassword.concat(lowerCase, upperCase, numbers);
  // console.log(randomPassword);

// if 2 character chriteria is chosen

}else if (lowerCase && upperCase) {
  randomPassword = randomPassword.concat(lowerCase, upperCase);
  // console.log(randomPassword);

} else if (lowerCase && numbers) {
randomPassword = randomPassword.concat(lowerCase, numbers);
// console.log(randomPassword);

} else if (lowerCase && symbol) {
randomPassword = randomPassword.concat(lowerCase, symbol);
// console.log(randomPassword);

} else if (upperCase && numbers) {
  randomPassword = randomPassword.concat(upperCase, numbers);
  // console.log(randomPassword);

} else if (upperCase && symbol) {
  randomPassword = randomPassword.concat(upperCase, symbol);
  // console.log(randomPassword)

} else if (numbers && symbol) {
randomPassword = randomPassword.concat(numbers, symbol);
// console.log(randomPassword);

// if 1 character criteria is chosen

} else if (lowerCase) {
  randomPassword = lowerCase;
  // console.log(randomPassword);

} else if (upperCase) {
  randomPassword = upperCase;
  // console.log(randomPassword);

} else if (numbers) {
  randomPassword = numbers;
  // console.log(randomPassword);

} else if (symbol) {
  randomPassword = symbol;
  // console.log(randomPassword);
  return;
}

for (var i = 0; i < passwordLength; i++) {
  mypassword += randomPassword[Math.floor(Math.random() * randomPassword.length)];
  emptyPass.push(mypassword);
  console.log(mypassword)
 } return mypassword;
}
// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}
