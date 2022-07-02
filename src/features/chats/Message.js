import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteMessage } from "./messagesSlice";

function Message({ message }) {
  const dispatch = useDispatch();
  const handleMessageDelete = (message) => {
    dispatch(deleteMessage(message));
  };
  return (
    <Card>
      <Card.Header>
        {message.name} / {message.createdAt}
      </Card.Header>
      <Card.Body class="d-flex justify-content-between">
        {message.text}
        <Button onClick={handleMessageDelete} class="btn btn-warning">
          Удалить сообщениеs
        </Button>
      </Card.Body>
    </Card>
  );
}
export default Message;
