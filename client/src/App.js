import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, Router } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div>

        <div className="top-bar">
          <div className="top-bar-left">
            <NavLink to="/">React App</NavLink>
          </div>

          <div className="top-bar-right">
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </div>

        </div>
        {/* {children} */}

      </div>
    );
  }
}

export default App;
