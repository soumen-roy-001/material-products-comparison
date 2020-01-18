import * as actionTypes from "./actionTypes";
import axios from "axios";

export const startLoading = () => {
  return {
    type: actionTypes.START_LOADING
  };
};
export const noResult = () => {
  return {
    type: actionTypes.NO_RESULT
  };
};

export const storeProducts = products => {
  return {
    type: actionTypes.GET_PRODUCTS,
    products: products
  };
};
export const storeComparedProducts = comparedItems => {
  return {
    type: actionTypes.STORE_COMPARED_PRODUCTS,
    comparedItems: comparedItems
  };
};

export const getProducts = () => {
  return dispatch => {
    dispatch(startLoading());
    axios
      .get("products.json")
      .then(res => {
        if (res.status === 200) {
          dispatch(storeProducts(res.data));
        }
      })
      .catch(err => {
        dispatch(noResult());
      });
  };
};

export const getComparedProducts = productId => {
  return (dispatch, getState) => {
    const products = getState().products;
    const comparedItems = getState().comparedItems;
    const isItemExist = comparedItems.filter(item => item.id === productId);
    if (isItemExist.length) {
      const filteredItems = comparedItems.filter(item => item.id !== productId);
      dispatch(storeComparedProducts(filteredItems));
    } else {
      const currProduct = products.filter(item => item.id === productId)[0];
      const finalComparedItems = [...comparedItems, currProduct];
      dispatch(storeComparedProducts(finalComparedItems));
    }
  };
};
