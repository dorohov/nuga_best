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
(function($) {
    "use strict"
    $(function() {

        // $('#modal_job').modal();

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
            var numsItems = $('.l1__block-th__block__text__num, .jobs-block-th__block__top span.is--num')
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

        $('.anchor').on('click', function(e) {
            e.preventDefault();
            var aid = $(this).attr("href");
            $('html,body').animate({scrollTop: $(aid).offset().top - $('.navbar').innerHeight()},'slow');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLmpzIiwiam9icy5qcyIsIm1haW4uanMiLCJzaXppbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnbWFpbicpLm9uKCdjbGljaycsICcuX19kcm9wZG93bi10aXRsZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5fX2Ryb3Bkb3duJykudG9nZ2xlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLl9fZHJvcGRvd24nKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSAkKCcuX19kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLy8gJCgnI21vZGFsX2pvYicpLm1vZGFsKCk7XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBvd2xDYXJvdXNlbE9uZSA9ICQoJy5sMV9fYmxvY2stc3hfX2Nhcm91c2VsX19zbGlkZXNfX2l0ZW1zJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgYXV0b1dpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6dHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxyXG4gICAgICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6dHJ1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5sMV9fYmxvY2stc3hfX2Nhcm91c2VsX19jb250cm9scyBidXR0b24uaXMtLXByZXYnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgb3dsQ2Fyb3VzZWxPbmUudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5sMV9fYmxvY2stc3hfX2Nhcm91c2VsX19jb250cm9scyBidXR0b24uaXMtLW5leHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgb3dsQ2Fyb3VzZWxPbmUudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIG93bENhcm91c2VsT25lLm9uKCdjaGFuZ2VkLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgc2V0RGF0YShlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIG93bENhcm91c2VsT25lLm9uKCd0cmFuc2xhdGVkLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgc2V0RGF0YShlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldERhdGEoZSkge1xyXG4gICAgICAgICAgICB2YXIgY291bnRUb3RhbCA9IGUuaXRlbS5jb3VudFxyXG4gICAgICAgICAgICB2YXIgY3VycmVudFNsaWRlID0gJCgnLmwxX19ibG9jay1zeF9fY2Fyb3VzZWwgLm93bC1pdGVtLmFjdGl2ZSAuaXRlbScpLmF0dHIoJ2RhdGEtaWQnKVxyXG4gICAgICAgICAgICB2YXIgY3VycmVudFRleHQgPSAkKCcubDFfX2Jsb2NrLXN4X19jYXJvdXNlbCAub3dsLWl0ZW0uYWN0aXZlIC5pdGVtJykuYXR0cignZGF0YS10aXRsZScpXHJcblxyXG4gICAgICAgICAgICBpZihjb3VudFRvdGFsIDwgMTApIHtcclxuICAgICAgICAgICAgICAgIGNvdW50VG90YWwgPSAnMCcgKyBjb3VudFRvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY3VycmVudFNsaWRlIDwgMTApIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9ICcwJyArIGN1cnJlbnRTbGlkZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKCcubDFfX2Jsb2NrLXN4X19jYXJvdXNlbF9fY29udHJvbHNfX2xpbmUgc3Bhbi5pcy0tdG90YWwnKS5odG1sKGNvdW50VG90YWwpXHJcbiAgICAgICAgICAgICQoJy5sMV9fYmxvY2stc3hfX2Nhcm91c2VsX19jb250cm9sc19fbGluZSBzcGFuLmlzLS1jdXJyZW50JykuaHRtbChjdXJyZW50U2xpZGUpXHJcbiAgICAgICAgICAgICQoJy5sMV9fYmxvY2stc3hfX2Nhcm91c2VsX19zbGlkZXNfX3RleHQnKS5odG1sKGN1cnJlbnRUZXh0KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLmwxX19ibG9jay1uaV9fY2Fyb3VzZWxfX2xpc3QnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgcHJldkFycm93OiAnLmwxX19ibG9jay1uaV9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tcHJldicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJy5sMV9fYmxvY2stbmlfX2Nhcm91c2VsX19jb250cm9scyBidXR0b24uaXMtLW5leHQnLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk1MCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDUwMCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdmFyIHRkQ2Fyb3VzZWwgPSAkKFwiLmwxX19ibG9jay10ZV9fY2Fyb3VzZWxcIikuZmxpcHN0ZXIoe1xyXG4gICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5sMV9fYmxvY2stdGVfX2Nhcm91c2VsX19jb250cm9scyBidXR0b24uaXMtLXByZXYnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGRDYXJvdXNlbC5mbGlwc3RlcigncHJldicpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcubDFfX2Jsb2NrLXRlX19jYXJvdXNlbF9fY29udHJvbHMgYnV0dG9uLmlzLS1uZXh0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRkQ2Fyb3VzZWwuZmxpcHN0ZXIoJ25leHQnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5sMV9fYmxvY2stdGVfX21vYmlsZV9fbGlzdCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgcHJldkFycm93OiAnLmwxX19ibG9jay10ZV9fbW9iaWxlX19jb250cm9scyBidXR0b24uaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcubDFfX2Jsb2NrLXRlX19tb2JpbGVfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tbmV4dCcsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBbmltYXRlTnVtYmVycygpIHtcclxuICAgICAgICAgICAgdmFyIG51bXNJdGVtcyA9ICQoJy5sMV9fYmxvY2stdGhfX2Jsb2NrX190ZXh0X19udW0sIC5qb2JzLWJsb2NrLXRoX19ibG9ja19fdG9wIHNwYW4uaXMtLW51bScpXHJcbiAgICAgICAgICAgIG51bXNJdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNOdW1iZXIgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc051bWJlckRhdGFOdW0gPSAkKHRoaXMpLmRhdGEoJ251bScpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS52aXNpYmxlKHRydWUpICYmICEkKHRoaXMpLmhhc0NsYXNzKCdpcy0tZmluaXNoJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzTnVtYmVyLmFuaW1hdGVOdW1iZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI6IHRoaXNOdW1iZXJEYXRhTnVtXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdzd2luZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc051bWJlci5hZGRDbGFzcygnaXMtLWZpbmlzaCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbkJsb2NrcygpIHtcclxuICAgICAgICAgICAgdmFyIGJsb2NrSXRlbXMgPSAkKCcuaXMtLWFuaW1hdGUtYmxvY2snKVxyXG4gICAgICAgICAgICBibG9ja0l0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0Jsb2NrID0gJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNBbmltID0gJCh0aGlzKS5kYXRhKCdhbmltbmFtZScpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0RlbGF5ID0gJCh0aGlzKS5kYXRhKCdhbmltZGVsYXknKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykudmlzaWJsZSh0cnVlKSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnaXMtLWZpbmlzaCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc0Jsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYW5pbWF0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3ModGhpc0FuaW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItd2Via2l0LWFuaW1hdGlvbi1kZWxheVwiOiB0aGlzRGVsYXkgKyAncycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1tb3otYW5pbWF0aW9uLWRlbGF5XCI6IHRoaXNEZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLW8tYW5pbWF0aW9uLWRlbGF5XCI6IHRoaXNEZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5pbWF0aW9uLWRlbGF5XCI6IHRoaXNEZWxheSArICdzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhcnRBbmltYXRlTnVtYmVycygpXHJcbiAgICAgICAgc3RhcnRBbmltYXRpb25CbG9ja3MoKVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0QW5pbWF0ZU51bWJlcnMoKVxyXG4gICAgICAgICAgICBzdGFydEFuaW1hdGlvbkJsb2NrcygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmwxX19ibG9jay1vbl9fc2Nyb2xsIHN2ZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAnc2Nyb2xsVG9wJzogICAkKCcubDFfX2Jsb2NrLXR3Jykub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5hbmNob3InKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxyXG5cclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgJ3Njcm9sbFRvcCc6ICAgJCh0YXJnZXQpLm9mZnNldCgpLnRvcFxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubW9kYWxfYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxyXG5cclxuICAgICAgICAgICAgJCh0YXJnZXQpLm1vZGFsKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYW5jaG9yJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBhaWQgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xyXG4gICAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoYWlkKS5vZmZzZXQoKS50b3AgLSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKX0sJ3Nsb3cnKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRQYWRkaW5ncygpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcuaXMtLWMtcGwnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnLmlzLS1jLXByJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDEwMFBlcjogJy5pcy0taDEwMCdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZiYXJfX2lubmVyJylbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpICsgJCgnLmZvb3RlcicpLmlubmVySGVpZ2h0KClcclxuXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5wYWRkaW5nTGVmdCkuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nLmxlZnQgKyAzMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKGNsYXNzZXMucGFkZGluZ1JpZ2h0KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nLmxlZnQgKyAzMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKGNsYXNzZXMuaGVpZ2h0MTAwUGVyKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtICcgKyBoZWlnaHQgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAnICsgaGVpZ2h0ICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRQYWRkaW5ncygpXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldFBhZGRpbmdzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
