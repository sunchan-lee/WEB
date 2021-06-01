/**
 * 
 */

$(function(){
	$("ul li").hover(overColor, leaveColor);
	$("ul li").hover(overColor, leaveColor);
			//// 마우스 오버    마우스 나갈때*/
});

function overColor(){
	//한줄이상 적용할때
	/*$(this).css("color", "red");*/
	
	//두줄이상 적용할때 Muiltiple Css Properties.
	$(this).css({color:"red", borderBottom: "1px solid red"});


}

function leaveColor(){
	//$(this).css("color", "#000");
	$(this).css({color:"#000", borderBottom: "1px solid #000"});
}