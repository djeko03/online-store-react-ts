import React from 'react';
import css from './Header.module.scss'
import SearchInput from "./SearchInput/SearchInput";
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";
import { Button, EButtonType, ESizeType } from "../../button";
import { ELogoType, Logo } from '../../logo/index'

export const Header = () => {
    return (
        <section>
            <div className={css.content}>
                <Logo type={ELogoType.header}/>
                <div className={css.search}>
                    <Button onClick={() => console.log('hello')} type={EButtonType.secondary} className={css.menu} size={ESizeType.mid}><span></span>Каталог</Button>
                    <SearchInput/>
                </div>
                <Navigation/>
                <Profile/>
            </div>
        </section>
    );
};

