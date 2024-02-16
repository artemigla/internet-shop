/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { setIsModalVisible } from '../../redux/slices/modalSlice';
import { addToCart } from '../../redux/slices/cartSlice';
import style from './style.module.scss';

export const SinglProduct: React.FC = () => {
    const dispatch = useAppDispatch();
    const { data: product } = useAppSelector(state => state.modal);
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + 1;
            return newQuantity
        })
    }

    const decreaseQuantity = () => {
        setQuantity((nextQuantity) => {
            const newQuantity = nextQuantity - 1;
            return newQuantity
        })
    }

    const addToCartHandler = (product: any) => {
        let totalPrice = quantity * product.price;
        const tempProduct = {
            ...product,
            quantity,
            totalPrice
        }
        dispatch(addToCart(tempProduct));
        dispatch(setIsModalVisible(true));
        navigate('/internet-shop/cart')
    }

    const modalOverlayHandler = (e: any) => {
        if (e.target.classList.contains('container')) {
            dispatch(setIsModalVisible(false));
        }
    }

    return (
        <div className={style.container} onClick={modalOverlayHandler}>
            <div className={style.productdetailsmodal}>
                <button type="button" className={style.modalclosebtn} onClick={() => dispatch(setIsModalVisible(false))}>
                    <i className="fa fa-times-circle" aria-hidden="true"></i>
                </button>
                <div className={style.detailscontent}>
                    <div className={style.detailsimg}>
                        <img className={style.img} src={product.images[0]} alt={product.title} />
                    </div>
                </div>
                {/* content right*/}
                <div className={style.contentRight}>
                    <div className={style.detailInfo}>
                        <h3 className={style.title}>{product.title}</h3>
                        <p className={style.description}>{product.description}</p>
                        <div className={style.price}>Price: ${product.price}</div>
                    </div>
                    <div className={style.quantity}>
                        <span>Quantity: </span>
                        <button onClick={() => decreaseQuantity()} className={style.iconquantity}>
                            <i className="fa fa-minus" aria-hidden="true"></i>
                        </button>
                        <span className={style.counter}>{quantity}</span>
                        <button onClick={() => increaseQuantity()} className={style.iconquantity}>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                    <button type="button" className={style.buttonCart} onClick={() => addToCartHandler(product)}>
                        <span className={style.btnicon}>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </span>
                        <span className={style.btntext}>Add To Cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
