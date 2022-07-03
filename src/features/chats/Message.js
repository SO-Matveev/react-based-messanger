import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

function Message({ message, onDelete }) {
  return (
    <Card>
      <Card.Header>
        {message.name} / {message.createdAt}
      </Card.Header>
      <Card.Body class="d-flex justify-content-between">
        {message.text}
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
