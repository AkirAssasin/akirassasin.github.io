$(document).ready(function () {

    // Carousel initialization
    $('.jcarousel').jcarousel({
        animation: {
            duration: 400,
            easing: 'linear',
            complete: function () {}
        },
        wrap: 'last'
    });

    // Autoscroll
    $('.jcarousel').jcarouselAutoscroll({
        autostart: false,
        interval: 1000
    });

    // Hover stop
    $('.jcarousel').jcarousel().jcarouselAutoscroll().hover(function () {
        $(this).jcarouselAutoscroll('stop');
    }, function () {
        $(this).jcarouselAutoscroll('stop');
    });

    // Prev control initialization
    $('.jcarousel-control-prev').on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
    }).on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
    }).jcarouselControl({
        target: '-=1'
    });

    // Next control initialization
    $('.jcarousel-control-next').on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
    }).on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
    }).jcarouselControl({
        target: '+=1'
    });

    // Pagination initialization
    $('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function () {
        $(this).addClass('active');
    }).on('jcarouselpagination:inactive', 'a', function () {
        $(this).removeClass('active');
    }).jcarouselPagination({});

});