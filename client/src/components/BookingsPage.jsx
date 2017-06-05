import React from 'react';

const BookingsPage = (props) => (
  <div>
    <p>This is the Bookings Page</p>
    {props.bookingSlots.map((bookingslot, i) => (
      <p>hello</p>
    ))}
  </div>
);

export default BookingsPage;
