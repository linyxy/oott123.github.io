jQuery.Color.fn.Darker = function(d) {
	//将颜色变暗的函数=-=
    var r = this._rgba[0], g = this._rgba[1], b = this._rgba[2], a = this._rgba[3];
    r = (r-d<0)?0:r-d;
    g = (g-d<0)?0:g-d;
    b = (b-d<0)?0:b-d;
    return jQuery.Color( r, g, b, a );
};

$(document).ready(function(){
	//菜单切换
	$('menu').click(function(){
		$('*').stop(true,true);	//停止目前动画
		var section = $(this).next();	//得到内容section
		$('section:visible').animate({width:'toggle'},500);	//将目前展开的内容折叠
		if($('section:visible')[0]!=$(section)[0]){	//如果目前展开的内容不是将要展开的内容
			$(section).animate({width:'toggle'},1000);	//展开将要展开的内容
		}
		$('body').animate({backgroundColor:$.Color(this,'background-color').Darker(50)},800);	//背景颜色渐变
	});
	//hint浮现
	$('hint').mouseover(function(){
		var offset = $(this).offset();
		$('tip').css('top',offset.top+20);
		$('tip').css('left',offset.left+10);
		$('tip').show();
		$('tip').html($(this).attr('value'));
	});
	//hint消失
	$('hint').mouseout(function(){
		$('tip').html('');
		$('tip').hide();
	});
	//最喜欢的颜色
	$('.colorpicker').mouseover(function(){
		$('body').stop(true,true);	//停止目前动画
		var oldcolor = $('body').css('background-color');
		var newcolor = $(this).css('background-color');
		$('body').animate({backgroundColor:newcolor},500,function(){
				if(newcolor=='rgb(255, 255, 255)'){
					$('logo').css('background-color',"#000");
				}
			});
		$(this).mouseout(function(){
			//颜色恢复
				if(newcolor=='rgb(255, 255, 255)'){
					$('logo').css('background-color',"");
				}
			$('body').animate({backgroundColor:oldcolor},500);
		});
	});
});
