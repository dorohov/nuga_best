(function($) {
    "use strict"
    $(function() {

        var owlCarouselOne = $('.l1__block-sx__carousel__slides__items').owlCarousel({
            items: 1,
            autoWidth: true,
            dots: false,
            loop: true,
            autoplay:true,
            autoplayTimeout: 5000,
            autoplayHoverPause:true
        })

        $('.l1__block-sx__carousel__controls button.is--prev').on('click', function() {
            owlCarouselOne.trigger('prev.owl.carousel')
        })

        $('.l1__block-sx__carousel__controls button.is--next').on('click', function() {
            owlCarouselOne.trigger('next.owl.carousel')
        })

        owlCarouselOne.on('changed.owl.carousel', function(e) {
            setData(e)
        })

        owlCarouselOne.on('translated.owl.carousel', function(e) {
            setData(e)
        })

        function setData(e) {
            var countTotal = e.item.count
            var currentSlide = $('.l1__block-sx__carousel .owl-item.active .item').attr('data-id')
            var currentText = $('.l1__block-sx__carousel .owl-item.active .item').attr('data-title')

            if(countTotal < 10) {
                countTotal = '0' + countTotal
            }
            if(currentSlide < 10) {
                currentSlide = '0' + currentSlide
            }

            $('.l1__block-sx__carousel__controls__line span.is--total').html(countTotal)
            $('.l1__block-sx__carousel__controls__line span.is--current').html(currentSlide)
            $('.l1__block-sx__carousel__slides__text').html(currentText)
        }

        $('.l1__block-ni__carousel__list').slick({
            slidesToShow: 5,
            prevArrow: '.l1__block-ni__carousel__controls button.is--prev',
            nextArrow: '.l1__block-ni__carousel__controls button.is--next',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        autoplay: true
                    }
                }
            ]
        })

        var tdCarousel = $(".l1__block-te__carousel").flipster({
            scrollwheel: false,
            loop: true,
        });

        $('.l1__block-te__carousel__controls button.is--prev').on('click', function() {
            tdCarousel.flipster('prev')
        })
        $('.l1__block-te__carousel__controls button.is--next').on('click', function() {
            tdCarousel.flipster('next')
        })

        $('.l1__block-te__mobile__list').slick({
            prevArrow: '.l1__block-te__mobile__controls button.is--prev',
            nextArrow: '.l1__block-te__mobile__controls button.is--next',
            autoplay: true
        })

        function startAnimateNumbers() {
            var numsItems = $('.l1__block-th__block__text__num')
            numsItems.each(function() {
                var thisNumber = $(this)
                var thisNumberDataNum = $(this).data('num')

                if($(this).visible(true) && !$(this).hasClass('is--finish')) {
                    thisNumber.animateNumber({
                        number: thisNumberDataNum
                    }, {
                        easing: 'swing',
                        duration: 2000
                    });
                    thisNumber.addClass('is--finish')
                }
            })
        }

        function startAnimationBlocks() {
            var blockItems = $('.is--animate-block')
            blockItems.each(function() {
                var thisBlock = $(this)
                var thisAnim = $(this).data('animname')
                var thisDelay = $(this).data('animdelay')

                if($(this).visible(true) && !$(this).hasClass('is--finish')) {
                    thisBlock
                        .addClass('animated')
                        .addClass(thisAnim)
                        .css({
                            "-webkit-animation-delay": thisDelay + 's',
                            "-moz-animation-delay": thisDelay + 's',
                            "-o-animation-delay": thisDelay + 's',
                            "animation-delay": thisDelay + 's'
                        })
                }
            })
        }

        startAnimateNumbers()
        startAnimationBlocks()

        $(document).scroll(function() {
            startAnimateNumbers()
            startAnimationBlocks()
        })

        $('.l1__block-on__scroll svg').on('click', function() {
            $('html, body').animate({
                'scrollTop':   $('.l1__block-tw').offset().top
            }, 1000);
        })

        $('.anchor').on('click', function(e) {

            e.preventDefault()

            var target = $(this).attr('href')

            $('html, body').animate({
                'scrollTop':   $(target).offset().top
            }, 1000);
        })

        $('.modal_btn').on('click', function(e) {
            e.preventDefault()

            var target = $(this).attr('href')

            $(target).modal()
        })

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIG93bENhcm91c2VsT25lID0gJCgnLmwxX19ibG9jay1zeF9fY2Fyb3VzZWxfX3NsaWRlc19faXRlbXMnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICBhdXRvV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTp0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTp0cnVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmwxX19ibG9jay1zeF9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tcHJldicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBvd2xDYXJvdXNlbE9uZS50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmwxX19ibG9jay1zeF9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tbmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBvd2xDYXJvdXNlbE9uZS50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgb3dsQ2Fyb3VzZWxPbmUub24oJ2NoYW5nZWQub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBzZXREYXRhKGUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgb3dsQ2Fyb3VzZWxPbmUub24oJ3RyYW5zbGF0ZWQub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBzZXREYXRhKGUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0RGF0YShlKSB7XHJcbiAgICAgICAgICAgIHZhciBjb3VudFRvdGFsID0gZS5pdGVtLmNvdW50XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2xpZGUgPSAkKCcubDFfX2Jsb2NrLXN4X19jYXJvdXNlbCAub3dsLWl0ZW0uYWN0aXZlIC5pdGVtJykuYXR0cignZGF0YS1pZCcpXHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50VGV4dCA9ICQoJy5sMV9fYmxvY2stc3hfX2Nhcm91c2VsIC5vd2wtaXRlbS5hY3RpdmUgLml0ZW0nKS5hdHRyKCdkYXRhLXRpdGxlJylcclxuXHJcbiAgICAgICAgICAgIGlmKGNvdW50VG90YWwgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgY291bnRUb3RhbCA9ICcwJyArIGNvdW50VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjdXJyZW50U2xpZGUgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID0gJzAnICsgY3VycmVudFNsaWRlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoJy5sMV9fYmxvY2stc3hfX2Nhcm91c2VsX19jb250cm9sc19fbGluZSBzcGFuLmlzLS10b3RhbCcpLmh0bWwoY291bnRUb3RhbClcclxuICAgICAgICAgICAgJCgnLmwxX19ibG9jay1zeF9fY2Fyb3VzZWxfX2NvbnRyb2xzX19saW5lIHNwYW4uaXMtLWN1cnJlbnQnKS5odG1sKGN1cnJlbnRTbGlkZSlcclxuICAgICAgICAgICAgJCgnLmwxX19ibG9jay1zeF9fY2Fyb3VzZWxfX3NsaWRlc19fdGV4dCcpLmh0bWwoY3VycmVudFRleHQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcubDFfX2Jsb2NrLW5pX19jYXJvdXNlbF9fbGlzdCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcubDFfX2Jsb2NrLW5pX19jYXJvdXNlbF9fY29udHJvbHMgYnV0dG9uLmlzLS1wcmV2JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnLmwxX19ibG9jay1uaV9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tbmV4dCcsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTUwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB2YXIgdGRDYXJvdXNlbCA9ICQoXCIubDFfX2Jsb2NrLXRlX19jYXJvdXNlbFwiKS5mbGlwc3Rlcih7XHJcbiAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmwxX19ibG9jay10ZV9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tcHJldicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0ZENhcm91c2VsLmZsaXBzdGVyKCdwcmV2JylcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJy5sMV9fYmxvY2stdGVfX2Nhcm91c2VsX19jb250cm9scyBidXR0b24uaXMtLW5leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGRDYXJvdXNlbC5mbGlwc3RlcignbmV4dCcpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmwxX19ibG9jay10ZV9fbW9iaWxlX19saXN0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcubDFfX2Jsb2NrLXRlX19tb2JpbGVfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tcHJldicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJy5sMV9fYmxvY2stdGVfX21vYmlsZV9fY29udHJvbHMgYnV0dG9uLmlzLS1uZXh0JyxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGVOdW1iZXJzKCkge1xyXG4gICAgICAgICAgICB2YXIgbnVtc0l0ZW1zID0gJCgnLmwxX19ibG9jay10aF9fYmxvY2tfX3RleHRfX251bScpXHJcbiAgICAgICAgICAgIG51bXNJdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNOdW1iZXIgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc051bWJlckRhdGFOdW0gPSAkKHRoaXMpLmRhdGEoJ251bScpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS52aXNpYmxlKHRydWUpICYmICEkKHRoaXMpLmhhc0NsYXNzKCdpcy0tZmluaXNoJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzTnVtYmVyLmFuaW1hdGVOdW1iZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI6IHRoaXNOdW1iZXJEYXRhTnVtXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdzd2luZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc051bWJlci5hZGRDbGFzcygnaXMtLWZpbmlzaCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbkJsb2NrcygpIHtcclxuICAgICAgICAgICAgdmFyIGJsb2NrSXRlbXMgPSAkKCcuaXMtLWFuaW1hdGUtYmxvY2snKVxyXG4gICAgICAgICAgICBibG9ja0l0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0Jsb2NrID0gJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNBbmltID0gJCh0aGlzKS5kYXRhKCdhbmltbmFtZScpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0RlbGF5ID0gJCh0aGlzKS5kYXRhKCdhbmltZGVsYXknKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykudmlzaWJsZSh0cnVlKSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnaXMtLWZpbmlzaCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc0Jsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYW5pbWF0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3ModGhpc0FuaW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItd2Via2l0LWFuaW1hdGlvbi1kZWxheVwiOiB0aGlzRGVsYXkgKyAncycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1tb3otYW5pbWF0aW9uLWRlbGF5XCI6IHRoaXNEZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLW8tYW5pbWF0aW9uLWRlbGF5XCI6IHRoaXNEZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5pbWF0aW9uLWRlbGF5XCI6IHRoaXNEZWxheSArICdzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhcnRBbmltYXRlTnVtYmVycygpXHJcbiAgICAgICAgc3RhcnRBbmltYXRpb25CbG9ja3MoKVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0QW5pbWF0ZU51bWJlcnMoKVxyXG4gICAgICAgICAgICBzdGFydEFuaW1hdGlvbkJsb2NrcygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmwxX19ibG9jay1vbl9fc2Nyb2xsIHN2ZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAnc2Nyb2xsVG9wJzogICAkKCcubDFfX2Jsb2NrLXR3Jykub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5hbmNob3InKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxyXG5cclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgJ3Njcm9sbFRvcCc6ICAgJCh0YXJnZXQpLm9mZnNldCgpLnRvcFxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubW9kYWxfYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxyXG5cclxuICAgICAgICAgICAgJCh0YXJnZXQpLm1vZGFsKClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
