import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import BatteryCharging60Icon from '@material-ui/icons/BatteryCharging60';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "200px",
  },
});

const Drawer = (props) => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => history.push("/dashboard"),
    },
    {
      text: "Courses",
      icon: <MenuBookIcon />,
      onClick: () => history.push("/courses"),
    },
    {
      text: "Newspaper",
      icon: <SearchIcon />,
      onClick: () => history.push("/news"),
    },
    {
      text: "Relax Time",
      icon: <BatteryCharging60Icon />,
      onClick: () => history.push("/relax"),
    },
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
