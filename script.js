// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
// Function to write the password
function writePassword() {

  // Asks user for the length of the pass word
  var passLength = (prompt("How long do you want your password to be? Must be a number between 8 and 128."));

  // If the password length is under 8 or over 128 it will ask for a number between 8 and 128. Will not proceed past this step if number does not meet criteria.
  while (passLength < 8 || passLength > 128) {
    
    passLength = prompt("Please pick a number between 8 and 128.");

  }


  // Asks user for what type of characters to use for the password
  var upperCase = confirm("Include uppercase letters?");
  var lowerCase = confirm("Include lowercase letters?");
  var numbers = confirm("Include numbers?");
  var special = confirm("Include special characters?");
    

  // If statement that responds with "One type must be selected" if no character type is chosen
  if (!upperCase && !lowerCase && !numbers && !special) {
    alert("One type must be selected~!");
    upperCase = confirm("Include uppercase letters?");
    lowerCase = confirm("Include lowercase letters?");
    numbers = confirm("Include numbers?");
    special = confirm("Include special characters?");
  }

  // Password variable
  var password = generatePassword();

  // Function that creates password
  function generatePassword(){

    var password = "";

    var use = {};

    // If statements that use earlier user input to decide what characters to put into the password variable
    if (upperCase) password += rando(use.upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM");
    if (lowerCase) password += rando(use.lowerCase = "qwertyuiopasdfghjklzxcvbnm");
    if (numbers) password += rando(use.numbers = "1234567890");
    if (special) password += rando(use.special = "!@#$%^&*(){}[]=<>/,.");

    // For loop that determines the length of the password
    for (var x = 4; x < passLength; x++) password += rando(rando(use).value);

    // Randomizes the password that was created above
    document.getElementById("password").value = randoSequence(password).join("");

  }
  

    var passwordText = document.querySelector("password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





