import { Link } from "react-router-dom";

import Alert from "react-bootstrap/Alert";
function Main() {
  return (
    <Alert className="text-center mt-5" variant="primary">
      <Alert.Heading>Welcome to Nordic Messenger</Alert.Heading>
      <Link to="/chats"> Move to chats</Link>
    </Alert>
  );
}
export default Main;
