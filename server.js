let express = require('express');

const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
let ad = require('./app/mock/home/ad');
console.log(ad, ad);

//app.get('/', (req, res) => {

	//res.send(ad);
//});

app.get('/api/ad', (req,res) => {
	console.log('Example app listening at http:');
	res.send(ad);
});
app.listen(3000, function() {
	console.log("servier start sucess");
});
