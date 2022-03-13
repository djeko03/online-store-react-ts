import React from 'react';
// @ts-ignore
import scss from './index.module.scss';
import Favorites from '../../../assets/icons/header-navigation/navigation-favorites.svg';
import Orders from '../../../assets/icons/header-navigation/navigation-orders.svg';
import Basket from '../../../assets/icons/header-navigation/navigation-basket.svg';

export const Navigation = () => {
  return (
        <div className={scss.container}>
            <a className={scss.item}>
                <Favorites/>
                <p>Избранное</p>
            </a>
            <a className={scss.item}>
                <Orders/>
                <p>Заказы</p>
            </a>
            <a className={scss.item}>
                <Basket/>
                <p>Корзина</p>
            </a>
        </div>
  );
};

