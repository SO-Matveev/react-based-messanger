import { configureStore } from "@reduxjs/toolkit";
import chatsSlice from "../features/chats/chatsSlice";
import messagesSlice from "../features/chats/messagesSlice";
import chatMiddleware from "../features/chats/chatMiddleware";

export const store = configureStore({
  reducer: {
    chats: chatsSlice,
    messages: messagesSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(chatMiddleware);
  },
});
