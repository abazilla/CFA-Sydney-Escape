import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// TODO - add errors

const CreateBookingFormCustomer = ({
  onChange,
  booking,
}) => (
  <div className="container">
      <h2 className="card-heading">Enter your details</h2>

      <div className="field-line">
        teamName
        <input
          name="teamName"
          onChange={onChange}
          value={booking.teamName}
        />
      </div>

      <div className="field-line">
        notes
        <textarea
          name="notes"
          onChange={onChange}
          value={booking.notes}
        ></textarea>
      </div>

      <div className="field-line">
        organiserName
        <input
          name="organiserName"
          onChange={onChange}
          value={booking.organiserName}
        />
      </div>
      <div className="field-line">
        organiserEmail
        <input
          name="organiserEmail"
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
