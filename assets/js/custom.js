
$(".mobileBtnBar").click(function(){
  $(".headerBlock ul").addClass("show");  
  $(".mobileBtnBar").addClass("hide");
  $(".mobileBtnClose").addClass("show");      
  $("body").addClass("fixed");    
});

$(".mobileBtnClose").click(function(){
  $(".headerBlock ul").removeClass("show");  
  $(".mobileBtnBar").removeClass("hide");
  $(".mobileBtnClose").removeClass("show"); 
  $("body").removeClass("fixed");    
});



$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('header').css({'background-color': 'rgba(255,255,255,1)'});
  } else {
    $('header').css({'background-color': 'rgba(255,255,255,0.8)'});
  }
});
