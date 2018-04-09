var assert = require('assert');
var clients = require('restify-clients');

var client = clients.createJsonClient({
  url: 'https://fserver.herokuapp.com',
  version: '~3.9.7'
});

exports.ai = async (contentmsg,api, ai) => {

var msgs = contentmsg
var msgg = msgs.replace(/\s+/g,"_");

if (msgg === '') {
    console.log (Error('Message is empty'));
  return;
  };
if (api === '') {
    console.log (Error('API KEY is empty'));
  return;
  };

  
  
client.get(`/msg/${api}/${msgg}`, function (err, req, res, obj) {

if(obj[0].Status === 'FAIL') {
	return console.log (Error('Wrong API KEY'));
}
  ai(obj[0].msg)
});
}

//Ahmetcan Aksu 2018 
  //FridayAI <3
  






