import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";

const switchRoutes = (
    <Switch>
        {routes.map((prop, key)}
    </Switch>
)

export default function Admin({ ...rest }) {
    const classes = useStyles();
    const mainPanel = React.createRef();
    const [image, setImage] = React.useState
    const [color, setColor]
    const [fixedClasses, setFixedClasses]
    return (
        <div>
            
        </div>
    )
}
