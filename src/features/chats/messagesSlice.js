import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../helpers/api";

const initialState = {
  messages: [],
  isConnected: false,
  isConnecting: false,
};

export const getMessages = createAsyncThunk(
  "messages/getMessages",
  async (chatId) => {
    const response = await api.get(`/chats/${chatId}/messages`);
    return response.data;
  }
);
export const deleteMessage = createAsyncThunk(
  "messages/deleteMessage",
  async (chatId, message) => {
    await api.delete(`/chats/${chatId}/messages/${message._id}`, {
      message,
    });

    const response = await api.get(`/chats/${chatId}/messages`);
    return response.data;
  }
);

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    connect: (state) => {
      state.isConnecting = true;
    },
    connected: (state) => {
      state.isConnected = true;
    },
    addMessage: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
    submitMessage: (state) => {
      return;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
    builder.addCase(deleteMessage.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
  },
});

export const selectMessages = (state) => state.messages.messages;

export const { connect, connected, addMessage, submitMessage } =
  messagesSlice.actions;
export default messagesSlice.reducer;
