var express = require('express');
var router = express.Router();

const Room = require('../models/Room');
const Booking = require('../models/Booking');
const Stat = require('../models/Stat');


router.get('/', function(req, res, next) {
      res.render('index')
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
  const name = req.body.room_name;
  const is_enabled = req.body.room_is_enabled;
  const description = req.body.room_description;
  const pictures = req.body.room_pictures;

  let room = new Room();
  room.name = name;
  room.is_enabled = is_enabled;
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
  const name = req.body.booking_name;
  const email = req.body.booking_email;
  const date = req.body.booking_date;
  const notes = req.body.booking_notes;
  const has_paid = req.body.booking_has_paid;

  let booking = new Booking();
  booking.name = name;
  booking.email = email;
  booking.date = date;
  booking.notes = notes;
  booking.has_paid = has_paid;

  booking.save()
    .then(() => {
      res.redirect('/bookings/')
    })

});

router.get('/stats/', function(req, res, next) {
  Stat.find()
    .then(stats => {
      res.render('stats', {
        title: 'Stats',
        stats: stats
      })
    })
});

router.post('/stats/', (req, res) => {
  const date = req.body.stat_date;
  const email = req.body.stat_email;
  const time = req.body.stat_time;
  const picture = req.body.stat_picture;
  const team = req.body.stat_team;

  let stat = new Stat();
  stat.date = date;
  stat.email = email;
  stat.time = time;
  stat.picture = picture;
  stat.team = team;

  stat.save()
    .then(() => {
      res.redirect('/stats/')
    })

});

module.exports = router;
