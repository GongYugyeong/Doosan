jQuery(function($){
	/* footer include */
	//$('#header').load('header.html');
	$('#footer').load('footer.html');
	
	/* menu */
	$(document).on('click','.hd_menu',function(){
		$('.nav_wrap').animate({left:0},300);
		scrollDisable();
	});
		
	/* top button */
	$(document).on('click','.top_btn',function(){
		$('html, body').animate({scrollTop:0},100);
		return false;
	});
	
	/* like button */
	$(document).on('click','.like_btn',function(){
		var idx = $(this).val();
		
		if($(this).is('.on')){	// 선택 되어 있을 때
			$(this).removeClass('on');
			$(this).children('img').attr('src','images/sub01/like_btn.png');
		}else if($(this).not('.on')){	// 선택 되어 있지 않을 때
			$(this).addClass('on');
			$(this).children('img').attr('src','images/sub01/like_btn_on.png');
		}
		
//		var _data = {
//			idx : idx
//		}
//		$.ajax({
//			type: 'POST',
//			url: '',
//			dataType: 'json',
//			data: _data,
//			async: false,
//			beforeSend: function(xhr) {},
//			complete: function(request,status) {}
//		}).done(function(data, textStatus, jqXHR) {
//			if(data){
//				if(data.resultCode == '000'){
//					alert('관심상품으로 등록되었습니다.');
//					$(this).addClass('on');
//					$(this).children('img').attr('src','images/sub01/like_btn_on.png');
//				}
//			}
//		}).fail(function(jqXHR, textStatus) {
//			alert('textStatus1: ' + textStatus);
//			return false;
//		});
	});

	//brandList_view();

	function brandList_view(){
		var _data = {
			devicetype : 'MO'
		}

		$.ajax({
			type: 'POST',
			url: '/ajax/brandList.php',
			dataType: 'json',
			data: _data,
			beforeSend: function(xhr) {
			},
			complete: function(request,status) {
			}
		}).done(function(data, textStatus, jqXHR) {
			if (data) {
				if(data.resultCode == '000') {
					console.log('ddd');
				}
			} else {
				alert('처리에 문제가 생겼습니다.');
			}
		}).fail(function(jqXHR, textStatus) {
			alert('textStatus1: ' + textStatus);
		});
	}
	
	/* scroll */
	function scrollDisable(){
		$('body').addClass('scrollDisable').on('scroll touchmove mousewheel',function(e){
			e.preventDefault();
		});
	}
	function scrollAble(){
		$('body').removeClass('scrollDisable').off('scroll touchmove mousewheel');
	}
});