import HomePage from "../../pages/HomePage/HomePage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncLoadProductsAction } from "../../store/asyncAction/products";
import { asyncLoadCategoriesAction } from "../../store/asyncAction/categories";
import { getDiscountAction } from "../../store/reducer/discountReduser";
import AllCategoriesPage from "../../pages/AllCategoriesPage/AllCategoriesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import ProductDescriptionPage from "../../pages/ProductDescriptionPage/ProductDescriptionPage";
import BasketPage from "../../pages/BasketPage/BasketPage";



function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(asyncLoadProductsAction);
    dispatch(asyncLoadCategoriesAction);
  },[])

  useEffect(() => {
    const savedData = localStorage.getItem("discountData");
    if (savedData) {
      dispatch(getDiscountAction(JSON.parse(savedData)));
    }
  }, []);

  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/products/all" element={<ProductsPage/>}/>
      <Route path="/products/sale" element={<ProductsPage/>}/>
      <Route path="/categories/:id" element={<ProductsPage/>}/>
      <Route path="/products/:id" element={<ProductDescriptionPage/>}/>
      <Route path="/categories" element={<AllCategoriesPage/>}/>
      <Route path="/cart" element={<BasketPage/>}/>
      <Route path="/*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
