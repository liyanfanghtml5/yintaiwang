//滑入滑出菜单出现
$("#menu").mouseover(function(){
	$(this).parent().find(".list-nav").css("visibility","visible");
})
$("#menu").mouseout(function(){
	$(this).parent().find(".list-nav").css("visibility","hidden");
})

//放大镜效果
var sw_pic = $(".small-pic").width();
var st_pic = $(".small-pic").height();
var sw_blank = $(".small-blank").width();
var st_blank = $(".small-blank").height();
var sw_img = $(".big-pic").width();
var st_img = $(".big-pic").height();
var sw_big = $(".pic-big").width();
var st_big = $(".pic-big").height();

//小框移动
$(".small-blank").mousemove(function(e){
	var offsetLeft = $(".small-pic").offset().left;
	var offsetTop = $(".small-pic").offset().top;
	var x = e.pageX - offsetLeft - sw_blank/2;
	var y = e.pageY - offsetTop - st_blank/2;
	if(x <= 0){
		x = 0;
	}else if(x >= (sw_pic - sw_blank)){
		x = sw_pic - sw_blank;
	}
	if(y <= 0){
		y = 0;
	}else if(y >= (st_pic - st_blank)){
		y = (st_pic - st_blank);
	}
	$(".small-blank").css({left:x,top:y});
	var factor_x = x/(sw_pic - sw_blank);
	var factor_y = y/(st_pic - st_blank);
	var fx = -factor_x*(sw_img - sw_big);
	var fy = -factor_y*(sw_img - sw_big);
	$(".big-pic").css({left:fx,top:fy});
})



$(".pic-show").hover(function(e){
	var offsetLeft = $(".small-pic").offset().left;
	var offsetTop = $(".small-pic").offset().top;
	var x = e.pageX - offsetLeft - sw_blank/2;
	var y = e.pageY - offsetTop - st_blank/2;
	if(x <= 0){
		x = 0;
	}else if(x >= (sw_pic - sw_blank)){
		x = sw_pic - sw_blank;
	}
	if(y <= 0){
		y = 0;
	}else if(y >= (st_pic - st_blank)){
		y = (st_pic - st_blank);
	}
	$(".small-blank").css({left:x,top:y});
	$(this).find(".small-blank").show();
	$(this).find(".pic-big").show();
},function(){
	$(this).find(".small-blank").hide();
	$(this).find(".pic-big").hide();
})


//滑入列表图片切换
$(".c-list").find("li").hover(function(){
	$(".small-pic").find("img").hide();
	$(".big-pic").find("img").hide();
	$(".c-list").find("li").find("a").css("border-color","#ccc");
	$(this).find("a").css("border-color","#666");
	$(".small-pic").find("img").eq($(this).index()).show();
	$(".big-pic").find("img").eq($(this).index()).show();
},function(){
//	$(this).find("a").css("border-color","#666");
})
//小的轮播图

var i = 0;
$(".c-next").mouseover(function(){
	$(this).css("background-position-x",-38);
})
$(".c-next").mouseout(function(){
	$(this).css("background-position-x",-10);
})
$(".c-pre").mouseover(function(){
	$(this).css("background-position-x",-28);
})
$(".c-pre").mouseout(function(){
	$(this).css("background-position-x",-0);
})
$(".c-next").bind("click",function(){
	i++;
	if(i >= ($(".c-list").find("li").length-1)){
		i = $(".c-list").find("li").length-1;
		$(this).css("background-position-x",-67);
	}
	$(".c-list").animate({left:i*-72},300,"linear");
	$(".c-pre").css("background-position-x",0);
})
$(".c-pre").bind("click",function(){
	i--;
	if(i <= 0){
		i = 0;
		$(this).css("background-position-x",-57);
	}
	$(".c-list").animate({left:i*-72},300,"linear");
	$(".c-next").css("background-position-x",-10);
})
//划上微信显示二维码
//$(".WeChat").hover(function(){
//	$(".wechatbox").show();
//},function(){
//	$(".wechatbox").hide();
//})
//$(".snsShare").hover(function(){
//	$(".snsbox").show();
//},function(){
//	$(".snsbox").hide();
//})

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




