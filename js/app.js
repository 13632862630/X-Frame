$("#pageAll").on("init",function(){
	$("#faceBanner").carousel({"interval":3000});
	$('#faceBanner').hammer().bind('swipeleft', function(){
		$(this).carousel('next');
	});
	$('#faceBanner').hammer().bind('swiperight', function(){
		$(this).carousel('prev');
	});
})
$("#pageSearch").on("init",function(){
	$("#searchBtn").on("click",function(){
		alert("search")
	})
})
