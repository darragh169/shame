$(document).ready(function(){

	console.log('shame_shame');

	var audio = new Audio('shame.wav');
	audio.play();

	var $shameTableBody = $('#shameTableBody');

	var res = JSON.parse(localStorage.getItem('shame_shame'));

	var counter = 0;
	for (var prop in res) {
		counter+=1;
  		console.log(prop + " = " + res[prop]);
  		$shameTableBody.append('<tr><td>'+counter+'</td><td>' + prop + '</td><td>' + res[prop] + '</td></tr>');
	}
});

