const config = require('../config/line')

// event handler
exports.handleEvent = (event)=> {
    console.log(event)
    if (event.type !== 'message' || event.message.type !== 'text') {
        // ignore non-text-message event
        return Promise.resolve(null);
    }

    // create a echoing text message
    const echo = { type: 'text', text: event.message.text };

    // use reply API
    return config.client.replyMessage(event.replyToken, echo);
}