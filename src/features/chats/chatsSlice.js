import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../helpers/api";

const initialState = {
  chats: [],
};

export const getChats = createAsyncThunk("chats/getChats", async () => {
  const response = await api.get(`/chats`);
  return response.data;
});
export const addChats = createAsyncThunk("chats/addChats", async (title) => {
  const response = await api.post(`/chats`, {
    title,
  });
  return response.data;
});

export const deleteChat = createAsyncThunk(
  "chats/deleteChat",
  async (chatId) => {
    await api.delete(`/chats/${chatId}`, { chatId });
    const response = await api.get(`/chats`);

    return response.data;
  }
);

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    hiddenChat: (state, action) => {
      console.log(action);
      return {
        chats: state.chats.filter((chatId) => chatId !== action.payload.chatId),
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getChats.fulfilled, (state, action) => {
      state.chats = action.payload;
    });
    builder.addCase(addChats.fulfilled, (state, action) => {
      state.chats.push(action.payload);
    });
    builder.addCase(deleteChat.fulfilled, (state, action) => {
      state.chats = action.payload;
    });
  },
});

export const selectChats = (state) => state.chats.chats;
export const { hiddenChat } = chatsSlice.actions;

export default chatsSlice.reducer;
