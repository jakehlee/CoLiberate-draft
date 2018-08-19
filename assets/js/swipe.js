$(document).ready(function() {
	var isMobile = window.matchMedia("only screen and (max-width: 760px)");
	// init controller
	var controller = new ScrollMagic.Controller();
	

	// define tweens
	var tlFirst = new TimelineLite();
	tlFirst.to($('#zero'), 1, {css:{autoAlpha: 0}, ease:Back.easeOut});
	tlFirst.to($('#first-text'), 1, {css:{color: "black"}, ease:Back.easeOut}, "-=0.7");
	tlFirst.to($('#second-text'), 1, {css:{color: "black"}, ease:Back.easeOut}, "-=0.7");
	tlFirst.to($('#third-text'), 1, {css:{color: "black"}, ease:Back.easeOut}, "-=0.7");
	tlFirst.to($('#fourth-text'), 1, {css:{color: "black"}, ease:Back.easeOut}, "-=0.7");

	var tlSecond = new TimelineLite();
	tlSecond.to($('#first'), 1, {css:{autoAlpha: 0}, ease:Back.easeOut});
	//tlSecond.to($('#second-text'), 1, {css:{color: "black"}, ease:Back.easeOut}, "-=0.7");

	var tlThird = new TimelineLite();
	tlThird.to($('#second'), 1, {css:{autoAlpha: 0}, ease:Back.easeOut});
	//tlThird.to($('#third-text'), 1, {css:{color: "black"}, ease:Back.easeOut}, "-=0.7");

	var tlFourth = new TimelineLite();
	tlFourth.to($('#third'), 1, {css:{autoAlpha: 0}, ease:Back.easeOut});
	//tlFourth.to($('#fourth-text'), 1, {css:{color: "black"}, ease:Back.easeOut}, "-=0.7");
	
	var hookVal = 0.2;
	if(isMobile.matches){hookVal = 0.05;}

	//build scene
	var pinScene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "325%"})
								.setPin("#pin1", {pushFollowers: false})
								.addIndicators({name: "pin (duration: 325%)"}) // add indicators (requires plugin)
								.addTo(controller)
								.triggerHook(hookVal);

	var aniScene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 0})
								.setTween(tlFirst)
								.addIndicators({name: "first ani"})
								.addTo(controller)
								.triggerHook(hookVal);

	var aniScene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 0})
								.setTween(tlSecond)
								.addIndicators({name: "second ani"})
								.addTo(controller)
								.triggerHook(hookVal);

	var aniScene3 = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 0})
								.setTween(tlThird)
								.addIndicators({name: "third ani"})
								.addTo(controller)
								.triggerHook(hookVal);

	var aniScene4 = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 0})
								.setTween(tlFourth)
								.addIndicators({name: "fourth ani"})
								.addTo(controller)
								.triggerHook(hookVal);
});