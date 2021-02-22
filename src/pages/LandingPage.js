import React from "react";
import Login from "../app/Auth/Login";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import girl from "../assets/girl.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  media: {
    height: 150,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={girl}
                title="it girl"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h6">
                  Personal Growth
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Welcome dear people. Personal growth and development is a
                  transformational process, in which improvements are made in
                  your physical, emotional, intellectual, social and
                  professional state. If you are ready to start on your growth,
                  let's dive in!
                </Typography>
              </CardContent>
            </CardActionArea>
            <Login />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
