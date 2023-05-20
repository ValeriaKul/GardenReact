import { categoriesLoadAction } from "../reducer/categoriesReducer";

const URL = "http://localhost:3333/categories/all"

export const asyncLoadCategoriesAction = async  (dispatch) => {
    const response = await fetch(URL);
    const data = await response.json();
    dispatch(categoriesLoadAction(data))

}