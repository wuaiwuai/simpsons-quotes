
$.getJSON( "data.json", function(data) {

	var items = [];
	$.each(data, function(key,val) {
		items.push(val);
	});

	currentItem = Math.floor(Math.random() * items.length)

	var template = $('#quoteTemplate').html();
	$('#content').html(_.template(template, {data:items[currentItem]}));
	$('#content').css('background-image','url(img/' + items[currentItem]["bg-img"] + ')')

});
