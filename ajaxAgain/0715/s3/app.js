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


// 拦截所有请求
app.use( function( req, res, next ){
    res.header("Access-Control-Allow-Origin","*");
    next();
});

// 设置某个请求的CORS
app.get("/get01",function( req, res ){
    // 允许指定客户端访问当前服务器
    res.header("Access-Control-Allow-Origin","http://localhost:3001");
    
    // 允许所有客户端访问当前服务器
    // res.header("Access-Control-Allow-Origin","*");
    
    res.send("这是s3服务器get01返回的数据内容");
});


app.get("/get02",function( req, res ){
    res.send("这是s3服务器get02返回的数据内容");
});

app.get("/get03",function( req, res ){
    res.send("这是s3服务器get03返回的数据内容");
});

// 指定服务器的端口号为3003
app.listen( 3003 );

// 控制输出提示信息
console.log("恭喜你,端口3003服务器启动成功!!!");