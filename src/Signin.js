import { useContext, useState } from "react";
import { phoneAuthContext } from "./context/authContext";
import { useNavigate } from "react-router-dom";
function Signin() {
  const { captcha } = useContext(phoneAuthContext);
  const [phoneNumber, setPhoneumber] = useState("");
  const [result, setResult] = useState("");
  const [otp, setOtp] = useState("");
  const [flag, setFlag] = useState(false);

  const navigate = useNavigate();

  const getOTP = async (event) => {
    event.preventDefault();
    if (phoneNumber === "" || phoneNumber === undefined) return;
    try {
      const p = `+91${phoneNumber}`;
      console.log("P", p);
      const response = await captcha(p);
      console.log("response", response);
      setResult(response);
      setPhoneumber("");
      setFlag(true);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const verifyOtp = async (event) => {
    event.preventDefault();
    if (otp === "" || otp === undefined) return;
    const OtpVerified = await result.confirm(otp);
    
    console.log("OtpVerified", OtpVerified);
    setOtp("");
    navigate("/");
  };

  return (
    <div>
      Signin
      <div>
        {flag === false ? (
          <form onSubmit={getOTP}>
            <input
              placeholder="Enter phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneumber(e.target.value)}
            />
            <div id="recaptcha-container"></div>
            <button>get OTP</button>
          </form>
        ) : (
          <form onSubmit={verifyOtp}>
            <input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button>verify</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Signin;
