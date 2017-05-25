function ajax(obj) {


    //ajax
    function getAjax() {
        var  xmlhttp = null;
        if(window.ActiveXObject){
            xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
        } else if(window.XMLHttpRequest){
            xmlhttp = new XMLHttpRequest();
        }
        return  xmlhttp;
    }
    //创建xhr对象
    var xhr = getAjax();
    //open
    //login.php?username=1212&password=1212&key=value

    //username=1212&password=1212&key=value
    var p = '';
    if(obj.params){
        for(var key in obj.params){
            console.log(key)
            console.log(obj.params[key]);
            var value = encodeURIComponent(obj.params[key]);
            if(p){
                p = p +"&"+ key+"="+value;
            }else{
                p = p + key+"="+value;
            }
        }
        console.log(p)

    }
    if(obj.method){
        obj.method = obj.method.toLowerCase();

    }

    if(obj.method == 'get' || obj.method == undefined){
        obj.method = 'get';
        //url面得加参数
        if(obj.params){
            xhr.open(obj.method,obj.url+"?"+p,true);
        }else{
            xhr.open(obj.method,obj.url,true);
        }
        xhr.send();
    }else if(obj.method == 'post'){
        // url 不需要参数
        xhr.open(obj.method,obj.url,true);
        xhr.send(p);
    }

    //send  


    //回调

    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4){
            //数据传输完毕
            if(xhr.status == 200){
                //接口请求成功
                //打印服务器返回数据
                var res = JSON.parse(xhr.responseText)
                //console.log(obj)
                //return obj;
                if(obj.success){
                    obj.success(res);
                }

            }else {
                //接口请求失败
                console.log("请求失败")
                if(obj.failed){
                    obj.failed(xhr.status);
                }
            }
        }
    }

    return xhr;


}