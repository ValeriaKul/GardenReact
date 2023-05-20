const PRODUCTS_LOAD = "PRODUCTS_LOAD";
const PRODUCTS_RESET_FILTER = "PRODUCTS_RESET_FILTER";
const PRODUCTS_SORT_PRICE_FILTER = "PRODUCTS_SORT_PRICE_FILTER";
const PRODUCTS_SORT_TITLE_FILTER = "PRODUCTS_SORT_TITLE_FILTER";
const UPDATE_PRICE_FILTER = "UPDATE_PRICE_FILTER";

export const productsLoadAction = (payload) => ({
  type: PRODUCTS_LOAD,
  payload,
});

export const productsResetFilter = () => ({
  type: PRODUCTS_RESET_FILTER,
});

export const productsSortPriceAction = (payload) => ({
  type: PRODUCTS_SORT_PRICE_FILTER,
  payload,
});

export const productsSortTitleAction = (payload) => ({
  type: PRODUCTS_SORT_TITLE_FILTER,
  payload,
});


export const productsSortFromToFilterAction = (minPrice, maxPrice) => ({
  type: UPDATE_PRICE_FILTER,
  payload: { minPrice, maxPrice },
});

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCTS_LOAD:
      return action.payload.map((item) => ({ ...item, show: true }));
    case PRODUCTS_RESET_FILTER:
      return state.map((item) => ({ ...item, show: true }));
  
    case PRODUCTS_SORT_TITLE_FILTER:
      if (action.payload === "ascend") {
        return [...state].sort((a, b) => a.title.localeCompare(b.title));
      } else {
        return [...state].sort((a, b) => b.title.localeCompare(a.title));
      }
    default:
      return state;
  }
}