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