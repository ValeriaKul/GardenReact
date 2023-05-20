import React, { useEffect, useState } from "react";
import SaleSection from "../../components/SaleSection/SaleSection";
import s from "./homepage.module.css";
import { useSelector } from "react-redux";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import DiscountSection from "../../components/DiscountSection/DiscountSection";
import Sale from "../../components/Sale/Sale";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);
  const [randomData, setRandomData] = useState([]);
  const navigate = useNavigate();
  const saleProducts = products.filter(elem => elem.discont_price !== null);

  useEffect(() => {
    const shuffledData = shuffleArray(saleProducts);
    const selectedData = shuffledData.slice(0, 3);
    setRandomData(selectedData);
  }, [products]);

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  // const getRandomNumber = (min, max) => {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // };

  const onClick = () => {
   navigate("/categories");
  };

  return (
    <div className={s.page}>
      <SaleSection />
      <div className={s.catalog}>
        <p className={s.catalog_p}>Catalog</p>
        <button className={s.btn_all_categ} onClick={onClick}>
          All categories
        </button>
      </div>
      <div className={s.categories}>
        {categories
          .filter((item) => item.id < 5)
          .map((item) => (
            <CategoryItem key={item.id} {...item}/>
          ))}
      </div>
      <DiscountSection />
      <Sale products = {randomData}/>
    </div>
  );
}
