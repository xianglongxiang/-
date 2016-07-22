/**
 * Created by xlx on 2016/4/1.
 */
(function($,w){
    //初始化方法
    function init(){
        $("#send-code").click(sendCode);
        $("#login").click(login);
    }
    function sendCode(){
        alert("发送验证");
    }
    function login(){
        alert("登录");
    }
    w.onload = init;
})(Zepto,window)