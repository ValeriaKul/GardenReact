import React, { useState } from "react";
import s from "./discountSection.module.css";
import { useDispatch } from "react-redux";
import { getDiscountAction } from "../../store/reducer/discountReduser";

export default function DiscountSection() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function handleChange(event) {
    const code = "+49";
    const number = event.target.value.replace(/[^0-9+]/g, "");
    if (number.startsWith(code)) {
      setValue(number.slice(code.length));
    } else {
      setValue(number);
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    const data = {
      number: `+49${value}`,
      discount: true,
      used: false,
    };
    dispatch(getDiscountAction(data));
    localStorage.setItem("discountData", JSON.stringify(data));
    setValue("");
  }

  return (
    <div className={s.discount_section}>
      <img className={s.picture} src="./images/draft.png" alt="img" />
      <div className={s.discount_container}>
        <p className={s.p_1}>5% off </p>
        <p className={s.p_2}>on the first order</p>
        <form className={s.form} onSubmit={onSubmit}>
          <input
            type="tel"
            name="number"
            className={s.number}
            value={"+49" + value}
            onChange={handleChange}
            maxLength="14"
            minLength="14"
          />
          <button className={s.btn_discount}>Get a discount</button>
        </form>
      </div>
    </div>
  );
}
