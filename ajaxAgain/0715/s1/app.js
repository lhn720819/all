// 引入node这种的express框架
const express = require("express");

// 引入node自带的path模块
const path = require("path");

// 引入request请求模块
const request = require('request');

// 引入node自带的fs模块
const fs = require("fs");

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
    res.send("这是s1服务器get01返回的数据内容");
});


app.get("/get02",function( req, res ){
    /* request( 请求地址, function (error, response, body) {
        console.error('error:', error); // 错误信息
        console.log('statusCode:', response && response.statusCode); // 响应信息对象
        console.log('body:', body); // 请求地址返回数据内容
    }); */

    request( "http://localhost:3002/get02", function (error, response, body) {
        // console.log( body );
        res.send( body );
    });
});

app.get("/readFileContent",function( req, res ){
    // 使用node中的内置fs模块读取文件内容
    /* fs.readFile("文件所在路径", function( err, data ){
        if (err) {
            throw err;   
        }
        console.log(data);
    } ) */

    fs.readFile("./public/a.txt", function( err, data ){
        if (err) {// err是错误信息
            throw err;   
        }

        // data是读取的到文件内容 返回值是一个缓存区数据,需要使用toString转成字符串
        // console.log(data);
        // console.log( data.toString() );


        res.send( data.toString() );

    } );

})

// 指定服务器的端口号为3001
app.listen( 3001 );

// 控制输出提示信息
console.log("恭喜你,端口3001服务器启动成功!!!");