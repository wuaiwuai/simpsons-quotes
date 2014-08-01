
// constructor for spreadsheet entry data
function entryConstructor(characters, quote, season, ept, epn, bgimg, bgpos, content, link) {
	this['characters'] = characters
	this['quote'] = quote
	this['season'] = season
	this['ep-title'] = ept
	this['ep-num'] = epn
	this['bg-img'] = bgimg
	this['bg-pos'] = bgpos
	this['content'] = content
	this['link'] = link
}

// var pants = new entryConstructor();
// console.log(pants)

$.getJSON('https://spreadsheets.google.com/feeds/list/1Npd5zyYGyIrVFUKiKHEwyEfLlJ3t7vLH-yQUE5GlE84/od6/public/values?alt=json', function(data) {

	var items = [];

	// entire feed list
	// console.log(data.feed.entry)

	$.each(data.feed.entry, function(i,val) {

		var entryArray = [];

		// loop through the attributes of each entry
		for (var key in val) {

			// console.log(entryArray)
			// get key values where keys begin with gsx (the data we need)
			if (key.substring(0,3) === "gsx") {

				// take only the value of that attribute (cuz each value is an object ie. $t: stuff)
				// console.log(val[key])
				for (k in val[key]) {

					// push those attribute values into an array
					console.log(val[key])
					entryArray.push(val[key][k])

				}

			}

		}

		// console.log(entryArray)
		// ["milhouse, bart", "Remember Alf Bar? He's back, in Pog form.", "", "", "", "pog-1.png", "", "", ""] 

		// push array into an array
		items.push(entryArray);

	});

	console.log(items)
	// console.log(items[2].entry)
	// console.log(items[2].entry[0]['gsx$characters'])

	// var currentItem = Math.floor(Math.random() * items.length)

	// var template = $('#quoteTemplate').html();
	// $('#content').html(_.template(template, {data:items[currentItem]}));
	// $('#content').css('background-image','url(img/' + items[currentItem]["bg-img"] + ')')

	// triggerQuote()

	hello()
});

function triggerQuote() {
	setTimeout(function() {
		$('.quote-heading').fadeIn(200).addClass("animation-target")	
	}, 800)
}

function hello() {
	console.log("success")
}

// https://docs.google.com/spreadsheets/d/1Npd5zyYGyIrVFUKiKHEwyEfLlJ3t7vLH-yQUE5GlE84/pubhtml

// <iframe src="https://docs.google.com/spreadsheets/d/1Npd5zyYGyIrVFUKiKHEwyEfLlJ3t7vLH-yQUE5GlE84/pubhtml?widget=true&amp;headers=false"></iframe>