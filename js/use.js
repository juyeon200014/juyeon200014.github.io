(function($){
  $(document).ready(function() {
      $(document).keydown(function(key) {
          switch(parseInt(key.which,10)) {
  			// Left arrow key pressed
  			case 37:
        $('.human').animate({left: "-=20px"}, 'fast');
  				 // 왼쪽 버튼 누를시 왼쪽으로 가는 에니메이션
  				break;

  			case 39:
         $('.human').animate({left: "+=20px"}, 'fast');
  				//오른쪽버튼 누를시 오른으로 가는 에니메이션
  			break;

        $('.make').dblclick(function(){
          $('.make').fadeOut(1000);

        });

  		}
  	});
