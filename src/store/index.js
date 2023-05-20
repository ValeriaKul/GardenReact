import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";
import { categoriesReduser } from "./reducer/categoriesReducer";
import { productsReducer } from "./reducer/productsReducer";
import { basketReducer } from "./reducer/basketReducer";
import { discountReduser } from "./reducer/discountReduser";


const rootReduser = combineReducers({
  categories: categoriesReduser,
  products: productsReducer,
  basket: basketReducer,
  discount: discountReduser,
});

export const store = createStore(rootReduser, applyMiddleware(thunk));