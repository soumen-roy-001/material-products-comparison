import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core'
// import './App.css';
import Products from './containers/products/Products'

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Products />
    </Fragment>
  );
}

export default App;
