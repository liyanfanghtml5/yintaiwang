
	


//body区bdbanner中间banner的js效果

var liButton = $("#bd-banner").find(".big-carousel").find(".bd-ul").find("li");
var calList = $("#bd-banner").find(".big-carousel").find(".bd-carousel-ul");
var banIndex = 0;
//添加定时器
var timer = 0;
timer = setInterval(play,5000);
function play(){
	banIndex++;
	tab();
}
function tab(){
	if(banIndex == calList.find("li").size()){
		banIndex = 0;
	}
	calList.find("li").hide().eq(banIndex).fadeIn(1000);
	liButton.attr("class","");
	liButton.eq(banIndex).attr("class","active");
}
//点击下面四个li切换
liButton.mouseover(function(){
	banIndex = $(this).index();
	liButton.attr("class","");
	calList.find(".tab-pannels").hide();
	$(this).attr("class","active");
	calList.find(".tab-show"+(banIndex+1)).fadeIn(1000);
})
//滑入右侧按钮颜色改变
$("#bd-banner").find(".big-carousel").find(".right").hover(function(){
	$(this).css("background-position-y",-60);
},function(){
	$(this).css("background-position-y",0);
})
//滑入左侧按钮颜色改变
$("#bd-banner").find(".big-carousel").find(".left").hover(function(){
	$(this).css("background-position-y",-60);
},function(){
	$(this).css("background-position-y",0);
})    
//点击左右按钮切换
$("#bd-banner").find(".big-carousel").find(".right").bind("click",function(){
	banIndex++;
	tab();
})
//点击左侧按钮切换
$("#bd-banner").find(".big-carousel").find(".left").bind("click",function(){
	banIndex--;
	if(banIndex == -1){
		banIndex = calList.find("li").length - 1;
	}
	calList.find("li").hide().eq(banIndex).fadeIn(1000);
	liButton.attr("class","");
	liButton.eq(banIndex).attr("class","active");
})
//左右按钮是否出现	
$("#bd-banner").find(".big-carousel").hover(function(){
	$("#bd-banner").find(".big-carousel").find(".left").css("opacity","0.7");
	$("#bd-banner").find(".big-carousel").find(".right").css("opacity","0.7");
	clearInterval(timer);
},function(){
	$("#bd-banner").find(".big-carousel").find(".left").css("opacity","0");
	$("#bd-banner").find(".big-carousel").find(".right").css("opacity","0");
	timer = setInterval(play,5000);
})
				
//body区focuse图片的js效果

$("#bd").find(".focuse-pic").find(".f-pic").hover(function(){
	$(this).stop().animate({right:9},300,"linear");
},function(){
	$(this).stop().animate({right:0},300,"linear");
})
	
//body区bd-brand第一个的js效果

$("#bd-brand").find(".brand-content").find(".brand-panels0").find(".brand-four").find(".border-animation").hover(function(){
	$(this).find(".border-top").stop().animate({width:220},50,"linear");
	$(this).find(".border-right").stop().animate({height:260},50,"linear");
	$(this).find(".border-bottom").stop().animate({width:220},50,"linear");
	$(this).find(".border-left").stop().animate({height:260},50,"linear");
},function(){
	$(this).find(".border-top").stop().animate({width:0},50,"linear");
	$(this).find(".border-right").stop().animate({height:0},50,"linear");
	$(this).find(".border-bottom").stop().animate({width:0},50,"linear");
	$(this).find(".border-left").stop().animate({height:0},50,"linear");
})
	
//body区bd-brand第二个的js效果

$("#bd-brand").find(".brand-content").find(".brand-panels1").find(".brand-four").find(".brand-li").find(".border-animation").hover(function(){
	$(this).find(".border-top").stop().animate({width:220},50,"linear");
	$(this).find(".border-right").stop().animate({height:260},50,"linear");
	$(this).find(".border-bottom").stop().animate({width:220},50,"linear");
	$(this).find(".border-left").stop().animate({height:260},50,"linear");
},function(){
	$(this).find(".border-top").stop().animate({width:0},50,"linear");
	$(this).find(".border-right").stop().animate({height:0},50,"linear");
	$(this).find(".border-bottom").stop().animate({width:0},50,"linear");
	$(this).find(".border-left").stop().animate({height:0},50,"linear");
})
						
//body区bd-brand第三个的js效果

$("#bd-brand").find(".brand-content").find(".brand-panels2").find(".brand-ph-a").hover(function(){
	$(this).find("p").show();
},function(){
	$(this).find("p").hide();
})
						
//body区bd-brand切换的js效果

$("#bd-brand").find(".brand-content").find("ul").find(".list-li").mouseover(function(){
//	alert($(this).index());
	$("#bd-brand").find(".brand-content").find("ul").find(".list-li").css("border-bottom-color","#333");
	$("#bd-brand").find(".brand-content").find("ul").find(".list-li").find("a").attr("class","");

	$("#bd-brand").find(".brand-content").find("ul").find(".list-li").find("span").hide();
	$("#bd-brand").find(".brand-content").find(".brand-panels").hide();
	$(this).css("border-bottom-color","#E5004F");
	$(this).find("span").show();
	$(this).find("a").attr("class","font_yahei");
	$(this).find("a").attr("class","last_w");
	$("#bd-brand").find(".brand-content").find(".brand-panels"+$(this).index()).show();
})
				
//body区bd-brand右侧图片的js效果

$("#bd-brand").find(".brand-right").hover(function(){
	$(this).find("p").show();
},function(){
	$(this).find("p").hide();
})
					
//body区bd-counter热门品牌下图片的js效果

$("#bd-counter").find(".zgtk-content").find(".zgtk-content-right").find(".hot-list1").find("a").hover(function(){
	$(this).find("p").css("display","block");
},function(){
	$(this).find("p").css("display","none");
})

//body区bd-counter本周推荐下图片的js效果

$("#bd-counter").find(".zgtk-content").find(".zgtk-content-right").find(".hot-list2").find(".border-animation").hover(function(){
	$(this).find(".border-top").stop().animate({width:200},50,"linear");
	$(this).find(".border-right").stop().animate({height:248},50,"linear");
	$(this).find(".border-bottom").stop().animate({width:200},50,"linear");
	$(this).find(".border-left").stop().animate({height:248},50,"linear");
},function(){
	$(this).find(".border-top").stop().animate({width:0},50,"linear");
	$(this).find(".border-right").stop().animate({height:0},50,"linear");
	$(this).find(".border-bottom").stop().animate({width:0},50,"linear");
	$(this).find(".border-left").stop().animate({height:0},50,"linear");
})
							
//body区bd-counter两个标签的tab切换的js效果
$("#bd-counter").find(".zgtk-content").find(".zgtk-content-right").find(".hot-nav1").find("li").mouseover(function(){
//	alert($(this).index());
	$("#bd-counter").find(".zgtk-content").find(".zgtk-content-right").find(".hot-nav1").find("li").css("border-bottom-color","#333");
	$("#bd-counter").find(".zgtk-content").find(".zgtk-content-right").find(".hot-nav1").find("li").find(".li-a").attr("class","");

	$("#bd-counter").find(".zgtk-content").find(".zgtk-content-right").find(".hot-nav1").find("li").find(".li-span").css("display","none");
	$("#bd-counter").find(".zgtk-content").find(".zgtk-content-right").find(".hot-list").find(".hot-list0").css("display","none");
	$(this).css("border-bottom-color","#e70050");
	$(this).find(".li-span").css("display","block");
	$(this).find(".li-a").attr("class","font_yahei");
	$(this).find(".li-a").attr("class","last_w");
	$("#bd-counter").find(".zgtk-content").find(".zgtk-content-right").find(".hot-list").find(".hot-list"+($(this).index()+1)).css("display","block");
})
//body区bd-luxury左侧小轮播图的特效
var list = $("#bd-luxury").find(".luxury-nav").find(".luxury-nav2").find(".luxury-scroll");
//li的长度alert(list.find("li").length);
var scurIndex = 0;
//点击右侧按钮切换品牌
$("#bd-luxury").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-next").bind("click",function(){
	scurIndex++;
	if(scurIndex == list.find("li").length){
		scurIndex = 1;
		list.css("left",0);     
	}
	list.animate({left:scurIndex*-160},300,"linear");
})
//点击左侧按钮切换品牌
$("#bd-luxury").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-pre").bind("click",function(){
	scurIndex--;
	if(scurIndex == -1){
		scurIndex = list.find("li").length-2;
		list.css("left",(list.find("li").length-1)*-160);     
	}
	list.animate({left:scurIndex*-160},300,"linear");
})
//body区bd-luxury中间轮播图左右按钮切换的js效果
var curIndex = 0;
$("#bd-luxury").find(".luxury-cal").find(".luxury-cal-slide").mouseenter(function(){
	//左右按钮滑入
	$(this).find(".luxury-slide-left").stop().animate({left:0},500,"linear");
	$(this).find(".luxury-slide-right").stop().animate({right:0},500,"linear");
	//点击右侧按钮切换图片
	$("#bd-luxury").find(".luxury-cal-slide").find(".luxury-slide-right").bind("click",function(){
//		alert(1)
		curIndex++;
		if(curIndex >= 1){
			curIndex = 1;
			$('#bd-luxury').find('.luxury-cal-slide').find('.scroll-prenext').animate({left:curIndex*-390},300,"linear");     
		}
		//下面圆点的变化
		$('#bd-luxury').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").attr("class","");
		$('#bd-luxury').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").eq(curIndex).attr("class","luxury-slide-ul-active");
	})
	//点击左侧按钮切换图片
	$("#bd-luxury").find(".luxury-cal-slide").find(".luxury-slide-left").bind("click",function(){
//		alert(1)
		curIndex--;
		if(curIndex <= 0){
			curIndex = 0;
			$('#bd-luxury').find('.luxury-cal-slide').find('.scroll-prenext').animate({left:curIndex*0},300,"linear");    
		}
		//下面圆点的变化
		$('#bd-luxury').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").attr("class","");
		$('#bd-luxury').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").eq(curIndex).attr("class","luxury-slide-ul-active");
	})
	//点击下面的圆点切换图片
	$('#bd-luxury').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").bind("click",function(){
		//当前li的下标$(this).index();
		$('#bd-luxury').find('.luxury-cal-slide').find('.scroll-prenext').animate({left:($(this).index())*-390},300,"linear");
		$('#bd-luxury').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").attr("class","");
		$(this).attr("class","luxury-slide-ul-active");
	})
	//滑入右侧按钮颜色变化
	$("#bd-luxury").find(".luxury-cal-slide").find(".luxury-slide-right").hover(function(){
		$(this).css("background-position-y",-60);
	},function(){
		$(this).css("background-position-y",0);
	})
	//滑入左侧按钮颜色变化
	$("#bd-luxury").find(".luxury-cal-slide").find(".luxury-slide-left").hover(function(){
		$(this).css("background-position-y",-60);
	},function(){
		$(this).css("background-position-y",0);
	})
})
//左右按钮滑出
$("#bd-luxury").find(".luxury-cal").find(".luxury-cal-slide").mouseleave(function(){
	$(this).find(".luxury-slide-left").stop().animate({left:-30},500,"linear");
	$(this).find(".luxury-slide-right").stop().animate({right:-30},500,"linear");
})
//body区bd-trend左侧小轮播图的特效
var list0 = $("#bd-trend").find(".luxury-nav").find(".luxury-nav2").find(".luxury-scroll");
//li的长度alert(list.find("li").length);
var scurIndex0 = 0;
//点击右侧按钮切换品牌
$("#bd-trend").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-next").bind("click",function(){
	scurIndex0++;
	if(scurIndex0 == list0.find("li").length){
		scurIndex0 = 1;
		list0.css("left",0);     
	}
	list0.animate({left:scurIndex0*-160},300,"linear");
})
//点击左侧按钮切换品牌
$("#bd-trend").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-pre").bind("click",function(){
	scurIndex0--;
	if(scurIndex0 == -1){
		scurIndex0 = list0.find("li").length-2;
		list0.css("left",(list0.find("li").length-1)*-160);     
	}
	list0.animate({left:scurIndex0*-160},300,"linear");
})
//body区bd-boutique左侧小轮播图的特效
var list1 = $("#bd-boutique").find(".luxury-nav").find(".luxury-nav2").find(".luxury-scroll");
//li的长度alert(list.find("li").length);
var scurIndex1 = 0;
//点击右侧按钮切换品牌
$("#bd-boutique").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-next").bind("click",function(){
	scurIndex1++;
	if(scurIndex1 == list1.find("li").length){
		scurIndex1 = 1;
		list1.css("left",0);     
	}
	list1.animate({left:scurIndex1*-160},300,"linear");
})
//点击左侧按钮切换品牌
$("#bd-boutique").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-pre").bind("click",function(){
	scurIndex1--;
	if(scurIndex1 == -1){
		scurIndex1 = list1.find("li").length-2;
		list1.css("left",(list1.find("li").length-1)*-160);     
	}
	list1.animate({left:scurIndex1*-160},300,"linear");
})
//body区bd-footwear左侧小轮播图的特效
var list2 = $("#bd-footwear").find(".luxury-nav").find(".luxury-nav2").find(".luxury-scroll");
//li的长度alert(list.find("li").length);
var scurIndex2 = 0;
//点击右侧按钮切换品牌
$("#bd-footwear").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-next").bind("click",function(){
	scurIndex2++;
	if(scurIndex2 == list2.find("li").length){
		scurIndex2 = 1;
		list2.css("left",0);     
	}
	list2.animate({left:scurIndex2*-160},300,"linear");
})
//点击左侧按钮切换品牌
$("#bd-footwear").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-pre").bind("click",function(){
	scurIndex2--;
	if(scurIndex2 == -1){
		scurIndex2 = list2.find("li").length-2;
		list2.css("left",(list2.find("li").length-1)*-160);     
	}
	list2.animate({left:scurIndex2*-160},300,"linear");
})
//body区bd-footwear中间轮播图左右按钮切换的js效果
var curIndex = 0;
$("#bd-footwear").find(".luxury-cal").find(".luxury-cal-slide").mouseenter(function(){
	//左右按钮滑入
	$(this).find(".luxury-slide-left").stop().animate({left:0},500,"linear");
	$(this).find(".luxury-slide-right").stop().animate({right:0},500,"linear");
	//点击右侧按钮切换图片
	$("#bd-footwear").find(".luxury-cal-slide").find(".luxury-slide-right").bind("click",function(){
//		alert(1)
		curIndex++;
		if(curIndex >= 1){
			curIndex = 1;
			$('#bd-footwear').find('.luxury-cal-slide').find('.scroll-prenext').animate({left:curIndex*-390},300,"linear");     
		}
		//下面圆点的变化
		$('#bd-footwear').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").attr("class","");
		$('#bd-footwear').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").eq(curIndex).attr("class","luxury-slide-ul-active");
	})
	//点击下面的圆点切换图片
	$('#bd-footwear').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").bind("click",function(){
		//当前li的下标$(this).index();
		$('#bd-footwear').find('.luxury-cal-slide').find('.scroll-prenext').animate({left:($(this).index())*-390},300,"linear");
		$('#bd-footwear').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").attr("class","");
		$(this).attr("class","luxury-slide-ul-active");
	})
	//点击左侧按钮切换图片
	$("#bd-footwear").find(".luxury-cal-slide").find(".luxury-slide-left").bind("click",function(){
//		alert(1)
		curIndex--;
		if(curIndex <= 0){
			curIndex = 0;
			$('#bd-footwear').find('.luxury-cal-slide').find('.scroll-prenext').animate({left:curIndex*0},300,"linear");    
		}
		//下面圆点的变化
		$('#bd-footwear').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").attr("class","");
		$('#bd-footwear').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").eq(curIndex).attr("class","luxury-slide-ul-active");
	})
	//滑入右侧按钮颜色变化
	$("#bd-footwear").find(".luxury-cal-slide").find(".luxury-slide-right").hover(function(){
		$(this).css("background-position-y",-60);
	},function(){
		$(this).css("background-position-y",0);
	})
	//滑入左侧按钮颜色变化
	$("#bd-footwear").find(".luxury-cal-slide").find(".luxury-slide-left").hover(function(){
		$(this).css("background-position-y",-60);
	},function(){
		$(this).css("background-position-y",0);
	})
})
//左右按钮滑出
$("#bd-footwear").find(".luxury-cal").find(".luxury-cal-slide").mouseleave(function(){
	$(this).find(".luxury-slide-left").stop().animate({left:-30},500,"linear");
	$(this).find(".luxury-slide-right").stop().animate({right:-30},500,"linear");
})
//body区bd-bags左侧小轮播图的特效
var list3 = $("#bd-bags").find(".luxury-nav").find(".luxury-nav2").find(".luxury-scroll");
//li的长度alert(list.find("li").length);
var scurIndex3 = 0;
//点击右侧按钮切换品牌
$("#bd-bags").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-next").bind("click",function(){
	scurIndex3++;
	if(scurIndex3 == list3.find("li").length){
		scurIndex3 = 1;
		list3.css("left",0);     
	}
	list3.animate({left:scurIndex3*-160},300,"linear");
})
//点击左侧按钮切换品牌
$("#bd-bags").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-pre").bind("click",function(){
	scurIndex3--;
	if(scurIndex3 == -1){
		scurIndex3 = list3.find("li").length-2;
		list3.css("left",(list3.find("li").length-1)*-160);     
	}
	list3.animate({left:scurIndex3*-160},300,"linear");
})
//body区bd-bags中间轮播图左右按钮切换的js效果

var curIndex = 0;
$("#bd-bags").find(".luxury-cal").find(".luxury-cal-slide").mouseenter(function(){
	//左右按钮滑入
	$(this).find(".luxury-slide-left").stop().animate({left:0},500,"linear");
	$(this).find(".luxury-slide-right").stop().animate({right:0},500,"linear");
	//点击右侧按钮切换图片
	$("#bd-bags").find(".luxury-cal-slide").find(".luxury-slide-right").bind("click",function(){
//		alert(1)
		curIndex++;
		if(curIndex >= 1){
			curIndex = 1;
			$('#bd-bags').find('.luxury-cal-slide').find('.scroll-prenext').animate({left:curIndex*-390},300,"linear");     
		}
		//下面圆点的变化
		$('#bd-bags').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").attr("class","");
		$('#bd-bags').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").eq(curIndex).attr("class","luxury-slide-ul-active");
	})
	//点击下面的圆点切换图片
	$('#bd-bags').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").bind("click",function(){
		//当前li的下标$(this).index();
		$('#bd-bags').find('.luxury-cal-slide').find('.scroll-prenext').animate({left:($(this).index())*-390},300,"linear");
		$('#bd-bags').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").attr("class","");
		$(this).attr("class","luxury-slide-ul-active");
	})
	//点击左侧按钮切换图片
	$("#bd-bags").find(".luxury-cal-slide").find(".luxury-slide-left").bind("click",function(){
//		alert(1)
		curIndex--;
		if(curIndex <= 0){
			curIndex = 0;
			$('#bd-bags').find('.luxury-cal-slide').find('.scroll-prenext').animate({left:curIndex*0},300,"linear");    
		}
		//下面圆点的变化
		$('#bd-bags').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").attr("class","");
		$('#bd-bags').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").eq(curIndex).attr("class","luxury-slide-ul-active");
	})
	//滑入右侧按钮颜色变化
	$("#bd-bags").find(".luxury-cal-slide").find(".luxury-slide-right").hover(function(){
		$(this).css("background-position-y",-60);
	},function(){
		$(this).css("background-position-y",0);
	})
	//滑入左侧按钮颜色变化
	$("#bd-bags").find(".luxury-cal-slide").find(".luxury-slide-left").hover(function(){
		$(this).css("background-position-y",-60);
	},function(){
		$(this).css("background-position-y",0);
	})
})
//左右按钮滑出
$("#bd-bags").find(".luxury-cal").find(".luxury-cal-slide").mouseleave(function(){
	$(this).find(".luxury-slide-left").stop().animate({left:-30},500,"linear");
	$(this).find(".luxury-slide-right").stop().animate({right:-30},500,"linear");
})
//body区bd-makeup左侧小轮播图的特效
var list4 = $("#bd-makeup").find(".luxury-nav").find(".luxury-nav2").find(".luxury-scroll");
//li的长度alert(list.find("li").length);
var scurIndex4 = 0;
//点击右侧按钮切换品牌
$("#bd-makeup").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-next").bind("click",function(){
	scurIndex4++;
	if(scurIndex4 == list4.find("li").length){
		scurIndex4 = 1;
		list4.css("left",0);     
	}
	list4.animate({left:scurIndex4*-160},300,"linear");
})
//点击左侧按钮切换品牌
$("#bd-makeup").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-pre").bind("click",function(){
	scurIndex4--;
	if(scurIndex4 == -1){
		scurIndex4 = list4.find("li").length-2;
		list4.css("left",(list4.find("li").length-1)*-160);     
	}
	list4.animate({left:scurIndex4*-160},300,"linear");
})
//body区bd-outdoor左侧小轮播图的特效
var list5 = $("#bd-outdoor").find(".luxury-nav").find(".luxury-nav2").find(".luxury-scroll");
//li的长度alert(list.find("li").length);
var scurIndex5 = 0;
//点击右侧按钮切换品牌
$("#bd-outdoor").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-next").bind("click",function(){
	scurIndex5++;
	if(scurIndex5 == list5.find("li").length){
		scurIndex5 = 1;
		list5.css("left",0);     
	}
	list5.animate({left:scurIndex5*-160},300,"linear");
})
//点击左侧按钮切换品牌
$("#bd-outdoor").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-pre").bind("click",function(){
	scurIndex5--;
	if(scurIndex5 == -1){
		scurIndex5 = list5.find("li").length-2;
		list5.css("left",(list5.find("li").length-1)*-160);     
	}
	list5.animate({left:scurIndex5*-160},300,"linear");
})
//body区bd-outdoor中间轮播图左右按钮切换的js效果

var curIndex = 0;
$("#bd-outdoor").find(".luxury-cal").find(".luxury-cal-slide").mouseenter(function(){
	//左右按钮滑入
	$(this).find(".luxury-slide-left").stop().animate({left:0},500,"linear");
	$(this).find(".luxury-slide-right").stop().animate({right:0},500,"linear");
	//点击右侧按钮切换图片
	$("#bd-outdoor").find(".luxury-cal-slide").find(".luxury-slide-right").bind("click",function(){
//		alert(1)
		curIndex++;
		if(curIndex >= 1){
			curIndex = 1;
			$('#bd-outdoor').find('.luxury-cal-slide').find('.scroll-prenext').animate({left:curIndex*-390},300,"linear");     
		}
		//下面圆点的变化
		$('#bd-outdoor').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").attr("class","");
		$('#bd-outdoor').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").eq(curIndex).attr("class","luxury-slide-ul-active");
	})
	//点击下面的圆点切换图片
	$('#bd-outdoor').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").bind("click",function(){
		//当前li的下标$(this).index();
		$('#bd-outdoor').find('.luxury-cal-slide').find('.scroll-prenext').animate({left:($(this).index())*-390},300,"linear");
		$('#bd-outdoor').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").attr("class","");
		$(this).attr("class","luxury-slide-ul-active");
	})
	//点击左侧按钮切换图片
	$("#bd-outdoor").find(".luxury-cal-slide").find(".luxury-slide-left").bind("click",function(){
//		alert(1)
		curIndex--;
		if(curIndex <= 0){
			curIndex = 0;
			$('#bd-outdoor').find('.luxury-cal-slide').find('.scroll-prenext').animate({left:curIndex*0},300,"linear");    
		}
		//下面圆点的变化
		$('#bd-outdoor').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").attr("class","");
		$('#bd-outdoor').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").eq(curIndex).attr("class","luxury-slide-ul-active");
	})
	//滑入右侧按钮颜色变化
	$("#bd-outdoor").find(".luxury-cal-slide").find(".luxury-slide-right").hover(function(){
		$(this).css("background-position-y",-60);
	},function(){
		$(this).css("background-position-y",0);
	})
	//滑入左侧按钮颜色变化
	$("#bd-outdoor").find(".luxury-cal-slide").find(".luxury-slide-left").hover(function(){
		$(this).css("background-position-y",-60);
	},function(){
		$(this).css("background-position-y",0);
	})
})
//左右按钮滑出
$("#bd-outdoor").find(".luxury-cal").find(".luxury-cal-slide").mouseleave(function(){
	$(this).find(".luxury-slide-left").stop().animate({left:-30},500,"linear");
	$(this).find(".luxury-slide-right").stop().animate({right:-30},500,"linear");
})
//body区bd-underwear左侧小轮播图的特效
var list6 = $("#bd-underwear").find(".luxury-nav").find(".luxury-nav2").find(".luxury-scroll");
//li的长度alert(list.find("li").length);
var scurIndex6 = 0;
//点击右侧按钮切换品牌
$("#bd-underwear").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-next").bind("click",function(){
	scurIndex6++;
	if(scurIndex6 == list6.find("li").length){
		scurIndex6 = 1;
		list6.css("left",0);     
	}
	list6.animate({left:scurIndex6*-160},300,"linear");
})
//点击左侧按钮切换品牌
$("#bd-underwear").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-pre").bind("click",function(){
	scurIndex6--;
	if(scurIndex6 == -1){
		scurIndex6 = list6.find("li").length-2;
		list6.css("left",(list6.find("li").length-1)*-160);     
	}
	list6.animate({left:scurIndex6*-160},300,"linear");
})
//body区bd-underwear中间轮播图左右按钮切换的js效果

var curIndex = 0;
$("#bd-underwear").find(".luxury-cal").find(".luxury-cal-slide").mouseenter(function(){
	//左右按钮滑入
	$(this).find(".luxury-slide-left").stop().animate({left:0},500,"linear");
	$(this).find(".luxury-slide-right").stop().animate({right:0},500,"linear");
	//点击右侧按钮切换图片
	$("#bd-underwear").find(".luxury-cal-slide").find(".luxury-slide-right").bind("click",function(){
//		alert(1)
		curIndex++;
		if(curIndex >= 1){
			curIndex = 1;
			$('#bd-underwear').find('.luxury-cal-slide').find('.scroll-prenext').animate({left:curIndex*-390},300,"linear");     
		}
		//下面圆点的变化
		$('#bd-underwear').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").attr("class","");
		$('#bd-underwear').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").eq(curIndex).attr("class","luxury-slide-ul-active");
	})
	//点击下面的圆点切换图片
	$('#bd-underwear').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").bind("click",function(){
		//当前li的下标$(this).index();
		$('#bd-underwear').find('.luxury-cal-slide').find('.scroll-prenext').animate({left:($(this).index())*-390},300,"linear");
		$('#bd-underwear').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").attr("class","");
		$(this).attr("class","luxury-slide-ul-active");
	})
	//点击左侧按钮切换图片
	$("#bd-underwear").find(".luxury-cal-slide").find(".luxury-slide-left").bind("click",function(){
//		alert(1)
		curIndex--;
		if(curIndex <= 0){
			curIndex = 0;
			$('#bd-underwear').find('.luxury-cal-slide').find('.scroll-prenext').animate({left:curIndex*0},300,"linear");    
		}
		//下面圆点的变化
		$('#bd-underwear').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").attr("class","");
		$('#bd-underwear').find('.luxury-cal-slide').find('.luxury-slide-ul').find("li").eq(curIndex).attr("class","luxury-slide-ul-active");
	})
	//滑入右侧按钮颜色变化
	$("#bd-underwear").find(".luxury-cal-slide").find(".luxury-slide-right").hover(function(){
		$(this).css("background-position-y",-60);
	},function(){
		$(this).css("background-position-y",0);
	})
	//滑入左侧按钮颜色变化
	$("#bd-underwear").find(".luxury-cal-slide").find(".luxury-slide-left").hover(function(){
		$(this).css("background-position-y",-60);
	},function(){
		$(this).css("background-position-y",0);
	})
})
//左右按钮滑出
$("#bd-underwear").find(".luxury-cal").find(".luxury-cal-slide").mouseleave(function(){
	$(this).find(".luxury-slide-left").stop().animate({left:-30},500,"linear");
	$(this).find(".luxury-slide-right").stop().animate({right:-30},500,"linear");
})
//body区bd-sweet左侧小轮播图的特效
var list7 = $("#bd-sweet").find(".luxury-nav").find(".luxury-nav2").find(".luxury-scroll");
//li的长度alert(list.find("li").length);
var scurIndex7 = 0;
//点击右侧按钮切换品牌
$("#bd-sweet").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-next").bind("click",function(){
	scurIndex7++;
	if(scurIndex7 == list7.find("li").length){
		scurIndex7 = 1;
		list7.css("left",0);     
	}
	list7.animate({left:scurIndex7*-160},300,"linear");
})
//点击左侧按钮切换品牌
$("#bd-sweet").find(".luxury-nav").find(".luxury-nav2").find(".luxury-nav2-pre").bind("click",function(){
	scurIndex7--;
	if(scurIndex7 == -1){
		scurIndex7 = list7.find("li").length-2;
		list7.css("left",(list7.find("li").length-1)*-160);     
	}
	list7.animate({left:scurIndex7*-160},300,"linear");
})
//body区相同部分的js效果

//左侧小块的滑入滑出事件
var addP = $("<p></p>");
$(".luxury-nav1").find("li").append(addP);
$(".luxury-nav1").find("li").hover(function(){
	$(this).find("p").show();
	$(this).find("a").css("color","#fff");
},function(){
	$(this).find("p").hide();
	$(this).find("a").css("color","#666");
})

//中间部分的轮播图滑入有被阴影覆盖
var addBlank = $("<p></p>");
$(".luxury-cal").find(".luxury-slide-scroll").find(".scroll-prenext").find("a").append(addBlank);
$(".luxury-cal").find(".luxury-slide-scroll").find(".scroll-prenext").find("a").hover(function(){
	$(this).find("p").show();
},function(){
	$(this).find("p").hide();
})
//右侧图片的边框线的动态变化
var addLine = $('<p><div class="border border-top" style="width: 0;"></div><div class="border border-right" style="height: 0;"></div><div class="border border-bottom" style="width: 0;"></div><div class="border border-left" style="height: 0;"></div></p>');	
$(".luxury-banner").find(".luxury-banner-main").find(".luxury-banner-div").find(".border-animation").append(addLine);
$(".luxury-banner").find(".luxury-banner-main").find(".luxury-banner-div").find(".border-animation").hover(function(){
	$(this).find(".border-top").stop().animate({width:272},50,"linear");
	$(this).find(".border-right").stop().animate({height:182},50,"linear");
	$(this).find(".border-bottom").stop().animate({width:272},50,"linear");
	$(this).find(".border-left").stop().animate({height:182},50,"linear");
},function(){
	$(this).find(".border-top").stop().animate({width:0},50,"linear");
	$(this).find(".border-right").stop().animate({height:0},50,"linear");
	$(this).find(".border-bottom").stop().animate({width:0},50,"linear");
	$(this).find(".border-left").stop().animate({height:0},50,"linear");
})

//bd-card内的js特效
$("#bd-card").find(".card").find("a").hover(function(){
	$(this).find("p").show();
},function(){
	$(this).find("p").hide();
})
//侧边栏的效果
//滑入滑出效果
$(document).bind("scroll",function(){
	if($(document).scrollTop() >= 900){
	    $(".float-nav").show();
	}else{
		$(".float-nav").hide();
	}
	
})
//点击回到顶部
$(".y-floor-top").bind("click",function(){
	$("body,html").animate({scrollTop:0},30,"linear");
	return false;
})

var oDiv = $(".floorall");
var oA = $(".float-nav").find("a");

for(var i=0;i<oA.length;i++){
  	oA[i].index= i;
  	oA[i].onmouseover=function(){
	   $(this).find(".y-first").show();
	   $(this).find(".y-first").html(oA[this.index].title);
	}
	oA[i].onmouseout=function(){
 		$(this).find(".y-first").hide();
	}
}

