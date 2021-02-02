import { AuthProvider } from "components/Auth/AuthContext";
import Signup from "components/Auth/Signup";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../Auth/Dashboard";
import Login from "../Auth/Login";
import PrivateRouter from "../Auth/PrivateRouter";
import ForgotPassword from "../Auth/ForgotPassword";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRouter exact path="/" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
