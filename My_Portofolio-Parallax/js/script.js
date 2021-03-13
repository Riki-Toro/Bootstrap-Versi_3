// event pada saat link nav bar kanan di klik
$('.page-scroll').on('click', function (e) {
	
	// ambil isi href
	var tujuan = $(this).attr('href');

	// tangkap elemen
	var elemenTujuan = $(tujuan);

	// console.log(elemenHref.offset().top);

	// console.log($('body').scrollTop());
	// pindahkan scroll
	// $('body').scrollTop(elemenHref.offset().top);

	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 55
	}, 1000, 'swing');

	e.preventDefault();



});



// efek parallax

// about
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});



$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// pada jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});
	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});



	// landing element pada portofolio >> masih di dalam karena butuh scroll nya
	if ( wScroll > $('.portofolio').offset().top - 250 ) {

		// $('.portofolio .thumbnail').addClass('muncul');

		$('.portofolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portofolio .thumbnail').eq(i).addClass('muncul');
			}, 500 * (i + 1));
		});

		
	}

});



