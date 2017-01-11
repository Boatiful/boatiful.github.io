$(document).ready(function(){
	resizeCard(3/4);
      $('.parallax').parallax();
      
      $(window).on('resize', function() {
      	resizeCard(3/4);
      });

});


function resizeCard(radio) {
	var width = $('.card-about').css('width');
    var widthCalc = width.substr(0, width.length - 2);
    $('.card-about').css('height', radio*widthCalc);
    var height = $('.card-about').css('height');
}