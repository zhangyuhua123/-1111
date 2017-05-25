/* 
* @Author: Marte
* @Date:   2017-03-15 20:42:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-19 16:28:12
*/

$(document).ready(function(){
    //滚动条
           $(window).scroll(function(){
                    var scrollTop = $(document).scrollTop();
                    var st = $(this).scrollTop();
                    //console.log(st);
                   
                    if(st>=300){

                        $('#top').show();
                        console.log(1);

                        console.log($('.top'));
                    }
                    else{
                        $(' #top').hide();
                    }

                    $('#top').click(function(){
                        //返回头部
                       $(window).scrollTop(0);
                    })


                 //$('.ss-bar div').eq(2);
                 $('#second').hover(function(){
                    console.log(1);
                    $(this).children('span').show().animate({
                        left:-92
                    }, 500);
               
                 },function(){
                     $(this).children('span').animate({
                        left:'-200px',
                        "opacity":'0'
                     });
               });
           
           
            $('.ss-bar').css({'height':'8322px'})

    })

    //头部js
    
    $('.adv-top span').click(function() {
        /* Act on the event */
        $(window).scroll(function(){
        var scrollTop = $(document).scrollTop();
        $('.ss-bar').css({'height':'8224px'});
        $('.gw').css({'height':'8224px'})
    })
        $(this).parent().hide().siblings().parent('.adv').height(60);
        $('.header-b .last').children('ul').css({
            top:190
        })

    });
    $(".adv-r li").hover(function () {
                $(this).children(".u1,.u2,.u3").slideToggle()
    });
   
    
    //header 的二级菜单
    $('.header-b .last').mouseenter(function() {
         $(this).children('ul').slideToggle()

    });

    //轮播图
    $(function () {

        $('.box').ss();
    });
    //二级菜单
    $('.banner-c li').mouseenter(function() {
        //console.log($(this));
        $(this).not('.first').addClass('active').siblings().removeClass('active');
         $(this).not('.first').css({'border-right':'none'})
      
       $(".banner-c li:not('.first')").children('div').removeClass('select').eq($(this).index()-1).addClass('select').siblings('div').removeClass('select');
       
         /*    var res =  $(".banner-c li:not('.first')").children('div');
             console.log(res);
       */
    });
     $('.banner-c li').mouseleave(function() {
        //console.log($(this));
        $(this).not('.first').removeClass('active');
      
       $(".banner-c li:not('.first')").children('div').removeClass('select');
       
         /*    var res =  $(".banner-c li:not('.first')").children('div');
             console.log(res);
       */
    });

   //表单验证
   //1登录界面
   
  
      

  
});
