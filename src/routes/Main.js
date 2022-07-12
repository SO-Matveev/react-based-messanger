import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      Welcome
      <Link to="/chats"> Move to chats</Link>
    </div>
  );
}
export default Main;
