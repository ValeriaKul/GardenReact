import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import s from "./header.module.css";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(
    window.innerWidth <= 768
  );
  const navigate = useNavigate();
  const menuRef = useRef(null);

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
      // Проверяем, был ли кликнут элемент вне меню
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    // Добавляем обработчик события click к корневому элементу приложения
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
      // Мобильная версия - отображаем все ссылки
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
          <NavLink
            to="/account"
            onClick={() => setMenuOpen(false)}
          >
            My Account
          </NavLink>
        </>
      );
    } else if (!isMobileDevice) {
      // Десктопная версия - отображаем только выбранные ссылки
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
      <img
        className={s.btn_cart}
        src="/images/header_img/cart.png"
        alt="cart"
        onClick={onClick}
      />
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
