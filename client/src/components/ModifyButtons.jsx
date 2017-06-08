import React, { Component } from 'react';
import Auth from '../modules/Auth';
import { Link } from 'react-router-dom';
import { Group, Button, Column, Columns} from 're-bulma';

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
    xhr.open('DELETE', `${process.env.REACT_APP_API_ENDPOINT}/api/${this.props.type}/${this.props.id}`);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // refresh page after deleting type
      }
    });
    xhr.send();
    window.location.reload();
  }


  render() {
    return (
      <Columns>
        <Column size="is12" offset="isOffset5">
          <Group>
            <Button color="isInfo"> Edit </Button>
            <Button color="isDanger" onClick={this.deleteRoom}> Delete </Button>
          </Group>
        </Column>
      </Columns>
    );
  }
}

export default ModifyButtons;
