$(document).ready(function () {


    $(document).ready(function () {
        $(".gotop").hide();
        $('#fullpage').fullpage({
            //options here
            onLeave: function (origin, destination, direction, trigger) {

                //구역 4에서 5로 넘어갈때 사이드 fp / gotop 버튼
                if (destination == 5) {
                    $("#fp-nav").fadeOut();
                    $(".gotop").fadeOut();
                } else {
                    $("#fp-nav").fadeIn();
                    $(".gotop").fadeIn();
                }

                if (destination == 2 || destination == 4) {
                    $("#fp-nav").addClass("on");
                } else {
                    $("#fp-nav").removeClass("on");
                }

                //구역 2를 떠난 후
                if (destination == 2) {
                    $(".gotop").fadeIn();
                }

                if (destination == 1) {
                    $(".gotop").fadeOut();
                }

                $('.section [data-aos]').each(function () {
                    $(this).removeClass("aos-animate")
                });


            },

            // 특정 인덱스일 때
            'afterLoad': function (origin/* 현재요소 */, destination/* 도착지 */, direction/* 스크롤 방향 */, trigger) {
                if (destination == 1, 3, 5) {
                    $("#header").removeClass("on");
                }
                else {
                    $("#header").addClass("on");
                }
            },

            anchors: ['menu1', 'menu2', 'menu3', 'menu4'], /* 메뉴 이름 지정 */
            navigation: true, /* 툴팁 보이기 */
            navigationPosition: 'left', /* 툴팁 위치 */
            navigationTooltips: ['부산박물관', '전시 및 행사', '상설전시', '이용안내'], /* 툴팁 이름 */
            showActiveTooltip: true, /* 스크롤 시 툴팁 이름 보이기 */
            responsiveWidth: 801, /* 반응형 옵션 800px 이하에서 기본 스크롤 */
            autoScrolling: true,
            scrollHorizontally: true,

            onSlideLeave: function () {
                $('.slide [data-aos]').each(function () {
                    $(this).removeClass("aos-animate")
                });
            },
            afterSlideLoad: function () {
                $('.slide.active [data-aos]').each(function () {
                    $(this).addClass("aos-animate")
                });
            },
            afterLoad: function () {
                $('.section.active [data-aos]').each(function () {
                    $(this).addClass("aos-animate")
                });
            },
        });

    });


    const pro_slide = new Swiper('.pro_slide', {

        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            // dynamicBullets: true,
            type: "bullets",
            clickable: true,
        },

        speed: 1500,
        loop: true,
        observer: true,
        observeParents: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },

    });



    const ex_slide = new Swiper('.ex_slide', {
        autoplay: {
            delay: 3000, //슬라이드 대기시간 2.5ms
            disableOnInteraction: false,
        },
        loop: true, //반복여부, 보이는갯수의 2배이상
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        speed: 1000,
        breakpoints: {
            1200: { //1200px 이상에서 보이는 개수
                slidesPerView: 4.5,
            },
            800: { //1200px 이상에서 보이는 개수
                slidesPerView: 3.5,
            },
            499: { // 500px 이상에서 보이는 개수
                slidesPerView: 1.5,
                spaceBetween: 10,
            },

            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
                dragSize: 5
            },

        }


    });


    const news = new Swiper(".news", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        direction: "vertical", //수직슬라이드

    });




    $(".play").hide();
    //.pause를 클릭했을때 ex_slide 슬라이드의 자동재생(autoplay) 멈춰라(stop)
    $(".pause").click(function () {
        ex_slide.autoplay.stop();
        $(".pause").hide();
        $(".play").show();
    });
    $(".play").click(function () {
        ex_slide.autoplay.start();
        $(".play").hide();
        $(".pause").show();
    });




});