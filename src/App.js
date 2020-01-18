import React, { Fragment } from "react";
import { CssBaseline } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Products from "./containers/products/Products";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom component="h1">
          Products Comparison
        </Typography>
        <Products />
      </Container>
    </Fragment>
  );
}

export default App;
