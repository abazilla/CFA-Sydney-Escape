const mongoose = require('mongoose');
const { Schema } = mongoose;

//TODO - Add room and booking reference to schema
const statSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  date: {
    type: Date
  },
  time: {
    type: Number,
    trim: true
  },
  picture: {
    type: String,
    trim: true
  },
  team: {
    type: String,
    trim: true
  }
})

const Stat = mongoose.model('Stat', statSchema);

module.exports = Stat;
