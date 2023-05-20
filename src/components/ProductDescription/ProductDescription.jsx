import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { basketAddProductAction } from "../../store/reducer/basketReducer";

export default function ProductDescription({
  title,
  image,
  id,
  description,
  price,
  discont_price,
}) {
  const linkToImg = `http://localhost:3333/${image}`;
  const dispatch = useDispatch();
  
  return (
    <div className={s.page}>
      <h2>{title}</h2>
      <div className={s.container}>
        <img src={linkToImg} alt={title} className={s.image_item} />
            <div className={s.price_container}>
              <div className={s.price}>
                  {
                      discont_price === null ? (
                          <p className={s.main_price}>{price} $</p>
                      ) : (
                          <>
                          <p className={s.main_price}>{discont_price} $</p>
                          <p className={s.old_price}>{price} $</p>
                          <p className={s.discount}>- {((price - discont_price) / price * 100).toFixed(0)} %</p>
                          </>
                      )
                  }
              </div>
                <button className={s.btn_add_to_cart} onClick={()=>dispatch(basketAddProductAction(+id))}>Add to cart</button>
                <div className={s.descr_container}>
                    <p className={s.title_descr}>Description</p>
                    <p className={s.text_descr}>{description}</p>
                </div>
            </div>
        </div>
    </div>
  );
}
