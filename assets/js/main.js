var operation = "";
var value = ""

function setNumber(number){

	console.log(number)
	document.getElementById('result').innerHTML = number
}

function setOperation(type){

	console.log(type)

	if (operation == "") {
		operation = type
		value = parseInt(document.getElementById('result').innerHTML)
	}else{

		if (operation == "plus") {
			result = value  + parseInt(document.getElementById('result').innerHTML)
			console.log(result)

			document.getElementById('result').innerHTML = result
		}
		if (operation == "minus") {
			result = value  - parseInt(document.getElementById('result').innerHTML)
			console.log(result)

			document.getElementById('result').innerHTML = result
		}
		if (operation == "multiply") {
			result = value  * parseInt(document.getElementById('result').innerHTML)
			console.log(result)

			document.getElementById('result').innerHTML = result
		}
		if (operation == "divide") {
			result = value  / parseInt(document.getElementById('result').innerHTML)
			console.log(result)

			document.getElementById('result').innerHTML = result
		}
		

	}

	console.log(type)
}

function clearResult() {
	document.getElementById('result').innerHTML = "0";
	operation = "";
	value = "";
	
}

