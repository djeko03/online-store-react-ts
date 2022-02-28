import React from 'react';
import scss from './Footer.module.scss'
import { Header } from "../../component/header";
import { Footer } from "../../component/footer";

export const MainLayout: React.FC = ({children}) => {
    return (
        <div className={scss.wrapper}>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

