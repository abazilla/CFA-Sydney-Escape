import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Input, Textarea } from 're-bulma';
// TODO - add errors

const CreateBookingFormCustomer = ({
  onChange,
  booking,
}) => (
  <div>

    <div className="field-line">
      <Input
        name="teamName"
        placeholder="Team Name"
        onChange={onChange}
        value={booking.teamName}
      />
    </div>
    <br/>
    <div className="field-line">
      <Textarea
        name="notes"
        placeholder="Notes"
        onChange={onChange}
        value={booking.notes}
      />
    </div>
    <br/>
    <div className="field-line">
      <Input
        name="organiserName"
        placeholder="Organiser Name"
        onChange={onChange}
        value={booking.organiserName}
      />
    </div>
    <br/>
    <div className="field-line">
      <Input
        name="organiserEmail"
        placeholder="Organiser Email"
        onChange={onChange}
        value={booking.organiserEmail}
      />
    </div>


  </div>
);

CreateBookingFormCustomer.propTypes = {
  onChange: PropTypes.func.isRequired,
  booking: PropTypes.object.isRequired
};

export default CreateBookingFormCustomer;
