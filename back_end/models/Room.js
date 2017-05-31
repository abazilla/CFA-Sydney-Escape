const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = require('mongoose').Schema.ObjectId

//TODO - Add stats and booking reference to schema
const roomSchema = new Schema({
  bookings: [
    {
      bookingId: ObjectId
    }
  ],
  title: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  minMembers: {
    type: Number
  },
  maxMembers: {
    type: Number
  },
  isEnabled: {
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
  },
})

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
