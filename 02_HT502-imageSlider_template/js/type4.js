$(document).ready(function() {
  /* Control Panel */
  $(window).resize(() => {  
                  //function(){} 사용가능
    resizePanelPosition();
  });

  function resizePanelPosition() {
    // Control Panel Positioning
    $left = $("#slider .control .left i");
    $right = $("#slider .control .right i");
    $controlPanel = $("#slider .control a");
    $img = $("#slider .item img");

    //let ES2016, 2017 자바스크립트의 라이브러리 업데이트 규약
    let imgHeight = $img.height();
    // console.log(imgHeight);
    let adjustPosition = imgHeight - imgHeight / 2;
    // console.log(adjustPosition);
    $controlPanel.css("height", imgHeight + "px");
    $left.css("padding-top", adjustPosition + "px");
    $right.css("padding-top", adjustPosition + "px");

    console.log(".item last", $("#slider ul .item:first").last());
  }

  resizePanelPosition();

  /* Interval Image Slider */
  // Inteval Control 을 위한 변수
  let sliding;

  // 0 번째 li 를 제외한 element 를 hide (display: none;)
  $("#slider ul li:gt(0)").hide();

  // next image sliding
  function nextSlide() {
    $("#slider ul .item:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo("#slider ul");
  }
  // prev image sliding
  function prevSlide() {
    $("#slider ul .item:first")
      .fadeOut(1000)
      .siblings() //형제
      .last()
      .fadeIn(1000);
    $("#slider ul .item:last").prependTo("#slider ul");
  }

  $("#slider .control a").hover(
    event => {
      $(event.target).css("background-color", "rgba(0,0,0,.5)");
    },
    event => {
      $(event.target).css("background-color", "rgba(0,0,0,0)");
    }
  );

  $("#slider .control a").click(event => { 
    //입력값이 하나일때 (event)=> 
    //입력값이 2개일때 event, type => 또는 (event,type) => 사용가능
    if ($(event.target).hasClass("left")) {
      prevSlide();
    } else {
      nextSlide();
    }
  });
});
