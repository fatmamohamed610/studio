function diagonalLine(pW,pH){
	var pW2 = Math.pow(pW, 2);
	var pH2 = Math.pow(pH, 2);
	var LineW=  Math.sqrt(pW2+pH2);
	return LineW;
}
$(window).load(function(){
	$('.line').each(function(){
		var pW = $(this).parent().outerWidth();
		var pH = $(this).parent().height();
		var LineW = diagonalLine(pW,pH);
		$(this).width(LineW);
	});
});