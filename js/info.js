$(document).ready(function () {

    //상단 서브 공통 사이트맵 js 시작
    $(".bread_gnb1").hide();
    $(".btn2").click(function () {
        $(".down1 i").toggleClass("active");
        $(".down2 i").removeClass("active");
        $(".bread_gnb1").stop().slideToggle();
        $(".bread_gnb2").stop().slideUp();
    });

    $(".bread_gnb2").hide();
    $(".btn3").click(function () {
        $(".down1 i").removeClass("active");
        $(".down2 i").toggleClass("active");
        $(".bread_gnb2").stop().slideToggle();
        $(".bread_gnb1").stop().slideUp();
    });
    //상단 서브 공통 사이트맵 js 끝


});