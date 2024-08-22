$(document).ready(function () {



    // 사이트맵영역
    $(".all_wrap").hide();
    $(".btn_sitemap").click(function () {
        $(".all_wrap").stop().fadeIn();
    });
    $(".all_close").click(function () {
        $(".all_wrap").stop().fadeOut();
    });

    $('.all_depth2 li').mouseover(function () {
        $(this).siblings().find('a').css('opacity', '0.3');
    });
    $('.all_depth2 li').mouseout(function () {
        $('.all_depth2 li a').css('opacity', '');
    });


    //모바일gnb
    $(".mgnb_wrap").hide();
    $(".btn_sitemap").click(function () {
        if (window.innerWidth <= 501) {
            $(".all_wrap").hide();
            $(".mgnb_wrap").show().animate({
                "right": "0",
            }, 600);
        }
    });

    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").animate({
            "right": "-100%",
        }, 600)
    });

    $(".m_depth2").hide();
    $(".m_gnb > li").click(function () {
        $(this).find(".m_depth2").slideDown();
        $(this).siblings().find(".m_depth2").slideUp();
    });



    //header, gnb

    $(".depth2_wrap,.depth2_bg").hide();
    $(".gnb > li").mouseenter(function () {
        $(".depth2_bg").stop().fadeToggle();
        $(this).find(".depth2_wrap").stop().fadeToggle();

    });


    $(".gnb > li").mouseleave(function () {
        $(".depth2_bg").stop().fadeToggle();
        $(this).find(".depth2_wrap").stop().fadeToggle();
    });



});

