import Link from 'next/link';
import React from 'react';
import { ELogoType, Logo } from '../logo';
import scss from './index.module.scss';
import cn from 'classnames';
import Favorites from '../../assets/icons/header-navigation/navigation-favorites.svg';
import Orders from '../../assets/icons/header-navigation/navigation-orders.svg';
import Basket from '../../assets/icons/header-navigation/navigation-basket.svg';
import { MyImage, MyLayout } from '../image';

interface IProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuBurger: React.FC<IProps> = ({ active, setActive }) => {
  return (
        <div className={cn(scss.menu, [active && scss.active])} onClick={() => setActive(false)}>
            <div className={scss.blur}/>
            <div className={scss.content} onClick={e => e.stopPropagation()}>

                <div className={scss.logo}>
                    <Logo type={ELogoType.header}/>
                </div>
                <ul className={scss.links}>
                    <li>
                        <MyImage layout={MyLayout.fixed} width={24} height={24} src='/img/icons8-catalog-64.png'/>
                        <Link href='/'><a href="">Каталог</a></Link>
                    </li>
                    <li>
                        <Favorites/>
                        <Link href='/'><a href="">Избранное</a></Link>
                    </li>
                    <li>
                        <Orders/>
                        <Link href='/'><a href="">Заказы</a></Link>
                    </li>
                    <li>
                        <Basket/>
                        <Link href='/'><a href="">Корзина</a></Link>
                    </li>
                </ul>
            </div>
        </div>
  );
};

