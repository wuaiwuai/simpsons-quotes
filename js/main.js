
$.getJSON( "data.json", function(data) {

	var items = [];
	$.each(data, function(key,val) {
		items.push(val);
	});

<<<<<<< HEAD
	var currentItem = Math.floor(Math.random() * items.length)
=======
	var length = items.length
	currentItem = Math.floor(Math.random() * length)
>>>>>>> dd61e918ffaf5a56a0024d486654c6dce2e88e74

	var template = $('#quoteTemplate').html();
	$('#content').html(_.template(template, {data: items[currentItem]}));
	$('#content').css('background-image','url(img/' + items[currentItem]["bg-img"] + ')')

});
