$(document).ready(function(){

	console.log('shame_shame');

	var audio = new Audio('shame.wav');
	audio.play();

	var $shamesites = $('#shamesites');

	var res = JSON.parse(localStorage.getItem('shame_shame'));

	for (var prop in res) {
  		console.log(prop + " = " + res[prop]);
  		$shamesites.append('<li>' + prop + ' ' + res[prop] + '</li>');
	}
});

