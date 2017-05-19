/**
 * Created by Ming on 2017/5/18.
 */
$(function () {
    $("#dropdown1").click(function () {
        $("#dropdownlist1").toggle();
        $("#dropdownlist2").hide();
    })
});
$(function () {
    $("#showlist2").click(function () {
        $("#dropdownlist2").toggle();
        $("#dropdownlist1").hide();
    })
});
