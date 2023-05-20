import React from 'react'
import s from './style.module.css';
import ProductItem from '../ProductItem/ProductItem';

export default function Sale({products}) {

  return (
    <div className={s.sale_container}>
        <p className={s.title}>Sale</p>
        <div className={s.sale_products}>
            {products.map(elem => (
                <ProductItem key={elem.id} {...elem}/>
            ))}
        </div>

    </div>
  )
}
