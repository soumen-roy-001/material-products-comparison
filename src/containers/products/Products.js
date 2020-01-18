import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

import Product from "../../components/product/Product";
import ComparedItems from "../../components/product/ComparedItems";

import * as actions from "../../store/index";

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  getComparedProducts = productId => {
    this.props.getComparedProducts(productId);
  };
  render() {
    const { products, comparedItems, loading } = this.props;
    let loadingSpin = "";
    if (loading) loadingSpin = <div>Loading...</div>;
    return (
      <Fragment>
        {loadingSpin}
        <Grid container spacing={3}>
          {products.map(product => {
            return (
              <Grid item key={product.id} xs={6} sm={3}>
                <Product
                  product={product}
                  getComparedProducts={this.getComparedProducts}
                />
              </Grid>
            );
          })}
        </Grid>
        {comparedItems.length >= 2 && (
          <ComparedItems comparedItems={comparedItems} />
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    comparedItems: state.comparedItems,
    loading: state.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(actions.getProducts()),
    getComparedProducts: productId =>
      dispatch(actions.getComparedProducts(productId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
