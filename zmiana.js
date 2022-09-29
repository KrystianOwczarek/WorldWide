let number = Math.floor(Math.random()*3)+1;

function setPicture()
{
	number++; if(number > 3) number=1;
	
	let picture = "<img class='mainImage' src=\"img/"+number+".png\"'/>";
	
	document.getElementById("img").innerHTML = picture;
	
	setTimeout("setPicture()", 5000);
}

function burgerMenu()
{
	const HOME_FOR_MOBILE = document.querySelector('.homeForMobile');
	const MENU = document.querySelector('.menu');
	const HAMBURGER = document.querySelector('.hamburger');
	const MOBILE = document.querySelectorAll('.mobile');
	const MOBILE_WIECEJ = document.querySelector('.mobileWiecej');
	const WIECEJ_UL = document.querySelector('.ul');
	const WIECEJ_LI = document.querySelectorAll('.li');
	const TO_DOWN = document.querySelector('.toDown');

	HOME_FOR_MOBILE.addEventListener('click', () => {
		HAMBURGER.classList.remove('visible');
		TO_DOWN.classList.remove('visible');
		WIECEJ_UL.classList.remove('visible');
		TO_DOWN.classList.remove('visibleWiecej');
	})

	MENU.addEventListener('click', () => {
		HAMBURGER.classList.toggle('visible');
		TO_DOWN.classList.toggle('visible');
		TO_DOWN.classList.remove('visibleWiecej');
		WIECEJ_UL.classList.remove('visible');
	})

	MOBILE.forEach(n => n.addEventListener('click', () => {
		HAMBURGER.classList.remove('visible');
		TO_DOWN.classList.remove('visible');
		WIECEJ_UL.classList.remove('visible');
		TO_DOWN.classList.remove('visibleWiecej');
	}))
	
	MOBILE_WIECEJ.addEventListener('click', () => {
		WIECEJ_UL.classList.toggle('visible');
		TO_DOWN.classList.toggle('visibleWiecej');
	})

	WIECEJ_LI.forEach(n => n.addEventListener('click', () => {
		HAMBURGER.classList.remove('visible');
		TO_DOWN.classList.remove('visible');
		WIECEJ_UL.classList.remove('visible');
	}))

	setPicture();
}

window.onload = burgerMenu;