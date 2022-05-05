//Functions

//generate a random rgb color
function RandLightColor(typ)
{
	let rgb = new Array(3); //create an array to store the r, g, & b values

  //generate a random integer between 0 and 255 for each value
	for(let i = 0; i < 3; i++)
	{
		rgb[i] = Random(126, 255);
	}

	let elements = document.querySelectorAll(typ);
	
	for (let i = 0; i < elements.length; i++) 
	{
		elements[i].style.color = `rgb(${rgb})`; //set the color of the element
	}
}

//generate a random number from 0 to max
function Random(min, max)
{
	result = Math.floor(Math.random() * (max - min + 1)) + min; //random returns number 0-1,  
  return(result);
}