import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ModifyButtons from '../components/ModifyButtons.jsx';
import { Section, Container, Title, Card, CardHeader, CardHeaderTitle, CardHeaderIcon, CardContent, Content, CardFooter, CardFooterItem, Columns, Column } from 're-bulma';

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
              <Card >
                <CardHeader>
                  <CardHeaderTitle>
                    {room.title}
                  </CardHeaderTitle>
                </CardHeader>
                <CardContent>
                  <Content>
                    <ul>
                      <li><b>ID:</b> {room._id} </li>
                      <li><b>description:</b> {room.description} </li>
                      <li><b>Members:</b> {room.minMembers} to {room.maxMembers} </li>
                      <li><b>isEnabled:</b> {room.isEnabled} </li>
                      <li><b>pictures:</b> {room.pictures} </li>
                      <br/>
                      <small> {room.createdAt} </small>
                    </ul>
                  </Content>
                </CardContent>
                <CardFooter>
                  <ModifyButtons id={room._id} type="rooms"/>
                </CardFooter>
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
                      <li><b>ID:</b> {booking._id} </li>
                      <li><b>createdAt:</b> {booking.createdAt} </li>
                      <li><b>RoomID:</b> {booking.roomId} </li>
                      <li><b>bookingSlotId:</b> {booking.bookingSlotId} </li>
                      <li><b>Date:</b> {booking.date} </li>
                      <li><b>price:</b> {booking.price} </li>
                      <li><b>Organiser:</b> {booking.organiserName} </li>
                      <li><b>Organiser email:</b> {booking.organiserEmail} </li>
                      <li><b>hasPaid:</b> {booking.hasPaid} </li>
                      <li><b>Stats:</b> {booking.isEnabled} </li>
                      <li><b>teamMembers:</b> {booking.pictures} </li>
                    </ul>
                  </Content>
                </CardContent>
                <CardFooter>
                  <ModifyButtons id={booking._id} type="bookings"/>
                </CardFooter>
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
                <CardHeader>
                  <CardHeaderTitle>
                  </CardHeaderTitle>
                </CardHeader>
                <CardContent>
                  <Content>
                    <ul>
                      <li><b>ID:</b> {bookingslot._id} </li>
                      <li><b>date:</b> {bookingslot.date} </li>
                      <li><b>time:</b> {bookingslot.time} </li>
                      <li><b>room:</b> {bookingslot.room} </li>
                      <li><b>available:</b> {bookingslot.available} </li>
                    </ul>
                  </Content>
                </CardContent>
                <CardFooter>
                  <ModifyButtons id={bookingslot._id} type="bookingSlots"/>
                </CardFooter>
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
