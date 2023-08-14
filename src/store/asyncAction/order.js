import { LINK } from "../link/link";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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
      toast(data.message);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };
};
