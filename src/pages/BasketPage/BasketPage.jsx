import React from 'react'
import { useSelector } from 'react-redux'
import s from './style.module.css';
import BasketItem from '../../components/BasketItem/BasketItem';
import BasketCalculation from '../../components/BasketCalculation/BasketCalculation';

export default function BasketPage() {
const {basket, products} = useSelector(state => state);

const data = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });

  console.log(data);

  return (
    <div className={s.page}>
      {products.length === 0 ? (
        <p>"Is loading..."</p>
      ) : (
        <>
          <div className={s.basket_items}>
            {
              data.length === 0 ? (
                <div>No items in the cart</div>
              ) : 
              (
                data.map((item) => (
                  <BasketItem key={item.id} {...item} />
                ))
                
                )
              }
    
          </div>
          { data.length === 0 ? '' :  <BasketCalculation />}
         
        </>
      )
      }
    </div>
  )
}
