const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    SenderID: String,
    ReceiverID: String,
    Message: String,
    Color: String
}, { timestamps: true });

const MessageModel = new mongoose.model('Messages',MessageSchema);

module.exports = MessageModel;