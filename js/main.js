
$.getJSON( "data.json", function(data) {

	var items = [];
	$.each(data, function(key,val) {
		items.push(val);
	});

	var length = items.length
	var currentItem = Math.floor(Math.random() * length)

	var template = $('#quoteTemplate').html();
	$('#content').html(_.template(template, {data: items[currentItem]}));
	$('#content').css('background-image','url(img/' + items[currentItem]["bg-img"] + ')')

});