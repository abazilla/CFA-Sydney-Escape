const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = require('mongoose').Schema.ObjectId

//TODO - Add stats and room reference to schema
const bookingSlotSchema = new Schema({
    //get the object ID from params or maybe forms
    date: Date,
    time: Date,
    room: ObjectId,
    available: {
      type: Boolean,
      default: true,
    },
    price: Number,
})

const BookingSlot = mongoose.model('BookingSlot', bookingSlotSchema);

module.exports = BookingSlot;
