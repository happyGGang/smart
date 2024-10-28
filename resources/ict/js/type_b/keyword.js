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
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
});

$(function () {
    $('.person_said a').on('click', function (event) {
        event.preventDefault(); // a 태그의 기본 동작 방지
        $('.bg_rectangle').addClass('show'); // show 클래스 추가
    });
});
