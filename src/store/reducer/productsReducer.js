const PRODUCTS_LOAD = "PRODUCTS_LOAD";
const PRODUCTS_RESET_FILTER = "PRODUCTS_RESET_FILTER";
const PRODUCT_DISCOUNT_FILTER = "PRODUCT_DISCOUNT_FILTER";
const PRODUCTS_SORT_PRICE_FILTER = "PRODUCTS_SORT_PRICE_FILTER";
const SEARCH_BY_PRICE = "SEARCH_BY_PRICE";

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

export const productsSortFromToFilterAction = (payload) => ({
  type: SEARCH_BY_PRICE,
  payload,
});

const getPrice = ({ price, discount_price }) => {
  let actual_price = discount_price !== null ? discount_price : price;
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
        return state.filter((item) => item.discount_price !== null);
      } else {
        return state;
      }
    case PRODUCTS_SORT_PRICE_FILTER:
      if (action.payload === "default") {
        return [...state].sort((a, b) => a.id - b.id);
      }
      if (action.payload === "ascend") {
        return [...state].sort((a, b) => getPrice(a) - getPrice(b));
      } else {
        return [...state].sort((a, b) => getPrice(b) - getPrice(a));
      }
    case SEARCH_BY_PRICE:
      return [...state].map((el) => {
        let actualPrice =
          el.discount_price === null ? el.price : el.discount_price;
        if (
          actualPrice >= action.payload.min &&
          actualPrice <= action.payload.max
        ) {
          return { ...el, hide: false };
        } else {
          return { ...el, hide: true };
        }
      });
    default:
      return state;
  }
};
