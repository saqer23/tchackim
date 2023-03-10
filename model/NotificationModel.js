const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    userTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userFrom: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    read_at: Date,
    title: String,
    message: String,
    entityId: mongoose.Schema.Types.ObjectId
}, { timestamps: true })

const Notification = mongoose.model('Notification', notificationSchema)

module.exports = Notification
