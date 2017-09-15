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


app.listen(3000, function() {
	console.log("servier start sucess");
});
