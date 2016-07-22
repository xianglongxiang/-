/**
 * Created by xlx on 2016/4/1.
 */
(function($,w){
    //初始化方法
    function init(){
        $("#auth").click(auth);
    }
    function auth(){
        alert("授权");
    }
    w.onload = init;
})(Zepto,window)