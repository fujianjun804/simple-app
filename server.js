let express = require('express');

const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
let ad = require('./app/mock/home/ad');
console.log(ad, ad);


app.get('/api/ad', (req,res) => {
	console.log('Example app listening at http:');
	res.send(ad);
});

let list = require('./app/mock/home/list');
// 获取列表
app.get('/api/list/:city/:page', (req,res) => {
	res.send(list);
})

//商户详情
let info = require('./app/mock/detail/info');
//通过id来获取商户信息
app.get('/api/detail/info/:id',(req,res)=>{
    console.log(req.params.id);
    res.send(info);
});

//评价列表 id,页码 page
let comment = require('./app/mock/detail/comment');
app.get('/api/detail/comment/:id/:page',(req,res)=>{
    console.log(req.params.id);
    console.log(req.params.page);
    res.send(comment);
});

app.listen(3000, function() {
	console.log("servier start sucess");
});
