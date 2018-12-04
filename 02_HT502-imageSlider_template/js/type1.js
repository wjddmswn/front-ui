$(document).ready(function() {
    //document 상위에는  window
    
    //slider라는 id 속성을 가진  element를 선택
    //jquery
    // $("#slider")
     // $(".slider")

    //javascript
    // document.getElementById("slider")
    //document.getElementByClassName("slider")


    $items=$("#slider ul li.item");

    //setTimeout()  => 예를 들어  3초 후 실행
    //setInterval( 함수, 시간 ) => 반복 실행

    var currentIndex=1;
    var imgCount=$items.length; 
    
    setInterval(function() {
        if (currentIndex >= imgCount){
            currentIndex=0;
        }
        $items.removeClass('active'); 
        $items.eq(currentIndex++).addClass('active');
        
    }, 1000);

});