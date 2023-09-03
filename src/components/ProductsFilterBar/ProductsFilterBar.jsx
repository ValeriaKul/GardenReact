import React, { useCallback, useEffect, useState } from "react";
import s from "./style.module.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  productsSortFromToFilterAction,
  productsSortPriceAction,
} from "../../store/reducer/productsReducer";
import { BsFilter } from "react-icons/bs";

const SortSelect = ({ sortPriceOnChange }) => (
  <div className={s.filter_sort}>
    <p>Sorted</p>
    <select name="sort" onChange={sortPriceOnChange}>
      <option value="default">by default</option>
      <option value="ascend">by asc price</option>
      <option value="descend">by desc price</option>
    </select>
  </div>
);

const PriceForm = ({ priceRange, setPriceRange, handlePriceFilter }) => (
  <form className={s.filter_price} onChange={handlePriceFilter}>
    <p>Price</p>
    <input
      className={s.input}
      type="number"
      placeholder="from"
      value={priceRange.min}
      onChange={(e) => {
        setPriceRange({ ...priceRange, min: e.target.value });
       
      }}
    />
    <input
      className={s.input}
      type="number"
      placeholder="to"
      value={priceRange.max}
      onChange={(e) => {
        setPriceRange({ ...priceRange, max: e.target.value });
  
      }}
    />
  </form>
);

export default function ProductsFilterBar({
  showDiscountedItems,
  onDiscountCheckboxChange,
}) {
  const location = useLocation();
  const dispatch = useDispatch();
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
}, [priceRange]);

  const handleDiscountCheckbox = (event) => {
    const checked = event.target.checked;
    onDiscountCheckboxChange(checked);
  };

  const sortPriceOnChange = (event) => {
    dispatch(productsSortPriceAction(event.target.value));
    openBurgerMenu();
  };

  const handlePriceFilter = useCallback(() => {
    let min = parseFloat(priceRange.min);
    let max = parseFloat(priceRange.max);
    dispatch(productsSortFromToFilterAction({ min, max }));
}, [dispatch, priceRange]);

  

  const openBurgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isSale = location.pathname === "/products/sale";

  return (
    <>
      <div className={s.filter__desktop}>
        {isSale ? (
          <>
            <PriceForm
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              handlePriceFilter={handlePriceFilter}
            />
            <SortSelect sortPriceOnChange={sortPriceOnChange} />
          </>
        ) : (
          <>
            <div className={s.filter_bar}>
              <PriceForm
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                handlePriceFilter={handlePriceFilter}
              />
              <form className={s.filter_discount}>
                <p>Discounted items</p>
                <input
                  type="checkbox"
                  name="discount"
                  checked={showDiscountedItems}
                  onChange={handleDiscountCheckbox}
                />
              </form>
              <SortSelect sortPriceOnChange={sortPriceOnChange} />
            </div>
          </>
        )}
      </div>
      <div className={s.filter__mobile}>
        <BsFilter className={s.filter__icon} onClick={openBurgerMenu} />
        {isMenuOpen && (
          <div className={s.dropdown_menu}>
            <SortSelect sortPriceOnChange={sortPriceOnChange} />
            {!isSale && (
              <form className={s.filter_discount}>
                <p>Discounted items</p>
                <input
                  type="checkbox"
                  name="discount"
                  checked={showDiscountedItems}
                  onChange={handleDiscountCheckbox}
                />
              </form>
            )}
          </div>
        )}
      </div>
    </>
  );
}
