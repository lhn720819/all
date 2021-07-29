// 引入node这种的express框架
const express = require("express");

// 引入node自带的path模块
const path = require("path");

// 创建app对象
const app = express();

// 创建静态资源目录
app.use( express.static( path.join(__dirname , "public" ) ) );

// 引入body.parse模块
var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
app.use( bodyParser.urlencoded({ extended: false })  );


// 指定服务器的端口号为3000
app.listen( 3000 );


// 创建get01路由
app.get("/get01",function( req, res ){
    // req 请求对象(request)
    // res 响应对象(response)

    // 通过res.send() 可以向客户端返回指定内容
    // html页面是客户端,向app.js这个服务端发起请求

    // 服务器响应数据的格式常见的有两种
    // 第一种 返回字符串内容
    res.send("我是get01返回的数据11111");
});

// 创建get02路由
app.get("/get02",function( req, res ){
    // 服务器响应数据的格式常见的有两种
    // 第二种 返回json对象
    res.send( {
        "username":"zhangsan",
        "age":23
    } );
});

// 创建get03路由
app.get("/get03",function( req, res ){
    // res.send("我是get03返回的字符串内容");

    // 通过 req.query 这个属性就可以获取 get请求通过url传递过来的参数
    // console.log( req.query );

    var obj = {};
    obj.status = 1000;
    obj.desc = "OK";
    obj.data = req.query;

    res.send( obj );
});

// 创建post03路由
app.post("/post03",function( req, res ){
    // res.send("我是post03返回的字符串内容");

    // 通过 req.body 这个属性获取 post请求传递过来的参数
    // 前提要安装body-parser模块  npm i body-parser -D
    // console.log( req.body );

    var obj = {};
    obj.code = 200;
    obj.message = "获取数据成功";
    obj.data = req.body;

    res.send( obj );
});

// 创建get04路由
app.get("/get04",function( req, res ){
    // 在js里面输出一个不存在的变量
    // console.log( a );

    res.send("get04返回的数据内容");
});


// 控制输出提示信息
console.log("恭喜你,服务器启动成功!!!");