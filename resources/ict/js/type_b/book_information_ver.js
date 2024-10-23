$(function () {
	// portrait 슬라이더 초기화
	$('.bookinfo_main').slick({
		infinite: true,
		slidesToShow: 1,
		arrows: false,
		fade: true,
		asNavFor: '.bookinfo_thumbnails',
		focusOnSelect: true,
		lazyLoad: 'ondemand',
		variableWidth: false,
		swipeToSlide: true,
		autoplay: false,
		speed: 1000,
		cssEase: 'ease-in-out',
	}); // 초기화 후 setPosition 호출

	$('.bookinfo_thumbnails').slick({
		infinite: true,
		slidesToShow: 6,
		asNavFor: '.bookinfo_main',
		focusOnSelect: true,
		autoplay: false,
		arrows: false,
		lazyLoad: 'ondemand',
		variableWidth: false,
		vertical: false,
		touchMove: false,
	});
});
