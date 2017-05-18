$(function() {
	//个人中心

	$("#dropdown").click(function() {
		$("#dropdown_content").slideToggle("slow");
	})
	//展开				
	$("#flip1").click(function() {
		$("#flip1").toggle("slow");

		if($('#flip1').val() == '展开') {
			$("#flip1").attr('value', '收起来！');
			$("#flip1").toggle("slow");
		} else {
			$("#flip1").attr('value', '展开');
			$("#flip1").toggle("slow");
		}
		$("#panel").slideToggle("slow");

	});
	//加载评论
	$("#jiazaipinglun1").click(function() {
		$("#jiazaipinglun1").toggle("slow");
		$(".jiazai").slideToggle("slow");
	});

	//还想看
	$("#haixiangkan").click(function() {
		$("#haixiangkan").toggle("slow");
		$("#haixiangkan_1").slideToggle("slow");
	});
});