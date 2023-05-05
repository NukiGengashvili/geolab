var toggleButton = document.querySelector('#menu');
var navBar = document.querySelector('.navbar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('active');
});
