import React from 'react';
import scss from './Header.module.scss'
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";
import { Button, EColorType, ESizeType } from "../button";
import { ELogoType, Logo } from '../logo/index'
import { EIconType, Input } from '../input';

export const Header = () => {
    return (
        <section className={scss.header}>
            <div className={scss.content}>
                <Logo type={ELogoType.header}/>
                <div className={scss.search}>
                    <Button onClick={() => console.log('hello')} color={EColorType.green} size={ESizeType.mid} className={scss.menu}><span></span>Каталог</Button>
                    <Input icon={EIconType.right} className={scss.searchInput}/>
                </div>
                <Navigation/>
                <Profile/>
            </div>
        </section>
    );
};

