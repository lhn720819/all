function ajax( options ){
    // 定义默认参数的对象
    var defaults = {
        type:"get",
        url:"",
        data:{

        },
        "header":{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        success:function(){

        },
        error:function( obj ){
            console.log( obj );
        }
    }
    // 合并对象   Object.assign是ES6新增的方法,低级版本浏览器无法使用  
    Object.assign( defaults , options );

    // 赋值给options
    options = defaults;

    // 创建ajax对象
    var xhr = new XMLHttpRequest();

    // 定义一个参数字符串
    var params = ``;

    // 遍历options.data 拼接参数字符串
    for(var attr in options.data ){
        params += "&" + attr + "=" + options.data[attr];
    }

    // 去掉参数字符串中的第一个&符号
    params = params.substr(1);

    // 判断请求方式是否为get
    if( options.type == "get" ){
        // 判断参数字符串长度是否为0, 当options.data数据为空的时候,  参数字符串长度就是0
        if( params.length == 0 ){
            xhr.open( options.type, options.url );
        }else{
            // 判断请求地址中是否已经存在"?""
            if( options.url.indexOf("?") == -1 ){
                // 拼接参数到url后面
                xhr.open( options.type, options.url + "?" + params );
            }else{
                // 拼接参数到url后面
                xhr.open( options.type, options.url + "&" + params );
            }
        }
        // 发送请求
        xhr.send();
    }else if( options.type == "post"){// 判断请求方式是否为post
        xhr.open( options.type, options.url );

        // 获取content-type请求头类型
        var contentType = options.header["Content-Type"];
        // 判断请求头类型
        if( contentType == "application/x-www-form-urlencoded" ){
            // 设置请求头类型
            xhr.setRequestHeader("Content-type", contentType );
            // 传统表单参数通过xhr.send()传递过去
            xhr.send( params );
        }else if( contentType == "application/json" ){
            // 设置请求头类型
            xhr.setRequestHeader("Content-type", contentType );
            // json字符串参数通过xhr.send()传递过去
            xhr.send( JSON.stringify(options.data) );
        }

    }

    // 处理响应
    xhr.onreadystatechange = function(){
        // 判断ajax状态码
        if( xhr.readyState == 4 ){
            // 判断http状态码
            if( xhr.status == 200 ){
                // 定义一个正则表达式
                var reg = /^\{(.+:.+,*){1,}\}$/;
                // 判断是否符合正则  判断是否是json字符串
                if( reg.test( xhr.responseText ) ){
                    // 把json字符串转成json对象
                    options.success( JSON.parse(xhr.responseText) );
                }else{
                    options.success( xhr.responseText );
                }

            } else{
                options.error( xhr );
            }
        }
    }
}