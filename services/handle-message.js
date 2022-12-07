const config = require('../config/line')

exports.handleMessage = (event) => {
    let msg
    let msgText = event.message.text.toLowerCase().trim()
    if (msgText === "promotion") {
        msg = { type: "text", text: "มีโปรโมชั่น ราคา 1,500 บาท" }
    }
    return config.client.replyMessage(event.replyToken, msg)
}