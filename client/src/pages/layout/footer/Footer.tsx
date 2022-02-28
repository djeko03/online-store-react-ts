import React from 'react';
import FooterLogo from "./FooterLogo/FooterLogo";
// @ts-ignore
import css from './Footer.module.css'
// @ts-ignore
import container from '../../container/container.module.css'

const Footer = () => {
    return (
        <section className={css.footer}>
            <div className={css.content + ' ' + container.container}>
                <FooterLogo/>
            </div>
            <img style={{backgroundColor:'#F9F4E2'}} src="/img/bg.png" alt=""/>

        </section>
    );
};

export default Footer;