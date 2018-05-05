$(document).ready(function(){


	// ИЗОТОП

	var grid = $('.ba-portfolio-container').isotope({
	        itemSelector: '.portfolio-picss__item',
	        layoutMode: 'masonry',
	        masonry: {
	            horizontalOrder: true
	        }
	    });

	    $('.ba-portfolio__filter').click(function() {
	        var filterValue = $( this ).attr('data-filter');
	        grid.isotope({ filter: filterValue });
	        $(".ba-portfolio__filter").removeClass("ba-active-filter");
	        $(this).addClass("ba-active-filter");
	    });

	// ПЛАВНЫЙ СКРОЛЛ
		$('a').smoothScroll();
	// $('.ba-nav__item a').smoothScroll();
	// $('.ba-scroll').smoothScroll();
	// $('.ba-contact1').smoothScroll();


	// СЛАЙДЕР
    $('.ba-slider').slick({
	    dots: true,
	    infinite: true,
	    arrows: false,
	    autoplay: true,
	    autoplaySpeed: 2000
	});

    $('.ba-slider2').slick({
	    dots: true,
	    infinite: true,
	    arrows: false,
	    autoplay: true,
	    autoplaySpeed: 3000
	});
});

//   КАРТА
function initMap() {
	var infoWindowText = $('.ba-info-text').html();
	var beetRoot = {lat: 51.497575, lng: 31.287717};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 17,
	  center: beetRoot
	});
	var marker = new google.maps.Marker({
	  position: beetRoot,
	  map: map,
	  title: 'BeetRoot',
	  icon: "img/map-marker.png"
	});

	var infowindow = new google.maps.InfoWindow({
	    content: infoWindowText
	});

	infowindow.open(map, marker);

	marker.addListener('click', function() {
	    infowindow.open(map, marker);
	});
}
