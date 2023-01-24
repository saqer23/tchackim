const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoomSchema = new Schema({
  roomName: { type: String, default: '' },
  type: { type: Number, default: 0 }, // 1- singal -- 2- gruop
  unreadCount: { type: Number, default: 0 },
  typingUsers: Array,
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Room', RoomSchema)
