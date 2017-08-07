$().ready(function(){
	$a=$('#leftNav .navBox a')
	
	$a.click(function(ev){
		ev=ev||event;
		ev.preventDefault()
		
		
		
		
		
	})
	
	$('#leftNav .navBox').click(function(){
		$(this).addClass('bg').siblings().removeClass('bg');
		
		var index=$(this).index();
		var $bottomIframe=$('#concent_frame');
		switch(index){
			case 1:
				$bottomIframe.attr('src','html/whole_network.html');
				break;
			case 2:
				$bottomIframe.attr('src','html/whole_network.html');
				break;
			case 3:
				$bottomIframe.attr('src','html/whole_network.html');
				break;
			case 4:
				$bottomIframe.attr('src','html/whole_network.html');
				break;
			case 5:
				$bottomIframe.attr('src','html/whole_network.html');
				break;
			case 6:
				$bottomIframe.attr('src','html/whole_network.html');
				break;
			case 7:
				$bottomIframe.attr('src','html/whole_network.html');
				break;
			case 8:
				$bottomIframe.attr('src','html/whole_network.html');
				break;

		}
		
	})
	

	
	
	
	
	
})
