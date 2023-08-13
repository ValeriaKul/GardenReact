import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";
import { categoriesReduсer } from "./reducer/categoriesReducer";
import { productsReducer } from "./reducer/productsReducer";
import { basketReducer } from "./reducer/basketReducer";
import { discountReducer } from "./reducer/discountReduсer";


const rootReduser = combineReducers({
  categories: categoriesReduсer,
  products: productsReducer,
  basket: basketReducer,
  discount: discountReducer,
});

export const store = createStore(rootReduser, applyMiddleware(thunk));