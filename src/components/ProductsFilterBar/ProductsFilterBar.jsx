import React, { useState } from "react";
import s from "./style.module.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productsSortFromToFilterAction, productsSortPriceAction } from "../../store/reducer/productsReducer";

export default function ProductsFilterBar({
  showDiscountedItems,
  onDiscountCheckboxChange,
}) {
  const location = useLocation();
  const dispatch = useDispatch();
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  
  const handleDiscountCheckbox = (event) => {
    const checked = event.target.checked;
    onDiscountCheckboxChange(checked);
  };

  const sortPriceOnChange = (event) => {
    dispatch(productsSortPriceAction(event.target.value));
  };

  const handlePriceFilter = () => {
    dispatch(productsSortFromToFilterAction(priceRange));
  };
  return (
    <>
      {location.pathname === "/products/sale" ? (
        <div className={s.filter_bar_sale}>
           <form className={s.filter_price}>
        <p>Price</p>
        <input
          className={s.input}
          type="number"
          placeholder="from"
          value={priceRange.min}
          onChange={(e) =>
            setPriceRange({ ...priceRange, min: e.target.value })
          }
        />
        <input
          className={s.input}
          type="number"
          placeholder="to"
          value={priceRange.max}
          onChange={(e) =>
            setPriceRange({ ...priceRange, max: e.target.value })
          }
        />
        <button className={s.filter_button} onClick={handlePriceFilter}>
          Apply
        </button>
      </form>
          <div className={s.filter_sort}>
            <p>Sorted</p>
            <select name="sort" onChange={sortPriceOnChange}>
              <option value="default">by default</option>
              <option value="ascend">by asc price</option>
              <option value="descend">by desc price</option>

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
            <input
              type="checkbox"
              name="discount"
              checked={showDiscountedItems}
              onChange={handleDiscountCheckbox}
            />
          </form>
          <div className={s.filter_sort}>
            <p>Sorted</p>
            <select name="sort" onChange={sortPriceOnChange}>
              <option value="default">by default</option>
              <option value="ascend">by asc price</option>
              <option value="descend">by desc price</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
}
