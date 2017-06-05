import React from 'react';
import { Card, CardHeader, CardHeaderTitle, CardHeaderIcon, CardContent, Content, CardFooter, CardFooterItem, Column, Button, Modal } from 're-bulma';
import StripeCheckout from 'react-stripe-checkout';
import Auth from '../modules/Auth';


const style = { padding: '10px' };

class BookingSlot extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: false,
    };

    this.onToken = this.onToken.bind(this);
    this.updateBookingSlot = this.updateBookingSlot.bind(this);
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
    this.updateBookingSlot()
  }

  componentDidMount() {
    console.log(process.env.Stripe_PK);
    console.log("lol");
  }

  updateBookingSlot() {
    console.log(this.props.bookingSlot._id)
    console.log(this.props.bookingSlot.price)
    this.props.bookingSlot.available = false;
    const xhr = new XMLHttpRequest();
    xhr.open('put', `http://localhost:3000/api/bookingslots/${this.props.bookingSlot._id}/edit/?available=false`);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
      }
    });
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
                <StripeCheckout
                  token={this.onToken}
                  name={this.props.bookingSlot._id}
                  amount={this.props.bookingSlot.price * 100}
                  currency="AUD"
                  stripeKey="pk_test_sKxuJtLeLqifb1w8YG1s8g9U"
                >
                  <Button color="isSuccess" onClick={this.handleClick}>Book Now</Button>
                </StripeCheckout>
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
