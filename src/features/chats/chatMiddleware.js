import { io } from "socket.io-client";
import { connect, connected, addMessage, submitMessage } from "./messagesSlice";

let socket;

const chatMiddleware = (store) => (next) => (action) => {
  const isConnecting = store.getState().messages.isConnecting;

  if (connect.match(action) && !isConnecting) {
    socket = io(process.env.REACT_APP_API_URL);

    socket.on("connect", () => {
      store.dispatch(connected());
    });

    socket.on("new message", (message) => {
      store.dispatch(addMessage(message));
    });
  }
  if (submitMessage.match(action) && socket) {
    socket.emit("new message", action.payload);
  }
  next(action);
};
export default chatMiddleware;
