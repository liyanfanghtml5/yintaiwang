//滑入滑出菜单出现
$("#menu").mouseover(function(){
	$(this).parent().find(".list-nav").css("visibility","visible");
})
$("#menu").mouseout(function(){
	$(this).parent().find(".list-nav").css("visibility","hidden");
})
//点击按钮滑到顶部
$("#backtop").find("a").bind("click",function(){
	$("body,html").animate({scrollTop:0},300,"linear");
	return false;
})
//滑到顶部按钮是否出现
$(document).bind("scroll",function(){
	if($(document).scrollTop() >= 800){
	    $("#backtop").show();
	}else{
		$("#backtop").hide();
	}
	
})
