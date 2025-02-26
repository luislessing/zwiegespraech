window.cm4all = window.cm4all || {};
(function(){
		window.cm4all.initializeCatalogWidget = function(containerId) {
		jQuery(document).ready(
				function(e) {
						
						jQuery('#' + containerId + ' .cm-widget-catalog-toggle').click(function() {
								var $parent = jQuery(this).parent();

								/* workaround some strange chrome bugs
								 * (Chrome Chrash, PBT #9206)
								 */

								if ($parent.hasClass('flipped-y')) {
										$parent.toggleClass('flipped-y');
										setTimeout(function() {
												$parent.find(".cm-widget-catalog-content-wrapper").css("display", "none");
										}, 300);
								} else {
										$parent.find(".cm-widget-catalog-content-wrapper").css("display", "block");
										setTimeout(function() {
												$parent.toggleClass('flipped-y');
										}, 0);
								}
						});
						jQuery("#" + containerId + " .cm-widget-catalog-gallery .cm-widget-catalog-thumbnail").click(
								function(ev) {
										jQuery(this).closest(".cm-widget-catalog-image-container").find('.visible').removeClass('visible');
										jQuery(jQuery(this).closest(".cm-widget-catalog-image-container").find("> img,> picture") 
												.get(jQuery(this).prevAll('.cm-widget-catalog-thumbnail').size() % jQuery(this)
														.siblings('.cm-widget-catalog-thumbnail').andSelf().not('.cm4all-repeated-image').size())).addClass('visible');
										
								});
						jQuery("#" + containerId + " .cm-widget-catalog-gallery").click(function(ev) {
								ev.stopPropagation();
						});

						var rgbRe = /rgba?\((\d+),(\d+),(\d+)(,[.\d]+)*\)/;

						jQuery("#" + containerId + " .cm-widget-catalog-image-wrapper").click(function(ev) {
								var elem = jQuery(this).find(".cm-widget-catalog-thumbnail:not(.cm4all-repeated-image) img");
								var $img = jQuery(this).find("picture.visible img, img.visible");
								var curURL = $img.data("background-full-url") || $img.prop('currentSrc');

								var urls = [];
								var curIndex;
								if (elem.length > 1) {
										for (index = 0; index < elem.length; ++index) {
												var e = jQuery(elem[index]).data("background-full-url") || elem[index].currentSrc;
												urls.push(e);
												if (e===curURL) curIndex = index;
										}
										Common.openFullscreenImageSlideshow(urls, curIndex);
								} else {
										Common.openFullscreenImage(curURL);
								}
						});

						jQuery("#" + containerId + " .cm-widget-catalog-gallery .prev").click(function(ev) {
								var $elems;
								var $cur = jQuery(this).parent().find(".cm-widget-catalog-thumbnail.cm4all-first-image");
								var $prev = $cur.prev('.cm-widget-catalog-thumbnail');
								$cur.removeClass("cm4all-first-image");
								if ($prev.length === 0) {
										$elems = jQuery(this).siblings(".cm-widget-catalog-thumbnail:not(.cm4all-repeated-image)");
										$elems.last().addClass("cm4all-first-image");
								} else {
										$prev.addClass("cm4all-first-image");
								}
						});

						jQuery("#" + containerId + " .cm-widget-catalog-gallery .next").click(function(ev) {
								var $cur = jQuery(this).parent().find(".cm-widget-catalog-thumbnail.cm4all-first-image");
								var $next = $cur.next('.cm-widget-catalog-thumbnail:not(.cm4all-repeated-image)');
								$cur.removeClass("cm4all-first-image");
								if ($next.length === 0) {
										jQuery(this).siblings(".cm-widget-catalog-thumbnail").first().addClass("cm4all-first-image");
								} else {
										$next.addClass("cm4all-first-image");
								}
						});

						/* Teaser stuff */

						function swapTeaser() {
								jQuery("#" + containerId + " .cm-widget-catalog-teaser-wrapper").each(
										function(i, teaserWrapper) {
												var $teaserWrapper = jQuery(teaserWrapper);
												var $next = null;
												$teaserWrapper.find(".cm-widget-catalog-teaser-listactive").each(
														function(j, activeElem) {
																var $activeElem = jQuery(activeElem);
																$activeElem.removeClass("cm-widget-catalog-teaser-listactive");
																$next = $activeElem.next();
														});

												if (!$next || $next.length == 0) {
														$next = $teaserWrapper.find("li").first();
												}
												$next.addClass("cm-widget-catalog-teaser-listactive");
										}
								);
						}

						if (jQuery("#" + containerId + " .cm-widget-catalog-teaser-wrapper").length > 0) {
								window.setInterval(swapTeaser, 3000);
								swapTeaser();
						}


						(function initButtons() {
								jQuery("#" + containerId + " .cm-widget-catalog-button-background").parent().each(function(i, $button) {
										$button = jQuery($button);
										var $background = $button.find(".cm-widget-catalog-button-background");
										var color = $button.css("color");
										var borderColor = color;
										var backgroundColor = $background.css("background-color");
										$background.css({
												"background-color": backgroundColor
										});
										$button.css({
												"color": color,
												"border-color": borderColor
										});
										$button.removeClass("cm4all-force-color");
										$background.removeClass("cm4all-force-background-color")
										$button.hover(function() {
												$background.css({
														"background-color": color
												});
												$button.css({
														"color": backgroundColor
												});
										}, function() {
												$background.css({
														"background-color": backgroundColor
												});
												$button.css({
														"color": color
												});
										});
								});
						})();

				});
		};
})();