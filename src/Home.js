import { useContext } from "react";
import { Link } from "react-router-dom";
import { phoneAuthContext } from "./context/authContext";
import { useNavigate } from "react-router-dom";
function Home() {
  const { userId, logOut } = useContext(phoneAuthContext);
  const navigate = useNavigate();
  const buttonClicked = () => {
    logOut();
    navigate("/sign");
  };

  return (
    <div>
      Home Page <br />
      {userId}
      <>
        <br />
        {userId && <button onClick={buttonClicked}>Signin out</button>}
        <br />
        <Link to="sign">Signin Page </Link>
        <br />

        <Link to="lab">TNP LAB Page </Link>
      </>
    </div>
  );
}

export default Home;
