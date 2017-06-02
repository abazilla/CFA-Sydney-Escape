import App from './App';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LogoutFunction from './containers/LogoutFunction.jsx';
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
      </ul>

      <hr/>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/signup" component={SignUpPage}/>
        <Route path="/dashboard" component={DashboardPage}/>
        <Route path="/logout" component={LogoutFunction}/>
      </Switch>
    </div>
  </Router>
)

export default Routes;
