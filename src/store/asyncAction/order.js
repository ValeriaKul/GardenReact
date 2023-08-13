import { LINK } from "../link/link";

const URL = `${LINK}/order/send`

export const createOrderAction = (order) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };
};
