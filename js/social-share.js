$(document).ready(function() {

	$("#content").floatingSocialShare({
	  place: "top-left", // alternatively content-left, content-right, top-right
	  counter: true, // set to false for hiding the counters of buttons
	  twitter_counter: false, // Twitter API does not provide counters without API key, register to https://opensharecount.com/
	  buttons: [ // all of the currently available social buttons
	    "twitter", "facebook", "linkedin", "reddit", 
	    "google-plus", "envelope",
	  ],
	  title: document.title, // your title, default is current page's title
	  url: window.location.href,  // your url, default is current page's url
	  text: { // the title of tags
	    'default': 'share with ', 
	    'facebook': 'share with facebook', 
	    'google-plus': 'share with g+'
	  },
	  text_title_case: false, // if set true, then will convert share texts to title case like Share With G+
	  description: $('meta[name="description"]').attr("content"), // your description, default is current page's description
	  media: $('meta[property="og:image"]').attr("content"), // pinterest media
	  popup_width: 400, // the sharer popup width, default is 400px
	  popup_height: 300 // the sharer popup height, default is 300px
	});

});