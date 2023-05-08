$(document).ready(function () {
    $(window).scroll(function () {
        var startPx = $(window).scrollTop();
        startPx >= 50 ? $(".normal-nav").addClass("sticky-nav") : $(".normal-nav").removeClass("sticky-nav");
    });
    // SCROLL TO DIV
    $('.nav-item a, .mouse-down a').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1700, 'easeInOutQuint');
        event.preventDefault();
    });

    // SCROLLSPY
    $(".navbar-nav").scrollspy({
        offset: 90
    });
    // COUNTER
    var initial = 0;

    $(window).scroll(function () {
        var msTop = $('#accomplished-counter').offset().top - window.innerHeight;
        if (initial == 0 && $(window).scrollTop() > msTop) {
            $('.accomplished-counter-value').each(function () {
                var $this = $(this),
                    countData = $this.attr('counter');
                $({
                    countNo: $this.text()
                }).animate({
                    countNo: countData
                },

                    {
                        easing: 'linear',
                        duration: 2300,
                        step: function () {
                            $this.text(Math.floor(this.countNo));
                        },
                        complete: function () {
                            $this.text(this.countNo);
                        }

                    });
            });
            initial = 1;
        }
    });
});