import React from 'react';
import { Card, CardHeader, CardHeaderTitle, CardHeaderIcon, CardContent, Content, CardFooter, CardFooterItem, Column, Button, Modal } from 're-bulma';
import StripeCheckout from 'react-stripe-checkout';
import Auth from '../modules/Auth';
import CreateBookingFormCustomer from './CreateBookingFormCustomer';
import moment from 'moment';

const style = { padding: '10px' };

class BookingSlot extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: false,
      booking: {
        teamName: '',
        notes: '',
        date: '',
        time: '',
        price: '',
        organiserName: '',
        organiserEmail: '',
        roomId: '',
        bookingSlotId: '',
        stats: [],
        teamMembers: [],
      },
    };

    this.onToken = this.onToken.bind(this);
    this.updateBookingSlot = this.updateBookingSlot.bind(this);
    this.createNewBooking = this.createNewBooking.bind(this);
    this.changeBooking = this.changeBooking.bind(this);
  }

  componentDidMount() {
    console.log("lol");
  }

  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
    this.createNewBooking()
  }

  createNewBooking() {
    // create a string for an HTTP body message
    // TODO = get the array &object id things working
    const teamName = encodeURIComponent(this.state.booking.teamName);
    const notes = encodeURIComponent(this.state.booking.notes);
    const date = encodeURIComponent(this.props.bookingSlot.date);
    const price = encodeURIComponent(this.props.bookingSlot.price);
    const organiserName = encodeURIComponent(this.state.booking.organiserName);
    const organiserEmail = encodeURIComponent(this.state.booking.organiserEmail);
    const roomId = encodeURIComponent(this.state.booking.roomId);
    const bookingSlotId = encodeURIComponent(this.props.bookingSlot._id);
    const formData = `?teamName=${teamName}&notes=${notes}&date=${date}&organiserName=${organiserName}&organiserEmail=${organiserEmail}&price=${price}`;
    console.log(`formData: ${formData}`)

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', `${process.env.REACT_APP_API_ENDPOINT}/api/bookings/new${formData}`);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.send(formData);

    this.updateBookingSlot();
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

  updateBookingSlot() {
    const xhr = new XMLHttpRequest();
    xhr.open('put', `${process.env.REACT_APP_API_ENDPOINT}/api/bookingslots/${this.props.bookingSlot._id}/edit/?available=false`);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.send();
    setTimeout(window.location.reload(), 500);
  }

  render() {
    return (
      <Column  size="isOneThird" style={style}>
        <Card >
          <CardContent>

            <p>
              <strong>Room:</strong> {this.props.fakeRoom}
              <br/>
              <strong>Date:</strong> {moment(this.props.bookingSlot.date).format('h:mm:a, MMMM Do YYYY')}
              <br/>
              <strong>Price:</strong> ${this.props.bookingSlot.price}
            </p>
            { this.props.bookingSlot.available ?
              <div style={{ textAlign: 'center' }} >
                <Button onClick={() => this.setState({ isOpen: true })}>Open</Button>
                <Modal
                  type="card"
                  headerContent="Enter your details below"
                  isActive={this.state.isOpen}
                  onCloseRequest={() => this.setState({ isOpen: false })}>
                  <Content>
                    <CreateBookingFormCustomer
                      booking={this.state.booking}
                      onChange={this.changeBooking}/>
                    </Content>
                    <StripeCheckout
                      token={this.onToken}
                      name={this.props.bookingSlot._id}
                      amount={this.props.bookingSlot.price * 100}
                      email={this.state.booking.organiserEmail}
                      currency="AUD"
                      stripeKey={process.env.REACT_APP_STRIPEKEY}>
                      <Button color="isInfo" onClick={() => this.setState({ isOpen: false })}>Book Now</Button>
                    </StripeCheckout>
                  </Modal>
                </div>
                :
                <div style={{textAlign: 'center'}}><Button color="isDanger">BOOKED!</Button></div>}

              </CardContent>
            </Card>
          </Column>
        )
      }
    }

    BookingSlot.propTypes = {
    };

    export default BookingSlot;
