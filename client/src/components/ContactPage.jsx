import React from 'react';
import { Textarea, Container, Input, Label, Section, Column, Notification, Columns, Title, Subtitle, Icon } from 're-bulma';
import GMap from './GMap';

const style = { padding: '10px' };


const ContactPage = () => (
  <div>
    <Container>
      <Columns isMultiline>
        <Column size="isFullwidth">
          <Section>
            <Title>Find us here!</Title>
          </Section>
        <GMap/>
        <Title>or contact us!</Title>
        </Column>
        <Column size="isHalf" style={style}>
          <Notification color="isSuccess">
            <Title>Phone</Title>
            <Subtitle>Give us a ring</Subtitle>
            <br/>
            <Column size="">
              <Icon
                icon="fa fa-phone"
                size="isLarge"
              />
              <br/>
              Call us on +61 1234 2345
            </Column>
          </Notification>
        </Column>
        <Column size="isHalf" style={style}>
          <Notification color="isInfo">
            <Title>Email</Title>
            <Subtitle>Shoot us an email</Subtitle>
            <br/>
            <Input
              type="text"
              placeholder="Your Email"
              icon="fa fa-envelope-o"
              hasIconRight
            />
            <Input
              type="text"
              placeholder="Subject"
              icon="fa fa-exclamation"
              hasIconRight
            />
            <Textarea
              type="text"
              placeholder="Content"
            />
          </Notification>
        </Column>

      </Columns>
      <Section></Section>
    </Container>
  </div>
);

export default ContactPage;
