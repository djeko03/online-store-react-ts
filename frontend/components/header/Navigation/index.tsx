import React from 'react';
import scss from './index.module.scss';
import Favorites from '../../../assets/icons/header-navigation/navigation-favorites.svg';
import Orders from '../../../assets/icons/header-navigation/navigation-orders.svg';
import Basket from '../../../assets/icons/header-navigation/navigation-basket.svg';
import Link from 'next/link';
import cn from 'classnames';
import basket from "../../../store/basket";
import {observer} from "mobx-react-lite";

export const Navigation = observer(() => {
  return (
        <div className={scss.container}>
            <a className={scss.item}>
                <Favorites className={scss.image}/>
                <p>Избранное</p>
            </a>
            <a className={scss.item}>
                <Orders className={scss.image}/>
                <p>Заказы</p>
            </a>
            <Link href='/basket'>
                <div className={cn(scss.item, scss.basket)}>
                    <Basket className={scss.image}/>
                    <p>Корзина</p>
                    {basket.basketProducts.length !== 0 && <div className={scss.basketNumber}>{basket.basketProducts.length}</div>}
                </div>
            </Link>
        </div>
  );
});

