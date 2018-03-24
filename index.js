var request = require('request');
var fridayapi = 'https://fridaymain.herokuapp.com'
var fridayapikey = 'Some api key'


request(`${fridayapi}/user/${fridayapikey}/msg/(message)}`, function (error, response, body) {
console.log(body)
})
