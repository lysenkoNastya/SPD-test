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

var $wrapper = $('.section-tabs-wrapper'),
    $allTabs = $wrapper.find('.tabs-content-list-item'),
    $tabMenu = $wrapper.find('.tabs-menu-item');

$allTabs.not(':first-of-type').hide();
$tabMenu.filter(':first-of-type').find(':first').width('100%')

$tabMenu.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
});

$allTabs.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
});

$tabMenu.on('click', function() {
    var dataTab = $(this).data('tab'),
        $getWrapper = $(this).closest($wrapper);

    $getWrapper.find($tabMenu).removeClass('active');
    $(this).addClass('active');

    $getWrapper.find($allTabs).hide();
    $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
});

