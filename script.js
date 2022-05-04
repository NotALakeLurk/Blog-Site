//Functions

//generate a random rgb color
function RandLightColor()
{
	let rgb = new Array(3); //create an array to store the r, g, & b values

  //generate a random integer between 0 and 255 for each value
	for(let i = 0; i < 3; i++)
	{
		rgb[i] = Random(126, 255);
	}
	let articles = document.querySelectorAll('article');
	for(let article in articles)
	{
		document..style.color =`rgb(${rgb})`;
	}
	alert
}

//generate a random number from 0 to max
function Random(min, max)
{
	result = Math.floor(Math.random() * (max - min + 1)) + min; //random returns number 0-1,  
	return(result);
}