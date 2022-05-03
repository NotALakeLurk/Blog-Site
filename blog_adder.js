//Functions

//generate a random rgb color
function RandColor()
{
	let rgb = new Array(3); //create an array to store the r, g, & b values

  //generate a random integer between 0 and 255 for each value
	for(let i = 0; i < 3; i++)
	{
		rgb[i] = Random(0,255);
	}

  return(rgb); //return the array
}

//generate a random number >= min and <= max
function Random(min, max)
{
  return(Math.floor(Math.random(min, (max + 1)))); //Math.floor result because max is excluded and must be 1 larger than intended in order to round down
}