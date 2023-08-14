import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { basketAddProductAction } from "../../store/reducer/basketReducer";
import { Link } from "react-router-dom";
import { LINK } from "../../store/link/link";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function ProductItem({
  id,
  image,
  title,
  discount_price,
  price,
}) {
  const link = `/products/${id}`;
  const linkToImg = `${LINK}${image}`;
  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    toast.success("The product has been successfully added to the cart!");
    event.stopPropagation();
    dispatch(basketAddProductAction(+id));
  };

  return (
    <div className={s.container}>
      <button className={s.btn_add_to_basket} onClick={handleAddToCart}>
        Add to Cart
      </button>
      <Link className={s.title} to={link}>
        <div className={s.img_container}>
          <img src={linkToImg} alt={title} />
        </div>
        {discount_price ? (
          <div className={s.price_container}>
            <p className={s.discount_price}>{discount_price}$</p>
            <p className={s.price}>{price}$</p>
            <p className={s.discount}>
              - {(((price - discount_price) / price) * 100).toFixed(0)}%
            </p>
          </div>
        ) : (
          <div className={s.price_container}>
            <p className={s.discount_price}>{price}$</p>
          </div>
        )}
        {title}
      </Link>
      
    </div>
  );
}
