import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// TODO - add errors

const CreateBookingForm = ({
  onSubmit,
  errors,
  successMessage,
  onChange,
  booking,
}) => (
  <div className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">New Booking</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        teamName
        <input
          name="teamName"
          errorText={errors.teamName}
          onChange={onChange}
          value={booking.teamName}
        />
      </div>

      <div className="field-line">
        notes
        <textarea
          name="notes"
          errorText={errors.notes}
          onChange={onChange}
          value={booking.notes}
        ></textarea>
      </div>
      <div className="field-line">
        date
        <input
          type="date"
          name="date"
          errorText={errors.date}
          onChange={onChange}
          value={booking.date}
        />
      </div>

      <div className="field-line">
        organiserName
        <input
          name="organiserName"
          errorText={errors.organiserName}
          onChange={onChange}
          value={booking.organiserName}
        />
      </div>
      <div className="field-line">
        organiserEmail
        <input
          name="organiserEmail"
          errorText={errors.organiserEmail}
          onChange={onChange}
          value={booking.organiserEmail}
        />
      </div>

      <div className="field-line">
        roomId
        <input
          name="roomId"
          errorText={errors.roomId}
          onChange={onChange}
          value={booking.roomId}
        />
      </div>

      <div className="field-line">
        stats
        <input
          name="stats"
          errorText={errors.stats}
          onChange={onChange}
          value={booking.stats}
        />
      </div>

      <div className="field-line">
        teamMembers
        <input
          name="teamMembers"
          errorText={errors.teamMembers}
          onChange={onChange}
          value={booking.teamMembers}
        />
      </div>

      <div className="field-line">
        hasPaid
        <input
          name="hasPaid"
          errorText={errors.hasPaid}
          onChange={onChange}
          value={booking.hasPaid}
        />
      </div>

        <button type="submit" label="">Make Booking</button>

    </form>
  </div>
);

CreateBookingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  booking: PropTypes.object.isRequired
};

export default CreateBookingForm;
