import React from 'react';
import api from '../../api/api.json';
import pricesvg from '../../assets/hryvnia_sign_icon_199061.svg';
import style from './style.module.scss';

export const Main: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.brand}>
                {api.results.map(({ id, brand }) => (
                    <div key={id} className={style.namebrand}>
                        <span className={style.titlebrand}>{brand}</span>
                    </div>
                ))}
            </div>
            <main className={style.wrapper}>
                <div className={style.content}>
                    {api.results.map(({ id, price, images, brand }) => (
                        <div key={id} className={style.cart}>
                            <img className={style.img} src={images} alt="" />
                            <div className={style.info}>
                                <p>{brand}</p>
                                <h5> {price} <img className={style.pricesvg} src={pricesvg} alt="" /></h5>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}