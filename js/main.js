
$.getJSON( "data.json", function(data) {

	var items = [];
	$.each(data, function(key,val) {
		items.push(val);
	});

	var template = $('#quoteTemplate').html();
	$('#content').html(_.template(template, {data:items}));
	$('#content').css('background-image','url(img/' + items[0]["bg-img"] + ')')

});