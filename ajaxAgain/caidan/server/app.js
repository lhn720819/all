// 引入node这种的express框架
const express = require("express");

// 引入node自带的path模块
const path = require("path");

// 创建app对象
const app = express();

// 创建静态资源目录
app.use( express.static( path.join(__dirname , "public" ) ) );

// 指定服务器的端口号为3000
app.listen( 3000 );

// 控制输出提示信息
console.log("恭喜你,服务器启动成功!!!");