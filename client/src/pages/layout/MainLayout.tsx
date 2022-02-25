import React from 'react';
// @ts-ignore
import css from './MainLayout.module.css'
import Header from "./header/Header";
import Footer from "./footer/Footer";

const MainLayout: React.FC = ({children}) => {
    return (
        <div className={css.wrapper}>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default MainLayout;