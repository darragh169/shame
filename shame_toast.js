$(document).ready(function(){
	$('body').append('<div class="shametoast"><div class="shameContent">Shame!</div></div>');
	setTimeout(function(){
		$('.shametoast').fadeIn(500, function () {
			var audio = new Audio('shame.wav');
			audio.play();
			$('.shametoast').fadeOut(500);
		})
	},100);
})
