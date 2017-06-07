var express = require('express');
var router = express.Router();

const Room = require('../models/Room');
const Booking = require('../models/Booking');
const BookingSlot = require('../models/BookingSlot');

// root GET
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'index'
  })
});

// Rooms GET
router.get('/rooms/', function(req, res, next) {
  Room.find()
  .then(rooms => {
    res.render('rooms', {
      title: 'Rooms',
      rooms: rooms
    })
  })
});

// Rooms GET JSON
router.get('/api/rooms/', function(req, res, next) {
  Room.find()
  .then(rooms => {
    res.json(rooms)
  })
});

// Single Room GET JSON
router.get('/api/rooms/:id', function(req, res, next) {
  Room.findOne({_id: req.params.id})
  .then(room => {
    res.json(room)
  })
});

// Rooms POST
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

// Rooms POST JSON
router.post('/api/rooms/new/', (req, res) => {
  const title = req.query.title;
  const minMembers = req.query.minMembers;
  const maxMembers = req.query.maxMembers;
  const isEnabled = req.query.isEnabled;
  const description = req.query.description;
  const pictures = req.query.pictures;

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
    res.redirect('/api/rooms/')
  })

});

//Rooms EDIT JSON
router.put('/api/rooms/:id/edit/', (req, res) => {
  Room.findOneAndUpdate({ _id: req.params.id}, req.query, {
    new: true
  })
  .then(() => {
    res.redirect(`/api/rooms/${req.params.id}`);
  });
})

// Rooms DELETE JSON
router.delete('/api/rooms/:id/', (req, res) => {
  Room.findOneAndRemove({ _id: req.params.id})
  .then(() => {
    res.redirect('/api/rooms');
  });
})

// TODO Using API, how do i get the room JSON from the bookings roomID JSON
// Bookings GET
router.get('/bookings/', function(req, res, next) {
  Booking.find()
  .then(bookings => {
    // room = Room.findOne({ _id: bookings.roomId })
    res.render('bookings', {
      title: 'Bookings',
      bookings: bookings,
    })
  })
});

// Bookings GET JSON
router.get('/api/bookings/', function(req, res, next) {
  Booking.find()
  .then(bookings => {
    res.json(bookings)
  })
});

// Bookings with roomID GET JSON
router.get('/api/bookings/rooms/:roomId/', function(req, res, next) {
  Booking.find({roomId: req.params.roomId})
  .then(booking => {
    res.json(booking)
  })
});

// Single Booking GET JSON
router.get('/api/bookings/:id', function(req, res, next) {
  Booking.findOne({_id: req.params.id})
  .then(booking => {
    res.json(booking)
  })
});

// Bookings POST
router.post('/bookings/new/', (req, res) => {
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

// Bookings POST JSON
router.post('/api/bookings/new/', (req, res) => {
  const organiserName = req.query.organiserName;
  const organiserEmail = req.query.organiserEmail;
  const date = req.query.date;
  const notes = req.query.notes;
  const hasPaid = req.query.hasPaid;
  const teamName = req.query.teamName;
  const price = req.query.price;
  // const teamMembers = req.body.teamMembers;
  // const stats = req.body.stats;

  let booking = new Booking();
  booking.roomId = req.query.roomId
  booking.bookingSlotId = req.query.bookingSlotId
  booking.organiserName = organiserName;
  booking.organiserEmail = organiserEmail;
  booking.date = date;
  booking.notes = notes;
  booking.hasPaid = hasPaid;
  booking.teamName = teamName;
  booking.price = price;
  // booking.teamMembers = teamMembers;
  // booking.stats = stats;

  booking.save()
  .then(() => {
    res.redirect('/api/bookings/')
  })

});

//Bookings EDIT JSON
router.put('/api/bookings/:id/edit/', (req, res) => {
  Booking.findOneAndUpdate({ _id: req.params.id}, req.query, {
    new: true
  })
  .then(() => {
    res.redirect(`/api/bookings/${req.params.id}`);
  });
})

// Bookings DELETE JSON
router.delete('/api/bookings/:id/', (req, res) => {
  Booking.findOneAndRemove({ _id: req.params.id})
  .then(() => {
    res.redirect('/api/bookings');
  });
})


// BookingSlot GET JSON
router.get('/api/bookingslots/', function(req, res, next) {
  BookingSlot.find()
  .then(bookingSlots => {
    res.json(bookingSlots)
  })
});

// Single BookingSlots GET JSON
router.get('/api/bookingslots/:id', function(req, res, next) {
  BookingSlots.findOne({_id: req.params.id})
  .then(bookingSlots => {
    res.json(bookingSlots)
  })
});

// BookingSlots POST JSON
router.post('/api/bookingslots/new/', (req, res) => {
  const date = req.query.date;
  const time = req.query.time;
  const room = req.query.room;
  const available = req.query.available;
  const price = req.query.price;

  let bookingslot = new BookingSlot();
  //bookingslot.bookings = req...
  bookingslot.date = date;
  bookingslot.time = time;
  bookingslot.room = room;
  bookingslot.available = available;
  bookingslot.price = price;

  bookingslot.save()
  .then(() => {
    res.redirect('/api/bookingslots/')
  })

});

// Bookingslots EDIT JSON
router.put('/api/bookingslots/:id/edit/', (req, res) => {
  BookingSlot.findOneAndUpdate({ _id: req.params.id}, req.query, {
    new: true
  })
  .then(() => {
    res.redirect(`/api/bookingslots/${req.params.id}`);
  });
})

// Bookingslots DELETE JSON
router.delete('/api/bookingslots/:id/', (req, res) => {
  BookingSlot.findOneAndRemove({ _id: req.params.id})
  .then(() => {
    res.redirect('/api/bookingslots');
  });
})

module.exports = router;
