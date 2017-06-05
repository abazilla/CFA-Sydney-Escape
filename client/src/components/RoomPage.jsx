import React from 'react';
import { Hero, HeroBody, Container, Title, Subtitle, Section, Heading } from 're-bulma';
import Auth from '../modules/Auth';

class RoomPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      rooms: [],
    };
  }

  componentDidMount() {
    this.getRooms();
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

  render() {
    return (
      <div>
        {this.state.rooms.map((room, i) => (
          // TODO add if(isEnabled)
          <div key={i}>
            <Hero size="isLarge" color="isDanger">
              <HeroBody>
                <Container>
                  <Title>{room.title}</Title>
                  <Subtitle>{room.minMembers} to {room.maxMembers} players</Subtitle>
                </Container>
              </HeroBody>
            </Hero>
            <Section>
              <Container>
                <Heading>
                  <Title>Section</Title>
                  <Subtitle>
                    {room.description}
                  </Subtitle>
                </Heading>
              </Container>
            </Section>
          </div>
        ))}
      </div>
    )}
  }

  export default RoomPage;
