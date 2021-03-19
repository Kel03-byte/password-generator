// Assignment Code


//Assigns each password criteria, the click button and the actual password to an element
var passwordEl= document.getElementById('password');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');

//Assigns each password criteria to a key in order to create the function
var randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

//Event - when the check boxes are clicked then procedde with the embedded function
generate.addEventListener('click', () => {
	var length = +lengthEl.value;
	var hasLower = lowercaseEl.checked;
	var hasUpper = uppercaseEl.checked;
	var hasNumber = numbersEl.checked;
	var hasSymbol = symbolsEl.checked;
	
	passwordEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});


//This is the function to combine the randomly generatored string in one string which is determined by the length selected by the user
function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	var typesCount = lower + upper + number + symbol;
	var typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
//If there is nothing checked then the function will not exacute
	if(typesCount === 0) {
    return '';
	}
	
	// creates the loop for the random generators which is stopped after user deterimed length of characters
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			var funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	//gives the final result as "final password"
	var finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

//Function to generate random lowercase letters using the Charcter Code Chart
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//Function to generate radom uppercase letters using the Character Code Chart
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Function to generate random numbers using the Character Code Chart
function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//Function using an Array which contains the symbols which are standard use in passwords (you can delete or add more symbols if needed)
function getRandomSymbol() {
	var symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}