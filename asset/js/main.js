$(document).ready(function(){
    var $tag = $('.searchtag ul li a button');
    var link = $('.searchbar a');

    $tag.on('click', function (){
        $(this).addClass('on');
    });
    
    //m_ice slide
	var $otherMenu=$("#article .ot_menu");
	var $btn=$otherMenu.find("a").first();
	var $text=$otherMenu.find("span");
	var tgHref;
	$btn.on("click",function  (e) {
		e.preventDefault();
		$(this).next().stop().slideDown();
		$(this).next().on("click",function  () {
			$(this).stop().slideUp();
		});
		$otherMenu.find(">ul>li>a").on("click",function  (e) {
			e.preventDefault();
			var tgTxt=$(this).text();
			tgHref=$(this).attr("href");
			$btn.find($text).text(tgTxt).closest("a").next().stop().slideUp();
		});
	});

	//cashbox
	var $button = $('#article > div.menu_wrap > ul > li:nth-child(2) > div > div.f_r_txt > button');
	$button.on('click', function (){
		alert();
	});
});