import React from 'react';
import errorpage from '../../assets/status-error-filled-svgrepo-com.svg';
import style from './style.module.scss';

export const Error: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <img src={errorpage} alt="" />
            </div>
            <h2 className={style.title}>Not found page 404</h2>
        </div>
    )
}