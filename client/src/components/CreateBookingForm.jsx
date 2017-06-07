import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardHeaderTitle, CardContent, Content } from 're-bulma';

// TODO - add errors

const CreateBookingForm = ({
  onSubmit,
  errors,
  successMessage,
  onChange,
  booking,
}) => (
  <Card>
    <form action="/" onSubmit={onSubmit}>
    <CardHeader>
      <CardHeaderTitle>
        Create Booking
      </CardHeaderTitle>
    </CardHeader>
    <CardContent>
      <Content>

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
        price
        <input
          name="price"
          errorText={errors.price}
          onChange={onChange}
          value={booking.price}
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
        bookingSlotId
        <input
          name="bookingSlotId"
          errorText={errors.bookingSlotId}
          onChange={onChange}
          value={booking.bookingSlotId}
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
      </Content>
    </CardContent>
  </form>
</Card>
);

CreateBookingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  booking: PropTypes.object.isRequired
};

export default CreateBookingForm;
