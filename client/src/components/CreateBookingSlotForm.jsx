import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardHeaderTitle, CardContent, Content, Input, Button } from 're-bulma';

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
          <Input
            name="date"
            type="date"
            placeholder="Date"
            errorText={errors.date}
            onChange={onChange}
            value={bookingSlot.date}
          />
        </div>
        <br/>
        <div className="field-line">
          <Input
            type="text"
            name="room"
            placeholder="Room"
            errorText={errors.room}
            onChange={onChange}
            value={bookingSlot.room}
          />
        </div>
        <br/>
        <div className="field-line">
          <Input
            type="number"
            name="price"
            placeholder="Price"
            errorText={errors.price}
            onChange={onChange}
            value={bookingSlot.price}
          />
        </div>
        <br/>
        <Button color="isInfo" type="submit" label="">Make Booking Slot</Button>
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
