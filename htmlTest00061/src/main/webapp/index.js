/**
 * 
 */

$(function(){
	$("#menu ol li").click(scrollMove);
	
});


function scrollMove(){
	var idx=$(this).index();
	var top;
	
	if(idx==0){
		top=$("#best").offset().top;
	}else if(idx==1){
		top=$("#ticket").offset().top;
	}else if(idx==2){
		top=$("#snack").offset().top;
	}else if(idx==3){
		top=$("#package").offset().top;
	}
	
	$("html, body").animate({
		scrollTop: top-38
	}, 500);

}