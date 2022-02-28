import React from 'react';
import Logo from "./Logo/Logo";
import css from './Header.module.scss'
import CatalogBtn from "./CatalogButton/CatalogBtn";
import SearchInput from "./SearchInput/SearchInput";
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";
import { Button } from "../../button";

export const Header = () => {
    return (
        <section>
            <div className={css.content}>
                <Logo/>
                <div className={css.search}>
                    <Button>Hello</Button>
                    <SearchInput/>
                </div>
                <Navigation/>
                <Profile/>
            </div>
        </section>
    );
};

