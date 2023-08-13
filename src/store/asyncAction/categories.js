import { categoriesLoadAction } from "../reducer/categoriesReducer";
import { LINK } from "../link/link";

const URL = `${LINK}/categories/all`

export const asyncLoadCategoriesAction = async  (dispatch) => {
    const response = await fetch(URL);
    const data = await response.json();
    dispatch(categoriesLoadAction(data))

}