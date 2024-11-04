$(window).on('load', function () {
	const $navigationMenus = $('.common_navigation_menu');

	$navigationMenus.removeClass('common_navigation_menu_active').first().addClass('common_navigation_menu_active');

	$navigationMenus.on('click', function () {
		$navigationMenus.removeClass('common_navigation_menu_active');
		$(this).addClass('common_navigation_menu_active');
	});
});

$(function () {
	const keywordResultSwiper = new Swiper('.keyword_result_swiper', {
		speed: 600,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		slidesPerView: 1,
		navigation: {
			nextEl: '.keyword_result_swiper .swiper-button-next',
			prevEl: '.keyword_result_swiper .swiper-button-prev',
		},
	});
});

$(function () {
	const keywordCustomSwiper = new Swiper('.keyword_custom_swiper', {
		speed: 600,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		slidesPerView: 1,
		navigation: {
			nextEl: '.keyword_custom_swiper .swiper-button-next',
			prevEl: '.keyword_custom_swiper .swiper-button-prev',
		},
	});
});
