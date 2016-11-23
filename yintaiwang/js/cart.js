//滑入滑出菜单出现
$("#menu").mouseover(function(){
	$(this).parent().find(".list-nav").css("visibility","visible");
})
$("#menu").mouseout(function(){
	$(this).parent().find(".list-nav").css("visibility","hidden");
})