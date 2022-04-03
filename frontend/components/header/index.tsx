import React, { useState } from 'react';
import scss from './index.module.scss';
import { Navigation } from './Navigation';
import { Profile } from './Profile';
import { Button, ETypeButton } from '../button';
import { ELogoType, Logo } from '../logo';
import { EIconType, Input } from '../input';
import Link from 'next/link';

import { MenuBurger } from '../menu-burger';
import cn from 'classnames';
export const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  return (
        <section className={scss.header}>
            <div className={scss.content}>
                <Button
                    onClick={() => setBurgerActive(!burgerActive)}
                    className={scss.burgerBtn}
                    type={ETypeButton.custom}>
                    <span className={cn(scss.burger, [burgerActive && scss.active])}></span>
                </Button>
                <div className={scss.logo}>
                    <Link href='/'>
                        <a><Logo type={ELogoType.header}/></a>
                    </Link>
                </div>
                <div className={scss.search}>
                    <Link href='/catalog'>
                        <a>
                            <Button type={ETypeButton.green} className={scss.menu}><span className={scss.line}></span>Каталог</Button>
                        </a>
                    </Link>
                    <Input placeholder='Найти товар' iconType={EIconType.right} className={scss.searchInput}/>
                </div>
                <div className={scss.navigation}>
                    <Navigation/>
                </div>
                <Profile/>
                <MenuBurger active={burgerActive} setActive={setBurgerActive}/>
            </div>
        </section>
  );
};

