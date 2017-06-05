import React from 'react';
import { Box, Hero, HeroHead, Nav, Container, NavGroup, NavItem, Button, HeroBody, Title, Subtitle, HeroFoot, Tabs, Tab, NavToggle, Section, Heading } from 're-bulma';



const HomePage = () => (
  <div>
    <Hero color="isBlack" size="isFullheight">
      <HeroHead></HeroHead>
      <HeroBody>
        <Container hasTextCentered>
          <Title>Sydney Escape</Title>
          <Subtitle>Sydney's hottest new escape room</Subtitle>
        </Container>
      </HeroBody>
    </Hero>
    <Section>
      <Container>
        <Heading>
          <Title>About</Title>
          <Subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
          </Subtitle>
        </Heading>
      </Container>
    </Section>
    <Section>
      <Container>
        <Heading>
          <Title>Rooms</Title>
          <Subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
          </Subtitle>
        </Heading>
      </Container>
    </Section>
    <Section>
      <Container>
        <Heading>
          <Title>Reviews</Title>
          <Subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
          </Subtitle>
        </Heading>
      </Container>
    </Section>
  </div>
);

export default HomePage;
