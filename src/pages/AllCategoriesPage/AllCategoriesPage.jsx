import React from "react";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import CategoryItem from "../../components/CategoryItem/CategoryItem";

export default function AllCategoriesPage() {
  const categories = useSelector((state) => state.categories);

  return (
    <div className={s.page}>
      <h1>Categories</h1>
      <div className={s.categories_container}>
        {categories.map((item) => (
          <CategoryItem
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
