$().ready(function(){
	size()
	function size(){
		var body_h=$(window).height();
		var body_w=$(window).width();
//		$('body')css({
//			'width':body_w+'px',
//			'height':body_h+'px'
//		})
		$('#content').css({
			'width':body_w+'px',
			'height':body_h-53-16+'px'
		})
		$('#right_con').css({
			'width':body_w-10-297-7-10+'px'
		})
		
		
	}
	
	
	$(window).resize(function(){
		size()
	})
	
	
})
