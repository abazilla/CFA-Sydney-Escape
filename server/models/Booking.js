const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = require('mongoose').Schema.ObjectId

//TODO - Add stats and room reference to schema
const bookingSchema = new Schema({
  //get the object ID from params or maybe forms
  roomId: ObjectId,
  createdAt: {
    type: Date,
    default: Date.now
  },
  organiserName: {
    type: String,
    trim: true
  },
  organiserEmail: {
    type: String,
    trim: true
  },
  date: {
    type: Date
  },
  notes: {
    type: String,
    trim: true
  },
  hasPaid: {
    type: Boolean,
    default: false
  },
  teamName: {
    type: String,
    trim: true
  },
  teamMembers: [
    //how to add multiple members: use array.push: booking.teamMembers.push(teamMember)
    {
      name: String,
      email: String,
      dob: Date
    }
  ],
  stats: [
    {
      time: String,
      picture: String,
    }
  ]

})

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
