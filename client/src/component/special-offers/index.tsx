import React from 'react';
import scss from './index.module.scss'
import { Title } from "../title";

export const SpecialOffers = () => {
    return (

        <div>
            <Title>Специальные предложения</Title>
            <div className={scss.banners}>
                <div className={scss.orange}>
                    <img src="img/special-offers-img/banner.png" alt=""/>
                </div>
                <div className={scss.green}>
                    <img src="img/special-offers-img/banner (1).png" alt=""/>
                </div>
            </div>
        </div>
    );
};

