var generateBtn = document.querySelector("#generate")
var passwordLength = document.querySelector("#length")
var caps = document.querySelector("#caps")
var lower = document.querySelector("#lower")
var number = document.querySelector("#number")
var special = document.querySelector("#special")

var items = Array()

var numbersArray = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
var lowerArray = Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
var capArray = Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
var specialArray = Array("!", "@", "#", "$", "%", "^", "&", "*",)

var useUpperCase = window.confirm("Would you like to include UPPER case characters?");
var useLowerCase = window.confirm("Would you like to include lower case characters?");
var useSpecial = window.confirm("Would you like to include $pecial characters?");
var useNumbers = window.confirm("Would you like to include Numbers#?");


function writepassword() {
	var password = generatePassword()
	var passwordText = document.querySelector("#password")

	passwordText.value = password
}

function generatePassword() {
	if (!passwordLength.value) {
  	return "Missing How many characters"
  }
  
  if (passwordLength.value < 8) {
  	return "needs to be between 8 and 128 characters"
  }
  
  if (passwordLength.value > 128) {
  	return "needs to be between 8 and 128 characters"
  }
  
  if (number.checked) {
    items.push.apply(items, numbersArray)
  }
  
  if (lower.checked) {
  	items.push.apply(items, lowerArray)
  }
  
  if (caps.checked) {
  	items.push.apply(items, capArray)
  }
  
  if (special.checked) {
    items.push.apply(items,  specialArray)
  } 
  

  let holder = ""
  
  for (let i = 0; i < passwordLength.value; i++) {
    var item = items[Math.floor(Math.random()*items.length)];
  	holder = holder.concat(item);
	}

	return holder
}

generateBtn.addEventListener("click", writepassword);