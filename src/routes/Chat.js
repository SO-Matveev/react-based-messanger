import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  getMessages,
  selectMessages,
  deleteMessage,
  // deleteChat,
  connect,
  submitMessage,
} from "../features/chats/messagesSlice";
import Message from "../features/chats/Message";
import { Button } from "react-bootstrap";
import MessageForm from "../features/MessageForm";

function Chat() {
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
  // const handleChatDelete = (chatId) => {
  //   dispatch(deleteChat(chatId));
  // };

  const handleSubmit = ({ name, text, imageURL, location }) => {
    const message = {
      chatId,
      name,
      text,
      imageURL,
      location,
    };
    dispatch(submitMessage(message));
  };
  return (
    <div>
      <h1>Чат {chatId}</h1>
      {/* <Button variant="danger" onClick={handleChatDelete}>
        {" "}
        Удалить чат {chatId}
      </Button> */}
      <SMessages ref={messagesRef}>
        {messages.map((message) => (
          <div key={message._id} className="mt-3">
            <Message
              message={message}
              onDelete={() => handleMessageDelete(message)}
            />
          </div>
        ))}
      </SMessages>

      <MessageForm onSubmit={handleSubmit} />
    </div>
  );
}
export default Chat;

const SMessages = styled.div`
  max-height: 50vh;
  overflow: scroll;
`;
