const ADD_TO_BASKET = "ADD_TO_BASKET";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const CLEAR_BASKET = "CLEAR_BASKET";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const stateDefault = JSON.parse(localStorage.getItem("products")) ?? [];

const writeToLocaleStorage = (basket) => {
  localStorage.setItem("products", JSON.stringify(basket));
};

export const basketIncrementAction = (payload) => ({
  type: INCREASE,
  payload,
});

export const basketDecrementAction = (payload) => ({
  type: DECREASE,
  payload,
});

export const basketAddProductAction = (payload) => ({
  type: ADD_TO_BASKET,
  payload,
});

export const basketDeleteProduct = (payload) => ({
  type: DELETE_PRODUCT,
  payload,
});

export const basketClearAction = () => ({
  type: CLEAR_BASKET,
});

export const basketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      const productToAdd = state.find(({ id }) => id === action.payload);

      if (productToAdd === undefined) {
        const newBasket = [...state, {id: action.payload, count: 1}] 
        writeToLocaleStorage(newBasket);
        return newBasket;
      } else {
       productToAdd.count++;
        writeToLocaleStorage(state);
        return [...state];
      }

    case DELETE_PRODUCT:
      const newBasket = state.filter(({ id }) => id !== action.payload);
      writeToLocaleStorage(newBasket);
      return newBasket;

    case INCREASE:
      const updatedBasket = state.map((product) =>
        product.id === action.payload
          ? { ...product, count: product.count + 1 }
          : product
      );
      writeToLocaleStorage(updatedBasket);
      return updatedBasket;

    case DECREASE:
      const productToDecrement = state.find(({ id }) => id === action.payload);

      if (productToDecrement.count > 1) {
        const updatedBasket = state.map((product) =>
          product.id === action.payload
            ? { ...product, count: product.count - 1 }
            : product
        );
        writeToLocaleStorage(updatedBasket);
        return updatedBasket;
      } else {
        const newBasket = state.filter(
          (product) => product.id !== action.payload
        );
        writeToLocaleStorage(newBasket);
        return newBasket;
      }

    case CLEAR_BASKET:
      writeToLocaleStorage([]);
      return [];

    default:
      return state;
  }
};
