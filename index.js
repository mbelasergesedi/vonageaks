const app = require('express')()
const bodyParser = require('body-parser')
const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
    apiKey: "586a6f9f",
    apiSecret: "UIsdpWKqRe4JSDZb"
})

const from = 'VONAGE_BRAND_NAME'
const to = '+32487757115'
const text = 'A text message sent using the Vonage SMS API'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

async function sendSMS() {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}

sendSMS();
