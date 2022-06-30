import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChats, getChats, selectChats } from "../features/chats/chatsSlice";
import { Button, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function Chats() {
  const dispatch = useDispatch();
  const chats = useSelector(selectChats);
  useEffect(() => {
    dispatch(getChats());
  }, []);

  const handleAddChat = () => {
    const title = prompt("Введите название чата");
    dispatch(addChats(title));
  };
  return (
    <div>
      <h1>Чаты</h1>
      <div>
        <Button onclick={handleAddChat}>+ Добавить чат</Button>
      </div>
      <Nav variant="pills">
        {chats.map((chat) => (
          <Nav.Item key={chat._id}>
            <Nav.Link
              as={Link}
              to={`/chats/${chat._id}`}
              href={`/chats/${chat._id}`}
            >
              {chat.title}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default Chats;
