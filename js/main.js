
$.getJSON( "data.json", function(data) {

	var items = [];
	$.each(data, function(key,val) {
		items.push(val);
	});

	var currentItem = Math.floor(Math.random() * items.length)

	var template = $('#quoteTemplate').html();
	$('#content').html(_.template(template, {data:items[currentItem]}));
	$('#content').css('background-image','url(img/' + items[currentItem]["bg-img"] + ')')

	triggerQuote()

});

function triggerQuote() {
	setTimeout(function() {
		$('.quote-heading').fadeIn(200).addClass("animation-target")	
	}, 600)
}