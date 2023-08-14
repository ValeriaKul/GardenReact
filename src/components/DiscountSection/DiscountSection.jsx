import React, { useState } from "react";
import s from "./discountSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { asyncCreateDiscountAction } from "../../store/asyncAction/discount";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function DiscountSection() {
  const [value, setValue] = useState("+49");
  const dispatch = useDispatch();
  const discountApplied = useSelector((state) => state.discount.discountApplied);

  const handleChange = (event) => {
    const number = event.target.value.replace(/[^0-9+]/g, "");
    if (number.length <= 14 && (number === "" || number.startsWith("+49"))) {
      setValue(number);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (value.length === 14 && value.startsWith("+49")) {
      const data = value;
      dispatch(asyncCreateDiscountAction(data));
      setValue("+49");
      console.log(discountApplied);
    } else {
      toast.warning("Invalid German phone number format");
    }
    toast(discountApplied ? "Discount received" : "Discount has already been used" )
  };

  return (
    <div className={s.discount_section}>
      <img className={s.picture} src="./images/draft.png" alt="img" />
      <div className={s.discount_container}>
        <p className={s.p_1}>5% off</p>
        <p className={s.p_2}>on the first order</p>
        <form className={s.form} onSubmit={onSubmit}>
          <input
            type="tel"
            name="number"
            className={s.number}
            value={value}
            onChange={handleChange}
            maxLength="14"
          />
          <button
            className={s.btn_discount}
            onClick={onSubmit}
            disabled={discountApplied}
          >
            {discountApplied ? "Discount Applied" : "Get a Discount"} 
          </button>
        </form>
      </div>
    </div>
  );
}
