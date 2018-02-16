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

	// Style switcher
	// $("#pasteBucketSelectableCSS").after( "<link type='text/css' href='http://samstephenson.design/wp-content/uploads/2017/12/blank.css' rel='stylesheet'>");
	// $('.setting:first-child').attr('id', 'toggler');

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


/**
* Stylesheet toggle variation on styleswitch stylesheet switcher.
* Built on jQuery.
* Under an CC Attribution, Share Alike License.
* By Kelvin Luck ( http://www.kelvinluck.com/ )


(function($)
	{
		// Local vars for toggle
		var availableStylesheets = [2];
		var activeStylesheetIndex = 0;

		// To loop through available stylesheets
		$.stylesheetToggle = function()
		{
			activeStylesheetIndex ++;
			activeStylesheetIndex %= availableStylesheets.length;
			$.stylesheetSwitch(availableStylesheets[activeStylesheetIndex]);
		};

		// To switch to a specific named stylesheet
		$.stylesheetSwitch = function(styleName)
		{
			$('link[@rel*=style][title]').each(
				function(i)
				{
					this.disabled = true;
					if (this.getAttribute('title') == styleName) {
						this.disabled = false;
						activeStylesheetIndex = i;
					}
				}
			);
			createCookie('style', styleName, 365);
		};

		// To initialise the stylesheet with it's
		$.stylesheetInit = function()
		{
			$('link[rel*=style][title]').each(
				function(i)
				{
					availableStylesheets.push(this.getAttribute('title'));
				}
			);
			var c = readCookie('style');
			if (c) {
				$.stylesheetSwitch(c);
			}
		};
	}
)(jQuery);

// cookie functions http://www.quirksmode.org/js/cookies.html
function createCookie(name,value,days)
{
	if (days)
	{
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name)
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++)
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
function eraseCookie(name)
{
	createCookie(name,"",-1);
}
// /cookie functions


$(function()
	{
		// Call stylesheet init so that all stylesheet changing functions 
		// will work.
		$.stylesheetInit();
		
		// This code loops through the stylesheets when you click the link with 
		// an ID of "toggler" below.
		$('#toggler').bind(
			'click',
			function(e)
			{
				// alert("working");
				$.stylesheetToggle();
				return false;
			}
		);
		
		// When one of the styleswitch links is clicked then switch the stylesheet to
		// the one matching the value of that links rel attribute.
		$('.styleswitch').bind(
			'click',
			function(e)
			{
				$.stylesheetSwitch(this.getAttribute('rel'));
				return false;
			}
		);
	}
);

*/
