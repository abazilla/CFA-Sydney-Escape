import React, { Component } from 'react';
import Auth from '../modules/Auth';
import { Link } from 'react-router-dom';
import { CardFooter, CardFooterItem } from 're-bulma';

class ModifyButtons extends Component {
  constructor(props, context) {
    super(props, context);
    this.deleteRoom = this.deleteRoom.bind(this);
  }

  /**
  * Process the form.
  *
  * @param {object} event - the JavaScript event object
  */

  deleteRoom() {
    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `http://localhost:3000/api/${this.props.type}/${this.props.id}`);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // refresh page after deleting type
        window.location.reload();
      }
    });
    xhr.send();
  }


  render() {
    return (
      <span>
        <CardFooterItem> Edit </CardFooterItem>
        <CardFooterItem> Delete </CardFooterItem>
      </span>
    );
  }
}

export default ModifyButtons;
