import React from 'react';
import FooterLogo from "./FooterLogo/FooterLogo";
import scss from './Footer.module.scss'

export const Footer = () => {
    return (
        <section className={scss.footer}>
            <div className={scss.content}>
                <FooterLogo/>
            </div>
            <img style={{backgroundColor:'#F9F4E2'}} src="/img/bg.png" alt=""/>

        </section>
    );
};
