import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";

export default function BasketCalculation() {
  const dispatch = useDispatch();
  const { basket, products } = useSelector((state) => state);

  const data = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });
  console.log(data);
  return (
    <div className={s.basket_calc_container}>
      <p className={s.title}>Order details</p>
      <div className={s.details}>
        <p className={s.total_title}>Total</p>
        <p className={s.total_count}>
          {data.reduce(
            (a, b) =>
              a + (b.discont_price ? b.discont_price : b.price) * b.count,
            0
          )}{" "}
          $
        </p>
      </div>
      <form className={s.form} >
          <input
            type="tel"
            name="number"
            className={s.number}
            maxLength="14"
            minLength="14"
            placeholder=" Phone number "
          />
          <button className={s.btn_discount}>Get a discount</button>
        </form>
    </div>
  );
}
