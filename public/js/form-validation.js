var current_fs, next_fs, previous_fs; 
var left, opacity, scale; 
var animating; 

function advanceForm(){
	$(".next").on('click',function () {
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	next_fs.show(); 
	
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			scale = 1 - (1 - now) * 0.2;
			left = (now * 50)+"%";
			opacity = 1 - now;
			current_fs.css({
				'transform': 'scale('+scale+')',
				'position': 'absolute'
			  });
			  next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		easing: 'easeInOutBack'
	});

});

}


$(document).ready(function validateForm() {
	$(".next").on('click', function () {
	  var current = $(this).data('currentBlock'),
		next = $(this).data('nextBlock');
  		if (next > current)
		if (false === $('#msform').parsley().validate('block' + current))
		  return;
  	  advanceForm();
  	});
  });

// ===========================================================// 

function continueForm(){
	$(".continue").on('click',function () {
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	next_fs.show(); 
	
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			scale = 1 - (1 - now) * 0.2;
			left = (now * 50)+"%";
			opacity = 1 - now;
			current_fs.css({
				'transform': 'scale('+scale+')',
				'position': 'absolute'
			  });
			  next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		easing: 'easeInOutBack'
	});

});

}


$(document).ready(function validateForm() {
	$(".continue").on('click', function () {
	  var current = $(this).data('currentBlock'),
		next = $(this).data('nextBlock');
  		if (next > current)
		if (false === $('#msform').parsley().validate('block' + current))
		  return;
		  continueForm();
  	});
  });

// ===========================================================// 

function continue2Form(){
	$(".continue2").on('click',function () {
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	next_fs.show(); 
	
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			scale = 1 - (1 - now) * 0.2;
			left = (now * 50)+"%";
			opacity = 1 - now;
			current_fs.css({
				'transform': 'scale('+scale+')',
				'position': 'absolute'
			  });
			  next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		easing: 'easeInOutBack'
	});

});

}


$(document).ready(function validateForm() {
	$(".continue2").on('click', function () {
	  var current = $(this).data('currentBlock'),
		next = $(this).data('nextBlock');
  		if (next > current)
		if (false === $('#msform').parsley().validate('block' + current))
		  return;
		  continue2Form();
  	});
  });

// ===========================================================// 

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	

	previous_fs.show(); 

	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {

			scale = 0.8 + (1 - now) * 0.2;

			left = ((1-now) * 50)+"%";

			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 

		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return true;
})


