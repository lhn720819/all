// 引入node这种的express框架
const express = require("express");

// 引入node自带的path模块
const path = require("path");

// 创建app对象
const app = express();

// 引入body.parse模块
var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
app.use( bodyParser.urlencoded({ extended: false })  );

// 创建 application/json 编码解析
app.use( bodyParser.json() );

// 创建静态资源目录
app.use( express.static( path.join(__dirname , "public" ) ) );

app.get("/get01",function( req, res ){
    res.send("这是s2服务器get01返回的字符串数据");
});


app.get("/get02",function( req, res ){
    // res.send("这是s2服务器get02返回的字符串数据");
    // res.send("console.log('hello')");


    // var str = "console.log(zhangsan)";
    // console.log( str );

    // var str = "console.log('zhangsan')";
    // console.log( str );

    // var username = "lisi";
    // var str = "console.log(username)";
    // console.log( str );

    // var username = "lisi";
    // var str = "console.log('username')";
    // console.log( str );


    // var username = "lisi";
    // var str = "console.log("+username+")";
    // console.log( str );

    // var username = "lisi";
    // var str = "console.log('"+username+"')";
    // console.log( str );

    // var username = "wangwu";
    // var username = "s2服务器下get02返回的数据";
    // res.send( "console.log('"+username+"')" );


    // res.send( "fn()" );

    // res.send( "fn( 123 )" );

    var obj = {
        username:"sunqi",
        age:27
    }

    // var str = "fn( obj )";
    // console.log( str );

    // var str = "fn('obj')";
    // console.log( str );
    
    // var str = "fn('"+obj+"')";
    // console.log( str );
    
    // var str = "fn('"+JSON.stringify(obj)+"')";
    // console.log( str );

    // var str = "fn("+JSON.stringify(obj)+")";
    // console.log( str );

    res.send( "fn("+JSON.stringify(obj)+")" );
});

app.get("/get03",function( req, res ){
    // console.log( req.query );

    var obj = {};
    obj.code = 200;
    obj.message = "ok";
    obj.data = req.query;

    // 获取回调函数名
    var funName = req.query.callback;
    // var funName = req.query.abc;

    res.send( funName+"("+JSON.stringify(obj)+")" );
})


app.get("/get04",function( req, res ){
    // 获取回调函数名
    var funName = req.query.callback;

    // 延时器
    setTimeout(function(){
        res.send( funName+"( '这是get04返回的数据内容' )" );
    }, 1000 );
})


// 指定服务器的端口号为3002
app.listen( 3002 );

// 控制输出提示信息
console.log("恭喜你,端口3002服务器启动成功!!!");