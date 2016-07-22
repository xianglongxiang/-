/**
 * @TODO 描述。。。
 * @author xianglx@cstonline.com
 * @date: 2016/7/22
 */
var express = require('express');
var app = express();
app.use(express.static(require('path').join(__dirname, '')));
app.listen(process.env.VCAP_APP_PORT || 3000);
console.log("访问路径：http://127.0.0.1:8080/")