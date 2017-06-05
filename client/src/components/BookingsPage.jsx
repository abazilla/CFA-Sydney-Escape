import React from 'react';
import Auth from '../modules/Auth';
import BookingSlot from './BookingSlot';
import { Section, Container, Title, Card, CardHeader, CardHeaderTitle, CardHeaderIcon, CardContent, Content, CardFooter, CardFooterItem, Columns, Column } from 're-bulma';



class BookingsPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      bookingSlots: [],
    };
  }

  componentDidMount() {
    this.getBookingSlots();
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


  render() {
    return (
      <Container>
      <Section>
        <Title>Bookings Slots</Title>
        <Columns isMultiline>

          {this.state.bookingSlots.map((bookingSlot, i) => (
            <BookingSlot key={i} bookingSlot={bookingSlot} />

          ))}
        </Columns>
      </Section>
    </Container>
    );
  }
}

export default BookingsPage;
