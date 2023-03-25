
$(document).ready(function(){
	$('input[type="name"], input[type="email"], textarea').focus(function(){
		var background = $(this).attr('id');
		$('#' + background + '-form').addClass('formgroup-active');
		$('#' + background + '-form').removeClass('formgroup-error');
	});
	$('input[type="name"], input[type="email"], textarea').blur(function(){
		var background = $(this).attr('id');
		$('#' + background + '-form').removeClass('formgroup-active');
	});

	function errorfield(field){
		$(field).addClass('formgroup-error')
		console.log(field);	
	}
	$("#waterform").submit(function(event) {
		var stopsubmit = false;
		const waterform = $("#waterform")[0].checkValidity();
		console.log(waterform[0]);

	
	if(!$('#name').val()) {
			errorfield('#name-form');
			stopsubmit=true;
			console.log("name field is empty");
		}
		else if ($('#name').val().length <3){
			errorfield('#name-form');
			stopsubmit=true;
			console.log("name field is test characters");
		}

		if(!$('#email').val()) {
			errorfield('#email-form');
			stopsubmit=true;
		}
		if(stopsubmit) {
			event.preventDefault();
			alert("Please fill out the name,email, and message section!");
			return false;
		}

		});
	});

