import React, { useEffect, useState } from "react";
import s from "./products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
  productsResetFilter,
  productDiscountFilterAction,
} from "../../store/reducer/productsReducer";
import ProductsFilterBar from "../../components/ProductsFilterBar/ProductsFilterBar";
import ProductItem from "../../components/ProductItem/ProductItem";

export default function ProductsPage() {
  const [showDiscountedItems, setShowDiscountedItems] = useState(false);
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

  const categories = useSelector((state) => state.categories);

  const category = categories.find((item) => item.id === +id);

  useEffect(() => {
    dispatch(productsResetFilter());
    // eslint-disable-next-line
  }, []);

  const handleDiscountCheckboxChange = (checked) => {
    setShowDiscountedItems(checked);
    if (checked) {
      dispatch(productDiscountFilterAction());
    } else {
      dispatch(productsResetFilter());
    }
  };

  return (
    <>
      {location.pathname === "/products/sale" ? (
        <div className={s.page}>
          <div className={s.page__name_filter}>
            <h2>Sale</h2>
            <ProductsFilterBar />
          </div>
          <div className={s.products}>
            {products
              .filter((item) => item.discount_price)
              .map((item) => (
                <ProductItem key={item.id} {...item} />
              ))}
          </div>
        </div>
      ) : (
        <div className={s.page}>
          <div className={s.page__name_filter}>
            <h2>{category === undefined ? "All products" : category.title}</h2>
            <ProductsFilterBar
              showDiscountedItems={showDiscountedItems}
              onDiscountCheckboxChange={handleDiscountCheckboxChange}
            />
          </div>
          <div className={s.products}>
            {products
              .filter((item) => !showDiscountedItems || item.discount_price)
              .map((item) => (
                <ProductItem key={item.id} {...item} />
              ))}
          </div>
        </div>
      )}
    </>
  );
}
