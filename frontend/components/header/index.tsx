import React from 'react';
import scss from './index.module.scss';
import { Navigation } from './Navigation';
import { Profile } from './Profile';
import { Button, EArrow, ETypeButton } from '../button';
import { ELogoType, Logo } from '../logo';
import { EIconType, Input } from '../input';
import HeaderLogo from '../../assets/icons/header-logo.svg';

export const Header = () => {
  return (
        <section className={scss.header}>
            <div className={scss.content}>
                <HeaderLogo/>
                <div className={scss.search}>
                    <Button onClick={() => console.log('hello')} type={ETypeButton.green} className={scss.menu}><span></span>Каталог</Button>
                    <Input iconType={EIconType.right} className={scss.searchInput}/>
                </div>
                <Navigation/>
                <Profile/>
            </div>
        </section>
  );
};

