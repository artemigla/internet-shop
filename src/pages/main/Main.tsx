/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getProductsThunk } from '../../redux/slices/productSlice';
import { setModalData, setIsModalVisible } from '../../redux/slices/modalSlice';
import { SinglProduct } from '../singleProduct/SingleProduct';
import { formatPrice } from '../../utils/formatPrice';
import style from './style.module.scss';

export const Main: React.FC = () => {

    const dispatch = useAppDispatch();
    const { products } = useAppSelector(((state): any => state.product));
    const { isModalVisible } = useAppSelector(state => state.modal);
    const [currentPage, setCurrentPage] = useState(1);

    const quantityPerPage = 10;
    const lastIndex = currentPage * quantityPerPage;
    const firstIndex = lastIndex - quantityPerPage;
    const quantityProducts = products.slice(firstIndex, lastIndex);
    const numberPage = Math.ceil(products.length / quantityPerPage);
    const numbers = [...Array(numberPage + 1).keys()].slice(1);

    const allProducts = products.length;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const viewModalHandler = (data: any) => {
        dispatch(setModalData(data));
        dispatch(setIsModalVisible(true));
    }

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [dispatch]);

    const prevNumberPage = () => {
        if(currentPage !== firstIndex) {
            setCurrentPage(currentPage - 1);
        }
    }

    const changeCurrentPage = (id: number) => {
        setCurrentPage(id)
    }

    const nextNumberPage = () => {
        if(currentPage != lastIndex) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div className={style.container}>
            <h2 className={style.title}>Our Products</h2>
            {isModalVisible && <SinglProduct />}
            <main className={style.wrapper}>
                <div className={style.content}>
                    {quantityProducts.slice(0, allProducts).map((products: any) => (
                        <div key={products.id} className={style.cart} onClick={() => viewModalHandler(products)}>
                            <img src={products.images[0]} className={style.img} alt={products.title} />
                            <p className={style.titleinfo}>{products.title}</p>
                            <div className={style.price}>
                                <p>Price: {formatPrice(products.price)}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </main>

            <div className={style.pagination}>
                <button disabled={currentPage <= 1} onClick={prevNumberPage}>
                    <p className={style.prevNumberPage}>Prev</p>
                    
                </button>
                <div className={style.counter}>{numbers.map((item, index) => (
                    <p className={currentPage === item ? style.noactive : style.number} key={index} onClick={() => changeCurrentPage(index + 1)}>{item}</p>
                ))}</div>
                <button disabled={currentPage >= numbers.length} onClick={nextNumberPage}>
                    <p className={style.nextNumberPage}>Next</p>
                </button>
            </div>
        </div>
    )
}