$(function () {
	$('#slider-div').slick({
//		prevArrow: '.arrow-prev',
//		nextArrow: '.arrow-next',
		slidesToShow: 4,
		autoplaySpeed: 550,
		rtl: false,
		slidesToScroll: 2,
		arrows: true,
		infinite: true,
		centerMode: true,
		variableWidth: true,
		infinite: true,
		focusOnSelect: true,
		touchMove: true,
		dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
		autoplay: true, // 자동 스크롤 사용 여부
		autoplaySpeed: 10000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
		pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
	});
	
	function slickPause() {
		$('#slider-div').slick('slickPause');
	}
	slickPause();
	$('#slider-div').mouseover(function () {
		$('#slider-div').slick('slickPlay')
	});
	$('#slider-div').mouseout(function () {
		slickPause();
	});

	$('#slider-div').slickLightbox({
        itemSelector: 'a'
      });
})
