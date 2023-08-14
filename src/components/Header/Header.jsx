import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import s from "./header.module.css";
import { useSelector } from "react-redux";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(
    window.innerWidth <= 768
  );
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const { basket, products } = useSelector((state) => state);
  const data = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });
  const totalCount = data.reduce((a, b) => a + b.count, 0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const onClick = () => {
    navigate("/cart");
  };

  const relocToHomePage = () => {
    navigate("/");
  };

  const toCatalog = () => {
    navigate("/categories");
  };

  const toggleMenu = (event) => {
    event.stopPropagation()
    setMenuOpen(!isMenuOpen);
  };

  const renderLinks = () => {
    if (isMobileDevice && isMenuOpen) {
      return (
        <>
          <NavLink
            to="/products/all"
            onClick={() => setMenuOpen(false)}
          >
            All products
          </NavLink>
          <NavLink
            to="/categories"
            onClick={() => setMenuOpen(false)}
          >
            All categories
          </NavLink>
          <NavLink
            to="/products/sale"
            onClick={() => setMenuOpen(false)}
          >
            All sales
          </NavLink>
          <NavLink
            to="/cart"
            onClick={() => setMenuOpen(false)}
          >
            My Cart
          </NavLink>
        </>
      );
    } else if (!isMobileDevice) {
      return (
        <>
          <NavLink className={s.link} to="/">
            Main Page
          </NavLink>
          <NavLink className={s.link}  to="/products/all">
            All products
          </NavLink>
          <NavLink className={s.link}  to="/products/sale">
            All sales
          </NavLink>
        </>
      );
    }
  };

  return (
    <div className={s.header}>
      <img
        className={s.logo}
        src="/images/header_img/logo.png"
        alt="logo"
        onClick={relocToHomePage}
      />
      <button onClick={toCatalog} className={s.btn_catalog}>
        Catalog
      </button>
      <nav
        ref={menuRef}
        className={`${s.navigation} ${
          isMobileDevice && isMenuOpen ? s.open : ""
        }`}
      >
        {renderLinks()}
      </nav>
      <div className={s.cart_container} onClick={onClick}>
  <img
    className={s.btn_cart}
    src="/images/header_img/cart.png"
    alt="cart"
  />
  <div className={s.cart_item_count_badge}>{totalCount}</div>
</div>
      <div
        className={`${s.burger_menu} ${isMobileDevice ? "" : s.hide}`}
        onClick={toggleMenu}
      >
        <div className={`${s.burger_line} ${isMenuOpen ? s.open : ""}`}></div>
        <div className={`${s.burger_line} ${isMenuOpen ? s.open : ""}`}></div>
        <div className={`${s.burger_line} ${isMenuOpen ? s.open : ""}`}></div>
      </div>
    </div>
  );
}
