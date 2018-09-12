var express = require('express');
var router = express.Router();
var app = express();
app.use(express.static('src'));


// 定义网站主页的路由
router.get('/', function(req, res) {
  res.send('index.html');
});
var server = app.listen(3000, function() {
    console.log('listening 3000 ....');
});
// 这里把中间件导出，供app.js使用
module.exports = router;