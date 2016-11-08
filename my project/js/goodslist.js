//滑入滑出菜单出现
$("#menu").mouseover(function(){
	$(this).parent().find(".list-nav").css("visibility","visible");
})
$("#menu").mouseout(function(){
	$(this).parent().find(".list-nav").css("visibility","hidden");
})
$.ajax({
	url:'json/goodslist.json',
	type:'GET',
	success:function(date){
		var html = '';
		for(var i = 0 ; i < date.length; i++){
		    html += '<li class="p-listinfo"><div class="p-listimgBig"><a href="javascript:;" target="_blank"><img src='+ date[i].bigImg +'/></a></div><div class="p-listimgSmall" style="overflow: hidden;"><ul class="p-listimgPanel cf" style="position: absolute;left: 10px;width: 208px;">';
		    for(var j = 0 ;j < date[i].smallImg.length; j++){
		    	html += '<li class="show"><a href="javascript:;" target="_blank"><img src='+ date[i].smallImg[j] +'/></a></li>';
			}
		    html += '</ul></div><div class="p-listPrices"><strong class="y-p">'+ date[i].y_price +'</strong><em class="m-p">'+ date[i].m_price +'</em></div><div class="p-listTxt"><p><a href="javascript:;">'+ date[i].txt +'</a></p></div><div class="p-listcustomIcon">';
		    if(date[i].icon){
		    	html += '<span class="p-listcustomIconBg">直降</span>';
		    }
		    html += '</div><div class="p-listaddCart cf"><a href="javascript:;" class="addCart"></a><a href="javascript:;" class="addCollect"><i></i>收藏</a></div><div class="p-listaddInfo"><p class="p-preferenInfo"></p><p class="p-storeIntrance"><a href="javascript:;" target="_blank">'+ date[i].brand +'</a></p></div></li>';
		}
		$('.p-listMain').html(html);
		
	for (var i = 0;i < date.length; i++) {
		$(".addCart").css("background",date[i].cart1);
		$(".addCollect").find("i").css("background",date[i].collect1);
		
	}
	$(".addCart").hover(function(){
//		$(this).parent().parent().index();
		$(this).css("background",date[$(this).parent().parent().index()].cart2);
	},function(){
		$(this).css("background",date[$(this).parent().parent().index()].cart1);
	})
	$(".addCollect").bind("click",function(){
		$(this).find("i").css("background",date[$(this).parent().parent().index()].collect2);
	})
	$(".p-listimgPanel").find("li").hover(function(){
//		alert($(this).index())
		$(this).find("a").css("border-color","#E5004F");
		$(this).parent().parent().parent().find(".p-listimgBig").find("a").find("img").attr("src",date[$(this).parent().parent().parent().index()].smallImg[$(this).index()]);
	},function(){
		$(this).find("a").css("border-color","#e2e2e2");
	})
	$(".p-listMain").find("li").eq(0).bind("click",function(){
		$(this).find("a").attr("href","4_details.html");
	})
	$('.p-listMain').find(".p-listinfo").hover(function(){
		$(this).addClass("p-listinfoOn");
		$(this).find(".p-listaddInfo").show();
	},function(){
		$(this).removeClass("p-listinfoOn");
		$(this).find(".p-listaddInfo").hide();
	})
	}
})	