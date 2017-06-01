$(document).ready(function() {

	console.log("JS workingg");

	$('#buttonBar').insertAfter($('.showCompletedButton'));
	$('#savedViewHUDButton').insertAfter($('#logo'));
	$('.showCompletedButton').insertBefore($('#settingsButton'));
	$( "<div style='flex-grow: 1;'></div>").insertAfter( "#savedViewHUDButton" );
	$('#helpButton').insertAfter($('#savedViewHUD'));
	$('.saveButton').insertBefore($('#searchForm'));

	$('#searchBox').removeAttr('placeholder');


	$('.content:empty').addClass('empty');

	$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 10;             // set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
        //do stuff
        $('#header').addClass("scroll");
    } else {
    	$('#header').removeClass("scroll");
    }
});

});