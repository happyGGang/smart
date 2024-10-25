const data = [
	{
		label: '헐리우드 영화',
		color: '#ff6319',
		radius: 110,
		id: 'id1',
		link: '../../../../../resources/ict/img/type_b/keyword/paper.jpg',
		blend: 'invert(82%)sepia(42%) saturate(4528%) hue-rotate(300deg) brightness(100%) contrast(109%)',
		btn: 'btn1()',
		x: 0,
		y: 0,
	},
	{
		label: '고전명작동화',
		color: '#00b0ca',
		radius: 100,
		id: 'id2',
		link: '../../../../../resources/ict/img/type_b/keyword/paper.jpg',
		blend: 'invert(64%) sepia(72%) saturate(2118%) hue-rotate(141deg) brightness(96%) contrast(101%)',
		btn: 'btn2()',
	},
	{
		label: '중단편소설',
		color: '#ffc18c',
		radius: 90,
		id: 'id3',
		link: '../../../../../resources/ict/img/type_b/keyword/paper.jpg',
		blend: 'invert(41%) sepia(35%) saturate(1481%) hue-rotate(200deg) brightness(101%) contrast(89%)',
		btn: 'btn3()',
	},
	{
		label: '뮤지컬',
		color: '#d9ec9c',
		radius: 100,
		id: 'id4',
		link: '../../../../../resources/ict/img/type_b/keyword/paper.jpg',
		blend: 'invert(66%) sepia(31%) saturate(690%) hue-rotate(99deg) brightness(92%) contrast(91%)',
		btn: 'btn4()',
	},
	{
		label: '한국사',
		color: '#333333',
		radius: 80,
		id: 'id5',
		link: '../../../../../resources/ict/img/type_b/keyword/paper.jpg',
		blend: 'invert(54%) sepia(33%) saturate(1727%) hue-rotate(316deg) brightness(96%) contrast(95%)',
		btn: 'btn5()',
	},
	{
		label: '그림책',
		color: '#f2f2f2',
		radius: 60,
		id: 'id6',
		link: '../../../../../resources/ict/img/type_b/keyword/paper.jpg',
		blend: 'invert(94%) sepia(17%) saturate(5518%) hue-rotate(324deg) brightness(98%) contrast(101%)',
		btn: 'btn5()',
	},
	{
		label: '여행',
		color: '#333333',
		radius: 70,
		id: 'id7',
		link: '../../../../../resources/ict/img/type_b/keyword/paper.jpg',
		blend: 'invert(78%) sepia(67%) saturate(421%) hue-rotate(23deg) brightness(88%) contrast(88%)',
		btn: 'btn5()',
	},
	{
		label: '생명과학',
		color: '#333333',
		radius: 90,
		id: 'id8',
		link: '../../../../../resources/ict/img/type_b/keyword/paper.jpg',
		blend: 'invert(78%) sepia(62%) saturate(3213%) hue-rotate(163deg) brightness(102%) contrast(85%)',
		btn: 'btn5()',
	},
	{
		label: '명언',
		color: '#f2f2f2',
		radius: 100,
		id: 'id9',
		link: '../../../../../resources/ict/img/type_b/keyword/paper.jpg',
		blend: 'invert(64%) sepia(12%) saturate(1763%) hue-rotate(80deg) brightness(86%) contrast(91%)',
		btn: 'btn5()',
	},
	{
		label: '철학',
		color: '#333333',
		radius: 90,
		id: 'id10',
		link: '../../../../../resources/ict/img/type_b/keyword/paper.jpg',
		blend: 'invert(78%) sepia(62%) saturate(3213%) hue-rotate(163deg) brightness(102%) contrast(85%)',
		btn: 'btn5()',
	},
	{
		label: '고전',
		color: '#f2f2f2',
		radius: 80,
		id: 'id11',
		link: '../../../../../resources/ict/img/type_b/keyword/paper.jpg',
		blend: 'invert(35%) sepia(9%) saturate(2730%) hue-rotate(200deg) brightness(90%) contrast(84%)',
		btn: 'btn5()',
	},
	{
		label: '예술',
		color: '#333333',
		radius: 70,
		id: 'id12',
		link: '../../../../../resources/ict/img/type_b/keyword/paper.jpg',
		blend: 'invert(82%)sepia(42%) saturate(4528%) hue-rotate(300deg) brightness(100%) contrast(109%)',
		btn: 'btn5()',
	},
	{
		label: '사회과학',
		color: '#333333',
		radius: 80,
		id: 'id13',
		link: '../../../../../resources/ict/img/type_b/keyword/paper.jpg',
		blend: 'invert(64%) sepia(72%) saturate(2118%) hue-rotate(141deg) brightness(96%) contrast(101%)',
		btn: 'btn5()',
	},
	{
		label: 'IT',
		color: '#f2f2f2',
		radius: 70,
		id: 'id14',
		link: '../../../../../resources/ict/img/type_b/keyword/paper.jpg',
		blend: 'invert(41%) sepia(35%) saturate(1481%) hue-rotate(200deg) brightness(101%) contrast(89%)',
		btn: 'btn5()',
	},
];

const nodes = data.map(d => ({
	...d,
	radius: d.radius * 1.5,
}));
function adjustSVGSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 3840) {
        svg.attr('width', 3180).attr('height', 350)
            .style('margin', 'auto')
            .style('display', 'block');
        simulation.force('center', d3.forceCenter(2600, 400)) // 중앙 정렬
            .force('x', d3.forceX().strength(0.5).x((d, i) => i * 280 + d.radius)) // 좌우로 퍼짐
            .force('y', d3.forceY(300).strength(0.1).y(d => Math.max(d.radius, Math.min(100 - d.radius, Math.random() *90))))
            .force('collision', d3.forceCollide().radius(d => d.radius * 1.7 + 20)); // 충돌 방지
        node.selectAll('circle').attr('r', d => d.radius * 1.7);
        node.selectAll('text').style('font-size', '70px');
    } 
    else if (screenWidth >= 2160) {
        svg.attr('width', 1740).attr('height', 1460)
            .style('margin', 'auto')
            .style('display', 'block');
        simulation.force('center', d3.forceCenter(1600, 1200)) // 화면 중앙에 고정
            .force('x', d3.forceX().strength(0.5).x(d => Math.random() * (1740 - d.radius * 2) + d.radius)) // 좌우로 퍼짐
            .force('y', d3.forceY().strength(0.5).y(d => Math.max(d.radius, Math.min(1400 - d.radius, Math.random() * 1400)))) // 세로로 퍼짐, 영역 밖으로 나가지 않게 제한
            .force('collision', d3.forceCollide().radius(d => d.radius * 2.5 + 20)); // 충돌 방지
        node.selectAll('circle').attr('r', d => d.radius * 2.5); // 원 크기 크게 조정
        node.selectAll('text').style('font-size', '100px'); // 글씨 크기 조정
    } 
    else if (screenWidth >= 1920) {
        svg.attr('width', 1600).attr('height', 200)
            .style('margin', 'auto')
            .style('display', 'block');
        simulation.force('center', d3.forceCenter(2200, -100)) // 중앙 정렬
            .force('x', d3.forceX().strength(0.5).x((d, i) => i * 200 + d.radius)) // 좌우로 퍼짐
            .force('y', d3.forceY(300).strength(0.1).y(d => Math.max(d.radius, Math.min(300 - d.radius, Math.random() * 200))))
            .force('collision', d3.forceCollide().radius(d => d.radius * 1.3 + 15)); // 충돌 방지
        node.selectAll('circle').attr('r', d => d.radius * 1.3);
        node.selectAll('text').style('font-size', '52px'); // 글씨 크기 조정
    } 
    else if (screenWidth <= 1080) {
        svg.attr('width', 870).attr('height', 730)
            .style('margin', 'auto')
            .style('display', 'block');
        simulation.force('center', d3.forceCenter(1600, 1500)) // 화면 중앙에 고정
            .force('x', d3.forceX().strength(0.5).x(d => Math.random() * (870 - d.radius * 2) + d.radius)) // 좌우로 퍼짐
            .force('y', d3.forceY().strength(0.5).y(d => Math.max(d.radius, Math.min(730 - d.radius, Math.random() * 730)))) // 세로로 퍼짐, 영역 밖으로 나가지 않게 제한
            .force('collision', d3.forceCollide().radius(d => d.radius * 2.5 + 15)); // 충돌 방지
        node.selectAll('circle').attr('r', d => d.radius * 2.5); // 원 크기 크게 조정
        node.selectAll('text').style('font-size', '100px'); // 글씨 크기 조정
    }

    // 시뮬레이션 재시작
    simulation.alpha(1).restart();
}

const svg = d3.select('div#container').append('svg').attr('preserveAspectRatio', 'xMinYMin meet').attr('viewBox', [0, 0, 3180, 600]);

window.addEventListener('resize', adjustSVGSize);
window.addEventListener('load', adjustSVGSize);

svg.selectAll('g').each(function(d) {
    d3.select(this).selectAll('circle').classed('active', false);
});

function handleClick(event, d) {
    event.stopPropagation();
    event.preventDefault();

    const circle = d3.select(this).selectAll('circle');
    const keywordContainer = d3.select('.selected_word');
    const selectedKeyword = keywordContainer.selectAll('.word_kind').filter(function() {
        return d3.select(this).text() === d.label;
    });

    const selectedCount = $('.selected_word .selected_01').length;

    if (circle.classed('active')) {
        circle.classed('active', false); 
        selectedKeyword.remove(); 
    } else {
        if (selectedCount >= 3) {
            alert('검색 키워드는 최대 3개까지만 선택할 수 있습니다.');
            return;
        }

     
        circle.classed('active', true); 
        if (selectedKeyword.empty()) {
            keywordContainer.append('div')
                .attr('class', 'selected_01')
                .html('<div class="word_kind">' + d.label + '</div><a href="#this" class="del-keyword"><img class="close00" src="../../../../../resources/ict/img/type_b/keyword/close2.svg" /></a>');
        }
    }

    $(document).off('click', 'a.del-keyword').on('click', 'a.del-keyword', function () {
        const keywordText = $(this).siblings('.word_kind').text();
        
        $(this).closest('.selected_01').remove(); 

        svg.selectAll('g').each(function(data) {
            if (data.label === keywordText) {
                d3.select(this).selectAll('circle').classed('active', false); 
            }
        });
    });
}

$(document).off('click', 'circle.active').on('click', 'circle.active', function () {
    const Ktext = $(this).siblings('text').text(); 

    $('.selected_word .selected_01').filter(function() {
        return $(this).find('.word_kind').text() === Ktext;
    }).remove(); 

    svg.selectAll('g').each(function(data) {
        if (data.label === Ktext) {
            d3.select(this).selectAll('circle').classed('active', false); 
        }
    });
});

window.addEventListener('load', function() {
    svg.selectAll('g').each(function(d) {
        d3.select(this).selectAll('circle').classed('active', false);
    });
});

const node = svg
	.selectAll('g')
	.data(nodes)
	.enter()
	.append('g')
	.on('click', handleClick)
	.call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended))
	.attr('class', d => d.id)
	.attr('data-txt', d => d.label);

const defs = node
	.append('defs')
	.append('pattern')
	.attr('id', d => d.id)
	.attr('height', '1')
	.attr('width', '1')
	.attr('patternContentUnits', 'objectBoundingBox')
	.append('image')
	.attr('x', 0)
	.attr('y', 0)
	.attr('height', 1)
	.attr('width', 1)
	.attr('preserveAspectRatio', 'xMinYMin slice')
	.attr('xlink:href', d => d.link);

const circle = node
	.append('circle')
	.attr('r', d => d.radius)
	.attr('fill', d => 'url(#' + d.id + ')')
	.attr('filter', d => d.blend)
	.style('cursor', 'pointer')
	.style('transition-duration', '1s');

const text = node
	.append('text')
	.attr('text-anchor', 'middle')
	.attr('dy', '0.3em')
	.style('pointer-events', 'none')
	.style('user-select', 'none')
	.style('fill', '#fff')
	.text(d => d.label)
	.attr('class', 'name');

const ticked = () => {
	node.attr('transform', d => `translate(${d.x}, ${d.y})`);
};

// 시뮬레이션 설정
const simulation = d3
	.forceSimulation(nodes)
	.force('charge', d3.forceManyBody().strength(-50)) // 더 넓게 퍼지도록 charge 강도 증가
	.force('center', d3.forceCenter(1560, 300)) // 화면 중앙으로 배치
	.force(
		'x',
		d3
			.forceX()
			.strength(0.3)
			.x((d, i) => 150 * i)
	) // X축으로 퍼지게 조정
	.force('y', d3.forceY(300).strength(0.1)) // Y축은 고정
	.force(
		'collision',
		d3.forceCollide().radius(d => d.radius + 10)
	) // 충돌 방지
	.on('tick', ticked);

// 드래그 기능
function dragstarted(event, d) {
	if (!event.active) simulation.alphaTarget(0.4).restart();
	d.fx = d.x;
	d.fy = d.y;
}

function dragged(event, d) {
	d.fx = event.x;
	d.fy = event.y;
}

function dragended(event, d) {
	if (!event.active) simulation.alphaTarget(0);
	d.fx = null;
	d.fy = null;
}

document.addEventListener('DOMContentLoaded', function() {
    const svgContainer = document.querySelector('div.svg-container');
    const personWrap = document.querySelector('.person_wrap'); 

    if (svgContainer && personWrap) {
        personWrap.style.display = 'none';  
    }
});


