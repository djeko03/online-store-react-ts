import React from 'react';
import scss from './index.module.scss';

export const SpecialOffers = () => {
  return (
        <div>
            <div className={scss.banners}>
                <div className={scss.orange}>
                    <div className={scss.content}>
                        <p className={scss.title}>Оформите карту «Северяночка»</p>
                        <p className={scss.text}>И получайте бонусы при покупке в магазинах и на сайте</p>
                    </div>
                    <img className={scss.image} src="img/special-offers-img/orangeSection.jpg" alt=""/>
                </div>
                <div className={scss.green}>
                    <div className={scss.content}>
                        <p className={scss.title}>Покупайте акционные товары</p>
                        <p className={scss.text}>И получайте вдвое больше бонусов</p>
                    </div>
                    <img className={scss.image} src="img/special-offers-img/greenSection.jpg" alt=""/>
                </div>
            </div>
        </div>
  );
};

