import Signup from "app/Auth/Signup";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../Auth/Dashboard";
import Login from "../Auth/Login";
import PrivateRouter from "../Auth/PrivateRouter";
import PublicRouter from "../Auth/PublicRouter";
import ForgotPassword from "../Auth/ForgotPassword";
import Home from "../../pages/Home";
import { MuiThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { AuthProvider } from "services/AuthContext";
import devNews from "../../pages/devNews";
import About from "../../pages/About";
import Drawer from "../../components/Drawer"


const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});
function App() { 
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Router>
      {window.location.pathname !== '/login' ? <Drawer /> : null}
        <AuthProvider>
          <Switch>
            <PublicRouter
              restricted={true}
              component={Home}
              path="/login"
              exact
            />
            <PrivateRouter exact path="/" component={Dashboard} />
            <PrivateRouter exact path="/news" component={devNews} />
            <PrivateRouter exact path="/about" component={About} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
