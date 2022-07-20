import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Chats from "./routes/Chats";
import Chat from "./routes/Chat";
import Main from "./routes/Main";
import { Auth0Provider } from "@auth0/auth0-react";
import "./App.css";
import { Wrapper } from "@googlemaps/react-wrapper";
import Auth from "./components/Auth";

function App() {
  return (
    <Wrapper apiKey="AIzaSyBEWfYnG7bYhE2NUEvCyKs5j_2-a4LGmgE">
      <Auth0Provider
        domain="dev-pi626oqr.eu.auth0.com"
        clientId="O3AeTHBeJm6c3KvHkOiwHn3iCsRUvtaR"
        redirectUri={window.location.origin}
      >
        <Container>
          <Auth />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="chats" element={<Chats />}>
              <Route path=":chatId" element={<Chat />}></Route>
            </Route>
          </Routes>
        </Container>
      </Auth0Provider>
    </Wrapper>
  );
}

export default App;
