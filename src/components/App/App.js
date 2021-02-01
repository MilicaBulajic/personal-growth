import { AuthProvider } from "components/Auth/AuthContext";
import Signup from "components/Auth/Signup";
import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Signup />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
