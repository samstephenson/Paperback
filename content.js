$(document).ready(function() {

	console.log("JS workingg");

	$('#buttonBar').insertAfter($('.showCompletedButton'));
	$( "<div style='flex-grow: 1;'></div>").insertAfter( "#searchForm" );
	$('#savedViewHUDButton').insertAfter($('#searchForm'));

	$('.content:empty').addClass('empty');



});