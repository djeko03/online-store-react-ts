import Link from 'next/link';
import React from 'react';
import { ELogoType, Logo } from '../logo';
import scss from './index.module.scss';
import cn from 'classnames';
import Favorites from '../../assets/icons/header-navigation/navigation-favorites.svg';
import Orders from '../../assets/icons/header-navigation/navigation-orders.svg';
import Basket from '../../assets/icons/header-navigation/navigation-basket.svg';
import { MyImage, MyLayout } from '../image';
import basket from "../../store/basket";

interface IProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuBurger: React.FC<IProps> = ({ active, setActive }) => {
  return (
        <div className={cn(scss.menu, [active && scss.active])} onClick={() => setActive(false)}>
            <div className={cn(scss.blur, [active && scss.active])}/>
            <div className={scss.content} onClick={e => e.stopPropagation()}>

                <div className={scss.logo}>
                    <Link href='/'>
                        <a><Logo type={ELogoType.header}/></a>
                    </Link>
                </div>
                <ul className={scss.links}>
                    <li className={scss.link}>
                        <MyImage layout={MyLayout.fixed} width={24} height={24} src='/img/icons8-catalog-64.png'/>
                        <Link href='/catalog'><a className={scss.name} href="">Каталог</a></Link>
                    </li>
                    <li className={scss.link}>
                        <Favorites/>
                        <Link href='/'><a className={scss.name} href="">Избранное</a></Link>
                    </li>
                    <li className={scss.link}>
                        <Orders/>
                        <Link href='/'><a className={scss.name} href="">Заказы</a></Link>
                    </li>
                    <li className={scss.link}>
                        <Basket/>
                        <Link href='/basket'><a className={scss.name} href="">Корзина {basket.basketProducts.length}</a></Link>
                    </li>
                </ul>
            </div>
        </div>
  );
};

