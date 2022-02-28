import React from 'react';
import Logo from "./Logo/Logo";
// @ts-ignore
import css from './Header.module.css'
// @ts-ignore
import container from '../../container/container.module.css'
import CatalogBtn from "./CatalogButton/CatalogBtn";
import SearchInput from "./SearchInput/SearchInput";
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";

const Header = () => {
    return (
        <section>
            <div className={css.content + ' ' + container.container}>
                <Logo/>
                <div className={css.search}>
                    <CatalogBtn/>
                    <SearchInput/>
                </div>
                <Navigation/>
                <Profile/>
            </div>
        </section>
    );
};

export default Header;