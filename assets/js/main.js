jQuery(function(){
	jQuery('#section-home-slider .owl-carousel').owlCarousel({
	    items: 1,
	    autoplay: true,
	    dots: false,
	    loop: true,
	    animateIn: "fadeIn"
	});
})

if (typeof ymaps != "undefined"){
	ymaps.ready(function(){
		var map = new ymaps.Map("section-map", {
            center: [
            	55.431713, 
            	37.561320
			],
            zoom: 16,
            controls: ['zoomControl']
        });
        var placemark = new ymaps.Placemark([
        	55.431713,
        	37.561320
    	], {
    		"hintContent": "Салон обуви Respect",
    		"balloonContentHeader": "Салон обуви Respect",
    		"balloonContentBody": "г.Подольск, Революционный пр-кт, 13, с 13:00",
    		"balloonContentFooter": "84952121233"
    	});
    	map.geoObjects.add(placemark);
	});
}