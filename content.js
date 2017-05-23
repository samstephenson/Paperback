$(document).ready(function() {

	console.log("JS working");

	$('#buttonBar').insertAfter($('.showCompletedButton'));
	$( "<div style='flex-grow: 1;'></div>").insertAfter( "#searchForm" );
	$('#savedViewHUDButton').insertAfter($('#searchForm'));

});