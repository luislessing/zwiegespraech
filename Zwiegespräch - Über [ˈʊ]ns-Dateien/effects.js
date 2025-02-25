
jQuery(document).ready(function () {

	var navigation = document.querySelector('.navigation_wrapper.fixednav');
	if(navigation) {
		navigation.addEventListener('dragenter', function() {
			if (window.Draggables && window.Draggables.onDragEnd) {
				navigation.style.pointerEvents = 'none';
				window.Draggables.onDragEnd(function() {
					navigation.style.pointerEvents = '';
				});
			}
		});
	}


	// get current user agent
	var userAgent = navigator.userAgent.toLowerCase();
	// if android exits index > -1 will be returned
	var isAndroid = userAgent.indexOf("android") > -1;
	// if isAndroid == true then our double tab script will be executed
	if (isAndroid === true && navigator.maxTouchPoints > 0) {
		Common.doubleTapToGo("#cm_navigation li:has(ul)");
		Common.doubleTapToGo("#mobile_cm_mainnavigation li:has(ul)");
	}


	function setCmEmptyForElements(element, hiddenElement) {
		if (jQuery(element).hasClass('cm_empty')) {
			if (hiddenElement == undefined) {
				jQuery(element).addClass('cm-templates-empty');
			} else {
				jQuery(hiddenElement).addClass('cm-templates-empty');
			}
		}
	}


	/* focus point - checks for relative or absolute values when focus point is set */
	function isAbsolute(x, y) {
		var isRelative = function (val) {
			return val.match("%$") || val == "auto";
		};
		return !isRelative(x) && !isRelative(y);
	}

	// focus point: backwards-compatibility for px values in logo/kv
	var kvDiv = document.querySelector("[cm_type='keyvisual']");
	if (kvDiv) {
		var kvStyle = window.getComputedStyle(kvDiv);
		if (kvStyle && isAbsolute(kvStyle.backgroundPositionX, kvStyle.backgroundPositionY)) {
			kvDiv.classList.add('cm-templates-kv-deprecated-px');
		}
	}
	var logoDiv = document.querySelector("[cm_type='logo']");
	if (logoDiv) {
		var logoStyle = window.getComputedStyle(logoDiv);
		if (logoStyle && isAbsolute(logoStyle.backgroundPositionX, logoStyle.backgroundPositionY)) {
			logoDiv.classList.add('cm-templates-logo-deprecated-px');
		}
	}

	// remove cm_empty container
	setTimeout(function () {
		setCmEmptyForElements('#logo');
		setCmEmptyForElements('.title');
		setCmEmptyForElements('.subtitle');
		setCmEmptyForElements('#keyvisual');
		setCmEmptyForElements('.cm-templates-footer');
		setCmEmptyForElements('#widgetbar_site_1');
		setCmEmptyForElements('#widgetbar_site_2');
		setCmEmptyForElements('#widgetbar_page_1');
		setCmEmptyForElements('#widgetbar_page_2');

		if (jQuery('.title').hasClass('cm_empty') && jQuery('.subtitle').hasClass('cm_empty')) {
			jQuery('.title_wrapper').addClass('cm-templates-empty');
		}

		if (jQuery('#logo').hasClass('cm_empty')) {
			jQuery('.cm-templates-logo-wrapper').addClass('cm-templates-empty');
		}

		if (jQuery('#widgetbar_site_1').hasClass('cm_empty') && jQuery('#widgetbar_site_2').hasClass('cm_empty') && jQuery('#widgetbar_page_1').hasClass('cm_empty') && jQuery('#widgetbar_page_2').hasClass('cm_empty')) {
			jQuery('.cm-templates-sidebar-wrapper').addClass('cm-templates-empty');
			jQuery('.content_main_dho').css('width', '100%');
			jQuery('.content_main_dho').css('margin-right', '0');
		}

	}, 100);

});


(function ($) {
	$(document).ready(function () {
		var linkhtml = '<span>&nbsp;' + $('#cm_mainnavigation .cm_current:last a').html() + '</span>';
		$('#asdf').after(linkhtml);
	});
})(jQuery);


function goToByScroll(id) {
	jQuery('html,body').animate({ scrollTop: jQuery(id).offset().top }, 'slow');
}
