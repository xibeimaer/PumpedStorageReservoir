$().ready(function(){
	
	size()
	function size(){
//		var body-h=$(window).height();
		var body_w=$(window).width();
		console.log(body_w)
		$('#main').css({
			'width':body_w+'px'
		})
		$('#main_right').css({
			'width':body_w-403-10+'px'
		})
	}
	
	
	$(window).resize(function(){
		size()
	})
	
	
	
})