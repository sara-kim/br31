$(document).ready(function(){
	//cashbox
	var $button = $('#article > div.menu_wrap > ul > li:nth-child(2) > div > div.f_r_txt > button');
	$button.on('click', function (){
		alert();
	});
	//m_ice slide
	var $menu=$("#article1 .ot_menu");
	var $btn=$menu.find("a").first();
	var $text=$menu.find("span");
	var tgHref;
	$btn.on("click",function  (e) {
		e.preventDefault();
		$(this).next().stop().slideDown();
		$(this).next().on("click",function  () {
			$(this).stop().slideUp();
		});
		$menu.find(">ul>li>a").on("click",function  (e) {
			e.preventDefault();
			var tgTxt=$(this).text();
			tgHref=$(this).attr("href");
			$btn.find($text).text(tgTxt).closest("a").next().stop().slideUp();
		});
	});
	//a_history
	var $scBtn = $('#article1 .timeline_box button').eq(0);
	$scBtn.on('click', function(e){
		e.preventDefault();
		$(this).addClass('on');
		if ($(this).addClass('on')) $('.scroll_box').eq(0).stop().slideToggle();
		else $(this).removeClass('on').next().$('.scroll_box').stop().slideToggle();
	} );
	var $scBtn1 = $('#article1 .timeline_box button').eq(1);
	$scBtn1.on('click', function(e){
		e.preventDefault();
		$(this).addClass('on');
		if ($(this).addClass('on')) $('.scroll_box').eq(1).stop().slideToggle();
		else $(this).removeClass('on').next().$('.scroll_box').stop().slideToggle();
	} );
	var $scBtn2 = $('#article1 .timeline_box button').eq(2);
	$scBtn2.on('click', function(e){
		e.preventDefault();
		$(this).addClass('on');
		if ($(this).addClass('on')) $('.scroll_box').eq(2).stop().slideToggle();
		else $(this).removeClass('on').next().$('.scroll_box').stop().slideToggle();
	} );
	var $scBtn3 = $('#article1 .timeline_box button').eq(3);
	$scBtn3.on('click', function(e){
		e.preventDefault();
		$(this).addClass('on');
		if ($(this).addClass('on')) $('.scroll_box').eq(3).stop().slideToggle();
		else $(this).removeClass('on').next().$('.scroll_box').stop().slideToggle();
	} );
});