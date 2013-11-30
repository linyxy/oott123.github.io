jQuery.Color.fn.Darker = function(d) {
	//����ɫ�䰵�ĺ���=-=
    var r = this._rgba[0], g = this._rgba[1], b = this._rgba[2], a = this._rgba[3];
    r = (r-d<0)?0:r-d;
    g = (g-d<0)?0:g-d;
    b = (b-d<0)?0:b-d;
    return jQuery.Color( r, g, b, a );
};

$(document).ready(function(){
	//�˵��л�
	$('menu').click(function(){
		$('*').stop(true,true);	//ֹͣĿǰ����
		var section = $(this).next();	//�õ�����section
		$('section:visible').animate({width:'toggle'},500);	//��Ŀǰչ���������۵�
		if($('section:visible')[0]!=$(section)[0]){	//���Ŀǰչ�������ݲ��ǽ�Ҫչ��������
			$(section).animate({width:'toggle'},1000);	//չ����Ҫչ��������
		}
		$('body').animate({backgroundColor:$.Color(this,'background-color').Darker(50)},800);	//������ɫ����
	});
	//hint����
	$('hint').mouseover(function(){
		var offset = $(this).offset();
		$('tip').css('top',offset.top+20);
		$('tip').css('left',offset.left+10);
		$('tip').show();
		$('tip').html($(this).attr('value'));
	});
	//hint��ʧ
	$('hint').mouseout(function(){
		$('tip').html('');
		$('tip').hide();
	});
	//��ϲ������ɫ
	$('.colorpicker').mouseover(function(){
		$('body').stop(true,true);	//ֹͣĿǰ����
		var oldcolor = $('body').css('background-color');
		var newcolor = $(this).css('background-color');
		$('body').animate({backgroundColor:newcolor},500,function(){
				if(newcolor=='rgb(255, 255, 255)'){
					$('logo').css('background-color',"#000");
				}
			});
		$(this).mouseout(function(){
			//��ɫ�ָ�
				if(newcolor=='rgb(255, 255, 255)'){
					$('logo').css('background-color',"");
				}
			$('body').animate({backgroundColor:oldcolor},500);
		});
	});
});
