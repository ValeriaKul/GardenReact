import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { basketAddProductAction } from "../../store/reducer/basketReducer";
import { Link } from "react-router-dom";

export default function ProductItem({ id, image, title, discont_price, price }) {
  const link = `/products/${id}`;
  const linkToImg = `http://localhost:3333/${image}`
  const dispatch = useDispatch();
  return (
    <Link className={s.container} to={link}>
      <button className={s.btn_add_to_basket} onClick = {()=>dispatch(basketAddProductAction(+id))}>Add to Cart</button>
      <img src={linkToImg} alt={title} />
      {discont_price ? (
        <div className={s.price_container}>
          <p className={s.discount_price}>{discont_price} $</p>
          <p className={s.price}>{price} $</p>
          <p className={s.discount}>- {((price - discont_price) / price * 100).toFixed(0)} %</p>
        </div>
      ) : (
        <p className={s.discount_price}>{price} $</p>
      )}
      <p className={s.title}>{title}</p>
    </Link>
  );
}
