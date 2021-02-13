import { AuthProvider } from "app/Auth/AuthContext";
import Signup from "app/Auth/Signup";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../Auth/Dashboard";
import Login from "../Auth/Login";
import PrivateRouter from "../Auth/PrivateRouter";
import PublicRouter from "../Auth/PublicRouter";
import ForgotPassword from "../Auth/ForgotPassword";
import Home from "../../pages/Home";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Switch>
            <PublicRouter restricted={true} component={Home} path="/" exact />

            <PrivateRouter exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;