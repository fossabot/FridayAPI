# FridayAPI
FridayAI API 

**How can I use This AI ?**

-You have to get API Key by developer . To do that you have to mail your reason to infofridayapp@gmail.com

You can try AI on  

[Click me !](https://console.dialogflow.com/api-client/demo/embedded/fridayai "Try FridayAI")


`var request = require('request');
var fridayapi = 'https://fridaymain.herokuapp.com'
var fridayapikey = 'Some api key'


request(`${fridayapi}/user/${fridayapikey}/msg/(message)}`, function (error, response, body) {
console.log(body)
})
`
