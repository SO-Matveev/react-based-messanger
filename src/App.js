import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Chats from "./routes/Chats";
import Chat from "./routes/Chat";
import "./App.css";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="chats" element={<Chats />}>
          <Route path=":chatId" element={<Chat />}></Route>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
