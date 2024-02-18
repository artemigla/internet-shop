import React from 'react'
import emptyCart from '../../assets/shopping.svg';
import { IBasket } from '../../interfaces/IProductsProps';
import style from './style.module.scss';

export const EmptyCart: React.FC<IBasket> = ({ title }) => {
    return (
        <div className={style.emptycart}>
            <img className={style.sizeimg} src={emptyCart} alt="" />
            <h2 className={style.titlecart}>{title}</h2>
        </div>
    )
}
