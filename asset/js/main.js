$(document).ready(function(){
    var $tag = $('.searchtag ul li a button');
    var link = $('.searchbar a');

    $tag.on('click', function (){
        $(this).addClass('on');
    });
    
    //m_ice slide
	var $family=$("#footer .family");
	var $btn=$family.find("a").first();
	var $text=$family.find("span");
	var tgHref;
	$btn.on("click",function  (e) {
		e.preventDefault();
		$(this).next().stop().slideDown();
		$(this).next().on("click",function  () {
			$(this).stop().slideUp();
		});

		$family.find(">ul>li>a").on("click",function  (e) {
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

	//a_history
	var $scBtn = $('#article .timeline_box button');
	$scBtn.on('click', function(){
		$(this).addClass('on');
	} );
});