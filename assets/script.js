// Assignment code here
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
// Get references to the #generate element

// list of variables below
var emptyPass =[];
var passwordLength = "";
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArr = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbolArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// var symbolArr = ['U+0021','U+0023','U+0024','U+0025','U+0026','U+0028','U+002B','U+002C','U+002F', 'U+003F', 'U+0040'];
var numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var mypassword = '';
var randomPassword= '';

// setting up the criteria window objects boxes 
function generatePassword() {
  passwordLength = prompt("Please select the character length of your password, between 8 and 128 characters");
  console.log("Password character length " + passwordLength);

  if(!passwordLength) {
    alert("Enter number of characters you silly goose");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose a password length between 8 and 128 characters");
    console.log("Password character length " + passwordLength);
  }
  lowerCase = confirm("Do you want to include lower case letters?");
  console.log("Lower Case " + lowerCase);

  upperCase = confirm("Do you want to include UPPER CASE letters?");
  console.log("UPPERCASE LETTERS " + upperCase);

  numbers = confirm("Do you want to include any numb3rs? ");
  console.log("Numb3rs " + numbers);

  symbol = confirm("Lastly, do you want to include any special characters? ");
  console.log("~Special Characters~" + symbol);

// if no character criteria is chosen. Go in order of Lowercase, upper case, numbers, and symbol last in case of running into cascading issue when clicking through

  if(!lowerCase && !upperCase && !numbers && !symbol) {
  randomPassword = alert("Pick something if you want to generate a password fam");

// if all 4 character criteria is chosen

} else if (lowerCase && upperCase && numbers && symbol) {
randomPassword = randomPassword.concat(lowerCaseArr, upperCaseArr, numbersArr, symbolArr);
// console.log(randomPassword);

// if 3 character criteria is chosen

} else if(lowerCase && numbers && symbol) {
randomPassword = randomPassword.concat(lowerCaseArr, numbersArr, symbolArr);
// console.log(randomPassword);

} else if (lowerCase && upperCase && symbol) {
  randomPassword = randomPassword.concat(lowerCaseArr, upperCaseArr, symbolArr);
  // console.log(randomPassword);

} else if (lowerCase && upperCase && numbers) {
  randomPassword = randomPassword.concat(lowerCaseArr, upperCaseArr, numbersArr);
  // console.log(randomPassword);

// if 2 character chriteria is chosen

}else if (lowerCase && upperCase) {
  randomPassword = randomPassword.concat(lowerCaseArr, upperCaseArr);
  // console.log(randomPassword);

} else if (lowerCase && numbers) {
randomPassword = randomPassword.concat(lowerCaseArr, numbersArr);
// console.log(randomPassword);

} else if (lowerCase && symbol) {
randomPassword = randomPassword.concat(lowerCaseArr, symbolArr);
// console.log(randomPassword);

} else if (upperCase && numbers) {
  randomPassword = randomPassword.concat(upperCaseArr, numbersArr);
  // console.log(randomPassword);

} else if (upperCase && symbol) {
  randomPassword = randomPassword.concat(upperCaseArr, symbolArr);
  // console.log(randomPassword)

} else if (numbers && symbol) {
randomPassword = randomPassword.concat(numbersArr, symbolArr);
// console.log(randomPassword);

// if 1 character criteria is chosen

} else if (lowerCase) {
  randomPassword = lowerCaseArr;
  // console.log(randomPassword);

} else if (upperCase) {
  randomPassword = upperCaseArr;
  // console.log(randomPassword);

} else if (numbers) {
  randomPassword = numbersArr;
  // console.log(randomPassword);

} else if (symbol) {
  randomPassword = symbolArr;
  // console.log(randomPassword);
  return;
}
// setting up the randomizer
for (var i = 0; i < passwordLength; i++) {
  mypassword += randomPassword[Math.floor(Math.random() * randomPassword.length)];
  emptyPass.push(mypassword);
  console.log(mypassword)
 } return mypassword;
}
// // Writing password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}
