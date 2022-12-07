const config = require('../config/line')

// event handler
exports.handleEvent = (event) => {
    switch (event.type) {
        case "message":
            switch (event.message.type) {
                case "text":
                    console.log("text message")
                    break;
                case "sticker":
                    console.log("sticker message")
                    break;
                default:
                    throw new Error("Unknow message" + JSON.stringify(event.message.type))
            }
            break;
        case "postback":
            console.log("postback")
            break;
        default:
            throw new Error("Unknow event" + JSON.stringify(event))
    }
}