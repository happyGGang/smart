$(window).on('load', function () {
	const $navigationMenus = $('.common_navigation_menu');

	$navigationMenus.removeClass('common_navigation_menu_active').first().addClass('common_navigation_menu_active');

	$navigationMenus.on('click', function () {
		$navigationMenus.removeClass('common_navigation_menu_active');
		$(this).addClass('common_navigation_menu_active');
	});

	$('.bigdata_filtering_list_item')
		.on('click', function () {
			$(this).addClass('bigdata_filtering_list_item_active').siblings().removeClass('bigdata_filtering_list_item_active');
		})
		.first()
		.click();
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
	const fourByFourSwiper = new Swiper('.common_four_by_four', {
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
			nextEl: '.common_four_by_four .swiper-button-next',
			prevEl: '.common_four_by_four .swiper-button-prev',
		},
	});
});

$(function () {
	const bigdataSwiper = new Swiper('.bigdata_swiper', {
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
			nextEl: '.bigdata_swiper .swiper-button-next',
			prevEl: '.bigdata_swiper .swiper-button-prev',
		},
	});
});
