import React from 'react';
import Logo from "./Logo/Logo";
// @ts-ignore
import css from './Header.module.css'
import CatalogBtn from "./CatalogButton/CatalogBtn";
import SearchInput from "./SearchInput/SearchInput";
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";

const Header = () => {
    return (
        <section className={css.header}>
            <Logo/>
            <div className={css.search}>
                <CatalogBtn/>
                <SearchInput/>
            </div>
            <Navigation/>
            <Profile/>

        </section>
    );
};

export default Header;