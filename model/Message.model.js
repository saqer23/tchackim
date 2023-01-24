const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
  content: { type: String, required: true },
  system: { type: Boolean, default: false },
  saved: { type: Boolean, default: false },
  distributed: { type: Boolean, default: false }, 
  seen: { type: Boolean, default: false },
  deleted: { type: Boolean, default: false },
  failure: { type: Boolean, default: false },
  disableActions: { type: Boolean, default: false },
  disableReactions: { type: Boolean, default: false },
  sender: { type: Schema.Types.ObjectId, ref: 'User' },
  room: { type: Schema.Types.ObjectId, ref: 'Room' }
}, {
  timestamps: true
})

module.exports = mongoose.model('Message', MessageSchema)
