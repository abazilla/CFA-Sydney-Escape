import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage.jsx';
import RoomPage from './components/RoomPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import BookingsPage from './components/BookingsPage.jsx';

import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LogoutFunction from './containers/LogoutFunction.jsx';

import Auth from './modules/Auth';

import { Nav, NavGroup, NavItem, Hero, Footer, Container, Content, Column, Columns, Icon } from 're-bulma';

require('dotenv').config()

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Hero color="isDanger">
            <Nav>
              <NavGroup align="left">
                <NavItem>
                  <Link to="/">Sydney Escape</Link>
                </NavItem>
              </NavGroup>
              <NavGroup align="center">
                <NavItem>
                </NavItem>
              </NavGroup>
              <NavGroup align="right">
                <NavItem><Link to="/rooms">Rooms</Link></NavItem>
                <NavItem><Link to="/bookings">BOOK NOW</Link></NavItem>
                <NavItem><Link to="/contact">Contact</Link></NavItem>
                {Auth.isUserAuthenticated() ? (
                  <NavItem><Link to="/dashboard">Dashboard</Link></NavItem>
                ) : (
                  <NavItem><Link to="/login">Log in</Link></NavItem>
                )}
                {Auth.isUserAuthenticated() ? (
                  <NavItem><Link to="/logout">Log out</Link></NavItem>
                ) : (
                  <NavItem><Link to="/signup">Sign up</Link></NavItem>
                )}
              </NavGroup>
            </Nav>
          </Hero>

          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/rooms" component={RoomPage}/>
            <Route exact path="/contact" component={ContactPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/signup" component={SignUpPage}/>
            <Route path="/dashboard" component={DashboardPage}/>
            <Route path="/logout" component={LogoutFunction}/>
            <Route path="/bookings" component={BookingsPage}/>
            {/*  TODO - how to add default props*/}
            {/* <Route path="/bookings" component={ () => (<BookingsPage bookingSlots={[ "1"]} />)}/> */}
          </Switch>
          {/* {children} */}
          <Footer className="red">
            <Container>
              <Content>
                <Columns isMultiline>
                  <Column size="is4" offset="isOffset1">
                    <span className="red">Links<hr/>
                    Home<br/>
                    Book NOW!<br/>
                    Location<br/>
                    Contact Us<br/>
                    </span>
                  </Column>
                  <Column size="is4" offset="isOffset2">
                    <span className="red">The Fine Print<hr/>
                    Refunds<br/>
                    Terms & Conditions<br/>
                    Privacy Policy<br/>
                    Legal Advice<br/>
                  </span>
                  </Column>
                  <Column size="is6"><br/></Column>
                  <Column size="is6"><br/></Column>
                  <Column size="is6"><br/></Column>
                  <Column size="is6"><br/></Column>
                  <Column size="is3">
                    <p style={{ textAlign: 'center'}}>
                      <a href="https://facebook.com/sydney-escape" target="_blank"><Icon size="isLarge" className="fa fa-facebook-official"></Icon></a></p></Column>
                      <Column size="is3"><p style={{ textAlign: 'center'}}><a href="mailto:sydney.escape@gmail.com" target="_blank"><Icon size="isLarge" className="fa fa-envelope "></Icon></a></p></Column>
                      <Column size="is3"><p style={{ textAlign: 'center'}}><a href="https://www.instagram.com/sydney_escape/" target="_blank"><Icon size="isLarge" className="fa fa-instagram "></Icon></a></p></Column>
                      <Column size="is3"><p style={{ textAlign: 'center'}}><a href="https://twitter.com/sydney_escape" target="_blank"><Icon size="isLarge" className="fa fa-twitter "></Icon></a></p></Column>
                      <Column size="is12">
                        <p style={{ textAlign: 'center'}}>
                          <span className="red">
                          created by <a target="_blank" href="https://github.com/abazilla">abazilla</a>.
                        </span>
                        </p>
                      </Column>
                      <Column size="is12">
                        <p style={{ textAlign: 'center'}}>
                          <span className="red">
                          Copyright &copy; Sydney Escape 2017
                        </span>
                        </p>
                      </Column>
                    </Columns>
                  </Content>
                </Container>
              </Footer>
            </div>
          </Router>
        );
      }
    }

    export default App;
