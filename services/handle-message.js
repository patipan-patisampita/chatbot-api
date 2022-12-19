const config = require('../config/line');
const { sendImage } = require('./send-image');

exports.handleMessage = (event) => {
    let msg
    switch (event.message.text.toLowerCase().trim()) {
        case "image":
            msg = sendImage();
            break;
        default:
            msg = sendText(event);
    }
    return config.client.replyMessage(event.replyToken, msg)
}