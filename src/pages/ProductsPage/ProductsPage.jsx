import React, { useEffect } from "react";
import s from "./products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { productsResetFilter } from "../../store/reducer/productsReducer";
import ProductsFilterBar from "../../components/ProductsFilterBar/ProductsFilterBar";
import ProductItem from "../../components/ProductItem/ProductItem";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  const products = useSelector(({ products }) => {
    if (id === undefined) {
      return products;
    } else {
      return products.filter((product) => product.categoryId === +id);
    }
  });
 
  const categories = useSelector(( state ) => state.categories);
  // console.log(categories);

  const category = categories.find((item) => item.id === +id);
  // console.log(category);

  useEffect(() => {
    dispatch(productsResetFilter());
  }, []);

  return (
    <>
      {location.pathname === "/products/sale" ? (
        <div className={s.page}>
          <h2>Sale</h2>
          <ProductsFilterBar />
          <div className={s.products}>
            {products
              .filter((item) => item.discont_price)
              .map((item) => (
                <ProductItem
                  key={item.id}
                  {...item}
                />
              ))}
          </div>
        </div>
      ) : (
        <div className={s.page}>
          <h2>{category === undefined ? "All products" : category.title}</h2>
          <ProductsFilterBar />
          <div className={s.products}>
            {products.map((item) => (
              <ProductItem
                key={item.id}
               {...item}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
