import React from 'react'
import s from './sale.module.css';
// import { useNavigate } from 'react-router-dom';

export default function SaleSection() {
  // const navigate = useNavigate();
  const onClick = () => {
    // navigate('/sales');
  }
  return (
    <div className={s.sale_section}>
        <div className={s.text}>
            <p className={s.name}>Sale</p>
            <p className={s.season}>New season</p>
            <button onClick={onClick} className={s.btn_sale}>Sale</button>
        </div>
        <div className={s.picture}>
            <img src="./images/homepage_sales.png" alt="sale" />
        </div>
    </div>
  )
}
