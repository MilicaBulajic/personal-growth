import Signup from "app/Auth/Signup";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../Auth/Dashboard";
import Login from "../Auth/Login";
import PrivateRouter from "../Auth/PrivateRouter";
import PublicRouter from "../Auth/PublicRouter";
import ForgotPassword from "../Auth/ForgotPassword";
import Landing from "../../pages/Landing";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRouter restricted={true} component={Landing} path="/" exact />

        <PrivateRouter exact path="/" component={Dashboard} />
        <Route path="/signup" component={Signup} />

        <Route path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </Router>
  );
}

export default App;
