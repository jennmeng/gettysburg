$(document).ready(function() {

	$("body").fadeIn(1000);

	$("p").on("mouseenter", function() {
		$(this).css("background-color","yellow");
	});
	$("p").on("mouseleave", function() {
		$(this).css("background-color","white");
	});
	// $("h2").on("click", function() {
	// 	$("h2").fadeOut("25%");
	// 	$("h2").css("left-margin","20px");
	// });
	$("h2").on("click", function() {
		$("h2").animate( {
			"opacity": "0.25",
			"margin-left": "20px"
		}, 400, "swing", function() {
			$(".speech").animate({
				"opacity": "0.5"
			});
		});
	});


});