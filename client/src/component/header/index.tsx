import React from 'react';
import scss from './Header.module.scss'
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";
import { Button, EArrow, ETypeButton} from "../button";
import { ELogoType, Logo } from '../logo/index'
import { EIconType, Input } from '../input';

export const Header = () => {
    return (
        <section className={scss.header}>
            <div className={scss.content}>
                <Logo type={ELogoType.header}/>
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

