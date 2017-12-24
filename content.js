$(document).ready(function() {

	$('#buttonBar').insertAfter($('.showCompletedButton'));
	$('#savedViewHUDButton').insertAfter($('#searchForm'));
	$('.showCompletedButton').insertBefore($('#settingsButton'));
	$( "<div style='flex-grow: 1;'></div>").insertAfter( "#logo" );
	$('#helpButton').insertAfter($('#savedViewHUD'));
	$('.saveButton').insertBefore($('#searchForm'));

	$('#settingsRight').insertAfter('#settings');
	$('#accountInfo').insertBefore('#proSettingsBox');

	//$('pageStar').insertAfter('#savedViewHUDPageContainer');
	//$('pageStar').wrap('<div class="page active"></div>')

	$('#searchBox').removeAttr('placeholder');

	$('link[rel="shortcut icon"]').attr('href','chrome-extension://__MSG_@@extension_id__/favicon.ico');

	$('#savedViewHUD:animated').finish();

	$('.content').addClass("testing");

	// $('#logo').attr('id', 'toggler');


/*
Grid

	$('body').append('<p id="gridButton">Toggle grid</p><div id="grid">Grid</div>')
	$('#gridButton').click(function() {
		$("#grid").Toggle();
	});

*/

	// $('body').append('<div class="ui-widget-overlay" style="z-index: 1014;"></div>');

	$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 10;             // set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
        //do stuff
        $('#header').addClass("scroll");
    } else {
    	$('#header').removeClass("scroll");
    }

   /*
   if($('.ui-dialog').css('display') == 'none') {
		$('.ui-widget-overlay').hide();
	} else {
		$('.ui-widget-overlay').show();
	}
	*/

	});

});
