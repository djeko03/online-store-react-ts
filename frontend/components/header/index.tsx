import React from 'react';
import scss from './index.module.scss';
import { Navigation } from './Navigation';
import { Profile } from './Profile';
import { Button, ETypeButton } from '../button';
import { ELogoType, Logo } from '../logo';
import { EIconType, Input } from '../input';

export const Header = () => {
  return (
        <section className={scss.header}>
            <div className={scss.content}>
                <Logo type={ELogoType.header}/>
                <div className={scss.search}>
                    <Button type={ETypeButton.green} className={scss.menu}><span></span>Каталог</Button>
                    <Input placeholder='Найти товар' iconType={EIconType.right} className={scss.searchInput}/>
                </div>
                <Navigation/>
                <Profile/>
            </div>
        </section>
  );
};

