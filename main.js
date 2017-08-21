$(document).ready(function () {
    setTimeout(function(){
        $('.content-wrapper').addClass('loaded');
        $('.fade_background').addClass('loaded');
        $('#bgvid').addClass('loaded');
        $('.banner-text').addClass('loaded');
    }, 200);
    $('#searchInput').focus(function () {
        $('.suggestion-box').addClass('open');
    }).focusout(function () {
        $('.suggestion-box').removeClass('open');
    });
    $('#searchInputMobile').focus(function () {
        $('.suggestion-box').addClass('open');
    }).focusout(function () {
        $('.suggestion-box').removeClass('open');
    });
    [].slice.call( document.querySelectorAll( '.dotstyle > ul' ) ).forEach( function( nav ) {
        new DotNav( nav, {
            callback : function( idx ) {
                //console.log( idx )
            }
        });
    });
    $('.page-navigation .dotstyle-tooltip li').click(function () {
        var hash = $(this).find('a').attr('href');
        console.log(hash);
        $('html,body').animate({
                scrollTop: $(hash).offset().top - 115},
            'slow');
    });

    $(window).scroll(function () {
        windowScroll();
    });
    windowScroll();

    function windowScroll() {
        if($(window).scrollTop() >= $('#about').offset().top) {
            console.log($(window).scrollTop() >= $('#about').offset().top );
            $('.page-navigation .dotstyle-tooltip li').removeClass('current');
            $('.page-navigation .dotstyle-tooltip li#about-link').addClass('current');
        }
        if($(window).scrollTop() >= $('#whoWeAre').offset().top - 116) {
            $('.page-navigation .dotstyle-tooltip li').removeClass('current');
            $('.page-navigation .dotstyle-tooltip li#whoWeAre-link').addClass('current');
        }
        if($(window).scrollTop() >= $('#insights').offset().top - 116) {
            $('.page-navigation .dotstyle-tooltip li').removeClass('current');
            $('.page-navigation .dotstyle-tooltip li#insights-link').addClass('current');
        }
        if($(window).scrollTop() >= $('#gallery').offset().top - 116) {
            $('.page-navigation .dotstyle-tooltip li').removeClass('current');
            $('.page-navigation .dotstyle-tooltip li#gallery-link').addClass('current');
        }
        if($(window).scrollTop() >= $('#testimonials').offset().top - 116) {
            $('.page-navigation .dotstyle-tooltip li').removeClass('current');
            $('.page-navigation .dotstyle-tooltip li#testimonials-link').addClass('current');
        }
        if($(window).scrollTop() >= $('#contact').offset().top - 116) {
            $('.page-navigation .dotstyle-tooltip li').removeClass('current');
            $('.page-navigation .dotstyle-tooltip li#contact-link').addClass('current');
        }
    }


    if($(window).scrollTop() >= $('#insights').offset().top - 500) {
        showInsights()
    }

    var locked = false;

    $(window).scroll(function () {
        if($(window).scrollTop() >= $('#insights').offset().top - 500 && !locked) {
            showInsights()
        }
    });

    var menuTriggerBttn = $( '#menu-trigger' ),
        menuOverlay = $( '#menu-overlay' ),
        menuCloseBttn = $( 'button.menu-container--close' );
    menuTriggerBttn.click(function () {
        menuOverlay.slideToggle('slow');
    } );
    menuCloseBttn.click(function () {
        menuOverlay.slideToggle('slow');
    } );

    var triggerBttn = $( '#trigger-overlay' ),
        triggerBttnMobile = $( '#trigger-overlay-mobile' ),
        overlay = $( 'div.overlay.style' ),
        closeBttn = $( 'button.video-container--close' );
    triggerBttn.click(function () {
        console.log('hadnasd')
        var video = $('div.overlay.style').attr('data-video');
        $('div.overlay.style').fadeIn('slow');
        $('div.overlay.style').append(
            '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + video + '?autohide=1&autoplay=1&color=red&controls=0&disablekb=1&enablejsapi=1&fs=0&iv_load_policy=3&loop=0&modestbranding=1&rel=0&showinfo=0&origin=http%3A%2F%2Fwww.uvelanghe.it&widgetid=2" frameborder="0" allowfullscreen></iframe>'
        )
    } );
    triggerBttnMobile.click(function () {
        var video = $('div.overlay.style').attr('data-video');
        $('div.overlay.style').fadeIn('slow');
        $('div.overlay.style').append(
            '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + video + '?autohide=1&autoplay=1&color=red&controls=0&disablekb=1&enablejsapi=1&fs=0&iv_load_policy=3&loop=0&modestbranding=1&rel=0&showinfo=0&origin=http%3A%2F%2Fwww.uvelanghe.it&widgetid=2" frameborder="0" allowfullscreen></iframe>'
        )
    } );
    closeBttn.click(function () {
        $('div.overlay.style').fadeOut('slow');
        $('div.overlay.style iframe').remove();
    } );

    function showInsights() {
        locked = true;
        setTimeout(function(){
            $('.animation-section .animation1').addClass('loaded');
            setTimeout(function(){
                $('.animation-section .animation2').addClass('loaded');
                setTimeout(function(){
                    $('.animation-section .animation3').addClass('loaded');
                    setTimeout(function(){
                        $('.animation-section .big-circle.first .amount').fadeIn('normal');
                        $('.animation-section .big-circle.first p').fadeIn('normal');
                        setTimeout(function(){
                            $('.animation-section .animation4').addClass('loaded');
                            setTimeout(function(){
                                $('.animation-section .animation5').addClass('loaded');
                                setTimeout(function(){
                                    $('.animation-section .animation6').addClass('loaded');
                                    setTimeout(function(){
                                        $('.animation-section .big-circle.second .amount').fadeIn('normal');
                                        $('.animation-section .big-circle.second p').fadeIn('normal');
                                        setTimeout(function(){
                                            $('.animation-section .animation7').addClass('loaded');
                                            setTimeout(function(){
                                                $('.animation-section .animation8').addClass('loaded');
                                                setTimeout(function(){
                                                    $('.animation-section .big-circle.third .amount').fadeIn('normal');
                                                    $('.animation-section .big-circle.third p').fadeIn('normal');
                                                }, 100);
                                            }, 100);
                                        }, 200);
                                    }, 100);
                                }, 100);
                            }, 100);
                        }, 200);
                    }, 100);
                }, 100);
            }, 100);
        }, 10);
    }

});
