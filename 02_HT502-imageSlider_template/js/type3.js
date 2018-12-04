$(document).ready(function(){
    // Mouse Over Event를 통해서
    // setInterval() 제어한다.
 
    $("#slider ul li.item:gt(0)").hide();
   
    //fading전역변수 선언
    var fading;

    //start 함수 생성
    function start(){ 
        fading = setInterval(function() {
         $("#slider ul li.item:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slider ul");
        }, 2000); 
    };

    //stop함수 선언
    function stop(){
        clearInterval(fading);
    }

    start();   

    $("#slider").hover(function(){
        console.log("mouse in");
        stop();
    }, function(){
        console.log("mouse out");
        start();
    });
}); 

/*
$(document).ready(function(){
    // Mouse Over Event를 통해서
    // setInterval() 제어한다.
 
    $("#slider ul li.item:gt(0)").hide();
   
    //fading함수 선언
    var fading =  function(){ 
        start = setInterval(function() {
         $("#slider ul li.item:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slider ul");
        }, 2000); 
    };
    fading();

    $("#slider").hover(function(){
        console.log("mouse in");
        clearInterval(start);
    }, function(){
        console.log("mouse out");
        fading();
    });
});*/