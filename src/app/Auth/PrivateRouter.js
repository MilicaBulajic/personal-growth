import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../services/AuthContext";
import Drawer from "../../components/Drawer"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function PrivateRouter({ component: Component, ...rest }) {
  const classes = useStyles();
  const { currentUser } = useAuth();

  const component = props => (
    <div className={classes.container}>
      <Drawer />
      <Component {...props} />
    </div>
  )


  return (
    <Route
      {...rest}
      component={component}
      render={(props) => {
        return currentUser ? <Component {...props} /> : <Redirect to="/" />;
      }}
    ></Route>
  );
}
