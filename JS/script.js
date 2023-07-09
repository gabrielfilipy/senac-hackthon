let stars = document.getElementById('stars');
let img001 = document.getElementById('img-001');
let img002 = document.getElementById('img-002');
window.addEventListener('scroll', () => { 
	let value = window.scrollY;

	img001.style.left = value * 1 + 'px';
	img002.style.left = value * -1 + 'px';

});  