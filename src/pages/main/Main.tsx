/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import style from './style.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getProductsThunk } from '../../redux/slices/productSlice';
import { setModalData, setIsModalVisible } from '../../redux/slices/modalSlice';
import { SinglProduct } from '../singleProduct/SinglProduct';

export const Main: React.FC = () => {

    const dispatch = useAppDispatch();
    const { products } = useAppSelector(((state): any => state.product));
    const { isModalVisible } = useAppSelector(state => state.modal);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const viewModalHandler = (data: any) => {
        dispatch(setModalData(data));
        dispatch(setIsModalVisible(true));
    }

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [dispatch])

    return (
        <div className={style.container}>
            <h2 className={style.title}>Our Products</h2>
            {isModalVisible && <SinglProduct />}
            <main className={style.wrapper}>
                <div className={style.content}>
                    {products.slice(0, 25).map((products: any) => (
                        <div key={products.id} className={style.cart} onClick={() => viewModalHandler(products)}>
                            <img src={products.images[0]} className={style.img} alt="" />
                            <p className={style.titleinfo}>{products.title}</p>
                            <div>
                                <p>${products.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}