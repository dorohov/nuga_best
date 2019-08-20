(function($) {
    "use strict"
    $(function() {

        

    })
})(jQuery);
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
(function($) {
    "use strict"
    $(function() {

        function setPaddings() {

            var classes = {
                paddingLeft: '.is--c-pl',
                paddingRight: '.is--c-pr',
                height100Per: '.is--h100'
            }

            var padding = document.getElementsByClassName('navbar__inner')[0].getBoundingClientRect()
            var height = $('.navbar').innerHeight() + $('.footer').innerHeight()

            $(classes.paddingLeft).css({
                paddingLeft: padding.left + 30
            })
            $(classes.paddingRight).css({
                paddingRight: padding.left + 30
            })
            $(classes.height100Per).css({
                minHeight: 'calc(100vh - ' + height + 'px)'
            })
            $('main').css({
                minHeight: 'calc(100vh - ' + height + 'px)'
            })

        }

        setPaddings()

        $(window).resize(function() {
            setPaddings()
        })

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYnMuanMiLCJtYWluLmpzIiwic2l6aW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgb3dsQ2Fyb3VzZWxPbmUgPSAkKCcubDFfX2Jsb2NrLXN4X19jYXJvdXNlbF9fc2xpZGVzX19pdGVtcycpLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgaXRlbXM6IDEsXHJcbiAgICAgICAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OnRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcclxuICAgICAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOnRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubDFfX2Jsb2NrLXN4X19jYXJvdXNlbF9fY29udHJvbHMgYnV0dG9uLmlzLS1wcmV2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG93bENhcm91c2VsT25lLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubDFfX2Jsb2NrLXN4X19jYXJvdXNlbF9fY29udHJvbHMgYnV0dG9uLmlzLS1uZXh0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG93bENhcm91c2VsT25lLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBvd2xDYXJvdXNlbE9uZS5vbignY2hhbmdlZC5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHNldERhdGEoZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBvd2xDYXJvdXNlbE9uZS5vbigndHJhbnNsYXRlZC5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHNldERhdGEoZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXREYXRhKGUpIHtcclxuICAgICAgICAgICAgdmFyIGNvdW50VG90YWwgPSBlLml0ZW0uY291bnRcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTbGlkZSA9ICQoJy5sMV9fYmxvY2stc3hfX2Nhcm91c2VsIC5vd2wtaXRlbS5hY3RpdmUgLml0ZW0nKS5hdHRyKCdkYXRhLWlkJylcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUZXh0ID0gJCgnLmwxX19ibG9jay1zeF9fY2Fyb3VzZWwgLm93bC1pdGVtLmFjdGl2ZSAuaXRlbScpLmF0dHIoJ2RhdGEtdGl0bGUnKVxyXG5cclxuICAgICAgICAgICAgaWYoY291bnRUb3RhbCA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudFRvdGFsID0gJzAnICsgY291bnRUb3RhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRTbGlkZSA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAnMCcgKyBjdXJyZW50U2xpZGVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCgnLmwxX19ibG9jay1zeF9fY2Fyb3VzZWxfX2NvbnRyb2xzX19saW5lIHNwYW4uaXMtLXRvdGFsJykuaHRtbChjb3VudFRvdGFsKVxyXG4gICAgICAgICAgICAkKCcubDFfX2Jsb2NrLXN4X19jYXJvdXNlbF9fY29udHJvbHNfX2xpbmUgc3Bhbi5pcy0tY3VycmVudCcpLmh0bWwoY3VycmVudFNsaWRlKVxyXG4gICAgICAgICAgICAkKCcubDFfX2Jsb2NrLXN4X19jYXJvdXNlbF9fc2xpZGVzX190ZXh0JykuaHRtbChjdXJyZW50VGV4dClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5sMV9fYmxvY2stbmlfX2Nhcm91c2VsX19saXN0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJy5sMV9fYmxvY2stbmlfX2Nhcm91c2VsX19jb250cm9scyBidXR0b24uaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcubDFfX2Jsb2NrLW5pX19jYXJvdXNlbF9fY29udHJvbHMgYnV0dG9uLmlzLS1uZXh0JyxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5NTAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHZhciB0ZENhcm91c2VsID0gJChcIi5sMV9fYmxvY2stdGVfX2Nhcm91c2VsXCIpLmZsaXBzdGVyKHtcclxuICAgICAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcubDFfX2Jsb2NrLXRlX19jYXJvdXNlbF9fY29udHJvbHMgYnV0dG9uLmlzLS1wcmV2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRkQ2Fyb3VzZWwuZmxpcHN0ZXIoJ3ByZXYnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnLmwxX19ibG9jay10ZV9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tbmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0ZENhcm91c2VsLmZsaXBzdGVyKCduZXh0JylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubDFfX2Jsb2NrLXRlX19tb2JpbGVfX2xpc3QnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJy5sMV9fYmxvY2stdGVfX21vYmlsZV9fY29udHJvbHMgYnV0dG9uLmlzLS1wcmV2JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnLmwxX19ibG9jay10ZV9fbW9iaWxlX19jb250cm9scyBidXR0b24uaXMtLW5leHQnLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0ZU51bWJlcnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBudW1zSXRlbXMgPSAkKCcubDFfX2Jsb2NrLXRoX19ibG9ja19fdGV4dF9fbnVtJylcclxuICAgICAgICAgICAgbnVtc0l0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc051bWJlciA9ICQodGhpcylcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzTnVtYmVyRGF0YU51bSA9ICQodGhpcykuZGF0YSgnbnVtJylcclxuXHJcbiAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnZpc2libGUodHJ1ZSkgJiYgISQodGhpcykuaGFzQ2xhc3MoJ2lzLS1maW5pc2gnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNOdW1iZXIuYW5pbWF0ZU51bWJlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcjogdGhpc051bWJlckRhdGFOdW1cclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ3N3aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzTnVtYmVyLmFkZENsYXNzKCdpcy0tZmluaXNoJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uQmxvY2tzKCkge1xyXG4gICAgICAgICAgICB2YXIgYmxvY2tJdGVtcyA9ICQoJy5pcy0tYW5pbWF0ZS1ibG9jaycpXHJcbiAgICAgICAgICAgIGJsb2NrSXRlbXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzQmxvY2sgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0FuaW0gPSAkKHRoaXMpLmRhdGEoJ2FuaW1uYW1lJylcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzRGVsYXkgPSAkKHRoaXMpLmRhdGEoJ2FuaW1kZWxheScpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS52aXNpYmxlKHRydWUpICYmICEkKHRoaXMpLmhhc0NsYXNzKCdpcy0tZmluaXNoJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzQmxvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhbmltYXRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyh0aGlzQW5pbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5XCI6IHRoaXNEZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLW1vei1hbmltYXRpb24tZGVsYXlcIjogdGhpc0RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItby1hbmltYXRpb24tZGVsYXlcIjogdGhpc0RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmltYXRpb24tZGVsYXlcIjogdGhpc0RlbGF5ICsgJ3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFydEFuaW1hdGVOdW1iZXJzKClcclxuICAgICAgICBzdGFydEFuaW1hdGlvbkJsb2NrcygpXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc3RhcnRBbmltYXRlTnVtYmVycygpXHJcbiAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uQmxvY2tzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubDFfX2Jsb2NrLW9uX19zY3JvbGwgc3ZnJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICdzY3JvbGxUb3AnOiAgICQoJy5sMV9fYmxvY2stdHcnKS5vZmZzZXQoKS50b3BcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmFuY2hvcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuYXR0cignaHJlZicpXHJcblxyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAnc2Nyb2xsVG9wJzogICAkKHRhcmdldCkub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5tb2RhbF9idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuYXR0cignaHJlZicpXHJcblxyXG4gICAgICAgICAgICAkKHRhcmdldCkubW9kYWwoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFBhZGRpbmdzKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJy5pcy0tYy1wbCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcuaXMtLWMtcHInLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0MTAwUGVyOiAnLmlzLS1oMTAwJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFkZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmJhcl9faW5uZXInKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkgKyAkKCcuZm9vdGVyJykuaW5uZXJIZWlnaHQoKVxyXG5cclxuICAgICAgICAgICAgJChjbGFzc2VzLnBhZGRpbmdMZWZ0KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5wYWRkaW5nUmlnaHQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5oZWlnaHQxMDBQZXIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGhlaWdodCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtICcgKyBoZWlnaHQgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFBhZGRpbmdzKClcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0UGFkZGluZ3MoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
