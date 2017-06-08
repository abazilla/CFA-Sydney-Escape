import React from 'react';
import Auth from '../modules/Auth';
import BookingSlot from './BookingSlot';
import { Section, Container, Title, Card, CardHeader, CardHeaderTitle, CardHeaderIcon, CardContent, Content, CardFooter, CardFooterItem, Columns, Column, Subtitle} from 're-bulma';



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
    xhr.open('get', `${process.env.REACT_APP_API_ENDPOINT}/api/bookingslots`);
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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Subtitle><p>The Golden Idol</p></Subtitle>

          <br/>
          <Columns isMultiline>
            {this.state.bookingSlots.map((bookingSlot, i) => (
              <BookingSlot fakeRoom="The Golden Idol" key={i} bookingSlot={bookingSlot} getBookingSlots={() => this.getBookingSlots()} />
            ))}
          </Columns>
            <br/>

            <Subtitle><p>Alien Run</p></Subtitle>
            <br/>
            <Columns isMultiline>
            {this.state.bookingSlots.slice().reverse().map((bookingSlot, i) => (
            <BookingSlot fakeRoom="Alien Run" key={i} bookingSlot={bookingSlot} getBookingSlots={() => this.getBookingSlots()} />
          ))}
        </Columns>
      </Section>
    </Container>
  );
}
}

export default BookingsPage;
