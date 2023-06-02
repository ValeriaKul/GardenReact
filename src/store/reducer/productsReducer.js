const PRODUCTS_LOAD = "PRODUCTS_LOAD";
const PRODUCTS_RESET_FILTER = "PRODUCTS_RESET_FILTER";
const PRODUCT_DISCOUNT_FILTER = "PRODUCT_DISCOUNT_FILTER";
const PRODUCTS_SORT_PRICE_FILTER = "PRODUCTS_SORT_PRICE_FILTER";
const UPDATE_PRICE_FILTER = "UPDATE_PRICE_FILTER";

export const productsLoadAction = (payload) => ({
  type: PRODUCTS_LOAD,
  payload,
});

export const productsResetFilter = () => ({
  type: PRODUCTS_RESET_FILTER,
});

export const productDiscountFilterAction = (payload) => ({
  type: PRODUCT_DISCOUNT_FILTER,
  payload,
});

export const productsSortPriceAction = (payload) => ({
  type: PRODUCTS_SORT_PRICE_FILTER,
  payload,
});

export const productsSortFromToFilterAction = (minPrice, maxPrice) => ({
  type: UPDATE_PRICE_FILTER,
  payload: { minPrice, maxPrice },
});

const getPrice = ({ price, discont_price }) => {
  let actual_price = discont_price !== null ? discont_price : price;
  return actual_price;
};

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCTS_LOAD:
      return action.payload.map((item) => ({ ...item, show: true }));
    case PRODUCTS_RESET_FILTER:
      return state.map((item) => ({ ...item, show: true }));
    case PRODUCT_DISCOUNT_FILTER:
      if (action.payload) {
        return state.filter((item) => item.discont_price !== null);
      } else {
        return state;
      }
    case PRODUCTS_SORT_PRICE_FILTER:
      if (action.payload === "default"){
        return state;
      }
      if (action.payload === "ascend") {
        return [...state].sort((a, b) => getPrice(a) - getPrice(b));
      } else {
        return [...state].sort((a, b) => getPrice(b) - getPrice(a));
      }
      break;
    /* case PRODUCTS_SORT_TITLE_FILTER:
      if (action.payload === "ascend") {
        return [...state].sort((a, b) => a.title.localeCompare(b.title));
      } else {
        return [...state].sort((a, b) => b.title.localeCompare(a.title));
      } */
    default:
      return state;
  }
};
