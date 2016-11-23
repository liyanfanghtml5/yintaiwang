//登录时判断是否注册
var onOff = false;
var Number;
$("#resignerName").blur(function(){
	Number =$(this).val();
	var reg = /(^1(3|5|7|8)[0-9]{9}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/;
	var user = $.cookie("username");
	if(Number){
		if(user != Number && reg.test( Number )){
			alert("你还未注册,请先去注册");
	    }else{
	    	if( user != Number ){
				$(this).parent().find( ".tips" ).show();
				$(this).parent().find( ".tips" ).find("p").html( '输入的账号有误，请重新输入' );
				$(this).parent().find( ".tips" ).find("p").css("color","#E5004F");
			}else{
				$(this).parent().find( ".tips" ).hide();
			}
	    }
	}else{
		$(this).parent().find(".tips").show();
		$(this).parent().find(".tips").find("p").html( '请输入手机号或E-mail'); 
		$(this).parent().find(".tips").find("p").css("color","#E5004F");
	}
	
})
//判断密码是否正确
$("#secreat").blur(function(){
	var val0 = $(this).val();
	var passwords = $.cookie("password");
	if(val0){
    	if( passwords != val0 ){
			$(this).parent().find( ".tips" ).show();
			$(this).parent().find( ".tips" ).find("p").html( '输入的密码有误，请重新输入' );
			$(this).parent().find( ".tips" ).find("p").css("color","#E5004F");
		}else{
			$(this).parent().find( ".tips" ).hide();
			$(".client-list").find(".delay").show();
		}
    }else{
		$(this).parent().find(".tips").show();
		$(this).parent().find(".tips").find("p").html( '登录密码不能为空！'); 
		$(this).parent().find(".tips").find("p").css("color","#E5004F");
	}
})
//输入验证码是否正确
var graph0;
$("#changePic").hover(function(){
	$(this).css("text-decoration","underline");
	$(this).css("color","#E4004D");
},function(){
	$(this).css("text-decoration","none");
	$(this).css("color","#999");
})
$("#graphPic").html(testCode(4));
$("#changePic").click(function(){
	$("#graphPic").html(testCode(4));
})

//判断验证码是否正确
$("#graphCode").blur(function(){
	graph0 = $(this).val();
	if(graph0){
		if ($("#graphPic").html() == graph0 ) {
			$(this).parent().find(".tips").find( "p" ).html( '' );
		} else{
			$(this).parent().find(".tips").show();
			$(this).parent().find(".tips").find( "p" ).html("图形验证码输入不一致，请重新输入！");
			$(this).parent().find(".tips").find("p").css("color","#E5004F");
		}
	}else{
		$(this).parent().find(".tips").show();
		$(this).parent().find(".tips").find( "p" ).html("图形验证码不能为空！");
		$(this).parent().find(".tips").find("p").css("color","#E5004F");
	}
	
})

//点击登录显示登录成功
$(".client-submit").click(function(){
	var value1 = $("#resignerName").val();
	var value2 = $("#secreat").val();
	if($.cookie("username")==value1&&$.cookie("password")==value2){
		alert("您已登录成功");
    }
})



//生成四位验证码
function testCode(n){ //传入n,生成n位的验证码
	var arr = []; //记录每一次生成的验证码
	for(var i = 0; i < n; i++){
		var num = parseInt(Math.random() * 100);
		if(num >= 0 && num <= 9){
			arr.push(num);
		}else if(num >= 10 && num <= 35){
			var charStr = String.fromCharCode(num + 87);
			arr.push(charStr);
		}else if(num >= 65 && num <= 90){
			var charStr = String.fromCharCode(num);
			arr.push(charStr);
		}else{
			i--; //再去将那次无用操作补回来
		}
	}
	return arr.join("");
}