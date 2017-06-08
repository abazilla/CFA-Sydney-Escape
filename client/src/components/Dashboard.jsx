import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ModifyButtons from '../components/ModifyButtons.jsx';
import { Section, Container, Title, Card, CardHeader, CardHeaderTitle, CardHeaderIcon, CardContent, Content, CardFooter, CardFooterItem, Columns, Column} from 're-bulma';
import moment from 'moment';


const style = { padding: '10px' };

const Dashboard = ({ secretData, rooms, bookings, bookingSlots, roomIdCallback }) => (
  <Container>
    {secretData}
    <Section>
      <Title>Rooms</Title>
      <Columns isMultiline>
        {rooms.map((room, i) => (
          <span key={i}>
            <Column style={style}>
              <Card>
                <CardHeader>
                  <CardHeaderTitle>
                    {room.title}
                  </CardHeaderTitle>
                </CardHeader>
                <CardContent>
                  <Content>
                    <ul>
                      <li><strong>ID:</strong> {room._id} </li>
                      <li><strong>description:</strong> {room.description} </li>
                      <li><strong>Members:</strong> {room.minMembers} to {room.maxMembers} </li>
                      <li><strong>isEnabled:</strong> {room.isEnabled} </li>
                      <br/>
                    </ul>
                  </Content>
                </CardContent>
                <ModifyButtons id={room._id} type="rooms"/>
                <br/>
              </Card>
            </Column>
          </span>
        ))}
      </Columns>
    </Section>
    <Section>
      <Title>Bookings</Title>
      <Columns isMultiline>
        {bookings.map((booking, i) => (
          <div key={i}>
            <Column style={style}>

              <Card >
                <CardHeader>
                  <CardHeaderTitle>
                    {booking.teamName}
                  </CardHeaderTitle>
                </CardHeader>
                <CardContent>
                  <Content>
                    <ul>
                      <li><strong>ID:</strong> {booking._id} </li>
                      <li><strong>Created At:</strong> {moment(booking.createdAt).format('h:mm:a, MMMM Do YYYY')} </li>
                      <li><strong>Date:</strong> {moment(booking.date).format('h:mm:a, MMMM Do YYYY')} </li>
                      <li><strong>Price:</strong> ${booking.price} </li>
                      <li><strong>Organiser:</strong> {booking.organiserName} </li>
                      <li><strong>Organiser email:</strong> {booking.organiserEmail} </li>
                    </ul>
                  </Content>
                </CardContent>
                <ModifyButtons id={booking._id} type="bookings"/>
                <br/>
              </Card>
            </Column>
          </div>
        ))}
      </Columns>
    </Section>
    <Section>
      <Title>Bookings Slots</Title>
      <Columns isMultiline>

        {bookingSlots.map((bookingslot, i) => (
          <div key={i}>
            <Column style={style}>
              <Card >
                <CardContent>
                  <Content>
                    <ul>
                      <li><strong>ID:</strong> {bookingslot._id} </li>
                      <li><strong>date:</strong> {moment(bookingslot.date).format('h:mm:a, MMMM Do YYYY')} </li>
                      <li><strong>room:</strong> {bookingslot.room} </li>
                      <li><strong>available:</strong> {bookingslot.available} </li>
                    </ul>
                  </Content>
                </CardContent>
                <ModifyButtons id={bookingslot._id} type="bookingSlots"/>
                <br/>
              </Card>
            </Column>
          </div>
        ))}
      </Columns>
    </Section>
  </Container>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
