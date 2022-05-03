//Functions

//generate a random rgb color
function RandColor(id)
{
	let rgb = new Array(3); //create an array to store the r, g, & b values

  //generate a random integer between 0 and 255 for each value
	for(let i = 0; i < 3; i++)
	{
		rgb[i] = Random(255);
	}

	document.getElementById(id).style.color = `rgb(${rgb})`; //set the color of the element
}

//generate a random number from 0 to max
function Random(max)
{
  return(Math.floor(Math.random() * (max + 1))); //random returns decimal 0-1, multiply by max and floor for integer
}