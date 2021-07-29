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
    // res.send("这是s2服务器get01返回的数据内容");

    // var funName = req.query.callback;
    // res.send( funName+"('这是s2服务器get01返回的数据内容')" );

    /* var obj = {
        username:"zhangsan",
        age:23,
        code:200
    }

    var funName = req.query.callback;
    // console.log( funName+"('obj')" );
    // console.log( funName+"("+JSON.stringify(obj)+")" );
    res.send( funName+"("+JSON.stringify(obj)+")" ); */



    // res.jsonp 方法 ,直接返回一个jsonp需要的数据
    // res.jsonp("我是一个字符串");

    var obj = {
        username:"zhangsan",
        age:23,
        code:200
    }
    res.jsonp( obj );
});

app.get("/get02",function( req, res ){
    res.send("这是s2服务器get02返回的数据内容");
})

// 指定服务器的端口号为3002
app.listen( 3002 );

// 控制输出提示信息
console.log("恭喜你,端口3002服务器启动成功!!!");