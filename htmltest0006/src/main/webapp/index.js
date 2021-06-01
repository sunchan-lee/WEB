/**
 * 
 */

$(function(){
	pageLoading();
	
	$("ul li").click(showContent);			
});

function pageLoading(){
	$("ol li").hide();
	$("ol li").eq(0).show();
	$("ul li").eq(0).addClass("clicked");
}

function showContent(){
	var idx=$(this).index();
	
	$("ul li").removeClass("clicked");
	$(this).addClass("clicked");
	
	$("ol li").hide(); //컨텐츠 모두 숨기기
	$("ol li").eq(idx).show(); //매뉴 인덱스인데 선택된 번호만 나오게 한다..
}