function getColour() 
{
	
	var color = '';
	var val;
	
	while ( color.length < 5 )
		{
			val = Math.floor(Math.random() * 10);
			color += val;
		}
	
	return color;
	
	
}
