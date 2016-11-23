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


$.ajax({
	url:'json/goodslist.json',
	type:'GET',
	success:function(date){
		var html0 = '';
		for(var i = 0 ; i < date.length; i++){
		    html0 += '<li class="p-listinfo"><div class="p-listimgBig"><a href="javascript:;" target="_blank"><img src='+ date[i].bigImg +'/></a></div><div class="p-listimgSmall" style="overflow: hidden;"><ul class="p-listimgPanel cf" style="position: absolute;left: 10px;width: 208px;">';
		    for(var j = 0 ;j < date[i].smallImg.length; j++){
		    	html0 += '<li class="show"><a href="javascript:;" target="_blank"><img src='+ date[i].smallImg[j] +'/></a></li>';
			}
		    html0 += '</ul></div><div class="p-listPrices"><strong class="y-p">￥'+ date[i].y_price +'</strong><em class="m-p">'+ date[i].m_price +'</em></div><div class="p-listTxt"><p><a href="javascript:;">'+ date[i].txt +'</a></p></div><div class="p-listcustomIcon">';
		    if(date[i].icon){
		    	html0 += '<span class="p-listcustomIconBg">直降</span>';
		    }
		    html0 += '</div><div class="p-listaddCart cf"><a href="javascript:;" class="addCart" id="'+date[i].id+'"></a><a href="javascript:;" class="addCollect"><i></i>收藏</a></div><div class="p-listaddInfo"><p class="p-preferenInfo"></p><p class="p-storeIntrance"><a href="javascript:;" target="_blank">'+ date[i].brand +'</a></p></div></li>';
		}
		$('.p-listMain').html(html0);
		
	for (var i = 0;i < date.length; i++) {
		$(".addCart").css("background",date[i].cart1);
		$(".addCollect").find("i").css("background",date[i].collect1);
		
	}
	//页面刷新时获取购物车数量;
	sc_car();
	sc_msg();
	
	$('.addCart').on('click',function(){
		$(".bag-blank").find("p").hide();
		$(".bag-blank").find(".yt-settleup").show();
		//购物车数量增加;
		var id = this.id
		var first = $.cookie('goods')==null?true:false;//判断是否有cookie进行添加
		var same = false;//判断时候已经追加
		//是否是第一次添加
		if(first){
			//第一次添加,建立json结构。
			$.cookie('goods','[{id:'+id+',num:1}]',{expires:7,path:'/'});
			$.cookie('first','false',{expires:7,path:'/'});
		}else{
			var str = $.cookie('goods');
			var arr = eval(str);
			//遍历所有对象。如果id相同，让该商品数量递增 ;
			for(var attr in arr){
				if(arr[attr].id == id){		
					arr[attr].num = arr[attr].num + 1;  //让json结构中num自增。
					var cookieStr = JSON.stringify(arr);//将json对象转换成字符串.
					$.cookie('goods',cookieStr);
					same = true;
				}
			}
			//如果id不同，重新建立商品对象;
			
			if(!same){
				var obj  = {id:id,num:1};
				arr.push(obj);
				var cookieStr = JSON.stringify(arr);
				$.cookie('goods',cookieStr);
			}
		}
		sc_car();
		sc_msg();

		
	})
	//详情页的加入购物车

	var add_num = 1;
	$("#addnum").on("click",function(){
		add_num++;
		$("#buynum").val(add_num);
	})
	$("#reducenum").on("click",function(){
		add_num--;
		if(add_num <= 1){
			add_num = 1;
		}
		$("#buynum").val(add_num);
	})
	$(".incart").on("click",function(){
		//购物车数量增加;
		if(onC1&&onC2){
			var id = this.id
//			alert($.cookie('goods'))
			var first = $.cookie('goods')==null?true:false;
			var same = false;
			if(first){
				$.cookie('goods','[{id:'+id+',num:add_num}]',{expires: 7, path: '/' });
				$.cookie('first','false',{expires: 7, path: '/' });
			}else{
				var str = $.cookie('goods');
				var arr = eval(str);
				for(var attr in arr){
					if(arr[attr].id == id){		
						arr[attr].num = arr[attr].num + add_num;  
						var cookieStr = JSON.stringify(arr);
						$.cookie('goods',cookieStr);
						same = true;
					}
				}
				if(!same){
					var obj  = {id:id,num:add_num};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie('goods',cookieStr);
				}
			}
			sc_car();
			sc_msg();
		}else if(onC1){
			alert("请选择鞋子的尺码大小！");
		}else if(onC2){
			alert("请选择鞋子的颜色！");
		}else{
			alert("请选择鞋子的颜色和尺码！");
		}
	})
	//购物车;
	function sc_car(){
		var sc_str = $.cookie('goods');
		if(sc_str){//如果购物车cookie不为空。
			var sc_obj = eval(sc_str);
			var sc_num = 0 ; 
			for(var i in sc_obj){
				sc_num = Number(sc_obj[i].num) + sc_num;
			}
			$('.sc_num').html(sc_num);
		}
	}
	function sc_msg(){
		$.ajax({
			url:'json/goodslist.json',
			type:'GET',
			success:function(date){
				var sc_str = $.cookie('goods');
				if(sc_str){
					var sc_obj = eval(sc_str);
					var sc_num = 0 ;
					var sc_price = 0;
					var html1 = ''; 
					for(var i in sc_obj){					
						html1 += '<li class="settle-group J-settle-group"><div class="p-single cf J-P-single"><div class="p-one"><div class="p-img"><a href="javascript:;" target="_blank"><img src='+ date[sc_obj[i].id].bigImg +' width="32" height="42"/></a></div><div class="p-name"><a href="javascript:;" target="_blank">'+ date[sc_obj[i].id].txt +'</div></div><div class="p-details"><span class="p-price"><strong>￥'+ date[sc_obj[i].id].y_price +'</strong><i>x</i>'+sc_obj[i].num+'</span><br /><em class="integral hidden" style="display: none;">+<i>0</i>积分<br /></em><a class="J-delate" href="javascript:void(0);" name="1"  id="'+sc_obj[i].id+'">删除</a></div></div></li>';
						sc_num += parseInt(sc_obj[i].num);
						sc_price += parseInt(date[sc_obj[i].id].y_price)*parseInt(sc_obj[i].num);
					}
					$('.bag-blank ul').html(html1);
//					alert($(".settle-group").length)
					if ($(".settle-group").length >= 4) {
						$(".bag-blank ul").css("overflow-y", "scroll");
						$(".bag-blank ul").css("height", 310);
					}
					$('#J-shopcart').find('.J-qty').html(sc_num);
					$('#cartcount').html(sc_num);
					$('.settle-heckout').find('.J-yta').html('￥'+sc_price);
					$('.J-delate').on("click",function(){
						var id = this.id;
						var str = $.cookie('goods');
						var arr = eval(str);
						for(var attr in arr){
							if(arr[attr].id == id){	
								arr.splice(attr,1);
								var cookieStr = JSON.stringify(arr);
								$.cookie('goods',cookieStr);
							}
						}
						$(this).parent().parent().parent().remove();
						sc_car();
						sc_msg();
				
					})
				}
				if($(".bag-blank").find("ul").find("li").size()==0){
					$(".bag-blank").find("p").show();
					$(".yt-settleup").hide();
				} else {
					$(".bag-blank").find("p").hide();
					$(".yt-settleup").show();	
				}
			}
		})
	}
	
	//滑入滑出加入购物车背景图改变
	$(".addCart").hover(function(){
//		$(this).parent().parent().index();
		$(this).css("background",date[$(this).parent().parent().index()].cart2);
	},function(){
		$(this).css("background",date[$(this).parent().parent().index()].cart1);
	})
	//点击收藏
	$(".addCollect").bind("click",function(){
		$(this).find("i").css("background",date[$(this).parent().parent().index()].collect2);
	})
	//滑入滑出商品中小列表上方图片切换
	$(".p-listimgPanel").find("li").hover(function(){
//		alert($(this).index())
		$(this).find("a").css("border-color","#E5004F");
		$(this).parent().parent().parent().find(".p-listimgBig").find("a").find("img").attr("src",date[$(this).parent().parent().parent().index()].smallImg[$(this).index()]);
	},function(){
		$(this).find("a").css("border-color","#e2e2e2");
	})
	//点击第一个进入详情页
	$(".p-listMain").find("li").eq(0).find(".p-listimgBig").bind("click",function(){
		$(this).find("a").attr("href","4_details.html");
	})
	//滑入滑出商品加一个边框
	$('.p-listMain').find(".p-listinfo").hover(function(){
		$(this).addClass("p-listinfoOn");
	},function(){
		$(this).removeClass("p-listinfoOn");
	})
	//滑入滑出品牌店时透明度改变
	$('.p-storeIntrance').find("a").hover(function(){
		$(this).animate({opacity:0.8},30,"linear");
	},function(){
		$(this).animate({opacity:1},30,"linear");
	})
	}
})	
//选择鞋的颜色
var onC1 = false;
var onC2 = false;
$(".sel-color").find(".item").find("a").bind("click",function(){
	$(".sel-color").find(".item").find("a").css("border-color","#ccc");
	$(".sel-color").find(".item").removeClass("selected");
	$(this).css("border-color","#E5004F");
	$(this).parent().addClass("selected");
	onC1 = true;
})
//选择鞋码的大小
$(".sel-size").find(".item").find("a").bind("click",function(){
	$(".sel-size").find(".item").find("a").css("border-color","#ccc");
	$(".sel-size").find(".item").removeClass("selected");
	$(this).css("border-color","#E5004F");
	$(this).parent().addClass("selected");
	onC2 = true;
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
		
		
		
		var h1 = $(this).find("dd").show().find(".nav-left").outerHeight();
		var h2 = $(this).find("dd").show().find(".nav-right").outerHeight();
		var n = h1 - h2
		if( n > 0){
			$(this).find("dd").show().find(".nav-right").css("height", parseInt($(this).find("dd").show().find(".nav-right").css("height")) + n)
		}else{
			$(this).find("dd").show().find(".nav-left").css("height", parseInt($(this).find("dd").show().find(".nav-left").css("height")) - n)
			
		};
		
		
		
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




