//登录时判断是否注册
var onOff = false;
var Number;
$("#resignerName").onblur(function(){
	Number =$(this).val();
	var reg1 = /(^1(3|5|7|8)[0-9]{9}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/;
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
