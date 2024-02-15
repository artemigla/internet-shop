import React, { useEffect } from 'react';
import style from './style.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getProductsThunk } from '../../redux/slices/productSlice';

export const Main: React.FC = () => {

    const dispatch = useAppDispatch();
    const { products } = useAppSelector((state => state.product));

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [dispatch])

    console.log("CART ", products);

    return (
        <div className={style.container}>
            <h2 className={style.title}>Our Products</h2>
            <main className={style.wrapper}>
                <div className={style.content}>
                    {products.slice(0, 21).map(({ id, images, title, price }) => (
                        <div key={id} className={style.cart}>
                            <img src={images[0]} className={style.img} alt="" />
                            <p className={style.title}>{title}</p>
                            <div>
                                <p>$ {price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}