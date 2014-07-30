$.getJSON( "data.json", function( data ) {
	var items = [];
	$.each( data, function( key, val ) {
		items.push( val );
	});

	$('#quote').append(items[0].quote)
});

