$.fn.ss = function () {
  
    var
        iTimer = null,
        iIndex = 0,
        aBtnListA  = this.find('.ss-page a'),
        aImgListLi = this.find('.ss-imglist li');
    aBtnListA.bind('mouseenter', function () {
        iIndex = $(this).index();
        move();
    });

    autoMove();

    // 自动运行函数
    function autoMove() {
        iTimer = setInterval(function () {
            iIndex++;
            move();
            //模拟点击右按钮
      
        }, 3000);
    }

    // 轮播图运动过程函数
    function move() {
        // 左边界判断
        if(iIndex < 0) {
            iIndex = aBtnListA.size() - 1;
        }
        // 右边界判断
        if(iIndex >= aBtnListA.size()) {
            iIndex = 0;
        }
        // LI做动画
        aImgListLi.eq(iIndex).stop().animate({opacity:1}).siblings().stop().animate({opacity:0})
        aBtnListA.removeClass('active').eq(iIndex).addClass('active');

    }
}