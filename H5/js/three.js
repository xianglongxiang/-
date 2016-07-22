/**
 * Created by xlx on 2016/4/1.
 */
(function($,w){
    //初始化方法
    function init(){
        $(".app-group").click(skip);
    }
    function skip(){
        alert("跳转");
    }
    w.onload = init;
})(Zepto,window)