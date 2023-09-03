import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { basketAddProductAction } from "../../store/reducer/basketReducer";
import { LINK } from "../../store/link/link";

export default function ProductDescription({
  title,
  image,
  id,
  description,
  price,
  discount_price,
}) {
  const linkToImg = `${LINK}${image}`;
  const dispatch = useDispatch();

  return (
    <div className={s.page}>
      <h2>{title}</h2>
      <div className={s.container}>
        <img src={linkToImg} alt={title} className={s.image_item} />
        <div className={s.price_container}>
          <div className={s.price}>
            {discount_price === null ? (
              <p className={s.main_price}>{price} $</p>
            ) : (
              <>
                <p className={s.main_price}>{discount_price} $</p>
                <p className={s.old_price}>{price} $</p>
                <p className={s.discount}>
                  - {(((price - discount_price) / price) * 100).toFixed(0)} %
                </p>
              </>
            )}
          </div>
          <button
            className={s.btn_add_to_cart}
            onClick={() => dispatch(basketAddProductAction(+id))}
          >
            Add to cart
          </button>
          <div className={s.descr_container}>
            <p className={s.title_descr}>Description</p>
            <p className={s.text_descr}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
