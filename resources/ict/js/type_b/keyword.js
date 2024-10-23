$(function () {
	// 게시판
	$('.reco_tab a').click(function () {
		var tab_id = $(this).attr('data-tab');

		$('.reco_tab a').removeClass('active');
		$('.tab_content').removeClass('active');

		$(this).addClass('active');
		$('#' + tab_id).addClass('active');
	});
});

$(function () {
	// 게시판
	$('.recom_tab a').click(function () {
		var tab_id = $(this).attr('data-tab');

		$('.recom_tab a').removeClass('active');
		$('.tab_contentt').removeClass('active');

		$(this).addClass('active');
		$('#' + tab_id).addClass('active');
	});
});

$(function () {
	var swiper = new Swiper('.swiper-container', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
});
