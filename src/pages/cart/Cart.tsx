/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { getCartTotal, removeFromCart, toggleCartQty } from '../../redux/slices/cartSlice';
import { EmptyCart } from './EmptyCart';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../utils/formatPrice';
import style from './style.module.scss';

export const Cart: React.FC = () => {

  const dispatch = useAppDispatch();
  const { data: data, totalItems, totalAmount, deliveryCharge } = useAppSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useSelector((state: any) => state.cart)]);

  function deleteProduct(e: any) {
    dispatch(removeFromCart(e));
  }

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {data.length ? data.map((products: any) => (
          <div key={products.id} className={style.contentcart}>
            <div className={style.img}>
              <img src={products.images[0]} alt="" />
            </div>
            <div className={style.aboutproducts}>
              <p className={style.title}>{products.title}</p>
              <div className={style.description}>
                <p>{products.description.slice(0, 170)}...</p>
              </div>
              <div className={style.qantityproduct}>
                <span className={style.qty}>Quantity: </span>
                <span className={style.minus} onClick={() => dispatch(toggleCartQty({ id: products.id, type: "DEC" }))}><i className="fa fa-minus" aria-hidden="true"></i></span>

                <h3 className={style.quantity}> {products.quantity}</h3>
                <span className={style.plus} onClick={() => dispatch(toggleCartQty({ id: products.id, type: "INC" }))}><i className="fa fa-plus" aria-hidden="true"></i></span>
              </div>
              <p className={style.price}>Price: ${products.price}</p>

              <div className={style.btnwrapper}>
                <button className={style.btn} onClick={() => deleteProduct(products.id)}>Delete</button>
              </div>
            </div>
          </div>
        )) : <EmptyCart title="The basket is empty. Let's go shopping." />}
        {data.length ?
          <div className={style.totalorders}>
            <div className={style.wrappertotaloders}>
              <div className={style.cartsummary}>
                <div className={style.carttitle}>
                  <h3>Order Summary</h3>
                  <hr />
                </div>
                <ul className={style.cartinfo}>
                  <li className={style.flexbetween}>
                    <span className={style.fontweight}>Selected {totalItems} items(s) Price</span>
                    <span className={style.fontweight}>{formatPrice(totalAmount)}</span>
                  </li>
                  <li className={style.flexbetween}>
                    <span className={style.fontweight}>Discount</span>
                    <span className={style.fontweight}>
                      <span style={{ color: 'red' }}>-&nbsp;</span>
                      {formatPrice(0)}
                    </span>
                  </li>
                  <li className={style.flexbetween}>
                    <span className={style.fontweight}>Delivery Cost</span>
                    <span className={style.fontweight}>
                      <span style={{ color: 'red' }}>+&nbsp;</span>{formatPrice(deliveryCharge)}
                    </span>
                  </li>
                </ul>

                <div className={style.cartwrapper}>
                  <div className={style.carttotal}>
                    <span className={style.fontweight}>Grand Total: </span>
                    <span className={style.fontweight}>{formatPrice(totalAmount + deliveryCharge)}</span>
                  </div>
                  <div className={style.cartbtn}>
                    <button type="button" className={style.btncheckout}>Proceed to Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div> : null}
      </div>
    </div>
  )
}
