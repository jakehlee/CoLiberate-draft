$(document).ready(function() {
	var opts = {
	  containerId: "sub",
	  namespace: "sub",
	  interval: 3000,
	  speed: 200,
	  mobileWidth: null,
	  verbose: false,
	  random: false,
	  best: true,
	  clearOriginalContent: false,
	};
	var opts2 = {
	  containerId: "sub2",
	  namespace: "sub2",
	  interval: 3000,
	  speed: 200,
	  mobileWidth: null,
	  verbose: false,
	  random: false,
	  best: true,
	  clearOriginalContent: false,
	};
	var sub = new Sub([
		"CoLiberate is how makers",
		"CoLiberate is how educators",
		"CoLiberate is how entrepeneurs",
		"CoLiberate is how students",
		"CoLiberate is how citizens",
		"CoLiberate is how leaders",
		"CoLiberate is how pilots"
	], opts).run();
	var sub2 = new Sub([
		"build everything together.",
		"build classrooms together.",
		"build businesses together.",
		"build projects together.",
		"build communities together.",
		"build futures together.",
		"build drones together."
	], opts2).run();
});


