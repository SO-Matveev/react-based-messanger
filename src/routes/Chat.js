import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import {
  getMessages,
  selectMessages,
  deleteMessage,
  connect,
  submitMessage,
} from "../features/chats/messagesSlice";
import { deleteChat } from "../features/chats/chatsSlice";
import Message from "../features/chats/Message";
import { Button } from "react-bootstrap";
import MessageForm from "../features/MessageForm";

function Chat() {
  const { user, isAuthenticated } = useAuth0();
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);
  const messagesRef = useRef();

  useEffect(() => {
    dispatch(getMessages(chatId));
    dispatch(connect());
  }, [chatId]);

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  const handleMessageDelete = (message) => {
    dispatch(deleteMessage(message));
  };
  const handleChatDelete = (chatId) => {
    dispatch(deleteChat(chatId));
  };

  const handleSubmit = ({ text, imageURL, location }) => {
    if (user) {
      const message = {
        chatId,
        name: user.name,
        text,
        imageURL,
        location,
      };
      dispatch(submitMessage(message));
    }
  };
  return (
    <div>
      <h1>Чат {chatId}</h1>
      <Button variant="danger" onClick={() => handleChatDelete(chatId)}>
        {" "}
        Удалить чат {chatId}
      </Button>
      <SMessages ref={messagesRef}>
        {messages.map((message) => (
          <div key={message._id} className="mt-3">
            <Message
              message={message}
              onDelete={() => handleMessageDelete(message._id)}
            />
          </div>
        ))}
      </SMessages>

      {isAuthenticated ? (
        <MessageForm onSubmit={handleSubmit} />
      ) : (
        <div>Вы не авторизованы</div>
      )}
    </div>
  );
}
export default Chat;

const SMessages = styled.div`
  max-height: 50vh;
  overflow: scroll;
`;
