import React from 'react'
import styles from './Header.module.css'
import meal from '../../assets/images/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

function Header(props) {
  return (
    <>
        <header className={styles.header}>
            <h1>Meals online shopping</h1>
            <HeaderCartButton onClick={ props.showCartHandler} />
        </header>
        <div className={styles['main-image']}>
            <img src={meal} alt="" />
        </div>
    </>
  )
}

export default Header