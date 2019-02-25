//FOR THE CHANGE JACK BUTTON
//Set the changeJack button to the variable changeJackButton
let changeJackButton = document.getElementById("changeJack");
//Set the changeJack function to run when the changeJackButton is clicked.
changeJackButton.onclick = changeJack;
//Set the code that will run the changeJack function
function changeJack() {
	document.body.innerHTML = document.body.innerHTML.replace(/jack/g, 'guy');
}

//FOR THE SECRET TEXT BUTTON
//create function to decode the secret string
function decodingSecret () {
//set variable for the text to be decoded
	let secretString = document.getElementById("secretText").innerText;
//Use a rot-13 AKA Cesar Cypher
	function rot13(str) {
		let res = [];
		for(var i = 0; i < str.length; i++) {
			if(str.charCodeAt(i) + 13 > 122) res.push(String.fromCharCode(96 + str.charCodeAt(i) - 122 + 13));
			else res.push(String.fromCharCode(str.charCodeAt(i) + 13));
		}
		return res.join('');
	}
//Alert the decoded secret
	alert(rot13(secretString));
}

//BIGGER TEXT FOR THE ELDERLY
function nicerText () {
	let thisText = document.getElementById('bodyText');
	thisText.style.fontFamily = "sans-serif";
}