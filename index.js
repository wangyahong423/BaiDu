$(document).ready(function(){$username=$("#username"),$usertip=$(".usertip"),$usernull=$("#usernull"),$tel=$("#tel"),$telnull=$("#telnull"),$correct=$("#correct"),$pwd=$("#pwd"),$pwdtip=$(".pwdtip"),$pwdnull=$("#pwdnull"),$tippwd=$("#tippwd"),$correctpwd=$("#correctpwd");var e=0,l=60;$getCode=$("#getCode"),$codenull=$("#codenull"),$username.focus(function(){$usertip.css("display","block")}),$username.blur(function(){$usertip.css("display","none");var e=$username.val(),l=function(e){var l=e,t=new Array;t=l.split("");for(var s=0,$=new TextEncoder("utf-8"),n=0;n<t.length;n++)1===$.encode(t[n]).length?s+=1:3===$.encode(t[n]).length&&(s+=2);return s}(e);""===e?$usernull.html("用户名不能为空"):""!=e&&14<l?$usernull.html("用户名不能超过7个汉字或14个字符"):""!=e&&0<l&&l<=14&&!/^[0-9]*$/.test(e)&&/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(e)?$usernull.html(""):!/^[0-9]*$/.test(e)&&/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(e)||$usernull.html("用户名仅支持中英文、数字和下划线,且不能为纯数字")}),$tel.blur(function(){var e=$tel.val();/^[1][3,4,5,7,8][0-9]{9}$/.test(e)?($telnull.html(""),$correct.css("display","block")):($telnull.html("手机号码格式不正确"),$correct.css("display","none"))}),$pwd.focus(function(){$pwdtip.css("display","block"),$correctpwd.css("display","none")}),$tippwd.click(function(){e%2==0?($pwdtip.css("display","block"),e++):e%2==1&&($pwdtip.css("display","none"),e++)}),$pwd.blur(function(){$pwdtip.css("display","none");var e=$pwd.val();""!=e&&/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test(e)?($pwdnull.html(""),$correctpwd.css("display","block"),$tippwd.css("display","none")):($pwdnull.html("密码设置不符合要求"),$tippwd.css("display","block"),$pwdnull.css("display","block"),$correctpwd.css("display","none"))}),$getCode.click(function(){console.log($getCode.val());var e=setInterval(function(){-1==--l?(clearInterval(e),$getCode.val("发送验证码"),$getCode.removeAttr("disabled"),l=60,$codenull.css("display","block")):($getCode.val("重新发送（"+l+"s）"),$getCode.attr("disabled","true"))},1e3)})});