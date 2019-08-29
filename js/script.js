(function($) {
    $(document).ready(function() {

        /* меню */
        $('.menu_open').on('click', function() {
            $('.menu_close').show(800, function() {});
            $('.menu_open').hide(800, function() {});
            $('.open_menu_block').show(0, function() {
                $('.open_menu_block').animate({
                    opacity: 1,
                    top: 0
                }, 600, function() {
                    $(' .section_open_menu_block_text').animate({
                        marginTop: 0,
                        opacity: 1
                    }, 500);

                });
            });



        });
        $('.menu_close').on('click', function() {

            $('.menu_open').show(1000, function() {});
            $('.menu_close').hide(1000, function() {});

            $('.section_open_menu_block_text').animate({
                marginTop: 50,
                opacity: 0
            }, 500, function() {
                $('.open_menu_block').animate({
                    opacity: 0,
                    top: "50%"
                }, 800, function() {
                    $('.open_menu_block').hide();
                });
            });
        });





        $('.slider').on('click', function() {
            let ind = $(this).index();
            $('.item').eq(ind).css("animation-play-state", "paused");
            $('.item').each(function() {
                if ($(this).css("left") == 0) {
                    $(this).addClass("active")
                }
            });
            $('.slider').each(function() {
                $(this).removeClass("active");
            });
            $(this).addClass("active");

            if ($(this).index() == $('.item.active').index()) {

            } else if ($(this).index() == 1) {
                $('.item.active').css("z-index", "-2");
                $('.item').eq(ind).css("z-index", "-1");


                $('.item').eq(ind).css("animation", " .8s linear infinite radius");
                $('.item').eq(ind).css("animation-play-state", "running");

                $('.item').eq(ind).animate({
                    left: 0
                }, {
                    duration: 800,
                    easing: "linear",
                    complete: function() {
                        $('.item.active').css("left", "100%");
                        $('.item.active').removeClass("active");

                        $('.item').eq(ind).css("animation-play-state", "paused");
                        $('.item').eq(ind).removeAttr("animation");
                        $('.item').eq(ind).addClass("active");
                    }

                });

            } else if ($(this).index() == 0) {

                $('.item.active').css("z-index", "-2");
                $('.item').eq(ind).css("z-index", "-1");


                $('.item').eq(ind).css("animation", " .8s linear infinite radius");
                $('.item').eq(ind).css("animation-play-state", "running");

                $('.item').eq(ind).animate({
                    left: 0
                }, {
                    duration: 800,
                    easing: "linear",
                    complete: function() {
                        $('.item.active').css("left", "100%");
                        $('.item.active').removeClass("active");

                        $('.item').eq(ind).css("animation-play-state", "paused");
                        $('.item').eq(ind).removeAttr("animation");
                        $('.item').eq(ind).addClass("active");
                    }

                });
            }


        });






    })
})(jQuery);