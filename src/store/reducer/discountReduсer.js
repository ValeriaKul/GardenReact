export const SEND_REQUEST = "SEND_REQUEST";
export const SEND_SUCCESS = "SEND_SUCCESS";
export const SEND_FAILURE = "SEND_FAILURE";

export const sendRequest = () => ({ type: SEND_REQUEST });
export const sendSuccess = () => ({ type: SEND_SUCCESS });
export const sendFailure = (error) => ({ type: SEND_FAILURE, payload: error });

const initialState = {
  loading: false,
  success: false,
  error: null,
  discountApplied: false,
};
export const discountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };

    case SEND_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        discountApplied: true,
        error: null,
      };

    case SEND_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        discountApplied: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
