const config = require('../config/line');
const { sendFlexCovidInfo } = require('./send-flex-covid-info');
const { sendImage } = require('./send-image');
const { sendText } = require('./send-text');

exports.handleMessage = (event) => {
    let msg
    switch (event.message.text.toLowerCase().trim()) {
        case "image":
            msg = sendImage();
            break;
        case "covid":
            msg = sendFlexCovidInfo()
            break;
        default:
            msg = sendText(event);
    }
    return config.client.replyMessage(event.replyToken, msg)
}