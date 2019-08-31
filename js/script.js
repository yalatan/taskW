(function($) {
    $(document).ready(function() {
        console.log($(window).width());
        /* меню */
        $('.menu_open').on('click', function() {
            $('.menu_close').show(800, function() {});
            $('.menu_open').hide(800, function() {});

            $('.open_menu_block').show();
        });
        $('.menu_close').on('click', function() {

            $('.menu_open').show(1000, function() {});
            $('.menu_close').hide(1000, function() {});

            $('.open_menu_block').animate({
                opacity: 0
            }, 1000, function() {
                $('.open_menu_block').hide();
            });
            $('.open_menu_block').animate({
                opacity: 1
            }, 500);

        });


    })
})(jQuery);