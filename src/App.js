import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthProvider from "./context/authContext";
import Home from "./Home";
import Signin from "./Signin";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign" element={<Signin />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
