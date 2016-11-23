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
//右侧品牌的展开与收回
$(".mp-brand").find("h2").find("a").bind("click",function(){
	$("#brand-content").animate({height:239},300,"linear");
})
$("#hide-more-btn").bind("click",function(){
	$("#brand-content").animate({height:0},300,"linear");
})
//加载列表
$.ajax({
	url:'json/mplist.json',
	type:'GET',
	success:function(date){
		var html = '';
		for(var i = 0 ; i < date.length; i++){
		    html += '<div class="mp-product"><h2><span>';
		    for(var j = 0;j < date[i].top.subtitle.length;j++){
		    	html += '<a href="javascript:;">'+ date[i].top.subtitle[j] +'</a>';
		    	if(j < date[i].top.subtitle.length-2){
		    		html += '|';
		    	}
		    	if(j == date[i].top.subtitle.length-1){
		    		$(".mp-product").find("h2").find("span").find("a").addClass("pro-more");
		    	}
		    }
		    html += '</span><p>分类</p></h2><div class="pro-more-list"><div class="productlist-area bd-list"><ul class="cf mushroom-cate-b">';
			for(var k = 0;k < date[i].list.length; k++){
				html += '<li><div class="c-pictxt c-pictxt-num"><div class="c-pic"><a href="javascript:;" target="_blank"><img src='+ date[i].list[k].img +' class="c-pic-product"/></a></div><div class="c-pt-detail"><div class="c-brand"><a href="javascript:;" target="_blank">'+ date[i].list[k].brand +'</a></div><div class="c-tit"><a href="javascript:;" target="_blank">'+ date[i].list[k].title +'</a></div><div class="c-info"><p class="c-oprice"><em>'+ date[i].list[k].y_price +'</em><s>'+ date[i].list[k].m_price +'</s></p></div></div></div></li>';
			}
			html += '</ul></div></div></div>';			
		}
		
		$('#bd').append(html);
		for (var i = 0;i < date.length; i++) {
			$(".mp-product").eq(i).find("h2").find("p").css("background",date[i].top.place);
		}
	}
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





