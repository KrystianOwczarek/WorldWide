var number = Math.floor(Math.random()*3)+1;

function setPicture()
{
	number++; if(number > 3) number=1;
	
	var picture = "<img src=\"img/"+number+".png\" width=\"100%\" max-height=\"750px\"/>";
	
	document.getElementById("img").innerHTML = picture;
	
	setTimeout("setPicture()", 5000);
}

window.onload = setPicture;