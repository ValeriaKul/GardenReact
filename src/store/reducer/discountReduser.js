const GET_DISCOUNT = "GET_DISCOUNT";

export const getDiscountAction = (payload) => ({
  type: GET_DISCOUNT,
  payload,
});

export const discountReduser = (state = "", action) => {
  if (action.type === GET_DISCOUNT) {
    if (action.payload !== null && action.payload.length === 11) {
      return action.payload;
    }
  }
  return state;
};
