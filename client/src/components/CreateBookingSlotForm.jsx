import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardHeaderTitle, CardContent, Content } from 're-bulma';

// TODO - add errors

const CreateBookingSlotForm = ({
  onSubmit,
  errors,
  successMessage,
  onChange,
  bookingSlot,
}) => (
  <Card>
    <form action="/" onSubmit={onSubmit}>
    <CardHeader>
      <CardHeaderTitle>
        Create Booking Slot
      </CardHeaderTitle>
    </CardHeader>
    <CardContent>
      <Content>

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
          name="room"
          errorText={errors.room}
          onChange={onChange}
          value={bookingSlot.room}
        />
      </div>
      <div className="field-line">
        price
        <input
          type="text"
          name="price"
          errorText={errors.price}
          onChange={onChange}
          value={bookingSlot.price}
        />
      </div>

      <div className="field-line">
        available
        <checkbox
          name="available"
          errorText={errors.available}
          onChange={onChange}
          value={bookingSlot.available}
        />
      </div>

        <button type="submit" label="">Make Booking Slot</button>
      </Content>
    </CardContent>
  </form>
</Card>
);

CreateBookingSlotForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  bookingSlot: PropTypes.object.isRequired
};

export default CreateBookingSlotForm;
