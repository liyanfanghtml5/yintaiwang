//头部的js

//微信，手机银泰的js

$(".li-wechat").hover(function(){
	$(".chat-blank").show();
	$(".chat-code").show();
},function(){
	$(".chat-blank").hide();
	$(".chat-code").hide();
})

$(".log-phone").hover(function(){
	$(".log-blank").show();
	$(".phone-code").show();
},function(){
	$(".log-blank").hide();
	$(".phone-code").hide();
})

//我的银泰的js						

$(".li-middle").hover(function(){
	$(".my-all").show();
	$(".my-blank").show();
},function(){
	$(".my-all").hide();
	$(".my-blank").hide();
})
$(".my-all").find("p").hover(function(){
	$(this).find("a").css("text-decoration","underline");
},function(){
	$(this).find("a").css("text-decoration","none");
})

//购物车的js

$(".icart").hover(function(){
	$(".bag-blank").show();
},function(){
	$(".bag-blank").hide();
})

//导航的js


$(".nav").find("li").find("a").hover(function(){
	$(this).find("p").attr("class","active");
	$(this).find("p").css("width",$(this).width());
},function(){
	$(this).find("p").attr("class","");
})




//通过ajax获取菜单
$.ajax({
	url:'json/nav.json',
	type:'GET',
	success:function(date){
		var html = '';
		for(var i = 0 ; i < date.length; i++){
			html += '<dl class="list-dl1"><dt class="list-dt1"><a href="javascript:;" class="dl-dta1"><em></em>'+ date[i].title +'</a><i></i><div class=""><a href="javascript:;" class="hot">' + date[i].main + '</a><span></span></div></dt><dd class="list-dd1"><div class="dd-nav cf"><div class="nav-left">';
			for(var j = 0;j < date[i].child.type.length;j++){
				html += '<div class="left-div cf"><h3><a href="javascript:;">'+ date[i].child.type[j].title +'</a></h3><p>';
				for(var k = 0;k < date[i].child.type[j].kids.length;k++){
					html += '<a href="javascript:;">'+ date[i].child.type[j].kids[k] +'</a>';
				}
				html += '</p></div>';
			}
			html += '</div><div class="nav-right cf"><h3>'+ date[i].child.brand.title +'</h3><p>';
			for (var j = 0; j < date[i].child.brand.des_child.length; j++) {
				html += '<a target="_blank" href="javascript:;">'+ date[i].child.brand.des_child[j] +'</a>';
			}
			html += '</p></div></div></dd></dl>';
		}
		
		$('.list-nav').html(html);
		
	for (var i = 0;i < date.length; i++) {
		$("#menu").find(".list-nav").find("dl").eq(i).find("dt").find("a").find("em").css("background",date[i].img1);
	}
	//header区menu菜单列表的js效果

	$("#menu").find(".list-nav").find("dl").hover(function(){
		$(this).css("background","#E5004F");
		$(this).find("dd").show();
		$(this).find("dt").find("div").attr("class","bgfirst");
		$(this).find("dt").find("div").find("span").hide();
		$(this).find("dt").find("a").find("em").css("background",date[$(this).index()].img2);
	},function(){
		$(this).css("background","#666");
		$(this).find("dd").hide();
		$(this).find("dt").find("div").attr("class","");
		$(this).find("dt").find("div").find("span").show();
		$(this).find("dt").find("a").find("em").css("background",date[$(this).index()].img1);
	})
	$("#menu").find(".list-nav").find("dl").find("dt").find("div").find("a").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	})
	

	}
})




