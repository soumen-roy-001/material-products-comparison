import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  price: {
    color: "#3aaf53"
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
      // background: 'transparent',
    }
  },
  focusHighlight: {
    background: "#46f946"
  },
  imageButton: {
    position: "absolute",
    top: "calc(50% - 20px)",
    left: "calc(50% - 40px)",
    color: "#fff",
    opacity: 0,
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      background: "#fff",
      color: "#1dab1d"
    }
  }
});

const Product = props => {
  const classes = useStyles();
  const { id, title, description, filename, price } = props.product;
  const preventDefault = event => event.preventDefault();
  const [isCompared, setCompared] = useState(false);

  const handleCompare = id => {
    setCompared(!isCompared);
    props.getComparedProducts(id);
  };
  // console.log(props)
  return (
    <Card
      className={classes.card}
      style={
        isCompared ? { background: "#b4f5b4", border: "1px solid #a1f7a1" } : {}
      }
    >
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
                <Link href="#" onClick={preventDefault}>
                  {title}
                </Link>
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

      {/* <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions> */}
    </Card>
  );
};

export default Product;
