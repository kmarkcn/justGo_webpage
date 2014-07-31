// JavaScript Document
//product-content
$(function(){
	
	//点击查看日程天数
	$('.head-r-child').click(
			function(){
					$('.head-nav-li').toggleClass('block');
			}
	);
	
	//添加天数
	
	function addDay(add_day){
		var ad = $('<li class="head-nav-li"><a>第'+add_day +'天</a></li>');
		$('.head-nav').append(ad);
	};
	
	//数组循环匹配天数
    day_array="二三四五六七八九十";
	var days=$('#cal_total_days').val();
	for(var i = 0; i < days - 1;i++){
		var curent_day=day_array[i];
		addDay(curent_day);
	}
	
	//以下是测试代码
	$(window).scroll(function(){
		var a = $(document).scrollTop();
		if(a >= '100' && a<='300'){
			alert(111);
		}
		else{
			alert(222);
		}
	});
	
/*	//添加天数
	cur_travel_id=$('#cur_travel').val();
	function addDay(add_day,curent_num){
		var ad = $("<li class='head-nav-li'><a href='./index.php?act=module&name=justgo&do=product_content&id="+cur_travel_id+"&day="+curent_num+"'>第"+add_day+"天</a><>");
		$('.head-nav').append(ad);
	};
	
	//数组循环匹配天数
    day_array="二三四五六七八九十";
	var days=$('#cal_total_days').val();
	for(var i = 0; i < days - 1;i++){
		var curent_day=day_array[i];
		var curent_num=i+2;
		addDay(curent_day,curent_num);
	}
*/
	
	
	
})
	

			