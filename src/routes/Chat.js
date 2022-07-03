import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getMessages,
  selectMessages,
  deleteMessage,
} from "../features/chats/messagesSlice";
import Message from "../features/chats/Message";

function Chat() {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);

  useEffect(() => {
    dispatch(getMessages(chatId));
  }, [chatId]);

  const handleMessageDelete = (message) => {
    dispatch(deleteMessage(message));
  };
  return (
    <div>
      <h1>Чат {chatId}</h1>
      {messages.map((message) => (
        <div key={message._id} className="mb-3">
          <Message
            message={message}
            onDelete={() => handleMessageDelete(message)}
          />
        </div>
      ))}
    </div>
  );
}
export default Chat;
