// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//Generate a random password 
function generatePassword() {
  var length = "";
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1023456789";
  var password = "";

  //Prompt for password length
  while (isNaN(length) || length < 8 || length > 128){
    length = parseInt(prompt("Enter password length (between 8 and 128):"));
  }

  //Prompt for upper or lowercase 
  var includeUppercase = confirm("Include uppercase letters?");
  var includeLowercase = confirm("Include lowercase letters?");
  
  if (includeLowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }

  if (includeUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  
//Prompt for special characters 
  var includespecialchar = confirm("Include special characters?");

  if (includespecialchar) {
    charset += "0123456789!@#$%^&*()_+`~{}[];:?<>/=-";
  }

  //Generate Password
  for (var i = 0; i < length; i++){
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
