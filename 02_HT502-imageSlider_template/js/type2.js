$(document).ready(function(){

    $("#slider ul li.item:gt(0)").hide();
   
    setInterval(function() {
        //메소드 체이닝
        $("#slider ul li.item:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slider ul");
           
    }, 2000); 

});

/*$(document).ready(function(){

    $items=$("#slider ul li.item");

    var currentIndex=0;
    var imgCount=$items.length; 
    
    setInterval(function() {
        if (currentIndex >= imgCount){
            currentIndex=0;
        }
        $items.fadeOut(0); 
        $items.eq(currentIndex++).fadeIn("slow");
        
    }, 2000); 

});*/
