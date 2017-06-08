import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardHeaderTitle, CardContent, Content, Input, Button,Textarea } from 're-bulma';
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
          <Input
            name="title"
            placeholder="Title"
            errorText={errors.title}
            onChange={onChange}
            value={room.title}
          />
        </div>
        <br/>
        <div className="field-line">
          <Input
            name="minMembers"
            placeholder="Min Players"

            errorText={errors.minMembers}
            onChange={onChange}
            value={room.minMembers}
          />
        </div>
        <br/>
        <div className="field-line">
          <Input
            name="maxMembers"
            placeholder="Max Players"

            errorText={errors.maxMembers}
            onChange={onChange}
            value={room.maxMembers}
          />
        </div>
        <br/>
        <div className="field-line">

          <Textarea
            name="description"
            placeholder="Description"
            errorText={errors.description}
            onChange={onChange}
            value={room.description}
          />
        </div>
        <br/>
        <Button color="isInfo" type="submit" label="">Make Room</Button>
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
