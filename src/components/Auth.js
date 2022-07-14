import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

function Auth() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  if (isAuthenticated) {
    return (
      <div>
        <span className="me-2">{user.name}</span>
        <Button variant="outline-danger" onClick={() => logout()}>
          Выйти
        </Button>
      </div>
    );
  }
  return (
    <div>
      <Button variant="outline-success" onClick={() => loginWithRedirect()}>
        Войти
      </Button>
    </div>
  );
}
export default Auth;
