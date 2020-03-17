$(document).ready(function(){
    $username = $('#username');//输入用户名
    $usertip = $('.usertip');//用户名的上提示框
    $usernull = $('#usernull');//用户名的下提示框

    $tel = $('#tel');//输入电话
    $telnull = $('#telnull');//电话的下提示框
    $correct = $('#correct');

    $pwd = $('#pwd');//输入密码
    $pwdtip = $('.pwdtip');//密码上提示框
    $pwdnull = $('#pwdnull');//密码下提示框
    $tippwd = $('#tippwd');//密码叹号
    $correctpwd = $('#correctpwd');//对号
    var tippwdclicks = 0;//点击叹号的数量，如果是偶数，不显示提示，如果是奇数，显示提示

    var seconds = 60;
    $getCode = $('#getCode');//获取验证码
    $codenull = $('#codenull');

    // 用户名验证
    function countUsernameLength(usrname){
        var name = usrname;
        var nameArr = new Array();
        nameArr = name.split('');
        var len = 0;
        var utf8 = new TextEncoder('utf-8');
        for(var i = 0;i<nameArr.length;i++){
            if(utf8.encode(nameArr[i]).length === 1){
                len += 1;
            }
            else if(utf8.encode(nameArr[i]).length === 3){
                len += 2;
            }
        }
        return len;
    }
    $username.focus(function(){
        $usertip.css('display','block')
    })
    $username.blur(function () {
        $usertip.css('display','none');
        var name = $username.val();
        // 对用户名进行计数
        var nameLen = countUsernameLength(name);
        // 用户名为空
        if(name === ''){
            $usernull.html('用户名不能为空');
        }
        // 用户名过长
        else if(name != '' && nameLen > 14){
            $usernull.html('用户名不能超过7个汉字或14个字符');
        }
        // 用户名长度符合规则
        else if(name != '' && nameLen > 0 && nameLen <= 14 && !(/^[0-9]*$/).test(name) && (/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/).test(name)){
            $usernull.html('');
        }
        else if((/^[0-9]*$/).test(name)){
            $usernull.html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
        }
        else if(!(/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/).test(name)){
            $usernull.html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
        }
        
    })

    // 电话验证
    $tel.blur(function(){
        var tel = $tel.val();
        var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if(reg.test(tel)){
            $telnull.html('');
            $correct.css('display','block');
        }
        else{
            $telnull.html('手机号码格式不正确');
            $correct.css('display','none');
        }
    })

    // 密码验证
    $pwd.focus(function(){
        $pwdtip.css('display','block');
        $correctpwd.css('display','none');

    })
    $tippwd.click(function(){
        if(tippwdclicks % 2 == 0){
            $pwdtip.css('display','block');
            tippwdclicks++;
        }
        else if(tippwdclicks % 2 == 1){
            $pwdtip.css('display','none');
            tippwdclicks++;
        }
    })
    $pwd.blur(function(){
        $pwdtip.css('display','none');
        var pwd = $pwd.val();
        var reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/;
        
        if(pwd != '' && reg.test(pwd)){
            $pwdnull.html('');
            $correctpwd.css('display','block');
            $tippwd.css('display','none');
        }
        else{
            $pwdnull.html('密码设置不符合要求');
            $tippwd.css('display','block');
            $pwdnull.css('display','block');
            $correctpwd.css('display','none');
        }
    })

    // 验证码验证
    $getCode.click(function(){
        console.log($getCode.val())
        var time = setInterval(function(){
            seconds--;
            if(seconds == -1){
                clearInterval(time);
                $getCode.val('发送验证码');
                $getCode.removeAttr('disabled');
                seconds = 60;
                $codenull.css('display','block')
            }
            else{
                $getCode.val('重新发送（'+ seconds + 's）');
                $getCode.attr('disabled','true');
            }
        },1000)
    })

});
