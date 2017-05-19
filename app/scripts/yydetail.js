/**
 * Created by LY on 2017/5/15.
 */
function scroll() {
    //判断当前的浏览器是否是IE9+ 或者其他浏览器
    if (window.pageYOffset != null) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        };
    }
    //检测是否是怪异模式浏览器，就是没有声明<!DOCTYPE html>
    else if(document.compatMode == "CSS1Compat"){
        //正常模式
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        };
    }
    //怪异浏览器
    return {
        left:document.body.scrollLeft,
        top:document.body.scrollTop
    };
}

window.onscroll = function(){
    var scrolltop = scroll().top;
    var div = document.getElementById("gotop");
    if(scrolltop >= 100){
        div.className="gotop gotopfixed";
    } else{
        div.className="gotop";
    }
}

$(function () {
    $("#topbarright").click(function () {
        $("#dropdownlist").toggle();
    })
});