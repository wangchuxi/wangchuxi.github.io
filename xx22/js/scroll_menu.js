$(function(){ 

	var page=1;
	var i=3;
	var $p_Div=$(".pic_content");
	var $picDiv=$(".pic_lists");
	var picNum=$picDiv.children("ul").children("li").length;
	var page_count=Math.ceil(picNum/7);
	var $pDiv_w=$p_Div.width()+12;

	$(".right_btn").click(function(){
		if(page_count>page){
			$picDiv.animate({left:'-'+page*$pDiv_w+"px"},"normal");
			page++;
			$(".left_btn").css({'background':'url(images/left_but1.jpg) no-repeat'});
			if(page>=page_count){
				$(this).css({'background':'url(images/right_but2.jpg) no-repeat'});
			}else{
				$(this).css({'background':'url(images/right_but1.jpg) no-repeat'});
			}
		} 
		$(this).siblings(".highlight_tip").find("span").eq((page-1)).addClass("current").siblings().removeClass("current"); 	
	});
	
	$(".left_btn").click(function(){
		if(page>1){
			$picDiv.animate({left:"+="+$pDiv_w+'px'},"normal");
			page--;
			$(".right_btn").css({'background':'url(images/right_but1.jpg) no-repeat'});
			if(page<=1){
				$(this).css({'background':'url(images/left_but2.jpg) no-repeat'});	 
			}else{
				$(this).css({'background':'url(images/left_but1.jpg) no-repeat'});
			}
		}
		$(this).siblings(".highlight_tip").find("span").eq((page-1)).addClass("current").siblings().removeClass("current"); 	
	});
	
	$(".pic_lists>ul>li").hover(function(){
		$(this).children("p").show();
	},function(){
		$(this).children("p").hide();
	});
	
})