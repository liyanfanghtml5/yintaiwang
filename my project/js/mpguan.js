//滑入滑出菜单出现
$("#menu").mouseover(function(){
	$(this).parent().find(".list-nav").css("visibility","visible");
})
$("#menu").mouseout(function(){
	$(this).parent().find(".list-nav").css("visibility","hidden");
})
//body区效果
$(".kinds-hover").hover(function(){
	$(this).css({opacity:1});
},function(){
	$(this).css({opacity:0.55});
})
//第一个轮播图
var i = 0;
var timer1 = 0;
timer1 = setInterval(function(){
	i++;
	tab1();
},2000);
function tab1(){
	if(i == $(".mp-cal").find("ul").find("li").size()){
		i = 0;
	}
	$(".mp-cal").find("ul").animate({left:i*-700},300,"linear");
	$(".mp-cal").find("ol").find("li").attr("class","");
	$(".mp-cal").find("ol").find("li").eq(i).attr("class","mp-cal-active");
}
$(".mp-cal").hover(function(){
	clearInterval(timer1);
},function(){
	timer1 = setInterval(function(){
		i++;
		tab1();
	},2000);
})
//滑入小按钮切换图片
$(".mp-cal").find("ol").find("li").mouseover(function(){
	i = $(this).index();
	$(".mp-cal").find("ol").find("li").attr("class","");
	$(this).attr("class","mp-cal-active");
	$(".mp-cal").find("ul").animate({left:i*-700},300,"linear");
})
//第二个轮播图
var j = 0;
var timer2 = 0;
timer2 = setInterval(function(){
	j++;
	tab2();
},3000);
function tab2(){
	if(j == $(".mp-calous").find("ul").find("li").size()){
		j = 0;
	}
	$(".mp-calous").find("ul").animate({top:j*-195},300,"linear");
	$(".mp-calous").find("ol").find("li").attr("class","");
	$(".mp-calous").find("ol").find("li").eq(j).attr("class","mp-calous-active");
	$(".mp-info").find("p").html("");
	judge();
}
function judge(){
	if(j==0){
		$(".mp-info").find("p").html("换季就意味着又要“买买买”了！此时怎能少了MARUKS LUPFER？时髦人士可是早就穿上它们了！");
	}else if(j==1){
		$(".mp-info").find("p").html("只要一件卫衣就可以让你超级时髦又省事，卫衣不管是单穿，还是和其它服饰搭配都能演变出很多种风格，你的衣橱绝对少不了它。");
	}else if(j==2){
		$(".mp-info").find("p").html("最初围巾只有简单的御寒功能而今这件看似简单的小物却慢慢成为了一个不可缺少的时尚单品，遮风避寒的实用性以退居二线，增加搭配的层次效果才是用途所在。");
	}
}
$(".mp-calous").hover(function(){
	clearInterval(timer2);
},function(){
	timer2 = setInterval(function(){
		j++;
		tab2();
	},3000);
})
//滑入小按钮切换图片
$(".mp-calous").find("ol").find("li").mouseover(function(){
	j = $(this).index();
	$(".mp-calous").find("ol").find("li").attr("class","");
	$(this).attr("class","mp-calous-active");
	$(".mp-calous").find("ul").animate({top:j*-195},300,"linear");
	$(".mp-info").find("p").html("");
	judge();
})








