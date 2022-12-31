import { Nav, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, logout, isAuthenticated,user } = useAuth0();

  return (
    <div className="App">
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        {
          isAuthenticated && (
            <div>
              {/* <img src={user.picture} alt={user.name} /> */}
              <p>Welcome : {user.email}</p>
            </div>
          )
        }
        </Nav.Item>
        {isAuthenticated ? (
          <Nav.Item>
            <Nav.Link>
              <Button
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </Button>
            </Nav.Link>
          </Nav.Item>
        ) : (
          <Nav.Item>
            <Nav.Link>
              <Button onClick={() => loginWithRedirect()}>Log In</Button>;
            </Nav.Link>
          </Nav.Item>
        )}
      </Nav>
    </div>
  );
}

export default App;
