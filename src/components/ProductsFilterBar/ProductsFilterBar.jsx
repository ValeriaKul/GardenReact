import React from "react";
import s from "./style.module.css";
import { useLocation } from "react-router-dom";

export default function ProductsFilterBar() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/products/sale" ? (
        <div className={s.filter_bar}>
        <form className={s.filter_price}>
          <p>Price</p>
          <input className={s.input} type="number" placeholder="from" />
          <input className={s.input} type="number" placeholder="to" />
        </form>
        <div className={s.filter_sort}>
          <p>Sorted</p>
          <select name="sort">
            <option value="ascend_price">by asc price</option>
            <option value="descend_price">by desc price</option>
          </select>
        </div>
      </div>
      ) : (
        <div className={s.filter_bar}>
          <form className={s.filter_price}>
            <p>Price</p>
            <input className={s.input} type="number" placeholder="from" />
            <input className={s.input} type="number" placeholder="to" />
          </form>
          <form className={s.filter_discount}>
            <p>Discounted items</p>
            <input type="checkbox" name="discount" />
          </form>
          <div className={s.filter_sort}>
            <p>Sorted</p>
            <select name="sort">
              <option value="ascend_price">by asc price</option>
              <option value="descend_price">by desc price</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
}
