import * as actionTypes from "./actionTypes";
import { updateObject } from "./utility";

const initialState = {
  loading: false,
  products: [],
  comparedItems: []
};

const getProducts = (state, action) => {
  return updateObject(state, {
    loading: false,
    products: action.products
  });
};

const storeComparedItems = (state, action) => {
  return updateObject(state, {
    comparedItems: action.comparedItems
  });
};

const noResult = (state, action) => {
  return updateObject(state, initialState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return updateObject(state, { loading: true });
    case actionTypes.NO_RESULT:
      return noResult(state, action);
    case actionTypes.GET_PRODUCTS:
      return getProducts(state, action);
    case actionTypes.STORE_COMPARED_PRODUCTS:
      return storeComparedItems(state, action);
    default:
      return state;
  }
};

export default reducer;
