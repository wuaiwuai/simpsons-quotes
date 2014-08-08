
$.getJSON('https://spreadsheets.google.com/feeds/list/1Npd5zyYGyIrVFUKiKHEwyEfLlJ3t7vLH-yQUE5GlE84/od6/public/values?alt=json', function(data) {

	var items = [];

	// entire feed list
	// console.log(data.feed.entry)

	// create an array of objects to be used in the template
	$.each(data.feed.entry, function(i,val) {

		var entryObj = {};

		// loop through the attributes of each entry
		for (var key in val) {

			// get key values where keys begin with gsx (the data we need)
			if (key.substring(0,3) === "gsx") {

				// take only the value of that attribute (cuz each value is an object ie. $t: stuff)
				for (k in val[key]) {

					// push those attribute values into an obj key/val pair
					entryObj[key.substring(4)] = val[key][k]

				}

			}

		}

		// console.log(entryObj)
		// Object {characters: "milhouse, bart", quote: "Remember Alf Bar? He's back, in Pog form.", season: "7", ep-title: "Bart Sells his Soul", ep-num: "4"…}

		// push objects created into an array
		items.push(entryObj);

	});

	// list of items
	// console.log(items)

	var currentItem = Math.floor(Math.random() * items.length)

	// Populating template/setting background is moved into render function
	function render(){
		var template = $('#quoteTemplate').html();
		$('#content').html(_.template(template, {data:items[currentItem]}));
		// $('#content').css('background-image','url(img/' + items[currentItem]["bg-img"] + ')')
		$('#tv .screen').css('background-image','url(img/' + items[currentItem]["bg-img"] + ')')
		window.location.hash = items[currentItem].slug
	}

	// renderThis function detects current url and updates it to match currentItem
	function renderThis(){

		// If the url does not match the current item's slug
		if(window.location.hash != '#' + items[currentItem].slug){

			// Loop through all items til we find the one with corresponding slug
			for (var i = 0, j = items.length; i < j; i++) {
				if('#' + items[i].slug == window.location.hash){

					// Set new current item and render again
					currentItem = i
					render()
					return
				}
			}
		}
	}

	// On page load, if there is no hash url (landed directly on homepage), call render() to set random item
	if(!window.location.hash){
		render()
	}
	// Otherwise call renderThis() to load the item corresponding to the url
	else{
		renderThis()
	}

	addEventListener('hashchange', renderThis())
	

	// triggerQuote()
	// triggerTv()

});

function triggerQuote() {
	setTimeout(function() {
		$('.quote-heading').fadeIn(200).addClass("animation-target")	
	}, 800)
}

function triggerTv() {
	// setTimeout(function() {
		$('#tv-scene').addClass("tv-anim")	
	// }, 800)
}