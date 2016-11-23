//判断用户名验证用户名
var flag1 = 0;
var flag2 = 0;
var flag3 = 0;
var flag4 = 0;
var flag5 = 0;
var userName;    //   获取输入的手机号/E-mail
$("#resignerName").mousedown(function(){
	$(this).parent().find(".tips").find( "p" ).html( '请输入你的手机号/E-mail!' );
	$(this).parent().find(".tips").find( "p" ).attr("class","wrong");
})

$("#resignerName").bind("blur",function(){
	userName = $(this).val();
	var reg1 = /(^1(3|5|7|8)[0-9]{9}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/;
	if($.cookie("username")==userName){
		alert("该手机已被注册,直接去登录");
		flag1 = 0;
	}else{
		if(userName){
		 	if(reg1.test( userName )){
				$(this).parent().find(".tips").find( "p" ).html( '该用户名可以使用!' );
				$(this).parent().find(".tips").find( "p" ).attr("class","");
				$(this).parent().parent().find(".picture-code").show();
				$(this).parent().parent().find(".tele-code").find(".phone").show();
				flag1 = 1;
			}else{
				$(this).parent().find(".tips").find( "p" ).html( '请输入正确的手机号码' );
				$(this).parent().find(".tips").find( "p" ).attr("class","wrong");
				flag1 = 0;
			}	
		}else{
		 	$(this).parent().find(".tips").find( "p" ).html( '手机号/E-mail用于登录和找回密码，请正确填写'); 
			$(this).parent().find(".tips").find( "p" ).attr("class","wrong");
			flag1 = 0;
		}
	}
})
//判断密码格式正确 
var val1;
$("#secreat").blur(function(){
	val1 = $(this).val();
	if(val1){
		if(val1.length > 16 || val1.length < 6){
			$(this).parent().find(".tips").find(".weak").hide();
			$(this).parent().find(".tips").find( "p" ).html( '密码长度为6-16位' );
			$(this).parent().find(".tips").find( "p" ).attr("class","wrong");
			flag2 = 0;
		}else{	
			$(this).parent().find(".tips").find(".weak").show();
			$(this).parent().find(".tips").find( "p" ).html( '' );
			$(this).parent().find(".tips").find(".weak").find("i").attr("class","");
			flag2 = 1;
			//判断密码强度
			if(/\d+/.test(val1) && /[a-z]+/.test(val1) && /[A-Z]+/.test(val1)){
				$(this).parent().find(".tips").find(".weak").find("i").eq(2).attr("class","cursor");
			}else if(/^\d+$/.test(val1) || /^[a-z]$/.test(val1) || /^[A-Z]$/.test(val1)){
				$(this).parent().find(".tips").find(".weak").find("i").eq(0).attr("class","cursor");
			}else{
				$(this).parent().find(".tips").find(".weak").find("i").eq(1).attr("class","cursor");
				}
		}
	}else{
		$(this).parent().find(".tips").find(".weak").hide();
		$(this).parent().find(".tips").find( "p" ).html( '密码不能为空' );
	    $(this).parent().find(".tips").find( "p" ).attr("class","wrong");
	    flag2 = 0;
	}
})
//再次确认密码
var val2;
$("#confirmSecreat").blur(function(){
	val2 = $(this).val();
	if(val2){
		if(val2 == $("#secreat").val()){
			$(this).parent().find(".tips").find( "p" ).html( '' );
			flag3 = 1;
		}else{
			$(this).parent().find(".tips").find( "p" ).html("重复密码输入不一致，请确认！");
			$(this).parent().find(".tips").find( "p" ).attr("class","wrong");
			flag3 = 0;
		}
	}else{
		$(this).parent().find(".tips").find( "p" ).html("重复密码不能为空！");
	    $(this).parent().find(".tips").find( "p" ).attr("class","wrong");
	    flag3 = 0;
	}
	
})

//图形验证码
var graph;
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
	graph = $(this).val();
	if(graph){
		if ($("#graphPic").html() == graph ) {
			$(this).parent().find(".tips").find( "p" ).html( '' );
			flag4 = 1;
		} else{
			$(this).parent().find(".tips").find( "p" ).html("图形验证码输入不一致，请重新输入！");
			$(this).parent().find(".tips").find( "p" ).attr("class","wrong");
			flag4 = 0;
		}
	}else{
		$(this).parent().find(".tips").find( "p" ).html("图形验证码不能为空！");
		$(this).parent().find(".tips").find( "p" ).attr("class","wrong");
		flag4 = 0;
	}
	
})
//短信验证码
var message;
$("#retriveCode").click(function(){
	$(this).html(testCode(4));
	$(this).css("font-size","25px");
})
//判断验证码是否正确
$("#verifyCode").blur(function(){
	message = $(this).val();
	if(message){
		if ($("#retriveCode").html() == message ) {
			$(this).parent().find(".tips").find( "p" ).html( '' );
			flag5 = 1;
		} else{
			$(this).parent().find(".tips").find( "p" ).html("验证码输入不一致，请重新输入！");
			$(this).parent().find(".tips").find( "p" ).attr("class","wrong");
			flag5 = 0;
		}
	}else{
		$(this).parent().find(".tips").find( "p" ).html("验证码不能为空！");
		$(this).parent().find(".tips").find( "p" ).attr("class","wrong");
		flag5 = 0;
	}
})

//点击注册判断是否注册过
//创建cookie
$(".client-submit").click(function(){
	if(flag1&&flag2&&flag3&&flag4&&flag5){
		$.cookie("username", $("#resignerName").val(),{expires: 7, path: '/' }); 
		$.cookie("password", $("#secreat").val(),{expires: 7, path: '/' });
		alert("您已注册成功");
	}else if(flag2&&flag3&&flag4&&flag5){
		alert("您的手机号/E-mail号有误");
	}else if(flag1&&flag3&&flag4&&flag5){
		alert("您的密码有误");
	}else if(flag1&&flag2&&flag4&&flag5){
		alert("您的确认密码有误");
	}else if(flag1&&flag2&&flag3&&flag5){
		alert("您的图片验证码有误");
	}else if(flag1&&flag2&&flag3&&flag4){
		alert("您的短信验证码有误");
	}else{
		alert("您的信息有误，请重新输入！");
	}
	//设置用户名和密码的值,进行cookie缓存
	
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
//设置cookie
function setCookie(name, value, expires, path, domain, isSecure){
	var cookieText=encodeURIComponent(name) + "=" + encodeURIComponent(value);
	if (expires instanceof Date) {
		cookieText += ";expires=" + expires; 
	}
	if (path) {
		cookieText += ";path=" + path;
	}
	if (domain) {
		cookieText += ";domain" + domain;
	}
	if (isSecure) {
		cookieText += ";secure";
	}
	return document.cookie=cookieText;
}


//获取cookie
function getCookie(name){
	var cookieText = decodeURIComponent(document.cookie);
	var start = cookieText.indexOf(name);
	if (start == -1) {
		return;
	}else{
		end = cookieText.indexOf(";", start);
		if (end == -1) {
			end = cookieText.length;
		}					
	}
	var str = cookieText.substring(start, end); 
	var arr = str.split("=");
	return arr[1];
}
	

//获取n天后的日期
function getDate(n){
	var d = new Date();
	day = d.getDate() + n;
	d.setDate(day);
	return d;
}








