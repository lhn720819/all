// options是一个配置对象
function ajax( options ){
    // defaults是默认配置项
    var defaults = {
        // 请求方式默认为get
        type:"get",
        // 请求地址,默认为""
        url:"",
        // 请求数据,默认为空对象
        data:{},
        // 传递参数格式默认为传统表单
        header:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        // 成功的回调函数
        success:function(){

        },
        // 失败的回调函数
        error:function( obj ){
            console.log( obj );
        }
    }

    // 合并对象  把options对象合并到defaults对象中
    Object.assign( defaults , options );

    // 把defaults的值赋给options
    options = defaults;

    // 创建ajax对象
    var xhr = new XMLHttpRequest();

    // 定义一个变量作为参数字符串
    var params = "";

    // 遍历options.data
    for(var attr in options.data ){
        params = params + "&" + attr + "=" + options.data[attr];
    }
    // 去掉第一个&符号
    params = params.substr(1);

    // 初始化ajax对象
    if( options.type == "get" ){// 如果是get请求

        if( params.length == 0 ){// 如果params参数字符串的长度为0
            xhr.open( options.type , options.url );
        }else{// 如果params参数字符串的长度不为0

            // 判断原来options.url中是否存在"?"
            if( options.url.indexOf("?") == -1 ){// 原来options.url中不存在"?"
                xhr.open( options.type , options.url + "?" + params );
            }else{// 原来options.url中存在"?"
                xhr.open( options.type , options.url + "&" + params );
            }

        
        }

        // 发送请求
        xhr.send();
    }else if( options.type == "post" ){// 如果是post请求
        xhr.open( options.type , options.url );
        // post传递参数的时候,还需要设置请求头
        // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

        // 获取请求头信息Content-Type的值
        var ContentType = options.header["Content-Type"];

        if( ContentType == "application/x-www-form-urlencoded" ){// 判断ContentType的值是否为传统表单
            xhr.setRequestHeader("Content-type", ContentType );
            
            // 发送请求
            xhr.send( params );
        }else if( ContentType == "application/json" ){// 判断ContentType的值是否为json字符串
            xhr.setRequestHeader("Content-type", ContentType );

            // 发送请求
            xhr.send( JSON.stringify( options.data ) );
        } 

    }

    // 处理响应
    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4 ){// 判断ajax的状态码是否为4
            if(  xhr.status == 200  ){// 判断http状态码是否为200
                // 正则表达式
                var reg = /^\{(.+:.+,*){1,}\}$/;
                
                // 判断是否符合正则规则
                if( reg.test( xhr.responseText ) ){
                    // 响应的数据是json字符串
                    options.success( JSON.parse( xhr.responseText) );
                }else{
                    // 响应的数据是普通字符串
                    options.success( xhr.responseText );
                }

            }else{
                options.error( xhr );
            }
            
        }
    }
}