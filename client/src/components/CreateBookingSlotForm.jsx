import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// TODO - add errors

const CreateBookingSlotForm = ({
  onSubmit,
  errors,
  successMessage,
  onChange,
  bookingSlot,
}) => (
  <div className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">New Booking Slot</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        date
        <input
          name="date"
          type="date"
          errorText={errors.date}
          onChange={onChange}
          value={bookingSlot.date}
        />
      </div>

      <div className="field-line">
        time
        <input
          name="time"
          type="time"
          errorText={errors.time}
          onChange={onChange}
          value={bookingSlot.time}
        />
      </div>
      <div className="field-line">
        room
        <input
          type="text"
          name="text"
          errorText={errors.room}
          onChange={onChange}
          value={bookingSlot.room}
        />
      </div>
      <div className="field-line">
        price
        <input
          type="text"
          name="text"
          errorText={errors.price}
          onChange={onChange}
          value={bookingSlot.price}
        />
      </div>

      <div className="field-line">
        available
        <checkbox
          name="organiserName"
          errorText={errors.available}
          onChange={onChange}
          value={bookingSlot.available}
        />
      </div>

        <button type="submit" label="">Make Booking Slot</button>

    </form>
  </div>
);

CreateBookingSlotForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  bookingSlot: PropTypes.object.isRequired
};

export default CreateBookingSlotForm;
