import React from "react";
import s from "./style.module.css";
import { BiPlus, BiMinus } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import {
  basketDecrementAction,
  basketDeleteProduct,
  basketIncrementAction,
} from "../../store/reducer/basketReducer";
import { LINK } from "../../store/link/link";

const CountContainer = ({ decrementCount, incrementCount, count, id }) => (
  <div className={s.count_container}>
    <BiMinus className={s.btn} onClick={() => decrementCount(id)} />
    <p className={s.count}>{count}</p>
    <BiPlus className={s.btn} onClick={() => incrementCount(id)} />
  </div>
);

const Price = ({ discount_price, price, count }) => (
  <>
    {discount_price === null ? (
      <p className={s.actual_price}>{(price * count).toFixed(2)}$</p>
    ) : (
      <div className={s.actual_price_container}>
        <p className={s.actual_price}>{(discount_price * count).toFixed(2)}$</p>
        <p className={s.old_price}>{(price * count).toFixed(2)}$</p>
      </div>
    )}
  </>
);

export default function BasketItem({
  image,
  title,
  count,
  discount_price,
  price,
  id,
}) {
  const dispatch = useDispatch();
  const linkToImg = `${LINK}${image}`;

  const decrementCount = (id) => {
    dispatch(basketDecrementAction(id));
  };

  const incrementCount = (id) => {
    dispatch(basketIncrementAction(id));
  };

  return (
    <div className={s.basket_item}>
      <img className={s.image_basket} src={linkToImg} alt={title} />
      <div className={s.title_and_count}>
        <p className={s.title}>{title}</p>
        <div className={s.count_container__desktop}>
          <CountContainer
            id={id}
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
          />
        </div>
        <div className={s.price_mobile}>
        <Price discount_price={discount_price} price={price} count={count}/>
      </div>
      </div>
      <div className={s.price_desktop}>
        <Price discount_price={discount_price} price={price} count={count}/>
      </div>
      <div className={s.count_container__mobile}>
        <CountContainer
          id={id}
          count={count}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
        />
      </div>
      <GrClose
        className={s.dtn_delete}
        onClick={() => dispatch(basketDeleteProduct(id))}
      />
    </div>
  );
}
