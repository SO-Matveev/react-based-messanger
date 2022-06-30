import { configureStore } from "@reduxjs/toolkit";
import chatsSlice from "../features/chats/chatsSlice";
import messagesSlice from "../features/chats/messagesSlice";

export const store = configureStore({
  reducer: {
    chats: chatsSlice,
    messages: messagesSlice,
  },
});
