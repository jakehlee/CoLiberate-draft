$(document).ready(function() {
	// init controller
	var controller = new ScrollMagic.Controller();
	var tlFirst = new TimelineLite();

	// define tweens
	tlFirst.to($('#first-text'), 1, {css:{color: "black"}, ease:Back.easeOut});

	tlFirst.to($('#first'), 1, {css:{autoAlpha: 0}, ease:Back.easeOut});

	//build scene
	var pinScene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "500%"})
								.setPin("#pin1", {pushFollowers: false})
								.addIndicators({name: "1 (duration: 500%)"}) // add indicators (requires plugin)
								.addTo(controller)
								.triggerHook(0.2);

	var aniScene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 0})
								.setTween(tlFirst)
								.addIndicators({name: "2 ani"})
								.addTo(controller)
								.triggerHook(0.1);
});