exports.sms = async (request, res) => {
    const Vonage = require('@vonage/server-sdk')

    const vonage = new Vonage({
        apiKey: "586a6f9f",
        apiSecret: "UIsdpWKqRe4JSDZb"
    })

    const from = "Vonage APIs"
    const to = "32487757115"
    const text = 'A text message sent using the Vonage SMS API'

    vonage.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if (responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    })
}