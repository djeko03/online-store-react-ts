import React from 'react';
import scss from './Header.module.scss'
import SearchInput from "./SearchInput/SearchInput";
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";
import { Button, EArrow, ETypeButton} from "../button";
import { ELogoType, Logo } from '../logo/index'

export const Header = () => {
    return (
        <section className={scss.header}>
            <div className={scss.content}>
                <Logo type={ELogoType.header}/>
                <div className={scss.search}>
                    <Button onClick={() => console.log('hello')} type={ETypeButton.green} className={scss.menu}><span></span>Каталог</Button>
                    <SearchInput/>
                </div>
                <Navigation/>
                <Profile/>
            </div>
        </section>
    );
};

