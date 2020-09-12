
function utf8_decode (aa) {
    var bb = '', c = 0;
    for (var i = 0; i < aa.length; i++) {
        c = aa.charCodeAt(i);
        if (c > 127) {
            if (c > 1024) {
                if (c == 1025) {
                    c = 1016;
                } else if (c == 1105) {
                    c = 1032;
                }
                bb += String.fromCharCode(c - 848);
            }
        } else {
            bb += aa.charAt(i);
        }
    }
    return bb;
}

window.onload = function(e){

$(document).ready(function() {

	try {
        // SmartMenus init
        if($('#main-menu') && 'smartmenus' in $('#main-menu')) {
            $(function() {
                $('#main-menu').smartmenus({
                    subMenusSubOffsetX: 1,
                    subMenusSubOffsetY: -8
                });
            });
            // SmartMenus mobile menu toggle button
            $(function() {
                var $mainMenuState = $('#main-menu-state');
                if ($mainMenuState.length) {
                // animate mobile menu
                    $mainMenuState.change(function(e) {
                        var $menu = $('#main-menu');
                        if (this.checked) {
                            $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
                        } else {
                            $menu.show().slideUp(250, function() { $menu.css('display', ''); });
                        }
                    });
                    // hide mobile menu beforeunload
                    $(window).bind('beforeunload unload', function() {
                        if ($mainMenuState[0].checked) {
                            $mainMenuState[0].click();
                        }
                    });
                }
            });
        }
    } catch ($e) {}

    try {
        $('.imgLiquid').imgLiquid(); 

    } catch ($e) {}
	
	try {
    	$('.mosaic-backdrop').imgLiquid(); 
	} catch($e) {};

    
	try {
	    $(".bar").mosaic({
					animation	:	"slide"		//fade or slide
				});
	} catch($e) {};	

    jQuery.fn.outerHTML = function() {
        return jQuery("<p>").append(this.clone()).html();
    }

    //(function ($, undefined) {
    $.fn.getCursorPosition = function() {
        var el = $(this).get(0);
        var pos = 0;
        if('selectionStart' in el) {
            pos = el.selectionStart;
        } else if('selection' in document) {
            el.focus();
            var Sel = document.selection.createRange();
            var SelLength = document.selection.createRange().text.length;
            Sel.moveStart('character', -el.value.length);
            pos = Sel.text.length - SelLength;
        }
        return pos;
    }

	try {
        var options = { 
                $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$,
                    $ChanceToShow: 2
                },
                $AutoPlay: true 
        };
        var jssor_slider1 = new $JssorSlider$('slider1_container', options);
	} catch($e) {};

	
	try {
    	$(".flexnav").flexNav();
	} catch($e) {};
	

	try {
        jQuery("#last_carousel").jcarousel({
            visible: 3,
            scroll: 3,
            vertical: true,
            start: 1
        });
	} catch($e) {};

	try {    
        jQuery("#viewed_carousel").jcarousel({
            visible: 3,
            scroll: 3,
            vertical: true,
            start: 1
        });
	} catch($e) {};

	try {
        $(".placeholder").hover(function() {
           $(this).toggleClass("advert_color");
        }, function() {
            $(this).toggleClass("advert_color");
        });
	} catch($e) {};

	try {
	    if (window.cpa_words && window.is_show_cpa) {
        for(key in window.cpa_words) {
            item = window.cpa_words[key];
            if (item['company'] && item['company'] in window.is_show_cpa) {
                is_show = window.is_show_cpa[item['company']];
            } else {
                is_show = 1;
            }
            if (is_show == "0") {
                continue;
            }
            classname = 'partner_link'+key;
            $('span.'+classname).each(function() {
              $(this).html(' <a href=\"/go.php?id='+key+'\" target=\"_blank\" rel=\"nofollow\" class="partner_link">'+$(this).text()+'</a>');
            });

            $('span.'+classname).removeClass(classname);
        }
    }
            $('a.partner_link').click(function() {
                try {
                    pageTracker._trackPageview('/text_click/'+$(this).text());
                } catch ($e) {
                    console.log('No pageTracker');
                }
            });

	} catch($e) {};    

    function sendVote(vote_value) {
        //console.log("send ajax");
        article_id = $('#article_id').val();
        module = $('#module').val();
        $.ajax({
          type: "POST",
          url: "/modules/"+module+"/vote.php",
          dataType: "json",
          data: { storyid: article_id, vote: vote_value }
        }).done(function( json_res ) {
            //console.log( "Result: " + JSON.stringify(json_res) );
            result = json_res['result'];

            if (json_res['error']==0) {
                if (result['current_vote']==1) {
                    //console.log( "UP");
                    $('#vote_up').attr('src', '/images/vote_up.gif');
                    $('#vote_down').attr('src', '/images/vote_down_end.gif');
                    $('#vote_up').unbind('click').unbind('mouseover').unbind('mouseout').css('cursor', 'default');
                    $('#vote_down').unbind('click').unbind('mouseover').unbind('mouseout').css('cursor', 'default');
                } else {
                    //console.log( "DOWN");
                    $('#vote_up').attr('src', '/images/vote_up_end.gif');
                    $('#vote_down').attr('src', '/images/vote_down.gif');
                    $('#vote_up').unbind('click').unbind('mouseover').unbind('mouseout').css('cursor', 'default');
                    $('#vote_down').unbind('click').unbind('mouseover').unbind('mouseout').css('cursor', 'default');
                }
                $('#votes_result').html(result['votes']);
            } else if (json_res['error']==3 || json_res['error']==4) {
                $('#votes_result').html('‚ы уже голосовали.<br/>ђейтинг: '+result['votes']);
            }
        })
        .fail(function() {  })
        .always(function() { })
    }

	try {
	    if ($('input#voted').val() == '0') {

        $('#vote_up').click(function(){
            sendVote(1);
                try {
                    pageTracker._trackPageview('/votes/up/');
                } catch ($e) {
                    console.log('No pageTracker');
                }
        }).mouseover(function(){
            $('#vote_up').attr('src', '/images/vote_up_light.gif');
        }).mouseout(function(){
            $('#vote_up').attr('src', '/images/vote_up_start.gif');
        });

        $('#vote_up').css('cursor', 'pointer');

        $('#vote_down').click(function(){
            sendVote(-1);
                try {
                    pageTracker._trackPageview('/votes/down/');
                } catch ($e) {
                    console.log('No pageTracker');
                }
        }).mouseover(function(){
            $('#vote_down').attr('src', '/images/vote_down_light.gif');
        }).mouseout(function(){
            $('#vote_down').attr('src', '/images/vote_down_start.gif');
        });
    
        $('#vote_down').css('cursor', 'pointer');
    }
	} catch($e) {};    

$(document).on('popup_opened.social-likes', function(event, service) {
    ga('send', 'social', service, 'share', location.href);
});

    try {
        $(function () {
            $(document).tooltip({
                content: function () {
                    return $(this).prop('title');
                }
            });
        });
    } catch($e) {};

    try {
        $('#dynamic_table').dataTable( {
            "bJQueryUI": true,
            "iDisplayLength": 100
        });
    } catch($e) {};


    });
}