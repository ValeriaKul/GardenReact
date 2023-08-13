import axios from "axios";
import {
  sendFailure,
  sendRequest,
  sendSuccess,
} from "../reducer/discountReduсer";
import { LINK } from "../link/link";

const URL = `${LINK}/sale/send`

export const asyncCreateDiscountAction = (phoneNumber) => {
  return async (dispatch) => {
    dispatch(sendRequest());
    try {
      const response = await axios.post(URL, { phoneNumber });
      if (response.data.clientRegistered === false) {
        dispatch(sendSuccess());
      } else {
        dispatch(sendFailure("Discount not applicable"));
      }
    } catch (error) {
      dispatch(sendFailure(error.message));
    }
  };
};
