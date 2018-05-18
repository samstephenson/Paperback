$(document).ready(function() {

	$('body').addClass('paperback');

	$('#buttonBar').insertAfter($('.showCompletedButton'));
	$('#savedViewHUDButton').insertAfter($('#searchForm'));
	$('.showCompletedButton').insertBefore($('#settingsButton'));
	$( "<div style='flex-grow: 1;'></div>").insertAfter( "#logo" );
	$('#helpButton').insertAfter($('#savedViewHUD'));
	$('.saveButton').insertBefore($('#searchForm'));

	$('#settingsRight').insertAfter('#settings');
	$('#accountInfo').insertBefore('#proSettingsBox');

	$('#searchBox').removeAttr('placeholder');

	$('#savedViewHUD:animated').finish();

	$('head').append('<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i" rel="stylesheet">');

	// $( "<div id='grid'></div>").insertAfter( "#presentation-ui" );


// Scroll-based functions

	var headerVisible = false;
	$("<div id='topHeader' class='opacity0'></div>").insertAfter("#logo");

	$(window).on('scroll', function() {
	    var y_scroll_pos = window.pageYOffset;
	    var scroll_pos_test = 10;             // set to whatever you want it to be
	    var scroll_pos_heading = 120;

	    var topHeader;

	    if(y_scroll_pos > scroll_pos_heading) {
	    	topHeader = $('.selected>.name>.content').contents().clone();

	    	var areWeHome;


	        if(headerVisible === false && $('.mainTreeRoot').is('.parent') ) {
	        	$(topHeader).appendTo('#topHeader').wrap("<div class='topHeaderTitle'></div>");
	        	$('#topHeader').removeClass('opacity0').addClass('opacity100');
	        	headerVisible = true;
	       	}
	    } else {
	    	$('#topHeader').removeClass('opacity100').addClass('opacity0'); 
	    	$('#topHeader').contents().fadeOut(100);
	    	headerVisible = false;
	    }

	    if(y_scroll_pos > scroll_pos_test) {
	        $('#header').addClass("scroll");
	    } else {
	    	$('#header').removeClass("scroll");
	    }

	});

	$("#topHeader").click(function() {
  	$("html, body").animate({ scrollTop: 0 }, 300);
  		return false;
	});

});
