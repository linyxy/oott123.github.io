$(document).ready(function(){
	//retina
	if(window.devicePixelRatio && window.devicePixelRatio > 1){
		$('#logo2').attr('src','static/logo-header2@2x.png');
	}
	//菜单切换
	$('.menu').click(function(){
		$('*').stop(true,true);	//停止目前动画
		var section = $(this).next();	//得到内容section
		$('.section:visible').animate({width:'toggle'},500);	//将目前展开的内容折叠
		if($('.section:visible')[0]!=$(section)[0]){	//如果目前展开的内容不是将要展开的内容
			$(section).animate({width:'toggle'},1000,'swing',function(){
				//fix on IE6
				$(this).css('overflow','auto');
				$(this).css('overflow-x','hidden');
			});	//展开将要展开的内容
		}
		var color = $.Color(this,'background-color').Darker('50');
		$('body').animate({backgroundColor:color},800);	//背景颜色渐变
	});
	//hint浮现
	$('.hint').mouseenter(function(){
		var offset = $(this).offset();
		$('#tip').css('top',offset.top+20);
		$('#tip').css('left',offset.left+10);
		$('#tip').show();
		$('#tip').html($(this).attr('value'));
	});
	//hint消失
	$('.hint').mouseleave(function(){
		$('#tip').html('');
		$('#tip').hide();
	});
	//最喜欢的颜色
	$('.colorpicker').mouseenter(function(){
		$('*').stop(true,true);	//停止目前动画
		var oldcolor = $('body').css('background-color');
		var newcolor = $(this).css('background-color');
		if(newcolor=='rgb(255, 255, 255)'){
			$('#logo2').fadeIn(500);
		}
		$('body').animate({backgroundColor:newcolor},500);
		$(this).mouseleave(function(){
			//$('*').stop(false,true);	//停止目前动画
			//颜色恢复
			$('body').animate({backgroundColor:oldcolor},500);
			if(newcolor=='rgb(255, 255, 255)'){
					$('#logo2').fadeOut(500);
			}
		});
	});
});
