import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";

function Message({ message, onDelete }) {
  return (
    <Card>
      <Card.Header>
        {message.name} / {new Date(message.createdAt).toLocaleTimeString()}
      </Card.Header>
      <Card.Body className="d-flex justify-content-between">
        <div> {message.text}</div>
        {message.imageURL && <Image src={message.imageURL} alt="" />}

        <Button onClick={onDelete} variant="warning">
          Удалить сообщение
        </Button>
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
