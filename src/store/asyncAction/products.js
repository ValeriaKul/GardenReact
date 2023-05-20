import { productsLoadAction } from "../reducer/productsReducer";


const URL = 'http://localhost:3333/products/all'

export const asyncLoadProductsAction = async(dispatch) => {
    const response = await fetch(URL);
    const data = await response.json();
    dispatch(productsLoadAction(data));
}