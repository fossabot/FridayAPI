var request = require('request');

exports.ai = async (contentmsg,api, ai) => {
if (contentmsg === '') {
    console.log (Error('Bir mesaj algılanmadı'));
  return;
  };
if (api === '') {
    console.log (Error('Bir API KEY Girişi yapılmadı'));
  return;
  };
if (api === 'test') {
    console.log ('TEST OK');
  return;
  };
  
request(`https://fridaymain.herokuapp.com/user/${api}/msg/${contentmsg}`, function (error, response, body) {
ai(body)
})
}

//Ahmetcan Aksu 2018 
  //FridayAI <3
  






