var express = require('express');
var router = express.Router();
var cors = require('cors');
var http = require('http');

var express = require('express');
var proxy = require('http-proxy-middleware');
router.use('/api', proxy({
  target: 'http://localhost:3005', 
  changeOrigin: true,
  pathRewrite: {
    '/api': '/'
  }
}));

// const corsOptions = {
//   origin: 'http://localhost:8080',
//   credentials: true
// }
// router.use(cors(corsOptions))

// cors跨域
// router.all('*',(req,res,next)=>{
//   res.header('Access-Control-Allow-Origin','http://localhost:8080')
//   res.header('Access-Control-Allow-Credentials','true')
//   res.header('Access-Control-Allow-Headers','content-type')
//   res.header('Access-Control-Allow-Methods','POST,GET,DELETE,OPTIONS')
//   next()
// })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getJsonp',(req,res)=>{
  res.jsonp({
    data: '一些信息',
    msg: '吃饭睡觉打代码',
    code: 200
  })
})

router.get('/getMsg',(req,res)=>{
  // cors跨域：简单请求
  res.header('Access-Control-Allow-Origin','*')
  res.jsonp({
    data: '一些信息',
    msg: '吃饭睡觉打代码',
    code: 200
  })
})

router.get('/proxy',(req,respnse)=>{
  http.get('http://localhost:3005/demo2',()=>{
    // console.log(res.body)
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
        respnse.json(parsedData);
      } catch (e) {
        console.error(e.message);
      }
    });
  })
})

// cors跨域：非简单请求
// router.options('/noSimple',(req,res)=>{
//   res.header('Access-Control-Allow-Origin','*')
//   res.header('Access-Control-Allow-Headers','content-type')
//   res.header('Access-Control-Allow-Methods','POST,GET,DELETE,OPTIONS')
//   res.send()
// })

router.post('/noSimple',(req,res)=>{
  res.header('Access-Control-Allow-Origin','*')
  res.json({
    data: '一些信息',
    msg: '吃饭睡觉打代码',
    code: 200
  })
})

module.exports = router;
