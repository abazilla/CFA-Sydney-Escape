import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';
import CreateRoomForm from '../components/CreateRoomForm.jsx';
import CreateBookingForm from '../components/CreateBookingForm.jsx';
import CreateBookingSlotForm from '../components/CreateBookingSlotForm.jsx';
import { Link } from 'react-router-dom';

class DashboardPage extends React.Component {

  /**
  * Class constructor.
  */
  constructor(props, context) {
    super(props, context);

    this.state = {
      secretData: '',
      errors: {},
      rooms: [],
      bookings: [],
      bookingSlots: [],
      room: {
        title: '',
        isEnabled: true,
        minMembers: '',
        maxMembers: '',
        description: '',
        pictures: '',
      },
      booking: {
        teamName: '',
        notes: '',
        date: '',
        organiserName: '',
        organiserEmail: '',
        roomId: '',
        stats: [],
        teamMembers: [],
        hasPaid: [],
      },
      bookingSlot: {
        date: '',
        time: '',
        room: '',
        available: '',
        price: '',
      },
    };

    this.createNewRoom = this.createNewRoom.bind(this);
    this.createNewBooking = this.createNewBooking.bind(this);
    this.createNewBookingSlot = this.createNewBookingSlot.bind(this);
    this.changeRoom = this.changeRoom.bind(this);
    this.changeBooking = this.changeBooking.bind(this);
    this.changeBookingSlot = this.changeBookingSlot.bind(this);

  }

  /**
  * This method will be executed after initial rendering.
  */
  componentDidMount() {
    this.authToken();
    this.getRooms();
    this.getBookings();
    this.getBookingSlots();
  }

  authToken() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:3000/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message
        });
      }
    });
    xhr.send();
  }

  getRooms() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:3000/api/rooms');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // console.log(xhr.response)
        this.setState({
          rooms: xhr.response
        });
      }
    });
    xhr.send();
  }

  getBookings() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:3000/api/bookings');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // console.log(xhr.response)
        this.setState({
          bookings: xhr.response
        });
      }
    });
    xhr.send();
  }

  getBookingSlots() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:3000/api/bookingslots');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // console.log(xhr.response)
        this.setState({
          bookingSlots: xhr.response
        });
      }
    });
    xhr.send();
  }

  createNewRoom(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    // create a string for an HTTP body message
    const title = encodeURIComponent(this.state.room.title);
    const isEnabled = encodeURIComponent(this.state.room.isEnabled);
    const minMembers = encodeURIComponent(this.state.room.minMembers);
    const maxMembers = encodeURIComponent(this.state.room.maxMembers);
    const description = encodeURIComponent(this.state.room.description);
    const pictures = encodeURIComponent(this.state.room.pictures);
    const formData = `?title=${title}&isEnabled=${isEnabled}&minMembers=${minMembers}&maxMembers=${maxMembers}&description=${description}&pictures=${pictures}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', `http://localhost:3000/api/rooms/new${formData}`);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // save the token into local storage
        localStorage.setItem('successMessage', xhr.response.message);

        // reload page
        window.location.reload();
      } else {
        // failure

        // change the component state
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  createNewBooking(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    // create a string for an HTTP body message
    // TODO = get the array &object id things working
    const teamName = encodeURIComponent(this.state.booking.teamName);
    const notes = encodeURIComponent(this.state.booking.notes);
    const date = encodeURIComponent(this.state.booking.date);
    const organiserName = encodeURIComponent(this.state.booking.organiserName);
    const organiserEmail = encodeURIComponent(this.state.booking.organiserEmail);
    const roomId = encodeURIComponent(this.state.booking.roomId);
    const stats = encodeURIComponent(this.state.booking.stats);
    const teamMembers = encodeURIComponent(this.state.booking.teamMembers);
    const hasPaid = encodeURIComponent(this.state.booking.hasPaid);
    const formData = `?teamName=${teamName}&notes=${notes}&date=${date}&organiserName=${organiserName}&organiserEmail=${organiserEmail}`;
    console.log(`formData: ${formData}`)

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', `http://localhost:3000/api/bookings/new${formData}`);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // save the token into local storage
        localStorage.setItem('successMessage', xhr.response.message);

        // reload page
        window.location.reload();
      } else {
        // failure

        // change the component state
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  createNewBookingSlot(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    // create a string for an HTTP body message
    // TODO = get the array &object id things working
    const date = encodeURIComponent(this.state.bookingSlot.date);
    const time = encodeURIComponent(this.state.bookingSlot.time);
    const room = encodeURIComponent(this.state.bookingSlot.room);
    const available = encodeURIComponent(this.state.bookingSlot.available);
    const price = encodeURIComponent(this.state.bookingSlot.price);
    // TODO add &room=${room}
    const formData = `?date=${date}&time=${time}&available=${available}&price=${price}`;
    console.log(`formData: ${formData}`)

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', `http://localhost:3000/api/bookingslots/new${formData}`);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // save the token into local storage
        localStorage.setItem('successMessage', xhr.response.message);

        // reload page
        window.location.reload();
      } else {
        // failure

        // change the component state
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  changeRoom(event) {
    const field = event.target.name;
    const room = this.state.room;
    room[field] = event.target.value;
    console.log(room)
    console.log(room[field])

    this.setState({
      room
    });
  }

  changeBooking(event) {
    const field = event.target.name;
    const booking = this.state.booking;
    booking[field] = event.target.value;
    console.log(booking)
    console.log(booking[field])

    this.setState({
      booking
    });
  }

  changeBookingSlot(event) {
    const field = event.target.name;
    const bookingSlot = this.state.bookingSlot;
    bookingSlot[field] = event.target.value;
    console.log(bookingSlot)
    console.log(bookingSlot[field])

    this.setState({
      bookingSlot
    });
  }

  /**
  * Render the component.
  */
  render() {
    return (
      <div>
        <CreateRoomForm onSubmit={this.createNewRoom} onChange={this.changeRoom} errors={this.state.errors} room={this.state.room} />
        <CreateBookingForm onSubmit={this.createNewBooking} onChange={this.changeBooking} errors={this.state.errors} booking={this.state.booking} />
        <CreateBookingSlotForm onSubmit={this.createNewBookingSlot} onChange={this.changeBookingSlot} errors={this.state.errors} bookingSlot={this.state.bookingSlot} />
        <Dashboard secretData={this.state.secretData} rooms={this.state.rooms} bookings={this.state.bookings} bookingSlots={this.state.bookingSlots} />
      </div>
    );
  }

}

export default DashboardPage;
