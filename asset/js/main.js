$(document).ready(function(){
    var $tag = $('.searchtag ul li a button');
    var link = $('.searchbar a');

    $tag.on('click', function (){
        $(this).addClass('on');
    });

});