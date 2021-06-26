var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var enter = document.getElementById('generate');

//The Array of variables for the generator to pick from
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


enter.addEventListener("click", function () {
	ps = generatePassword();
	document.getElementById("password").placeholder = ps;
});

function generatePassword() {
	enter = window.prompt("How many characters so you require for your password? (Needs to be a number between 8 10 128)")
	if (!enter) {
		alert("This needs a number");

	} else if (enter < 8 || enter > 128) {
		enter = window.prompt("You need to choose between 8 and 128");

	} else {
		confirmNumber = confirm("Will this contain numbers?");
		confirmCharacter = confirm("Will this contain special characters?");
		confirmUppercase = confirm("Will this contain Uppercase letters?");
		confirmLowercase = confirm("Will this contain Lowercase letters?");

		//If none of the options are confirmed
		if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
			choices = alert("You must choose at least one option!");

		}
		//When all four options are confirmed
		else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
			choices = character.concat(number, lower, upper);
		}

		//When three options are confirmed
		else if (confirmCharacter && confirmNumber && confirmUppercase) {
			choices = character.concat(number, upper);
		}
		else if (confirmCharacter && confirmNumber && confirmLowercase) {
			choices = character.concat(number, lower);
		}
		else if (confirmCharacter && confirmLowercase && confirmUppercase) {
			choices = character.concat(lower, upper);
		}
		else if (confirmNumber && confirmLowercase && confirmUppercase) {
			choices = number.concat(lower, upper);
		}

		//When two options are confirmed
		else if (confirmCharacter && confirmNumber) {
			choices = character.concat(number);

		} else if (confirmCharacter && confirmLowercase) {
			choices = character.concat(lower);

		} else if (confirmCharacter && confirmUppercase) {
			choices = character.concat(upper);
		}
		else if (confirmLowercase && confirmNumber) {
			choices = lower.concat(number);

		} else if (confirmLowercase && confirmUppercase) {
			choices = lower.concat(upper);

		} else if (confirmNumber && confirmUppercase) {
			choices = number.concat(upper);
		}

		//When one option is confirmed
		else if (confirmCharacter) {
			choices = character;
		}
		else if (confirmNumber) {
			choices = number;
		}
		else if (confirmLowercase) {
			choices = lower;
		}

		else if (confirmUppercase) {
			choices = upper;
		}
	};
	var password = [];

	// Random selection for all variables: 
	for (var i = 0; i < enter; i++) {
		var pickChoices = choices[Math.floor(Math.random() * choices.length)];
		password.push(pickChoices);
	}

	//This converts the array of the random variables selected into one string
	var ps = password.join("");
	UserInput(ps);
	return ps;
}
// This puts the actual password value into the textbox
function UserInput(ps) {
	document.getElementById("password").textContent = ps;

}