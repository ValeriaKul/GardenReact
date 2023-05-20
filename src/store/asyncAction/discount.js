import { getDiscountAction } from "../reducer/discountReduser";

const URL = "http://localhost:3333/sale/send "

export const asyncCreateDiscountAction = async (dispatch, number) => {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(number)
    });
  
    const data = await response.json();
    dispatch(getDiscountAction(data));
  };