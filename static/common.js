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
		$('*').stop(true,true);	//ֹͣĿǰ����
		var oldcolor = $('body').css('background-color');
		var newcolor = $(this).css('background-color');
		if(newcolor=='rgb(255, 255, 255)'){
			$('#logo2').fadeIn(500);
		}
		$('body').animate({backgroundColor:newcolor},500);
		$(this).mouseout(function(){
			//$('*').stop(false,true);	//ֹͣĿǰ����
			//��ɫ�ָ�
			$('body').animate({backgroundColor:oldcolor},500);
			if(newcolor=='rgb(255, 255, 255)'){
					$('#logo2').fadeOut(500);
			}
		});
	});
});
