import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardHeaderTitle, CardContent, Content, Input, Textarea, Button } from 're-bulma';

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
          <Input
            name="teamName"
            placeholder="Team Name"
            errorText={errors.teamName}
            onChange={onChange}
            value={booking.teamName}
          />
        </div>
        <br/>
        <div className="field-line">
          <Textarea
            name="notes"
            placeholder="Notes"
            errorText={errors.notes}
            onChange={onChange}
            value={booking.notes}
          />
        </div>
        <br/>
        <div className="field-line">
          <Input
            type="date"
            name="date"
            placeholder="Date"
            errorText={errors.date}
            onChange={onChange}
            value={booking.date}
          />
        </div>
        <br/>
        <div className="field-line">
          <Input
            name="organiserName"
            placeholder="Organiser Name"
            errorText={errors.organiserName}
            onChange={onChange}
            value={booking.organiserName}
          />
        </div>
        <br/>
        <div className="field-line">
          <Input
            name="organiserEmail"
            placeholder="Organiser Email"
            errorText={errors.organiserEmail}
            onChange={onChange}
            value={booking.organiserEmail}
          />
        </div>
        <br/>
        <div className="field-line">
          <Input
            name="price"
            placeholder="Price"
            errorText={errors.price}
            onChange={onChange}
            value={booking.price}
          />
        </div>
        <br/>
        <div className="field-line">
          <Input
            name="roomId"
            placeholder="Room ID"
            errorText={errors.roomId}
            onChange={onChange}
            value={booking.roomId}
          />
        </div>
        <br/>
        <div className="field-line">
          <Input
            name="bookingSlotId"
            placeholder="BookingSlot ID"
            errorText={errors.bookingSlotId}
            onChange={onChange}
            value={booking.bookingSlotId}
          />
        </div>
        <br/>
        <Button color="isInfo" type="submit" label="">Make Booking</Button>
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
