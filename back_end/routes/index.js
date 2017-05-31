var express = require('express');
var router = express.Router();

const Room = require('../models/Room');
const Booking = require('../models/Booking');


router.get('/', function(req, res, next) {
      res.render('index', {
        title: 'index'
      })
});

router.get('/rooms/', function(req, res, next) {
  Room.find()
    .then(rooms => {
      res.render('rooms', {
        title: 'Rooms',
        rooms: rooms
      })
    })
});

router.post('/rooms/', (req, res) => {
  const title = req.body.title;
  const minMembers = req.body.minMembers;
  const maxMembers = req.body.maxMembers;
  const isEnabled = req.body.isEnabled;
  const description = req.body.description;
  const pictures = req.body.pictures;

  let room = new Room();
  //room.bookings = req...
  room.title = title;
  room.minMembers = minMembers;
  room.maxMembers = maxMembers;
  room.isEnabled = isEnabled;
  room.description = description;
  room.pictures = pictures;

  room.save()
    .then(() => {
      res.redirect('/rooms/')
    })

});

router.get('/bookings/', function(req, res, next) {
  Booking.find()
    .then(bookings => {
      res.render('bookings', {
        title: 'Bookings',
        bookings: bookings
      })
    })
});

router.post('/bookings/', (req, res) => {
  const organiserName = req.body.organiserName;
  const organiserEmail = req.body.organiserEmail;
  const date = req.body.date;
  const notes = req.body.notes;
  const hasPaid = req.body.hasPaid;
  const teamName = req.body.teamName;
  // const teamMembers = req.body.teamMembers;
  // const stats = req.body.stats;

  let booking = new Booking();
  //booking.roomId = req...
  booking.organiserName = organiserName;
  booking.organiserEmail = organiserEmail;
  booking.date = date;
  booking.notes = notes;
  booking.hasPaid = hasPaid;
  booking.teamName = teamName;
  // booking.teamMembers = teamMembers;
  // booking.stats = stats;

  booking.save()
    .then(() => {
      res.redirect('/bookings/')
    })

});

module.exports = router;
