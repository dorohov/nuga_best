(function($) {
    "use strict"
    $(function() {

        $('main').on('click', '.__dropdown-title', function() {
            $(this).parents('.__dropdown').toggleClass('is--open')
        })

        $(document).on('click', function(e) {
            var targets = $(e.target).closest('.__dropdown')
            if(targets.length <= 0) $('.__dropdown').removeClass('is--open')
        })

    })
})(jQuery);