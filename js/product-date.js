// JavaScript Document
//product-content

$(document).ready(function(){
	$('.pd-day').click(
		function(){
			var aa = $(this).parents('.pd-c-date');
			aa.find('.pd-div').fadeIn(1000);
			aa.parents('.pd-c-date').find('.round-gray').fadeIn(1000);
			aa.parents('.pd-c-date').siblings('div').find('.pd-div').fadeOut(500);
			aa.parents('.pd-c-date').siblings('div').find('.round-gray').fadeOut(500);
			
	});
	

	$('.pd-c-date').hover(
		function(){
			$(this).find('.pd-div').fadeIn(1000);
			$(this).find('.round-gray').fadeIn(1000);
			$(this).siblings('div').find('.pd-div').fadeOut(500);
			$(this).siblings('div').find('.round-gray').fadeOut(500);
		}
		,function(){
		}
	);
	$('.pd-c-date').bind({
		mousemove:function(){
			$(this).find('.pd-div').fadeIn(1000);
			$(this).find('.round-gray').fadeIn(1000);
			$(this).siblings('div').find('.pd-div').fadeOut(500);
			$(this).siblings('div').find('.round-gray').fadeOut(500);
		}
	});
		
})
	
	
	
	

	

			