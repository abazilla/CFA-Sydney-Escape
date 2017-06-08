import React from 'react';
import { Hero, HeroBody, Container, Title, Subtitle, Section, Heading, Button, Icon, Column, Columns } from 're-bulma';
import Auth from '../modules/Auth';
import { Link } from 'react-router-dom'

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
    xhr.open('get', `${process.env.REACT_APP_API_ENDPOINT}/api/rooms`);
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
        <Hero size="isLarge" color="isInfo">
          <HeroBody className="etp">
            <Container>
              <Title>The Golden Idol</Title>
              <Subtitle>Escape the Pyramid!</Subtitle>
            </Container>
          </HeroBody>
        </Hero>
        <Section>
          <Container>
            <Heading>
              <br/>
              <Subtitle>
                <Columns>
                  <Column size="is4" style={{ textAlign: 'center'}}>
                    <Icon icon="fa fa-users" size="isLarge"></Icon>
                    <br/>
                    <strong>Players:</strong> 2-6
                  </Column>
                  <Column size="is4" style={{ textAlign: 'center'}}>
                    <Icon icon="fa fa-clock-o" size="isLarge"></Icon>
                    <br/>
                    <strong>Time Limit:</strong> 60min
                  </Column>
                  <Column size="is4" style={{ textAlign: 'center'}}>
                    <Icon icon="fa fa-star" size="isLarge"></Icon>
                    <Icon icon="fa fa-star" size="isLarge"></Icon>
                    <Icon icon="fa fa-star" size="isLarge"></Icon>
                    <Icon icon="fa fa-star-half-o" size="isLarge"></Icon>
                    <Icon icon="fa fa-star-o" size="isLarge"></Icon>
                    <br/>
                    <strong>Difficulty</strong>
                  </Column>
                </Columns>
              </Subtitle>
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit loremin voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <Columns><Column size="is12" style={{ textAlign: 'center'}}><Link to="/bookings"><Button color="isDanger" > Book NOW!</Button></Link></Column></Columns>
            </Heading>
          </Container>
        </Section>
        <Hero size="isLarge" color="isInfo">
          <HeroBody className="spe">
            <Container>
              <Title>Alien Run</Title>
              <Subtitle>Spaceship Abduction!</Subtitle>
            </Container>
          </HeroBody>
        </Hero>
        <Section>
          <Container>
            <Heading>
                <Subtitle>
                  <Columns>
                    <Column size="is4" style={{ textAlign: 'center'}}>
                      <Icon icon="fa fa-users" size="isLarge"></Icon>
                      <br/>
                      <strong>Players:</strong> 2-8
                    </Column>
                    <Column size="is4" style={{ textAlign: 'center'}}>
                      <Icon icon="fa fa-clock-o" size="isLarge"></Icon>
                      <br/>
                      <strong>Time Limit:</strong> 80min
                    </Column>
                    <Column size="is4" style={{ textAlign: 'center'}}>
                      <Icon icon="fa fa-star" size="isLarge"></Icon>
                      <Icon icon="fa fa-star" size="isLarge"></Icon>
                      <Icon icon="fa fa-star" size="isLarge"></Icon>
                      <Icon icon="fa fa-star" size="isLarge"></Icon>
                      <Icon icon="fa fa-star-half-o" size="isLarge"></Icon>
                      <br/>
                      <strong>Difficulty:</strong>
                    </Column>
                  </Columns>
                </Subtitle>
                <p>Sed do eiusmod tempor incididunt ut labore ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali, quip ex ea commodo consequat. Consectetur adipisicing elit et dolore magna aliqua.</p>
                <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Columns><Column size="is12" style={{ textAlign: 'center'}}><Link to="/bookings"><Button color="isDanger" > Book NOW!</Button></Link></Column></Columns>
              </Heading>
            </Container>
          </Section>
        </div>
      )}
    }

    export default RoomPage;
