import React from 'react';
import { Card, CardHeader, CardHeaderTitle, CardHeaderIcon, CardContent, Content, CardFooter, CardFooterItem, Column, Button, Modal } from 're-bulma';
import StripeCheckout from 'react-stripe-checkout';
import Auth from '../modules/Auth';
import CreateBookingFormCustomer from './CreateBookingFormCustomer';


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
        organiserName: '',
        organiserEmail: '',
        roomId: '',
        stats: [],
        teamMembers: [],
        hasPaid: [],
      }
    };

    this.onToken = this.onToken.bind(this);
    this.updateBookingSlot = this.updateBookingSlot.bind(this);
    this.createNewBooking = this.createNewBooking.bind(this);
    this.changeBooking = this.changeBooking.bind(this);
  }

  componentDidMount() {
    console.log(process.env.Stripe_PK);
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
    this.updateBookingSlot()
  }

  createNewBooking(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    // create a string for an HTTP body message
    // TODO = get the array &object id things working
    const teamName = encodeURIComponent(this.state.booking.teamName);
    const notes = encodeURIComponent(this.state.booking.notes);
    const date = encodeURIComponent(this.props.bookingSlot.date);
    const organiserName = encodeURIComponent(this.state.booking.organiserName);
    const organiserEmail = encodeURIComponent(this.state.booking.organiserEmail);
    const roomId = encodeURIComponent(this.state.booking.roomId);
    const formData = `?teamName=${teamName}&notes=${notes}&date=${date}&organiserName=${organiserName}&organiserEmail=${organiserEmail}`;
    console.log(`formData: ${formData}`)

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', `http://localhost:3000/api/bookings/new${formData}`);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.send(formData);
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
    xhr.open('put', `http://localhost:3000/api/bookingslots/${this.props.bookingSlot._id}/edit/?available=false`);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.send();
    window.location.reload();
  }

  render() {
    return (
      <Column style={style}>
        <Card >
          <CardHeader>
            <CardHeaderTitle>
            </CardHeaderTitle>
          </CardHeader>
          <CardContent>

            <ul>
              <li><b>ID:</b> {this.props.bookingSlot._id} </li>
              <li><b>date:</b> {this.props.bookingSlot.date} </li>
              <li><b>time:</b> {this.props.bookingSlot.time} </li>
              <li><b>room:</b> {this.props.bookingSlot.room} </li>
              <li><b>price:</b> {this.props.bookingSlot.price} </li>
              <li><b>available:</b> {this.props.bookingSlot.available} </li>
            </ul>
            { this.props.bookingSlot.available ?
              <div>
                <Button onClick={() => this.setState({ isOpen: true })}>Open</Button>
                <Modal
                  type="card"
                  headerContent="Header Content"
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
                    currency="AUD"
                    stripeKey="pk_test_sKxuJtLeLqifb1w8YG1s8g9U">
                    <Button color="isSuccess" onClick={() => this.setState({ isOpen: false })}>Book Now</Button>
                  </StripeCheckout>
                </Modal>
              </div>
              :
              <Button color="isDanger">BOOKED!</Button>}

            </CardContent>
          </Card>
        </Column>
      )
    }
  }

  BookingSlot.propTypes = {
  };

  export default BookingSlot;
