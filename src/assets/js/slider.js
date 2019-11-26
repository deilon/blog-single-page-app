$(document).ready(function() {
    var slider = $(".showcase-slider").lightSlider({
        item: 2.5,
        autoWidth: false,
        pager: false,
        responsive: false,
        slideMargin: 60,
        enableTouch: true,
        enableDrag: false,
        controls: false,
        responsive: [],

        freeMove:true,
        swipeThreshold: 40
    });

    $('#nextSlide').click(function( evt ) {
        evt.preventDefault();
        slider.goToNextSlide();
    });
    $('#prevSlide').click(function( evt ) {
        evt.preventDefault();
        slider.goToPrevSlide();
    });
});