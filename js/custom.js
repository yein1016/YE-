
/*
.animate( properties [, duration] [, easing] [, complete] )
properties 움직임을 만들어 낼수 있는 CSS 속성들
duration 움직임이 발생할 시간
easing 움직임에 변화를 줄 수 있는 함수
complete 움직임이 멈춘 후 실행될 함수

*/
   
$(function () {
    baloonUp();

    function baloonUp() {
        $('#sale_baloon').animate({
            'top': 110
        }, 1000, 'easeInExpo', baloonDown);
    }

    function baloonDown() {
        $('#sale_baloon').animate({
            'top': 100
        }, 700,  'easeInQuart', baloonUp);
    }
});

