
$.getJSON( "data.json", function(data) {

	var items = [];
	$.each(data, function(key,val) {
		items.push(val);
	});

	var template = $('#quoteTemplate').html();
	$('#content').html(_.template(template, {data:items}));

});