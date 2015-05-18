//mouseup and mousedown for clicks
// mouseenter and mouseleaver for hovering over object
//keydown event is sent to an element when the user first presses a key on the keyboard

$(document).ready(function(){
	$('.logo').fadeIn(1750);

	$('.ryu').mouseenter(function() {
	$('.ryu-still').hide();
	$('.ryu-ready').show();
	})
	.mouseleave(function(){ 
	$('.ryu-ready').hide();
	$('.ryu-still').show();
	})
	.mousedown(function(){ //mousedowna and mouseup are for clicks on the object
		//console.log('mousedown'); console .log allows the alert to pop up and know the function is working
		//play hadouken sound
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish() .show()
		.animate(
			{'left': '1020px'}, // object will move 50px to the right
			500, //500 milliseconds is how long the animation takes
			function() {
				$(this).hide();
				$(this).css('left', '520px'); //review left position of hadouken on main.css
			}
		// show hadouken and animate it to the right of the screen//
	);
	})
	.mouseup(function(){
		//console.log('mouseup');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
$(document).keydown(function(e) {
			
               if (e.keyCode == 88) {
             playCarelessWhisper();  	
               $('.ryu-still').hide();
               $('.ryu-ready').hide();
               $('.ryu-cool').show();
               }
           })  

          .keyup(function(e) {
          	
               if (e.keyCode == 88) {
           playCarelessWhisper();    	
               $('.ryu-cool').hide();
               $('.ryu-still').show();
               }
           });

});

	function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load() ;
		$('#hadouken-sound')[0].play() ;
	}

	function playCarelessWhisper () {
		$('#careless-whisper')[0].volume = 0.5;
		$('#careless-whisper')[0].load() ;
		$('#careless-whisper')[0].play() ;
	}

