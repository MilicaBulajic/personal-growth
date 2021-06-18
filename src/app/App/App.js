import Signup from "app/Auth/Signup";
import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "../Auth/Dashboard";
import Login from "../Auth/Login";
import PrivateRouter from "../Auth/PrivateRouter";
import PublicRouter from "../Auth/PublicRouter";
import ForgotPassword from "../Auth/ForgotPassword";
import Home from "../../pages/Home";
import { makeStyles } from "@material-ui/core/styles";
import { AuthProvider } from "services/AuthContext";
import devNews from "../../pages/devNews";
import About from "../../pages/About";



function App() { 

  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <PublicRouter
              restricted={true}
              component={Home}
              path="/"
              exact
            />
            <PrivateRouter exact path="/dashboard" component={Dashboard} />
            <PrivateRouter exact path="/news" component={devNews} />
            <PrivateRouter exact path="/courses" component={About} />
            <PrivateRouter exact path="/relax" component={About} />
            <PublicRouter path="/signup" component={Signup} />
            <PublicRouter path="/login" component={Login} />
            <PublicRouter path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
