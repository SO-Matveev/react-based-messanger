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
  "messages/getMessages",
  async (chatId) => {
    const response = await api.delete(`/chats/${chatId}/messages/{_id}`);
    return response.data;
  }
);

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    // deleteMessage: (state, action) => {
    //   return {
    //     messages: state.messages.filter(
    //       (message) => message._id !== action.payload._id
    //     ),
    //   };
    // },
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
  },
});

export const selectMessages = (state) => state.messages.messages;

export const { connect, connected, addMessage, submitMessage } =
  messagesSlice.actions;
export default messagesSlice.reducer;
