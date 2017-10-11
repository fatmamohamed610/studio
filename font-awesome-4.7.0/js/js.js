$(function(){
	/*---slider----*/
	$('.camera_wrap').camera({
		height: 'auto',
		loader: 'bar',
		pagination: false,
		thumbnails: false,
		loaderStroke: 5,
		loaderColor:'#f8e3db',
		loaderBgColor:'#825d5b'
	});
	$('.camera_commands').css('display','none');
	$('.camera_prev span').html('<i class="fa fa-angle-left" aria-hidden="true"></i>');
	$('.camera_next span').html('<i class="fa fa-angle-right" aria-hidden="true"></i>');
	$('.controls .control:first-child').trigger('click');
	$('#facebookLi').trigger('click');
	$('.load').css('display','none');
	/*---fade slider---*/

	//map
	var myCenter = new google.maps.LatLng(30.971650999999998, 31.18179520000001);

	function initialize() {
		var mapProp = {
			center:myCenter,
			zoom:12,
			scrollwheel:false,
			draggable:false,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		};
	
		var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
		var marker = new google.maps.Marker({
			position:myCenter,
		});
	
		marker.setMap(map);
	}
	
	google.maps.event.addDomListener(window, 'load', initialize);
});
/*--------mix it up-------*/
var containerEl = document.querySelector('.productMix');
var mixer = mixitup(containerEl);

/*-------------social-------------*/
$('.contactUl li').click(function(){
	$('.contactUl li.active').removeClass('active');
	$(this).addClass('active');
	var classWanted = $(this).attr('id');
	$('.fa-content.active').fadeOut(400,function(){
		$('.fa-content.active').removeClass('active');
		$('.fa-content.active').css('display','none');
		$('.'+classWanted).fadeIn(500).addClass('active');
	});
});
//add items
$('.plus .fa-plus').click(function(){
	var number = $(this).parent().find('.num').text();
	var number2 = Number(number)+1;
	$(this).parent().find('.num').text(number2);
});
$('.plus .fa-minus').click(function(){
	var number = $(this).parent().find('.num').text();
	if(number > 1){
		var number2 = Number(number)-1;
		$(this).parent().find('.num').text(number2);
	}
});
//fade slider
function fadeSlider(){
	var activeS = $('.adWrap.active');
	var nextS = activeS.next('.adWrap');
	if(nextS.length){
		activeS.fadeOut(400,function(){
			activeS.removeClass('active');
			nextS.fadeIn(400);
			nextS.addClass('active');
		});
	}
	else{
		activeS.fadeOut(400,function(){
			activeS.removeClass('active');
			var firstSlide = $('.fadeSlider .adWrap:first-child');
			firstSlide.fadeIn(400);
			firstSlide.addClass('active');
		});
	}
}
$(function(){
    window.setInterval(fadeSlider, 5000);
    var count = 0;
    var divs = $(".one");
    var divNO = divs.length;
    var pageNo = divNO / 3;
    if ($('.one').length) {
        for (var i = 0; i < divNO; i += 3) {
            divs.slice(i, i + 3).wrapAll("<div class='item'></div>");
            count++;
        }
    }
    var count2 = count - 1;
    for (i = 0; i <= count2; i++) {
        $('#myCarousel .carousel-indicators').append('<li data-target="#myCarousel" data-slide-to="' + i + '"></li>');
    }
    $('#myCarousel .carousel-indicators li:first-child').addClass('active');
    $('#myCarousel .carousel-inner .item:first-child').addClass('active');
    var count3 = 0;
    var divs2 = $(".two");
    var divNO2 = divs2.length;
    var pageNo2 = divNO2 / 3;
    if ($('.two').length) {
        for (var i = 0; i < divNO2; i += 4) {
            divs2.slice(i, i + 4).wrapAll("<div class='item'></div>");
            count3++;
        }
    }
    var count4 = count3 - 1;
    for (i = 0; i <= count4; i++) {
        $('#myCarousel2 .carousel-indicators').append('<li data-target="#myCarousel2" data-slide-to="' + i + '"></li>');
    }
    $('#myCarousel2 .carousel-indicators li:first-child').addClass('active');
    $('#myCarousel2 .carousel-inner .item:first-child').addClass('active');

});