document.addEventListener("DOMContentLoaded", function() {
	//for the change jack button
	let changeJackButton = document.getElementById("changeJack");
	changeJackButton.onclick = changeJack;
	function changeJack() {
		document.body.innerHTML = document.body.innerHTML.replace(/jack/g, 'guy');
	}

	//for the secret text button
	//set variable for the button
	let decodeButton = document.getElementById("decodeSecret");
	//set variable for the text to decode
	let secretText = document.getElementById("secretText");
	/*let response = decodeThisSecret("jurervfzlpbssrr");
	secretText.innerText = response;*/

	decodeButton.onclick = decodeThisSecret("secret");

decodeButton.onclick = decodeThisSecret()
	function decodeThisSecret(str){
		let res = [];
		for (var i = 0; i<str.length; i++) {
			if (str.charCodeAt(i)+13 > 122) res.push(String.fromCharCode(96+str.charCodeAt(i)-122+13));
			else res.push(String.fromCharCode(str.charCodeAt(i)+13));
		}
		return res.join('');
	}
});
