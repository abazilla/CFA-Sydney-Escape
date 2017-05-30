const mongoose = require('mongoose');
const { Schema } = mongoose;

//TODO - Add stats and booking reference to schema
const roomSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  is_enabled: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    trim: true
  },
  pictures: {
    type: String,
    trim: true
  }
})

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
