import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ModifyButtons from '../components/ModifyButtons.jsx';


const Dashboard = ({ secretData, rooms, bookings, roomIdCallback }) => (
  <div className="container">
    <p>
      "Dashboard"
      "You should get access to this page only after authentication."
    </p>

    {secretData}
    <h3>Rooms</h3>
    <ul>
      {rooms.map((room, i) => (
        <div key={i}>
          <li><b>ID:</b> {room._id} </li>
          <li><b>createdAt:</b> {room.createdAt} </li>
          <li><b>Title:</b> {room.title} </li>
          <li><b>description:</b> {room.description} </li>
          <li><b>Members:</b> {room.minMembers} to {room.maxMembers} </li>
          <li><b>isEnabled:</b> {room.isEnabled} </li>
          <li><b>pictures:</b> {room.pictures} </li>
          <li> <ModifyButtons id={room._id} type="rooms"/> </li>
          <br/>
        </div>
      ))}
    </ul>

    <h3>Bookings</h3>
    <ul>
      {bookings.map((booking, i) => (
        <div key={i}>
          <li><b>ID:</b> {booking._id} </li>
          <li><b>createdAt:</b> {booking.createdAt} </li>
          <li><b>teamName:</b> {booking.teamName} </li>
          <li><b>RoomID:</b> {booking.roomId} </li>
          <li><b>Date:</b> {booking.date} </li>
          <li><b>Organiser:</b> {booking.organiserName} </li>
          <li><b>Organiser email:</b> {booking.organiserEmail} </li>
          <li><b>hasPaid:</b> {booking.hasPaid} </li>
          <li><b>Stats:</b> {booking.isEnabled} </li>
          <li><b>teamMembers:</b> {booking.pictures} </li>
          <li> <ModifyButtons id={booking._id} type="bookings" /></li>
          <br/>
        </div>
      ))}
    </ul>
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
