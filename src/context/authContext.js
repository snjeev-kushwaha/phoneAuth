import { createContext, useEffect, useState } from "react";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { async } from "@firebase/util";
export const phoneAuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userId, setUserid] = useState("");

    // Verify captcha then OTP comes
  const captcha = (phoneNumber) => {
    const appVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      },
      auth
    );
    appVerifier.render();
    return signInWithPhoneNumber(auth, phoneNumber, appVerifier);
  };

  const logOut = async () => {
    await signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
        console.log("An error happened.");
      });
  };

  // Get current user loggedIn
  useEffect(() => {
    const suscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserid(uid);
      }
    });

    return () => {
      suscribe();
    };
  }, []);

  return (
    <phoneAuthContext.Provider
      value={{
        captcha,
        userId,
        logOut,
      }}
    >
      {children}
    </phoneAuthContext.Provider>
  );
};

export default AuthProvider;
