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

import { Nav, NavGroup, NavItem, Hero, Footer, Container, Content } from 're-bulma';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Hero color="isBlack">
            <Nav>
              <NavGroup align="left">
                <NavItem>
                </NavItem>
              </NavGroup>
              <NavGroup align="center">
                <NavItem>
                  <Link to="/">Sydney Escape</Link>
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
          </Switch>
          {/* {children} */}
          <Footer>
            <Container>
              <Content>
                <p style={{ textAlign: 'center'}}>
                  created by <a target="_blank" href="https://github.com/abazilla">abazilla</a>.
                </p>
                <p style={{ textAlign: 'center'}}>
                  <a className="icon" href="https://github.com/bokuweb/re-bulma">
                  <i className="fa fa-github"></i>
                </a>
              </p>
            </Content>
          </Container>
        </Footer>
      </div>
    </Router>
  );
}
}

export default App;
