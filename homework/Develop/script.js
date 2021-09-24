

const generateButton = document.getElementById('generate')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// created variables for characters
function generatePassword() {
  var lowerCaseCheck = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseCheck = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
  var numbersCheck = "0123456789";
  var specialCheck = "!@#$%^&*()+-_=~./><"; 

  // to make the password length between 8-128
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.");
  if (passwordLength < 7 || passwordLength >= 128) {
    alert(" Type in a number between 8 and 128")
     return;
 }
// window prompts to ask if they want characters
  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");


    
      retVal = "";
      
// conditions to set if they click cancel
      if(lowerCases) {
        upperCaseCheck = retVal.concat(lowerCaseCheck);
      }

      if(numbers){
        upperCaseCheck = retVal.concat(numbersCheck);
      }

      if(special){
        upperCaseCheck = retVal.concat(specialCheck);
      }
      // random character generator formula
      console.log(passwordLength);
      for(let i = 0; i < passwordLength; i++){
        retVal += upperCaseCheck.charAt(Math.floor(Math.random() * upperCaseCheck.length))
      }

  return retVal;
}

