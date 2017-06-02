import App from './App';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Auth from './modules/Auth';


const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/logout">Signup</Link></li>
      </ul>

      <hr/>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/signup" component={SignUpPage}/>
        <Route path="/logout" onEnter={(nextState, replace) => {
          Auth.deauthenticateUser();
          replace('/');
        }}/>
      </Switch>
    </div>
  </Router>
)

export default Routes;
