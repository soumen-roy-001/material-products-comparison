import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  },
  price: {
    color: "#0ab5b5"
  },

  actionArea: {
    "&:hover $focusHighlight": {
      opacity: 0.6
    },
    "&:hover $imageButton": {
      opacity: 1,
      border: "4px solid #fff",
      padding: 5,
      transition: "0.2s",
      zIndex: 1
    }
  },
  focusHighlight: {
    background: "#3dd2c4"
  },
  imageButton: {
    position: "absolute",
    top: "calc(50% - 20px)",
    left: "calc(50% - 40px)",
    color: "#fff",
    opacity: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  active: { background: "#b9e4f5" }
});

const Product = props => {
  const classes = useStyles();
  const { id, title, description, filename, price } = props.product;
  const [isCompared, setCompared] = useState(false);

  const handleCompare = id => {
    setCompared(!isCompared);
    props.getComparedProducts(id);
  };
  return (
    <Card className={clsx(classes.card, isCompared && classes.active)}>
      <CardActionArea
        classes={{
          root: classes.actionArea,
          focusHighlight: classes.focusHighlight
        }}
      >
        <CardMedia className={classes.media} image={filename} title={title}>
          <span
            className={classes.imageButton}
            onClick={() => handleCompare(id)}
          >
            {isCompared ? "Remove" : "Compare"}
          </span>
        </CardMedia>
      </CardActionArea>
      <CardContent>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="body1" component="h2">
                {title}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {description}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" className={classes.price}>
              ${price.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Product;
