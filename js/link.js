// Area of Triangle

document.getElementById('btn-calculate').addEventListener('click', function () {
	const baseField = document.getElementById('base-field');
	const newBaseString = baseField.value;
	console.log(newBaseString);

	const heightField = document.getElementById('height-field');
	const newHeightString = heightField.value;
	console.log(newHeightString);

	const newAreaValue = 0.5 * newBaseString * newHeightString
	const areaValue = document.getElementById('area-value')
	areaValue.innerText = newAreaValue;
	console.log(newAreaValue);
})



	// Area of Rectangle

	document.getElementById('btn2-calculate').addEventListener('click', function () {
		const widthField = document.getElementById('width-field');
		const newWidthString = widthField.value;
		console.log(newWidthString);

		const lengthField = document.getElementById('length-field');
		const newLengthString = lengthField.value;
		console.log(newLengthString);


		const newArea2Value = newWidthString * newLengthString
		const area2Value = document.getElementById('area2-value')
		area2Value.innerText = newArea2Value;
		console.log(newArea2Value);
  
	})


function getPositiveIntegers(inputId) {
  var input = document.getElementById(inputId).value;
  var numbers = input.split(" ");
  var positiveIntegers = [];

  for (var i = 0; i < numbers.length; i++) {
    var num = parseInt(numbers[i]);

    if (num > 0) {
      positiveIntegers.push(num);
    }
  }

  console.log(positiveIntegers);
}








	// Random color on background

	var card1 = document.getElementById("card1");

	card1.addEventListener("mouseover", function () {
		var randomColor = getRandomColor();
		card1.style.backgroundColor = randomColor;
	});

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

	var card2 = document.getElementById("card2");

	card2.addEventListener("mouseover", function () {
		var randomColor = getRandomColor();
		card2.style.backgroundColor = randomColor;
	});

	function getRandomColor() {
		var letters = "0123456789ABCDEF";
		var color = "#";
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	var card3 = document.getElementById("card3");

	card3.addEventListener("mouseover", function () {
		var randomColor = getRandomColor();
		card3.style.backgroundColor = randomColor;
	});

	function getRandomColor() {
		var letters = "0123456789ABCDEF";
		var color = "#";
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}


	var card4 = document.getElementById("card4");

	card4.addEventListener("mouseover", function () {
		var randomColor = getRandomColor();
		card4.style.backgroundColor = randomColor;
	});

	function getRandomColor() {
		var letters = "0123456789ABCDEF";
		var color = "#";
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}


	var card5 = document.getElementById("card5");

	card5.addEventListener("mouseover", function () {
		var randomColor = getRandomColor();
		card5.style.backgroundColor = randomColor;
	});

	function getRandomColor() {
		var letters = "0123456789ABCDEF";
		var color = "#";
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	var card6 = document.getElementById("card6");

	card6.addEventListener("mouseover", function () {
		var randomColor = getRandomColor();
		card6.style.backgroundColor = randomColor;
	});

	function getRandomColor() {
		var letters = "0123456789ABCDEF";
		var color = "#";
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}