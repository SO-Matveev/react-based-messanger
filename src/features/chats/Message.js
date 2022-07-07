import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";
import Map from "../../components/Map";

function Message({ message, onDelete }) {
  return (
    <Card>
      <Card.Header>
        {message.name} / {new Date(message.createdAt).toLocaleTimeString()}
      </Card.Header>
      <Card.Body className="d-flex justify-content-between">
        <div>
          {message.text}
          {message.imageURL && <Image src={message.imageURL} alt="" />}
          {message.location && (
            <div>
              <Map
                center={{
                  lat: message.location.latitude,
                  lng: message.location.longitude,
                }}
              />
            </div>
          )}
        </div>
        <div>
          <Button onClick={onDelete} variant="warning">
            Удалить сообщение
          </Button>{" "}
        </div>
      </Card.Body>
    </Card>
  );
}
Message.propTypes = {
  onDelete: PropTypes.func,
};
export default Message;

const Image = styled.img`
  margin-top: 10px;
  max-width: 150px;
`;
