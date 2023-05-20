import React from 'react'
import s from './style.module.css';

export default function NotFoundPage() {
  return (
    <div className={s.page}>
        <img className={s.error} src="./images/404.png" alt="error" />
    </div>
  )
}
