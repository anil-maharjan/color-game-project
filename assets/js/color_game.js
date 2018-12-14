var numSquares = 6;
var colors = []; 
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var msg = document.querySelector("#messageDisplay");
var reset = document.querySelector("#resetButton");
var h = document.getElementById("hed");
var modes = document.querySelectorAll(".mode");

init();

function init()
{
	setupModes();
	setupSquares();	
	reset1();
}

function setupModes(){
		for(var i=0;i<modes.length;i++)
	{
		modes[i].addEventListener("click", function(){	
			modes[0].classList.remove("selected");
			modes[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy"? numSquares=3: numSquares=6;
			reset1();	
		})
	}
}

function setupSquares(){
	for(var i=0; i<numSquares; i++)
{
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor)
		{
			msg.textContent = "Correct";
			reset.textContent = "Play Again?";
			changeColors(clickedColor);
			h.style.background=clickedColor;
		}
		else
		{
			this.style.background = "#232323";
			msg.textContent = "Try Again";
		}
	})
}
}

function reset1(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	msg.textContent="";
	reset.textContent = "New Colors";
	h.style.background="steelblue";
	for(var i=0; i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}

}

reset.addEventListener("click", function(){
	reset1();
})

function changeColors(color)
{
	//change colors to the current clicked color if it matches with given color
	for(var i=0; i<numSquares;i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor(){
	// for selecting random colors
	var num = Math.floor(Math.random() * numSquares);
	return colors[num];
}

function generateRandomColors(num){
	//create an array
	var arr = [];
	//generate random colors
	for(var i=0;i<num;i++)
	arr.push(randomColor());
	//return array
	return arr;
}

function randomColor(){
	//random red color value ranging from 0 to 255
	var red = Math.floor(Math.random() * 256);
	//random blue color value ranging from 0 to 255
	var blue = Math.floor(Math.random() * 256);
	//random green color value ranging from 0 to 255
	var green = Math.floor(Math.random() * 256);
	return "rgb("+red+", "+blue+", "+green+")";
	}

