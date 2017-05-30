const mongoose = require('mongoose');
const { Schema } = mongoose;

//TODO - Add stats and room reference to schema
const bookingSchema = new Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  date: {
    type: Date
  },
  email: {
    type: String,
    trim: true
  },
  notes: {
    type: String,
    trim: true
  },
  has_paid: {
    type: Boolean,
    default: false
  }
})

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
