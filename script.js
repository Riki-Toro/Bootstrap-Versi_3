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
