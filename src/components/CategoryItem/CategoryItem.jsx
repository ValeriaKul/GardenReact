import React from "react";
import s from "./categoryItem.module.css";
import { Link } from "react-router-dom";
import { LINK } from "../../store/link/link";

export default function CategoryItem({ image, title, id }) {
  const link = `/categories/${id}`;
  const linkToImg = `${LINK}${image}`
  return (
    <Link className={s.categoryLink} to={link}>
      <div className={s.categoryItem}>
        <img className={s.categoryImg} src={linkToImg} alt={title} />
        <p className={s.categoryLabel} >{title}</p>
      </div>
    </Link>
  );
}
