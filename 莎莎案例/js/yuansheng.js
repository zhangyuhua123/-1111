/* 
* @Author: Marte
* @Date:   2017-03-17 16:29:29
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-19 17:11:44
*/

window.onload = function(){
    setInterval(showTime, 1000);
    showTime();
    function showTime(){
        var later = new Date(2017,2,28);
       // console.log(later);
        var now = new Date();

        //计算差值
        var delta = later.getTime()-now.getTime();

        //准备一批变量存储
        var dms =24*60*60*1000;
        var hms = 60*60*1000;
        var mms = 60*1000;
        var sms = 1000;

        //计算倒计时
        var d  = Math.floor(delta/dms);
          //console.log(d);

        var h = Math.floor((delta-d*dms)/hms);

        var m = Math.floor((delta-h*hms-d*dms)/mms);
        var s = Math.floor((delta-m*mms-d*dms-h*hms)/1000);

       
        //var div = document.getElementsByClassName('daojishi')[0];
        var divs = document.getElementsByClassName('daojishi');
        //console.log(div);
        for(var i = 0;i<divs.length;i++){
            divs[i].innerHTML="剩余 :"+adjust(h)+":"+adjust(m)+":"+adjust(s);
        }
       /* div.innerHTML = "剩余:"+adjust(h)+":"+adjust(m)+":"+adjust(s);*/


    }
    function adjust(num){
        if(num<10){
            return '0'+num;
        }
        return ''+num;
    }
    $('#third ').click(function() {
        console.log(1);
        $('.gw').show();
        /* Act on the event */
    });
    $('.gw span').click(function() {
        console.log(1);
        $(this).parents('.gw').hide();

        /* Act on the event */
    });
     
               

     //输入框
    var inpt = document.getElementById('inpt');
    //console.log(inpt);
    var ul = inpt.getElementsByTagName('ul')[0];
    var xhr = null;
     inpt.addEventListener('input',function(){
                //获取输入框的内容
                var value = inpt.value;
                //请求接口
                if(xhr){
                    xhr.abort();//阻止接口
                }
               ajax('get','2-api.php?keywords='+value,null,function(data){
                    console.log(data); 
                    var html ='';
                    //for循环遍历
                    for(var i =0;i<data.length;i++){
                        html+='<li>'+data[i]+'</li>';
                    }
                    //往ul里添加内容
                   ul.innerHTML=html;

                })

         })
  
    

}
