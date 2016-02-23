/*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
(function(e){e.viewportSize={},e.viewportSize.getHeight=function(){return t("Height")},e.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var r,i=t.toLowerCase(),s=e.document,o=s.documentElement,u,a;return e["inner"+t]===undefined?r=o["client"+t]:e["inner"+t]!=o["client"+t]?(u=s.createElement("body"),u.id="vpw-test-b",u.style.cssText="overflow:scroll",a=s.createElement("div"),a.id="vpw-test-d",a.style.cssText="position:absolute;top:-1000px",u.appendChild(a),o.insertBefore(u,s.head),r=a["offset"+t]==7?o["client"+t]:e["inner"+t],o.removeChild(u)):r=e["inner"+t],r}})(this)

jQuery(document).ready(function ($) {
	/*Responsive Font bug fix(also need to add the in css viewport font size ):
	http://css-tricks.com/viewport-sized-typography/
	*/
	causeRepaintsOn = $("h1, h2, h3, p");

	$(window).resize(function () {
		causeRepaintsOn.css("z-index", 1);
	});

	var $wrapper = $("#wrapper");
	var $window = $(window);
	var $whitebox = $(".whitebox");

	function $center() {
		var $width = viewportSize.getWidth();
		var $height = viewportSize.getHeight();
		var $pos = '-' + $whitebox.outerHeight() / 2 + 'px';

		$wrapper.css({
			position: 'absolute',
			left: ($width - $wrapper.outerWidth()) / 2,
			top: ($height - $wrapper.outerHeight()) / 2
		});

		$whitebox.css({
			'bottom': $pos
		});
	}
	$center();
	$window.resize(function () {
		$center();
	});
	$window.load(function(){

	});
});




// DOM ready.
$(function () {
	initHoverBoxes();
});

function initHoverBoxes() {
  var $column = $('.column');
  
  $column.mouseenter(function() {
    $column.removeClass('wide');
    $column.css('width', '15%');
    $(this).addClass('wide');
  });
  
  $column.mouseleave(function() {
    $column.css('width', '20%');
    $column.removeClass('wide');
  });
}


$(document).ready(function(){
  var $prev = $('.previous');
  var $next = $('.next');
  var mode = "auto";
  $prev.on({
    click: function(e){
      e.preventDefault();
      mode = "manual";
      showPreviousImage();
    }
  });
  $next.on({
    click: function(e){
      e.preventDefault();
      mode = "manual";
      showNextImage();
      
    }
  });
  
  setInterval(function(){
    if(mode==="auto"){
      showNextImage();
    }
  },5000);
  
  function showNextImage(){
      var $actEl = $('.active');
      var $nextEl = $actEl.next('.slide2');
      if($nextEl.length){
        $actEl.removeClass('active');
        $nextEl.addClass('active');
      }else{
        $actEl.removeClass('active');
        $('.slide2:first-child').addClass('active');
      }
  }
  
  function showPreviousImage(){
      var $actEl = $('.active');
      var $prevEl = $actEl.prev('.slide2');
      if($prevEl.length){
        $actEl.removeClass('active');
        $prevEl.addClass('active');
      }else{
        $actEl.removeClass('active');
        $('.slide2.last').addClass('active');
      }
  }
});
