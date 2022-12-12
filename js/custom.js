/* ----------- WINDOW LOAD ----------- */
$(window).on( "load", function() {
	/* ----------- Page Loader ----------- */
	$("#pageloader").fadeOut(1500);
	$("#pageloader > img").fadeOut(1000);
	prettyPhoto();
	pieChart();
});	



/* ----------- DOCUMENT READY ----------- */
$(document).ready(function($) {
	navMenu();
	sticky();
	fullSearch();
	Animations();
	bgImage();
	parallaxBg();
	numberCounter();
	owlSlider();
	colorSwitcher();
	IsotopeGrid();
	bootForm();
	revSlider();
	pieChart();
	GmapInit();
	$('[data-toggle="tooltip"]').tooltip();
});



/* --------------------------------------------
			SCROLL NAVIGATION
-------------------------------------------- */	
function navMenu(){	
	"use strict";
	$( ".scroll li a" ).on( "click", function(event) {
		var $anchor = $(this);
		var headerH = $('nav').innerHeight();
			$('html, body').stop().animate({					
				scrollTop : $($anchor.attr('href')).offset().top  - headerH + "px"
			}, 1200, 'easeInOutExpo');
		event.preventDefault();
	});
	/* Active When Scroll */
	$('body').scrollspy({ 
		target: '#main-nav'
	});
	/* Responsive Auto Close */
	$( "#main-nav .nav li a" ).on( "click", function() {
		 $('body').removeClass('menu-open');
	});
	/* Smooth Scroll Links */
	$( ".page-scroll" ).on( "click", function(event) {
		var $anchor = $(this);
		var headerH = $('nav').innerHeight();
		$('html, body')
			.stop()
			.animate({
				scrollTop: $($anchor.attr('href'))
					.offset()
					.top - headerH + "px"
			}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
}


	
/* -------------------------------	
			STICKY
/* ----------------------------- */
function sticky() {
	if ($('#sticker').length) {
		$("#sticker").sticky({
			topSpacing:0
		});
	 }
}



/* -------------------------------	
			FULL SEARCH
/* ----------------------------- */
function fullSearch() {
	if($(".search-open").length){
		$( ".search-open, .search-close" ).on( "click", function(event) {
			$( ".full-search-wrapper" ).fadeToggle(300);
			$( ".full-search-wrapper .search-field" ).focus();
			return false;
		});
	}
}

/* ---------------------	
		ANIMATION
/* --------------------- */	
function Animations() {
	"use strict";
	$('.animated').appear(function() {
		var elem = $(this);
		var animation = elem.data('animation');
		if ( !elem.hasClass('visible') ) {
			var animationDelay = elem.data('animation-delay');
			if ( animationDelay ) {			
				setTimeout(function(){
				 elem.addClass( animation + " visible" );
				}, animationDelay);				
			} else {
				elem.addClass( animation + " visible" );
			}
		}
	});
}
/* -------------------------------	
		BACKGROUND IMAGE
/* ----------------------------- */
function bgImage(){	
	"use strict";
	var pageSection = $('[data-background]');
	pageSection.each(function(indx){
		if ($(this).attr("data-background")){
			$(this).css("background-image", "url(" + $(this).data("background") + ")");
		}
	});
	$('[data-bgcolor]').css('background', function () {
		return $(this).data('bgcolor')
	});
}
/* -------------------------------	
		PARALLAX BG IMAGE
/* ----------------------------- */
function parallaxBg(){	
	"use strict";
	if($('.parallax-bg').length != 0 && !navigator.userAgent.match(/iPad|iPhone|Android/i)){	
			$.stellar();
		}
}
 /* -------------------------------	
		NUMBER COUNTER
/* ----------------------------- */	
function numberCounter(){	
	if ($('.number-counter').length) {
		$(".number-counter").appear(function(){
			$(this).each(function(){
				datacount = $(this).attr('data-count');
				$(this).delay(6000).countTo({
					from: 10,
					to: datacount,
					speed: 3000,
					refreshInterval: 50,
				});
			});
		});
	}	
}	

 /* -------------------------------	
		COLOR SWITCHER
/* ----------------------------- */	
function colorSwitcher(){	
	if ($('.switcher').length) {
		// Color Skins
		$('.switcher').on( "click", function(event){								 	
			var title = jQuery(this).attr('title');
			jQuery('#changeable-colors').attr('href', 'css/color-scheme/' + title + '.css');
			return false;
		});
	}	
}
/* -------------------------------	
		PRETTY PHOTO
/* ----------------------------- */ 
 function prettyPhoto() {
	 "use strict";
	if( $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").length != 0 ) { 
	 $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").prettyPhoto({hook: 'data-rel', social_tools: false, deeplinking: false});
	}
 }	
 /* -------------------------------	
		OWL SLIDER
/* ----------------------------- */
 function owlSlider() {
	"use strict";
	if ($('.owl-carousel').length) {		    
		  $(".owl-carousel").each(function (index) {
			var autoplay = $(this).data('autoplay');
			var timeout = $(this).data('delay');
			var slidemargin = $(this).data('margin');
			var slidepadding = $(this).data('stagepadding');
			var items = $(this).data('items');
			var animationin = $(this).data('animatein');
			var animationout = $(this).data('animateout');
			var itemheight = $(this).data('autoheight');
			var itemwidth = $(this).data('autowidth');
			var itemmerge = $(this).data('merge');
			var navigation = $(this).data('nav');
			var pagination = $(this).data('dots');
			var infinateloop = $(this).data('loop');
			var itemsdesktop = $(this).data('desktop');
			var itemsdesktopsmall = $(this).data('desktopsmall');
			var itemstablet = $(this).data('tablet');
			var itemsmobile = $(this).data('mobile');
			$(this).owlCarousel({ 
				autoplay: autoplay,
				autoplayTimeout:timeout,
				items : items,
				margin:slidemargin,
				autoHeight:itemheight,
				autoWidth:itemwidth,
				stagePadding:slidepadding,
				URLhashListener:true,
				startPosition: 'one',
				merge:itemmerge,
				nav:navigation,
				dots:pagination,
				loop:infinateloop,
				responsive:{
					0 : {
						items:itemsmobile,
					},
					479:{
						items:itemsmobile,
					},
					768:{
						items:itemstablet,
					},
					980:{
						items:itemsdesktopsmall,
					},
					1199:{
						items:itemsdesktop,
					}
				}
			});
		});
	}  
}
 /* -------------------------------	
		ISOTOPE GRID
/* ----------------------------- */
function IsotopeGrid() {
	$('.isotope-grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-sizer'
	  }
	});
}


/* -------------------------------	
		CONTACT AND SUBSCRIBE FORM
/* ----------------------------- */
function bootForm() {
/*Subscribe Form Code*/
if ( $( "#subscribe_form" ).length !== 0 ) {
	$('#subscribe_form').bootstrapValidator({
		container: 'tooltip',
		feedbackIcons: {
			valid: 'ion-ios-checkmark-empty',
			warning: 'fa fa-user',
			invalid: 'ion-ios-close-empty',
			validating: 'fa fa-refresh'
		},
		fields: { 
			subscribe_email: {
				validators: {
					notEmpty: {
						message: 'Email is required. Please enter email.'
					},
					emailAddress: {
						message: 'Please enter a correct email address.'
					}
				}
			},	
		}
	})	
	.on('success.form.bv', function(e) {
		e.preventDefault();
		var $form        = $(e.target),
		validator    = $form.data('bootstrapValidator'),
		submitButton = validator.getSubmitButton();
		var form_data = $('#subscribe_form').serialize();
		$.ajax({
				type: "POST",
				dataType: 'json',
				url: "php/subscription.php",					
				data: form_data,
				success: function(msg){						
					$('.subscribe-message').html(msg.data);
					$('.subscribe-message').show();
					submitButton.removeAttr("disabled");
					resetForm($('#subscribe_form'));						
				},
				error: function(msg){}
		 });
		return false;
	});
}
function resetForm($form) {

	$form.find(
			'input:text, input:password, input, input:file, select, textarea'
		)
		.val('');

	$form.find('input:radio, input:checkbox')
		.removeAttr('checked')
		.removeAttr('selected');
	$form.find('button[type=submit]')
		.attr("disabled", "disabled");
}

/*Contact Form Code*/
if ( $( "#contactform" ).length !== 0 ) {
	$('#contactform').bootstrapValidator({
		container: 'tooltip',
		feedbackIcons: {
			valid: 'ion-ios-checkmark-empty',
			warning: 'fa fa-user',
			invalid: 'ion-ios-close-empty',
			validating: 'fa fa-refresh'
		},
		fields: { 
			contact_name: {
				validators: {
					notEmpty: {
						message: ''
					}
				}
			},
			contact_subject: {
				validators: {
					notEmpty: {
						message: ''
					}
				}
			},
			contact_phone: {
				validators: {
					notEmpty: {
						message: ''
					}
				}
			},
			contact_message: {
				validators: {
					notEmpty: {
						message: ''
					}
				}
			},
		}
	})	
	.on('success.form.bv', function(e) {
		e.preventDefault();
		var $form        = $(e.target),
		validator    = $form.data('bootstrapValidator'),
		submitButton = validator.getSubmitButton();
		var form_data = $('#contactform').serialize();
		$.ajax({
				type: "POST",
				dataType: 'json',
				url: "php/contact-form.php",					
				data: form_data,
				success: function(msg){						
					$('.form-message').html(msg.data);
					$('.form-message').show();
					submitButton.removeAttr("disabled");
					resetForm($('#contactform'));	
				},
				error: function(msg){}
		 });
		return false;
	});
}
	function resetForm($form) {
	
		$form.find(
				'input:text, input:password, input, input:file, select, textarea'
			)
			.val('');
	
		$form.find('input:radio, input:checkbox')
			.removeAttr('checked')
			.removeAttr('selected');
		$form.find('button[type=submit]')
			.attr("disabled", "disabled");	
	
	}

/*Contact Form - 2*/
if ( $( "#contactform2" ).length !== 0 ) {
	$('#contactform2').bootstrapValidator({
		container: 'tooltip',
		feedbackIcons: {
			valid: 'ion-ios-checkmark-empty',
			warning: 'fa fa-user',
			invalid: 'ion-ios-close-empty',
			validating: 'fa fa-refresh'
		},
		fields: { 
			contact_name: {
				validators: {
					notEmpty: {
						message: ''
					}
				}
			},
			contact_email: {
				validators: {
					notEmpty: {
						message: ''
					},
					emailAddress: {
						message: ''
					}
				}
			},
			contact_message: {
				validators: {
					notEmpty: {
						message: ''
					}
				}
			},
		}
	})	
	.on('success.form.bv', function(e) {
		e.preventDefault();
		var $form        = $(e.target),
		validator    = $form.data('bootstrapValidator'),
		submitButton = validator.getSubmitButton();
		var form_data = $('#contactform').serialize();
		$.ajax({
				type: "POST",
				dataType: 'json',
				url: "php/contact-form.php",					
				data: form_data,
				success: function(msg){						
					$('.form-message').html(msg.data);
					$('.form-message').show();
					submitButton.removeAttr("disabled");
					resetForm($('#contactform'));	
				},
				error: function(msg){}
		 });
		return false;
	});
}
	function resetForm($form) {
	
		$form.find(
				'input:text, input:password, input, input:file, select, textarea'
			)
			.val('');
	
		$form.find('input:radio, input:checkbox')
			.removeAttr('checked')
			.removeAttr('selected');
		$form.find('button[type=submit]')
			.attr("disabled", "disabled");	
	
	}
}



<!-- REVOLUTION CUSTOM JS -->
function revSlider() {
	/* SLIDER 1 */
	if ( $( "#rev-slide1" ).length !== 0 ) {
		var revapi202;
		revapi202 = $("#rev-slide1").show().revolution({
			sliderType: "standard",
			dottedOverlay: "none",
			delay: 9000,
			navigation: {
				keyboardNavigation: "on",
				keyboard_direction: "horizontal",
				mouseScrollNavigation: "off",
				navigationType:"bullet",
				onHoverStop: "off",
				touch: {
					touchenabled: "on",
					swipe_threshold: 75,
					swipe_min_touches: 50,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
			},
			responsiveLevels: [1240, 1024, 778, 480],
			visibilityLevels: [1240, 1024, 778, 480],
			gridwidth: [1170, 1024, 778, 480],
			gridheight: [700, 768, 960, 350],
			lazyType: "none",
			parallax: {
				type: "scroll",
				origo: "slidercenter",
				speed: 1000,
				levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
				type: "scroll",
			},
			shadow: 0,
			spinner: "on",
			stopAtSlide: 1,
			shuffle: "off",
			autoHeight: "off",
			fullScreenAutoWidth: "off",
			fullScreenAlignForce: "off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "60px",
			disableProgressBar: "on",
			hideThumbsOnMobile: "off",
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			debugMode: false,
			fallbacks: {
				simplifyAll: "off",
				nextSlideOnWindowFocus: "off",
				disableFocusListener: false,
			}
		});
	}
	/* SLIDER 2 */
	if ( $( "#rev-slide2" ).length !== 0 ) {
		var revapi626;
		revapi626 = $("#rev-slide2").show().revolution({
			sliderType: "standard",
			dottedOverlay: "none",
			delay: 9000,
			navigation: {
				keyboardNavigation: "off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation: "off",
				mouseScrollReverse: "default",
				onHoverStop: "off",
				touch: {
					touchenabled: "on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
			},
			responsiveLevels: [1240, 1024, 778, 480],
			visibilityLevels: [1240, 1024, 778, 480],
			gridwidth: [1170, 1024, 778, 480],
			gridheight: [700, 768, 960, 400],
			lazyType: "single",
			parallax: {
				type: "mouse",
				origo: "slidercenter",
				speed: 300,
				levels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 49, 50, 51, 55],
				type: "mouse",
			},
			shadow: 0,
			spinner: "spinner4",
			stopLoop: "on",
			stopAfterLoops: 0,
			stopAtSlide: 1,
			shuffle: "off",
			autoHeight: "off",
			fullScreenAutoWidth: "off",
			fullScreenAlignForce: "off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "",
			disableProgressBar: "on",
			hideThumbsOnMobile: "off",
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			debugMode: false,
			fallbacks: {
				simplifyAll: "off",
				nextSlideOnWindowFocus: "off",
				disableFocusListener: false,
			}
		});
	}
	/* SLIDER 3 */
	if ( $( "#rev-slide3" ).length !== 0 ) {
		var revapi202;
		revapi202 = $("#rev-slide3").show().revolution({
			sliderType: "standard",
			dottedOverlay: "none",
			delay: 9000,
			navigation: {
				keyboardNavigation: "on",
				keyboard_direction: "horizontal",
				mouseScrollNavigation: "off",
				navigationType:"bullet",
				onHoverStop: "off",
				touch: {
					touchenabled: "on",
					swipe_threshold: 75,
					swipe_min_touches: 50,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
			},
			responsiveLevels: [1240, 1024, 778, 480],
			visibilityLevels: [1240, 1024, 778, 480],
			gridwidth: [1170, 1024, 778, 480],
			gridheight: [850, 822, 960, 450],
			lazyType: "none",
			parallax: {
				type: "scroll",
				origo: "slidercenter",
				speed: 1000,
				levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
				type: "scroll",
			},
			shadow: 0,
			spinner: "on",
			stopAtSlide: 1,
			shuffle: "off",
			autoHeight: "off",
			fullScreenAutoWidth: "off",
			fullScreenAlignForce: "off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "60px",
			disableProgressBar: "on",
			hideThumbsOnMobile: "off",
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			debugMode: false,
			fallbacks: {
				simplifyAll: "off",
				nextSlideOnWindowFocus: "off",
				disableFocusListener: false,
			}
		});
	}
	/* SLIDER 4 */
	if ( $( "#rev-slide4" ).length !== 0 ) {
		var revapi202;
		revapi202 = $("#rev-slide4").show().revolution({
			sliderType: "standard",
			dottedOverlay: "none",
			delay: 9000,
			navigation: {
				keyboardNavigation: "on",
				keyboard_direction: "horizontal",
				mouseScrollNavigation: "off",
				navigationType:"bullet",
				onHoverStop: "off",
				touch: {
					touchenabled: "on",
					swipe_threshold: 75,
					swipe_min_touches: 50,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
			},
			responsiveLevels: [1240, 1024, 778, 480],
			visibilityLevels: [1240, 1024, 778, 480],
			gridwidth: [1170, 1024, 778, 480],
			gridheight: [950, 1200, 1300, 1400],
			lazyType: "none",
			parallax: {
				type: "scroll",
				origo: "slidercenter",
				speed: 1000,
				levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
				type: "scroll",
			},
			shadow: 0,
			spinner: "on",
			stopAtSlide: 1,
			shuffle: "off",
			autoHeight: "off",
			fullScreenAutoWidth: "off",
			fullScreenAlignForce: "off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "60px",
			disableProgressBar: "on",
			hideThumbsOnMobile: "off",
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			debugMode: false,
			fallbacks: {
				simplifyAll: "off",
				nextSlideOnWindowFocus: "off",
				disableFocusListener: false,
			}
		});
	}
}/* --------------------------------------------
				GOOGLE MAP
-------------------------------------------- */	
function pieChart() {
	var pieChartData = [
		{
			value : 35,
			color : "#E97F29"
		},
		{
			value : 30,
			color : "#28ACEA"
		},
		{
			value: 35,
			color:"#ECC927"
		},
		
	];
	function showPieChart(){
		var ctx = document.getElementById("pieChartmist").getContext("2d");
		new Chart(ctx).Pie(pieChartData,{	responsive: true	});
	}
	$('#pieChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showPieChart,300); },{accX: 0, accY: -155},'easeInCubic');
}
/* --------------------------------------------
				GOOGLE MAP
-------------------------------------------- */	
function GmapInit() {
	  Gmap = $('.map-canvas');
	  Gmap.each(function() {
		var $this           = $(this),
			lat             = -35.2835,
			lng             = 149.128,
			zoom            = 12,
			scrollwheel     = false,
			zoomcontrol 	= true,
			draggable       = true,
			mapType         = google.maps.MapTypeId.ROADMAP,
			title           = '',
			contentString   = '',
			dataLat         = $this.data('lat'),
			dataLng         = $this.data('lng'),
			dataZoom        = $this.data('zoom'),
			dataType        = $this.data('type'),
			dataScrollwheel = $this.data('scrollwheel'),
			dataZoomcontrol = $this.data('zoomcontrol'),
			dataHue         = $this.data('hue'),
			dataSaturation  = $this.data('saturation'),
			dataLightness   = $this.data('lightness'),
			dataTitle       = $this.data('title'),
			dataContent     = $this.data('content');
			
		if( dataZoom !== undefined && dataZoom !== false ) {
			zoom = parseFloat(dataZoom);
		}
		if( dataLat !== undefined && dataLat !== false ) {
			lat = parseFloat(dataLat);
		}
		if( dataLng !== undefined && dataLng !== false ) {
			lng = parseFloat(dataLng);
		}
		if( dataScrollwheel !== undefined && dataScrollwheel !== null ) {
			scrollwheel = dataScrollwheel;
		}
		if( dataZoomcontrol !== undefined && dataZoomcontrol !== null ) {
			zoomcontrol = dataZoomcontrol;
		}
		if( dataType !== undefined && dataType !== false ) {
			if( dataType == 'satellite' ) {
				mapType = google.maps.MapTypeId.SATELLITE;
			} else if( dataType == 'hybrid' ) {
				mapType = google.maps.MapTypeId.HYBRID;
			} else if( dataType == 'terrain' ) {
				mapType = google.maps.MapTypeId.TERRAIN;
			}		  	
		}
		if( dataTitle !== undefined && dataTitle !== false ) {
			title = dataTitle;
		}
		if( navigator.userAgent.match(/iPad|iPhone|Android/i) ) {
			draggable = false;
		}
		
		var mapOptions = {
		  zoom        : zoom,
		  scrollwheel : scrollwheel,
		  zoomControl : zoomcontrol,
		  draggable   : draggable,
		  center      : new google.maps.LatLng(lat, lng),
		  mapTypeId   : mapType
		};		
		var map = new google.maps.Map($this[0], mapOptions);
		
		var image = 'images/map-marker.png';
		if( dataContent !== undefined && dataContent !== false ) {
			contentString = '<div class="map-data">' + '<h6>' + title + '</h6>' + '<div class="map-content">' + dataContent + '</div>' + '</div>';
		}
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		
		var marker = new google.maps.Marker({
		  position : new google.maps.LatLng(lat, lng),
		  map      : map,
		  icon     : image,
		  title    : title
		});
		if( dataContent !== undefined && dataContent !== false ) {
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
		}
		
		if( dataHue !== undefined && dataHue !== false ) {
		  var styles = [
			{
			  stylers : [
				{ hue : dataHue },
				{ saturation: dataSaturation },
				{ lightness: dataLightness }
			  ]
			}
		  ];
		  map.setOptions({styles: styles});
		}
	 });	 
}
	

