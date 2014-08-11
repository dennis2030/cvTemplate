"use strict";
$(document).ready(function(){
	$("#canvas-button").click(function() {
		$("#navigator").toggleClass('expand');
		$('.container').toggleClass('expand');
		return false;
	});
	$('ul#navigator li a').click(function() {
		$('body, html').stop();
		$('body, html').animate({ scrollTop: ($($(this).attr("href")).offset().top) }, "slow");
		return false;
	});
});