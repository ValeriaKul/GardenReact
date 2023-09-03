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

// const getPrice = ({ price, discount_price }) => {
//   let actual_price = discount_price !== null ? discount_price : price;
//   return actual_price;
// };
const getActualPrice = (item) =>
  item.discount_price !== null ? item.discount_price : item.price;

export const productsReducer = (state = [], action) => {
  
  switch (action.type) {
    case PRODUCTS_LOAD:
      return action.payload.map((item) => ({ ...item, show: true }));
    
    case PRODUCTS_RESET_FILTER:
      return state.map((item) => ({ ...item, show: true }));

    case PRODUCT_DISCOUNT_FILTER:
      return state.map((item) => ({
        ...item,
        show: item.discount_price !== null,
      }));
      
    case PRODUCTS_SORT_PRICE_FILTER:
      let sorted = [...state];
      if (action.payload === "ascend") {
        sorted.sort((a, b) => getActualPrice(a) - getActualPrice(b));
      } else if (action.payload === "descend") {
        sorted.sort((a, b) => getActualPrice(b) - getActualPrice(a));
      }
      return sorted;

    case SEARCH_BY_PRICE:
      let minPrice = parseFloat(action.payload.min);
      let maxPrice = parseFloat(action.payload.max);
      return state.map((el) => {
        let actualPrice = getActualPrice(el);
        return { 
          ...el, 
          show: actualPrice >= minPrice && actualPrice <= maxPrice 
        };
      });

    default:
      return state;
  }
};
