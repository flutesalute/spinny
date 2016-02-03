$(document).ready(function(){


var value = 0
$(".circle").rotate({
  bind:
  {
    click: function(){
      value +=60;
      $(this).rotate({ 
      	animateTo:-value,
      	center: ["50%", "50%"],
      	duration: 2000
      })
    }
  }
});

 /* $(".arrow").hover(function(){
    $(this).attr("src","bg copy.png");
      }, function() {
    $(this).attr("src","bg.png");
  });*/

});
