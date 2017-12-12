$(document).ready(function() {
	
	$(".project").hover(function() {
		$(this).children(".desc").stop();
		$(this).children("img").stop();
		$(this).children(".desc").slideToggle();
		$(this).children("img").animate({width: "150px", height: "150px"});
	}, function() {
		$(this).children(".desc").stop();
		$(this).children("img").stop();
		$(this).children(".desc").slideToggle();
		$(this).children("img").animate({width: "200px", height: "200px"});
	});
	
});