import React from 'react';
import scss from './Header.module.scss'
import SearchInput from "./SearchInput/SearchInput";
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";
import { Button, EArrow, EColorType, ESizeType } from "../button";
import { ELogoType, Logo } from '../logo/index'

export const Header = () => {
    return (
        <section className={scss.header}>
            <div className={scss.content}>
                <Logo type={ELogoType.header}/>
                <div className={scss.search}>
                    <Button onClick={() => console.log('hello')} color={EColorType.green} size={ESizeType.mid} className={scss.menu}><span></span>Каталог</Button>
                    <SearchInput/>
                </div>
                <Navigation/>
                <Profile/>
            </div>
        </section>
    );
};

