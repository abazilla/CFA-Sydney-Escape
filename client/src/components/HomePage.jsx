import React from 'react';
import { Box, Hero, HeroHead, Nav, Container, NavGroup, NavItem, Button, HeroBody, Title, Subtitle, HeroFoot, Tabs, Tab, NavToggle, Section, Heading, Group, Column, Columns, Image } from 're-bulma';
import { Link } from 'react-router-dom';



const HomePage = () => (
  <div>
    <Hero color="isDark" size="isFullheight">
      <HeroHead></HeroHead>
      <HeroBody>
        <Container hasTextCentered>
          <Title className="title">Sydney Escape</Title>
          <Subtitle className="subtitle">Sydney's <strong>hottest</strong> new escape room!</Subtitle>
        </Container>
      </HeroBody>
    </Hero>
    <Section>
      <Container>
        <Heading>
          <Title className="title">About</Title>
          <Subtitle className="subtitle">
            <strong>The best</strong> escape room experience in Sydney.
          </Subtitle>
          <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Heading>
      </Container>
    </Section>
    <Section >
      <Container>
        <Columns isMultiline>
            <Column size="is8">
              <Title className="title">Rooms</Title>
              <br/>
              <Subtitle className="subtitle">
                Room 1: Escape the Pyramid
              </Subtitle>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit loremin voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <Column size="is4" offset="isOffset4">
              <Group style={{ textAlign: 'center'}}>
                <Link to="/rooms"><Button>More Info</Button></Link>
                <Link to="/bookings" > <Button color="isDanger">Book NOW!</Button></Link>
              </Group>
              </Column>
            </Column>
            <Column size="is4">
              <Image src="http://i.imgur.com/tYem0xV.png" ratio="is3By2" style={{ marginTop: '65px' }} />
            </Column>
<Column size="is12"></Column>
<Column size="is12"></Column>
<Column size="is12"></Column>
            <Column size="is4">
              <Image src="http://i.imgur.com/o3VsOCY.png" ratio="is3By2" />

            </Column>
            <Column size="is8">
              <Subtitle className="subtitle">
                Room 2: Spaceship Run
              </Subtitle>
              <p>Sed do eiusmod tempor incididunt ut labore ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali, quip ex ea commodo consequat. Consectetur adipisicing elit et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <Column size="is4" offset="isOffset4">
              <Group >
                <Link to="/rooms"><Button>More Info</Button></Link>
                <Link to="/bookings" > <Button color="isDanger">Book NOW!</Button></Link>
              </Group>
            </Column>
            </Column>
        </Columns>
      </Container>
    </Section>

    <Section>
      <Container>
        <Heading>
          <Title className="title">How does it work?</Title>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul>
            <li>nim ad minim veniam</li>
            <li>Consectetur adipisicing elit, sed do eiusmod tempor incididunt</li>
            <li>quip ex ea commodo consequat</li>
            <li>in reprehenderit in voluptate velit!</li>
          </ul>
        </Heading>
      </Container>
    </Section>
  </div>
);

export default HomePage;
