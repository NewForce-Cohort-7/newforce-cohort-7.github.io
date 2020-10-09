/* Set Flip Parameters */
$("#card").flip({
	axis: 'y',
	trigger: 'manual'   
}); 
  
$("#card-front").click(function() {
	$("#card").flip(true);		
	$("#card-back").show();		
});

$("#contentContainer").click(function() {
	$("#card").flip(false);		
});