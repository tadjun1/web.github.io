$(function(){

	$('.count').css({
		position: 'fixed',
		top: 20,
		left: 20,
		color: '#0af',
		fontSize: 100
	});

	var imgs = '';
	
	
	for(var i=0; i<250; i++) { 
		imgs += '<img src="img/nike/nike' + i + '.jpg">'	
	}
	
	$('.pics').html(imgs);
	
	$('.pics').children().hide();
	$('.pics').find('img').eq(0).show();
	
  $('body').on('mousemove', function(e){
    var screenSize = $(window).width(), 
        posX = e.pageX, 
        posY = e.pageY, 
        
				num = (posX / screenSize) * 250,
				percent = Math.floor(num); 
		
    $('.pics').children().hide();
    $('.pics').find('img').eq(percent).show();
    
		});
		
	
	var $btnMenu = $('.btn-menu'),
			$menuCon = $('.menu-con'),
			$btnClose = $('.btn-close');
	
	$btnMenu.on('click', function(){
		
		$menuCon.addClass('on');
		
	});
	
		$btnClose.on('click', function(){
		
		$menuCon.removeClass('on');
		
	});
	
	
	
	
	
});