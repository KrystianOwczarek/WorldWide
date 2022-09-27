let number = Math.floor(Math.random()*3)+1;

function setPicture()
{
	number++; if(number > 3) number=1;
	
	let picture = "<img class='mainImage' src=\"img/"+number+".png\"'/>";
	
	document.getElementById("img").innerHTML = picture;
	
	setTimeout("setPicture()", 5000);
}

window.onload = setPicture;