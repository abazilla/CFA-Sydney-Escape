import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardHeaderTitle, CardContent, Content } from 're-bulma';
// TODO - add errors

const CreateRoomForm = ({
  onSubmit,
  errors,
  successMessage,
  onChange,
  room,
}) => (
  <Card>
    <form action="/" onSubmit={onSubmit}>
    <CardHeader>
      <CardHeaderTitle>
        Create Room
      </CardHeaderTitle>
    </CardHeader>
    <CardContent>
      <Content>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div className="field-line">
          Title
          <input
            name="title"
            errorText={errors.title}
            onChange={onChange}
            value={room.title}
          />
        </div>

        <div className="field-line">
          isEnabled
          <input
            type="checkbox"
            name="isEnabled"
            errorText={errors.isEnabled}
            onChange={onChange}
            value={room.isEnabled}
          />
        </div>

        <div className="field-line">
          minMembers
          <input
            name="minMembers"
            errorText={errors.minMembers}
            onChange={onChange}
            value={room.minMembers}
          />
        </div>

        <div className="field-line">
          maxMembers
          <input
            name="maxMembers"
            errorText={errors.maxMembers}
            onChange={onChange}
            value={room.maxMembers}
          />
        </div>

        <div className="field-line">
          description
          <input
            name="description"
            errorText={errors.description}
            onChange={onChange}
            value={room.description}
          />
        </div>

        <div className="field-line">
          pictures
          <input
            name="pictures"
            errorText={errors.pictures}
            onChange={onChange}
            value={room.pictures}
          />
        </div>

        <button type="submit" label="">Make Room</button>
      </Content>
    </CardContent>
  </form>
</Card>
);

CreateRoomForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  room: PropTypes.object.isRequired
};

export default CreateRoomForm;
