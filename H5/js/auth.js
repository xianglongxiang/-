/**
 * Created by xlx on 2016/4/1.
 */
(function($,w){
    //初始化方法
    function init(){
        $(".opt-list .select").click(switchSelect);
        $(".auth-cars li").click(switchCarSelect);
        $("#cancel-auth").click(cancelAuth);
        $("#auth").click(Auth);
        $(".nav-left").click(back);
    }
    function back(){
        alert("返回");
    }
    function cancelAuth(){
        alert("取消");
    }
    function Auth(){
        alert("授权");
    }
    function switchSelect(){
        var that = $(this);
        var isSelect = that.hasClass("selected");
        console.log(isSelect);
        if (isSelect) {
            that.removeClass("selected");
        } else {
            that.addClass("selected");
        }
    }
    function switchCarSelect(){
        var that = $(this);
        var isSelect = that.hasClass("car-selected");
        if (isSelect) {
            that.removeClass("car-selected");
        } else {
            that.addClass("car-selected");
        }
    }
    w.onload = init;
})(Zepto,window)