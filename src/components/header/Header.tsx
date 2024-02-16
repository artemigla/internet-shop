import React, { ChangeEvent, useState } from 'react';
import logo from '../../assets/store-shopper-svgrepo-com.svg';
import cart from '../../assets/cart.svg';
import { NavLink } from 'react-router-dom';
import style from './style.module.scss';

export const Header: React.FC = () => {

    const [search, setSearch] = useState<string>("");

    const handlerInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    return (
        <header className={style.container}>
            <div className={style.leftcontent}>
                <div className={style.logo}>
                    <img src={logo} alt="logo" />
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
                <i className="fa fa-search"
                    style={{ fontSize: '26px', marginLeft: '93%', position: 'absolute', cursor: 'pointer' }}>
                </i>
            </div>
            <nav className={style.rightcontent}>
                <div className={style.cart}>
                    <NavLink to={'/internet-shop/cart'}><img className={style.img} src={cart} alt="cart" /></NavLink>
                </div>
            </nav>
        </header>
    )
}
