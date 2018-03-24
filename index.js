var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var apiai = require('apiai')(process.env.API_token);

var api = '@Queen\'s Crown';

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();    

router.use(function(req, res, next) {
    console.log('Kullanıcı bağlandı.');
    next();
});


app.get('/user/:userid/msg/:msgid', function (req, res) {
	if(!api.includes(req.params.userid)) {
		return res.send('Bu arayüzü kullanamazsınız')
	}
  console.log('Mesaj: ' + req.params.msgid)
  console.log('Kullanıcı: ' + req.params.userid)
  
let apiaiReq = apiai.textRequest(`${req.params.msgid}`, {
      sessionId: `${req.params.userid}`
    });
	
apiaiReq.on('response', (response) => {
      let aiText = response.result.fulfillment.speech;
res.send(`${aiText}`)
})
apiaiReq.end();
})

app.get('/api', function (req, res) {
	res.send(`FridayAI API v1 BETA`)
})


app.listen(port);
console.log('Sunucu bağlandı. Sunucu portu:' + port);
