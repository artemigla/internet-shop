import React, { ChangeEvent, useState } from 'react';
import logo from '../../assets/store-shopper-svgrepo-com.svg';
import cart from '../../assets/cart.svg';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import style from './style.module.scss';

export const Header: React.FC = () => {

    const [search, setSearch] = useState<string>("");
    const { data: totalItems } = useAppSelector((state) => state.cart);

    const handlerInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    return (
        <header className={style.container}>
            <div className={style.leftcontent}>
                <div className={style.logo}>
                    <img className={style.imglogo} src={logo} alt="logo" />
                </div>
                <span className={style.title}>Store</span>
            </div>
            <div className={style.midcontent}>
                <input
                    type="search"
                    className={style.npt}
                    value={search}
                    onInput={handlerInput}
                />
                <i className={"fa fa-search"}></i>
            </div>
            <nav className={style.rightcontent}>

                <div className={style.cart}>
                    <NavLink to={'/internet-shop/cart'}><img className={style.img} src={cart} alt="cart" /></NavLink>
                </div>
                <span className={style.totalItems}> {totalItems.length}</span>
            </nav>
        </header>
    )
}
