//判断用户名验证用户名
var userName;    //   获取输入的手机号/E-mail
$("#resignerName").mousedown(function(){
	$(this).parent().find(".tips").find( "p" ).html( '请输入你的手机号/E-mail!' );
	$(this).parent().find(".tips").find( "p" ).attr("class","wrong");
})

$("#resignerName").bind("blur",function(){
	userName = $(this).val();
	var reg1 = /(^1(3|5|7|8)[0-9]{9}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/;
if(userName){
 	if(reg1.test( userName )){
		$(this).parent().find(".tips").find( "p" ).html( '该用户名可以使用!' );
		$(this).parent().find(".tips").find( "p" ).attr("class","");
		$(this).parent().parent().find(".picture-code").show();
		$(this).parent().parent().find(".tele-code").find(".phone").show();
	}else{
		$(this).parent().find(".tips").find( "p" ).html( '请输入正确的手机号码' );
		$(this).parent().find(".tips").find( "p" ).attr("class","wrong");
	}	
}else{
 	$(this).parent().find(".tips").find( "p" ).html( '手机号/E-mail用于登录和找回密码，请正确填写'); 
	$(this).parent().find(".tips").find( "p" ).attr("class","");
 }
})
//判断密码格式正确
var password1;    //   获取输入的手机号/E-mail
$("#secreat").mousedown(function(){
	$(this).parent().find(".weak").find( "p" ).html( '密码不能为空' );
	$(this).parent().find(".weak").find( "p" ).attr("class","wrong");
})
$("#secreat").keyup(function(){
	password1 = $("#secreat").val();
	if(password1.length>=6){
		$(this).parent().find(".weak").show();
		}
})

$("#secreat").bind("blur",function(){
	password1 = $(this).val();
	var reg2 = /\w{6,16}/;
 	if(password1){
 		if(reg2.test(password1)){
	 		if(password1 == /([a-z]{6,16})|([A-Z]{6,16})|([0-9]{6,16})/){
	 			$("#secreat").keyup(function(){
					password1 = $("#secreat").val();
					if(password1.length>=6){
						$(this).parent().find(".weak").show();
						}
				})
	 			$(this).parent().find(".weak").find("span").find("i").eq(0).attr("class","cursor");
	 		}else if(password1 == /([a-z][A-Z]{6,16})|([A-Z][0-9]{6,16})|([a-z][0-9]{6,16})/){
	 			$("#secreat").keyup(function(){
					password1 = $("#secreat").val();
					if(password1.length>=6){
						$(this).parent().find(".weak").show();
						}
				})
	 			$(this).parent().find(".weak").find("span").find("i").eq(1).attr("class","cursor");
	 		}else if(password1 == /[a-z][A-Z][0-9]\.{6,16}/){
	 			$("#secreat").keyup(function(){
					password1 = $("#secreat").val();
					if(password1.length>=6){
						$(this).parent().find(".weak").show();
						}
				})
	 			$(this).parent().find(".weak").find("span").find("i").eq(2).attr("class","cursor");
	 		}
		}else{
			
			$(this).parent().find(".tips").find( "p" ).html( '长度为6-16个字符，请确认' );
			$(this).parent().find(".tips").find( "p" ).attr("class","wrong");
		}	
 	}else{
 		$(this).parent().find(".tips").find( "p" ).html( '密码不能为空'); 
		$(this).parent().find(".tips").find( "p" ).attr("class","wrong");
 	}
})



//图形验证码
var graph;
















