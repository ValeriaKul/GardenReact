import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { basketClearAction } from "../../store/reducer/basketReducer";
import { createOrderAction } from "../../store/asyncAction/order";

export default function BasketCalculation() {
  const dispatch = useDispatch();
  const { basket, products, discount } = useSelector((state) => state);

  const data = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });

  const totalPrice = data.reduce(
    (a, b) => a + (b.discount_price ? b.discount_price : b.price) * b.count,
    0
  );
  const discountedCost = data
    .reduce(
      (a, b) => a + (b.price - (b.discount_price ? b.discount_price : b.price)),
      0
    )
    .toFixed(2);

  const totalDiscount5 = (
    totalPrice -
    totalPrice * (discount.success ? 0.95 : 1)
  ).toFixed(2);

  const totalSum = (totalPrice - totalDiscount5).toFixed(2);

  const totalDiscount =( +totalDiscount5 + +discountedCost).toFixed(2);

  const totalCount = data.reduce((a, b) => a + b.count, 0);
  const onSubmit = async (e) => {
    e.preventDefault();
    const order = data.map((el) => ({
      id: el.id,
      count: el.count,
      price: el.price,
    }));
    dispatch(createOrderAction(order));
    dispatch(basketClearAction());
  };
  
  return (
    <div className={s.basket_calc_container}>
      <p className={s.title}>Order details</p>
      <div className={s.details}>
        <p className={s.total_title}>Total sum</p>
        <p className={s.total_count}>{totalSum}$</p>
      </div>
      <div className={s.details}>
        <p className={s.total_title}>Total items</p>
        <p className={s.total_count}>{totalCount}</p>
      </div>
      <div className={s.details}>
        <p className={s.total_title}>Total discount</p>
        <p className={s.total_count}>{totalDiscount}$</p>
      </div>
      <p className={discount.success ? s.success : s.failed}>
        {discount.success
          ? "5% discount received :)"
          : "5% discount has already been used :("}
      </p>
      <form className={s.form}>
        <input
          type="tel"
          name="number"
          className={s.number}
          maxLength="14"
          minLength="14"
          placeholder=" Phone number "
        />
        <button className={s.btn_order} onClick={(e) => onSubmit(e)}>
          Order
        </button>
      </form>
    </div>
  );
}
