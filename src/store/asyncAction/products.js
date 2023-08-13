import { productsLoadAction } from "../reducer/productsReducer";
import { LINK } from "../link/link";

const URL = `${LINK}/products/all`

export const asyncLoadProductsAction = async(dispatch) => {
    const response = await fetch(URL);
    const data = await response.json();
    dispatch(productsLoadAction(data));
}

