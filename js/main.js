$(document).ready(function(){
    $('.autoplay').slick({
        dots: false,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});

window.FontAwesomeConfig = {
    searchPseudoElements: true
};


