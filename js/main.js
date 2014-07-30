
$.getJSON( "data.json", function(data) {

	var items = [];
	$.each(data, function(key,val) {
		items.push(val);
	});

	length = items.length
	var currentItem = Math.floor(Math.random() * length)

	var template = $('#quoteTemplate').html();
	$('#content').html(_.template(template, {data:items}));
	$('#content').css('background-image','url(img/' + items[currentItem]["bg-img"] + ')')

});