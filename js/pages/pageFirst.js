define(function pageFirst(){
	$("#pageFirst").on("init",function(){
		$("#faceBanner").carousel({"interval":3000});
		$('#faceBanner').hammer().bind('swipeleft', function(){
			$(this).carousel('next');
		});
		$('#faceBanner').hammer().bind('swiperight', function(){
			$(this).carousel('prev');
		});
		$Xframe.loadShow();
		setTimeout(function(){
			$Xframe.loadHide();
		},2000);	
	})
})