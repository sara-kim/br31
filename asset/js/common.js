
$(document).ready(function(){
  //nav
  $('.btn_menu').on('click',function(){
    var $gnb = $('#gnb');

    if ($(this).hasClass('active')) { //close
    $gnb.stop().animate({left: '100%'},300,function(){
      $(this).css({visibility: 'hidden'}).find('ul li.on').removeClass('on').children('ul').stop().slideUp();
    })
  } else {
    $(this).addClass('active').find('blind').text('메뉴닫기');
    $gnb.css({visibility: 'visible'}).stop().animate({left: 0},300,function (){
    });
  };

  $gnb.find('ul>li>a').on('click', function (){
   if ($(this).next().size() == 0){
     location.href=$(this).attr("href");
   } else {
     $(this).next().stop().slideToggle("fast").parent().toggleClass('on');
   }
   return false;
  });
});

});