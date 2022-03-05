import React from 'react';
import scss from './index.module.scss'
import { Title } from "../title";

export const SpecialOffers = () => {
    return (
        // <div className={scss.container}>
        //     <Title>Специальные предложения</Title>
        //     <div className={scss.banners}>
        //         <div className={scss.orange}>
        //             <div className={scss.content}>
        //                 <p className={scss.title}>Оформите карту «Северяночка»</p>
        //                 <p className={scss.text}>И получайте бонусы при покупке в магазинах и на сайте</p>
        //             </div>
        //             <div className={scss.orangeImg}>
        //                 <img src="/img/special-offers-img/Карта лояльности-10 1.png" alt=""/>
        //             </div>
        //         </div>
        //         <div className={scss.green}>
        //             <div className={scss.content}>
        //                 <p className={scss.title}>Покупайте <br/> акционные товары</p>
        //                 <p className={scss.text}>И получайте вдвое больше <br/> бонусов</p>
        //             </div>
        //
        //                 <div className={scss.greenImg}>
        //                     <img src="img/special-offers-img/73 1.png" alt=""/>
        //                 </div>
        //
        //             <div>
        //                 <img className={scss.one} src="img/special-offers-img/+.png" alt=""/>
        //                 <img className={scss.two} src="img/special-offers-img/+ (1).png" alt=""/>
        //                 <img className={scss.three} src="img/special-offers-img/+ (1).png" alt=""/>
        //                 <img className={scss.four} src="img/special-offers-img/+ (2).png" alt=""/>
        //                 <img className={scss.five} src="img/special-offers-img/+ (1).png" alt=""/>
        //                 <img className={scss.six} src="img/special-offers-img/+ (1).png" alt=""/>
        //             </div>
        //         </div>
        //     </div>
        // </div>

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

