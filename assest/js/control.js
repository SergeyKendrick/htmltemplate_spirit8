/*-----------------------Arrow ------------------*/
$(document).ready(function() {
   setTimeout(function() {$('.control-arrow').fadeOut()}, 1500); 
});

/*---------------Го наведем на область слева, чувак ---------------*/
$(document).ready(function() {
    var hoverhere = 0;
    var hoverArrow = 0;
    $(document).mousemove(function(e){
        if (hoverhere == 0 && e.pageX <= 100) {
            $('.controlplatform').css({'width':'100px'});
            hoverhere = 1;
            if(hoverArrow == 0) {
                hoverArrow = 1;
                $('.control-arrow').fadeOut();
                $('.control-arrow-complete').animate({'opacity': '1'});
                setTimeout(function() {$('.control-arrow-complete').fadeOut()}, 1500);
            }
        } else if($("button.menu-platform").attr("aria-expanded") == 'false' && e.pageX >100 && hoverhere == 1) {
            $('.controlplatform').css("width", "0");
            hoverhere = 0;
        }
});
    
/*  ------------Разворот меню  ---------------- */
    
    $("button.menu-platform").attr("aria-expanded",'false');
    $("button.menu-platform").click(function() {
        if ($("button.menu-platform").attr("aria-expanded") == 'false') {
            $('.menu-platform .icon-bar').css('background', '#000');
            $('.menu-platform').css('borderColor','#000');            
            $('.controlplatform').css({'width':'20%', 'backgroundColor':'#fff'});
            $('.platform').css('display','block');
            $('button.menu-platform').attr("aria-expanded", 'true');
        } else {
            $('.menu-platform .icon-bar').css('background', '#fff');
            $('.menu-platform').css('borderColor', '#fff');
            $('.controlplatform').css({'width': '100px', 'backgroundColor': 'transparent'});
            $('.platform').css('display','none');
            $('button.menu-platform').attr('aria-expanded', 'false');
        }
    });
    
});

/*-------------------------Color Header Change -----------------*/

var $set = $('div.change-header-color ul li');
var n; 
$('div.change-header-color ul').on('click', 'li', function () {
    n=$set.index(this);
    var a = 'div.change-header-color ul li:eq(' + n + ')';
    var b = $(a).attr('data-color');
    $('header').css('background', b);
});

$('div.change-header-color ul li form input').on('input', function() {
    var custombg = document.forms.customColor.go.value;
    $('header').css('background', custombg);
});

/*-------------------Select File Header -----------------------*/
function processFiles(files) {
  var file = files[0];
  
  var reader = new FileReader();
  reader.onload = function (e) {
	$('header').css( 'backgroundImage',"url('" + e.target.result + "')");
    $('.dop-setting').slideDown('slow');
  };

  reader.readAsDataURL(file);
}

function trycheck() {
    if ($('.dop-setting #try').prop('checked')) {
        $('header').css('backgroundRepeat', 'repeat');
    } else {
        $('header').css('backgroundRepeat', 'no-repeat');
    }
}

function sizecheck() {
    if ($('.dop-setting #sizecheck').prop('checked')) {
        $('header').css('backgroundSize', '100% 100%');
    } else {
        $('header').css('backgroundSize', 'auto');
    }
}

/*----------JS front ----------------------------*/

var filter = $('.filter ul li');

var workRow1 = $('.work-row-1');
var workRow2 = $('.work-row-2');
$('.work-row-2').click(function() {
   alert('asdsad'); 
});

$('.filter ul').on('click', 'li', function() {
    $('.filter ul li').removeClass('active')
    var m = $(this).index();
    var n = $('.filter ul li:eq(' + m + ')');
    $(n).addClass('active');
    switch(m) {
            case 0: 
                $('.work-row-1, .work-row-2, .work-row-3').slideDown();
                break;
            case 1: 
                $('.work-row-1').slideDown();
                $('.work-row-2, .work-row-3').slideUp();
                break;
            case 2: 
                $('.work-row-2').slideDown();
                $('.work-row-1, .work-row-3').slideUp();
                break;
            case 3: 
                $('.work-row-3').slideDown();
                $('.work-row-2, .work-row-1').slideUp();
                break;
    }
});